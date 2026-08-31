'use client';

import React from 'react';
import { Clock3, ExternalLink, Mail, MapPin, Navigation2, Phone } from 'lucide-react';
import { COMPANY_PROFILE } from '../../content/company';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { useLanguage } from '../i18n/LanguageProvider';

export const LocationMapSection: React.FC = () => {
  const { text, localize } = useLanguage();
  const profile = localize(COMPANY_PROFILE);
  const addressLine = `${profile.address.street}, ${profile.address.city}, ${profile.address.province} ${profile.address.postalCode}`;
  const mapQuery = encodeURIComponent(`${profile.name}, ${addressLine}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}&travelmode=driving`;
  const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <Section
      bg="surface-blue"
      padding="normal"
      id="lokasi-kantor"
      className="artavel-location-section"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-[#DBE4EB] bg-white p-7 shadow-[0_24px_70px_rgba(23,57,85,0.10)]">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2F8] text-[#36699C]">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#36699C]">
                {text('Lokasi Kantor Artavel')}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-black leading-tight text-[#172536] sm:text-4xl">
                {text('KANTOR ARTAVEL')}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5C6B79]">
                {text('Gunakan peta ini untuk melihat posisi kantor Artavel dan membuka navigasi langsung dari perangkat Anda.')}
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#568F3E]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-[#172536]">{text('Alamat')}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5C6B79]">{addressLine}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 shrink-0 text-[#36699C]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-[#172536]">{text('Jam Buka')}</p>
                    <p className="mt-1 text-sm text-[#5C6B79]">{profile.contact.workingHours}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-[#DBE4EB] px-4 py-2 text-sm font-semibold text-[#244F78] transition-colors hover:border-[#36699C]/40 hover:bg-[#EAF2F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {profile.contact.email}
                  </a>
                  <a
                    href={`tel:${profile.contact.phone.replace(/\s/g, '')}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-[#DBE4EB] px-4 py-2 text-sm font-semibold text-[#244F78] transition-colors hover:border-[#36699C]/40 hover:bg-[#EAF2F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {profile.contact.phone}
                  </a>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                className="artavel-google-maps-button mt-7"
                rightIcon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}
                onClick={() => window.open(mapsUrl, '_blank', 'noopener,noreferrer')}
              >
                {text('Buka di Google Maps')}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="artavel-location-map relative h-[420px] overflow-hidden rounded-3xl border border-[#DBE4EB] bg-[#0B2234] shadow-[0_28px_90px_rgba(23,57,85,0.16)] lg:h-full lg:min-h-[520px]">
              <iframe
                title={text('Peta Lokasi PT Artavel')}
                src={embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-x-5 bottom-5 rounded-3xl border border-white/18 bg-[#071927]/82 p-5 text-white shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8BC4FF]">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-sm text-white/78">{addressLine}</p>
                  </div>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Mulai navigasi Google Maps ke ${profile.name}`}
                    className="artavel-map-navigation-link pointer-events-auto inline-flex items-center gap-2 rounded-full border border-[#7DBC5E]/30 bg-[#7DBC5E]/14 px-4 py-2 text-sm font-bold text-[#B9F09E]"
                  >
                    <Navigation2 className="artavel-map-navigation-icon h-4 w-4" aria-hidden="true" />
                    {text('Navigasi tersedia')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
