import { NextResponse, type NextRequest } from 'next/server';
import {
  DEFAULT_LOCALE,
  LANGUAGE_COOKIE,
  LOCALE_REQUEST_HEADER,
  isLocale,
  stripLocaleFromPathname,
  translatePathnameToInternal,
  type Locale
} from './utils/i18nRouting';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const getCookieLocale = (request: NextRequest): Locale | null => {
  const cookieValue = request.cookies.get(LANGUAGE_COOKIE)?.value;
  return isLocale(cookieValue) ? cookieValue : null;
};

const getForwardedLocale = (request: NextRequest): Locale | null => {
  const forwardedLocale = request.headers.get(LOCALE_REQUEST_HEADER);
  return isLocale(forwardedLocale) ? forwardedLocale : null;
};

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { locale: pathLocale } = stripLocaleFromPathname(url.pathname);
  const locale = pathLocale || getForwardedLocale(request) || getCookieLocale(request) || DEFAULT_LOCALE;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_REQUEST_HEADER, locale);

  const response = pathLocale
    ? NextResponse.rewrite(
        new URL(`${translatePathnameToInternal(url.pathname, pathLocale)}${url.search}`, request.url),
        {
          request: {
            headers: requestHeaders
          }
        }
      )
    : NextResponse.next({
        request: {
          headers: requestHeaders
        }
      });

  response.cookies.set(LANGUAGE_COOKIE, locale, {
    maxAge: COOKIE_MAX_AGE,
    path: '/',
    sameSite: 'lax'
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'
  ]
};
