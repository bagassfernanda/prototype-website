export const SUPPORTED_LOCALES = ['id', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'id';
export const LANGUAGE_COOKIE = 'artavel-language';
export const LOCALE_REQUEST_HEADER = 'x-artavel-locale';

const ENGLISH_SEGMENT_TO_INTERNAL: Record<string, string> = {
  solutions: 'solusi',
  products: 'produk',
  sectors: 'sektor',
  industries: 'sektor',
  'case-studies': 'studi-kasus',
  insights: 'wawasan',
  about: 'tentang',
  contact: 'kontak',
  'how-we-work': 'cara-kami-bekerja',
  'privacy-policy': 'kebijakan-privasi',
  terms: 'syarat-ketentuan',
  accessibility: 'aksesibilitas'
};

const INTERNAL_SEGMENT_TO_ENGLISH: Record<string, string> = {
  solusi: 'solutions',
  produk: 'products',
  sektor: 'industries',
  'studi-kasus': 'case-studies',
  wawasan: 'insights',
  tentang: 'about',
  kontak: 'contact',
  'cara-kami-bekerja': 'how-we-work',
  'kebijakan-privasi': 'privacy-policy',
  'syarat-ketentuan': 'terms',
  'syarat-dan-ketentuan': 'terms',
  aksesibilitas: 'accessibility'
};

export const isLocale = (value: string | undefined | null): value is Locale =>
  value === 'id' || value === 'en';

const splitPathParts = (path: string) => {
  const hashIndex = path.indexOf('#');
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const queryIndex = withoutHash.indexOf('?');

  return {
    pathname: queryIndex >= 0 ? withoutHash.slice(0, queryIndex) || '/' : withoutHash || '/',
    search: queryIndex >= 0 ? withoutHash.slice(queryIndex) : '',
    hash
  };
};

export const getLocaleFromPathname = (pathname: string): Locale | null => {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : null;
};

export const stripLocaleFromPathname = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const locale = isLocale(segments[0]) ? segments[0] : null;
  const restSegments = locale ? segments.slice(1) : segments;

  return {
    locale,
    pathname: restSegments.length > 0 ? `/${restSegments.join('/')}` : '/'
  };
};

export const translatePathnameToInternal = (pathname: string, locale?: Locale | null) => {
  const { locale: explicitLocale, pathname: unprefixedPathname } = stripLocaleFromPathname(pathname);
  const resolvedLocale = locale || explicitLocale;

  if (resolvedLocale !== 'en') return unprefixedPathname;

  const segments = unprefixedPathname.split('/').filter(Boolean);
  if (segments.length === 0) return '/';

  const firstSegment = ENGLISH_SEGMENT_TO_INTERNAL[segments[0]] || segments[0];
  return `/${[firstSegment, ...segments.slice(1)].join('/')}`;
};

export const getInternalPathname = (pathname: string) => {
  const explicitLocale = getLocaleFromPathname(pathname);
  return translatePathnameToInternal(pathname, explicitLocale);
};

export const toLocalizedPath = (path: string, locale: Locale) => {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;

  const { pathname, search, hash } = splitPathParts(path);
  const explicitLocale = getLocaleFromPathname(pathname);
  const internalPathname = translatePathnameToInternal(pathname, explicitLocale);
  const internalSegments = internalPathname.split('/').filter(Boolean);

  if (locale === 'id') {
    const localizedPathname = internalSegments.length > 0 ? `/id/${internalSegments.join('/')}` : '/id';
    return `${localizedPathname}${search}${hash}`;
  }

  const localizedSegments = internalSegments.length > 0
    ? [INTERNAL_SEGMENT_TO_ENGLISH[internalSegments[0]] || internalSegments[0], ...internalSegments.slice(1)]
    : [];
  const localizedPathname = localizedSegments.length > 0 ? `/en/${localizedSegments.join('/')}` : '/en';

  return `${localizedPathname}${search}${hash}`;
};

export const toInternalPath = (path: string) => {
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;

  const { pathname, search, hash } = splitPathParts(path);
  const explicitLocale = getLocaleFromPathname(pathname);
  const internalPathname = translatePathnameToInternal(pathname, explicitLocale);

  return `${internalPathname}${search}${hash}`;
};
