import React from 'react';
import { Mail, Phone, MapPin, Globe2 } from 'lucide-react';
import { COMPANY_PROFILE } from '../../content/company';
import { FOOTER_SOLUTIONS_NAV, FOOTER_LEGAL_NAV } from '../../content/navigation';
import { ArtavelLogo } from '../brand/ArtavelLogo';
import { BrandColorLine } from '../brand/BrandColorLine';
import { SocialMediaLinks } from '../brand/SocialMediaLinks';
import { useLanguage } from '../i18n/LanguageProvider';
import { toLocalizedPath } from '../../utils/i18nRouting';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, text, localize } = useLanguage();
  const currentYear = new Date().getFullYear();
  const profile = localize(COMPANY_PROFILE);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#173955] text-white relative overflow-hidden">
      {/* Top 4-Color Brand Line */}
      <BrandColorLine heightPx={30} className="artavel-footer-transition" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <ArtavelLogo variant="light" size="lg" showSubbrand={false} />
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              {profile.positioning}
            </p>
            <p className="text-xs text-[#7DBC5E] font-medium bg-[#7DBC5E]/10 p-3 rounded-lg border border-[#7DBC5E]/20 max-w-md">
              "{profile.brandPromise}"
            </p>
          </div>

          {/* Col 2: Solusi Utama */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90 font-heading">
              {text('Solusi Digital')}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              {FOOTER_SOLUTIONS_NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={toLocalizedPath(item.path, language)}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    className="hover:text-[#7DBC5E] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7DBC5E] rounded px-1 -ml-1 inline-block"
                  >
                    {text(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Informasi Kontak & Alamat */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-sm text-white/80">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white/90 font-heading">
              {text('Kantor & Kontak Resmi')}
            </h3>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#7DBC5E] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="font-semibold text-white">{text('Alamat Perusahaan')}</div>
                <div className="text-white/70 text-xs mt-0.5">
                  {profile.address.street}, {profile.address.city}, {profile.address.province}, {profile.address.postalCode}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#7DBC5E] flex-shrink-0" aria-hidden="true" />
              <div>
                <a href={`mailto:${profile.contact.email}`} className="hover:text-[#7DBC5E] transition-colors">
                  {profile.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#8BC4FF] flex-shrink-0" aria-hidden="true" />
              <div>
                <span>{profile.contact.phone}</span>
                <span className="text-xs text-white/50 block">{profile.contact.workingHours}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-[#7DBC5E] flex-shrink-0" aria-hidden="true" />
              <div>
                <a
                  href={`https://${profile.contact.website}`}
                  className="hover:text-[#7DBC5E] transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.contact.website}
                </a>
              </div>
            </div>

            <SocialMediaLinks tone="footer" className="pt-2" />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <div className="text-center lg:text-left">
            © {currentYear} PT Artavel. {text('Seluruh Hak Cipta Dilindungi Undang-Undang.')}
          </div>

          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 lg:justify-end">
            {FOOTER_LEGAL_NAV.map((link) => (
              <a
                key={link.path}
                href={toLocalizedPath(link.path, language)}
                onClick={(e) => handleLinkClick(e, link.path)}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-1"
              >
                {text(link.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
