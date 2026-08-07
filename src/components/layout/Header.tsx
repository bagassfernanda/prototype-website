import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, PhoneCall } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { MAIN_NAVIGATION, NavLinkItem } from '../../content/navigation';
import { ArtavelLogo } from '../brand/ArtavelLogo';
import { Button } from '../ui/Button';
import { MobileNavigation } from './MobileNavigation';
import { Language, useLanguage } from '../i18n/LanguageProvider';
import { ThemeToggle } from '../theme/ThemeToggle';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const { language, setLanguage, t, text } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeIndicatorTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 480, damping: 36, mass: 0.8 };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollTop > 16);
      setScrollProgress(
        scrollableHeight > 0 ? Math.min(scrollTop / scrollableHeight, 1) : 0
      );
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setOpenDropdown(null);
  };

  const isPathActive = (path: string) => {
    return currentPath === path || (path !== '/' && currentPath.startsWith(`${path}/`));
  };

  const isContactPage = isPathActive('/kontak');

  const renderActiveIndicator = (layoutId: string) => (
    <motion.span
      layoutId={layoutId}
      transition={activeIndicatorTransition}
      className="artavel-nav-active-surface pointer-events-none absolute inset-0 z-0 rounded-xl border border-[#36699C]/30 bg-[#EAF2F8] shadow-[0_10px_26px_rgba(54,105,156,0.16)]"
      aria-hidden="true"
    />
  );

  const desktopNavBase =
    'artavel-nav-item relative isolate inline-flex h-14 min-w-0 items-center justify-center gap-1.5 overflow-hidden rounded-2xl px-4 py-2 xl:px-5 text-[15px] font-black leading-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  const navLabelMap: Record<string, string> = {
    'nav-solusi': t('nav.solutions'),
    'nav-sektor': t('nav.sectors'),
    'nav-studi-kasus': t('nav.caseStudies'),
    'nav-cara-kerja': t('nav.howWeWork'),
    'nav-tentang': t('nav.about'),
    'nav-wawasan': t('nav.insights'),
    'nav-kontak': t('nav.contact')
  };

  const navLabelLines: Record<string, string[]> = language === 'en'
    ? {
        'nav-solusi': ['Solutions'],
        'nav-sektor': ['Sectors'],
        'nav-studi-kasus': ['Case', 'Studies'],
        'nav-cara-kerja': ['How We', 'Work'],
        'nav-tentang': ['About', 'Artavel'],
        'nav-wawasan': ['Insights'],
        'nav-kontak': ['Contact']
      }
    : {
        'nav-solusi': ['Solusi'],
        'nav-sektor': ['Sektor'],
        'nav-studi-kasus': ['Studi', 'Kasus'],
        'nav-cara-kerja': ['Cara Kami', 'Bekerja'],
        'nav-tentang': ['Tentang', 'Artavel'],
        'nav-wawasan': ['Wawasan'],
        'nav-kontak': ['Kontak']
      };

  const renderNavLabel = (itemId: string, fallbackLabel: string) => (
    <span className="relative z-20 flex h-9 min-w-0 flex-col items-center justify-center text-center font-black leading-[0.9] text-current">
      {(navLabelLines[itemId] || [navLabelMap[itemId] || fallbackLabel]).map((line) => (
        <span key={line} className="block whitespace-nowrap text-center">
          {line}
        </span>
      ))}
    </span>
  );

  const renderNavMarker = (isActive: boolean) => isActive && (
    <span
      className="artavel-nav-text-marker pointer-events-none absolute inset-x-5 bottom-1 h-[3px] rounded-full bg-gradient-to-r from-[#36699C] to-[#7DBC5E]"
      aria-hidden="true"
    />
  );

  const childLabelMap: Record<string, string> = language === 'en'
    ? {
        'nav-solusi-pelayanan': 'Public Services & Licensing',
        'nav-solusi-arsip': 'Document & Archive Management',
        'nav-solusi-tnde': 'Electronic Official Correspondence',
        'nav-solusi-antrean': 'Queue & Tracking System',
        'nav-solusi-digitalisasi': 'Digitization & Media Conversion',
        'nav-solusi-keamanan': 'Data Security & Integration',
        'nav-solusi-cctv-iot': 'CCTV, IoT & Monitoring',
        'nav-solusi-website-uiux': 'Websites, UI/UX & Web Apps',
        'nav-sektor-pemerintahan': 'Local Government',
        'nav-sektor-organisasi': 'Organizations & Companies',
        'nav-sektor-layanan': 'Public Service Centers & MPP'
      }
    : {};

  const renderLanguageToggle = (mode: 'desktop' | 'mobile') => (
    <div
      className={`artavel-language-toggle inline-flex items-center rounded-full border ${
        mode === 'desktop'
          ? 'border-[#DBE4EB] bg-white/70 px-2 py-1'
          : 'border-[#DBE4EB] bg-[#F7F9FB] px-2 py-1'
      }`}
      aria-label={t('common.language')}
    >
      {(['id', 'en'] as Language[]).map((item, index) => (
        <React.Fragment key={item}>
          <button
            type="button"
            onClick={() => setLanguage(item)}
            aria-pressed={language === item}
            className={`rounded-full px-2 py-1 text-xs font-extrabold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
              language === item
                ? 'bg-[#173955] text-white'
                : 'text-[#7A8792] hover:text-[#173955]'
            }`}
          >
            {item.toUpperCase()}
          </button>
          {index === 0 && <span className="mx-0.5 h-4 w-px bg-[#DBE4EB]" aria-hidden="true" />}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#36699C] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Lompati ke konten utama (Skip to main content)
      </a>

      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
        <motion.div
          initial={shouldReduceMotion ? false : { y: -14 }}
          animate={{ y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`artavel-header-shell pointer-events-auto mx-auto max-w-[1720px] overflow-visible rounded-[1.7rem] border transition-[background-color,box-shadow,border-color,backdrop-filter,transform] duration-300 ${
            isScrolled
              ? 'border-transparent bg-white/[0.92] shadow-[0_22px_70px_rgba(5,18,31,0.18)] backdrop-blur-2xl'
              : 'border-transparent bg-white/[0.84] shadow-[0_18px_54px_rgba(23,57,85,0.12)] backdrop-blur-xl'
          }`}
        >
          <div className="artavel-header-brand-edge" aria-hidden="true" />

          <div className="px-4 sm:px-6 lg:px-7">
          <div
            className={`flex items-center justify-between transition-[height] duration-300 ${
              isScrolled ? 'h-[68px]' : 'h-[74px]'
            }`}
          >
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`flex h-full items-center justify-center rounded-2xl p-0 transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
                isScrolled ? 'scale-[0.98]' : 'scale-[1.04]'
              }`}
              aria-label="PT Artavel Beranda"
            >
              <span className="xl:hidden">
                <ArtavelLogo size="sm" showSubbrand={false} className="translate-y-[1px]" />
              </span>
              <span className="hidden xl:inline-flex">
                <ArtavelLogo size="md" showSubbrand={false} className="translate-y-[1px]" />
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex xl:gap-2">
              {MAIN_NAVIGATION.map((item: NavLinkItem) => {
                const hasChildren = item.children && item.children.length > 0;
                const hasActiveChild = item.children?.some((child) => isPathActive(child.path));
                const isActive = isPathActive(item.path) || Boolean(hasActiveChild);
                const isOpen = openDropdown === item.id;

                if (hasChildren) {
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.id)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={(e) => handleLinkClick(e, item.path)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`${desktopNavBase} cursor-pointer ${
                          isActive
                            ? 'artavel-nav-item-active text-[#173955]'
                            : isOpen
                              ? 'bg-[#F7F9FB] text-[#244F78]'
                              : 'text-[#172536] hover:-translate-y-0.5 hover:bg-[#F7F9FB] hover:text-[#244F78]'
                        }`}
                      >
                        {isActive && renderActiveIndicator('desktop-active-nav-pill')}
                        {renderNavLabel(item.id, item.label)}
                        <ChevronDown
                          className={`relative z-20 w-4 h-4 text-[#36699C] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                        {renderNavMarker(isActive)}
                      </button>

                      {/* Mega Menu Dropdown */}
                      {isOpen && (
                        <motion.div
                          initial={shouldReduceMotion ? false : { y: 10, scale: 0.98 }}
                          animate={shouldReduceMotion ? { y: 0 } : { y: 0, scale: 1 }}
                          exit={shouldReduceMotion ? { y: 0 } : { y: 8, scale: 0.98 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 z-50 w-84 pt-2"
                        >
                          <div className="artavel-dropdown-panel flex flex-col gap-1 rounded-2xl border border-[#DBE4EB] bg-white/[0.96] p-3 shadow-[0_24px_60px_rgba(23,57,85,0.16)] backdrop-blur-xl">
                            {item.children?.map((child) => {
                              const isChildActive = isPathActive(child.path);

                              return (
                                <a
                                  key={child.id}
                                  href={child.path}
                                  onClick={(e) => handleLinkClick(e, child.path)}
                                  aria-current={isChildActive ? 'page' : undefined}
                                  className={`artavel-dropdown-card group relative block rounded-xl border p-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
                                    isChildActive
                                      ? 'artavel-dropdown-card-active border-[#36699C]/30 bg-[#EAF2F8] shadow-sm'
                                      : 'border-transparent hover:-translate-y-0.5 hover:bg-[#F2F7FB]'
                                  }`}
                                >
                                  {isChildActive && (
                                    <span
                                      className="absolute inset-y-3 left-2 w-1 rounded-full bg-[#36699C]"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <div
                                    className={`text-sm font-semibold transition-colors ${
                                      isChildActive
                                        ? 'pl-2 text-[#173955]'
                                        : 'text-[#172536] group-hover:text-[#36699C]'
                                    }`}
                                  >
                                  {childLabelMap[child.id] || child.label}
                                  </div>
                                  {child.description && (
                                    <div
                                      className={`mt-0.5 line-clamp-1 text-xs ${
                                        isChildActive ? 'pl-2 text-[#244F78]' : 'text-[#5C6B79]'
                                      }`}
                                    >
                                      {text(child.description)}
                                    </div>
                                  )}
                                </a>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`${desktopNavBase} ${
                      isActive
                        ? 'artavel-nav-item-active text-[#173955]'
                        : 'text-[#172536] hover:-translate-y-0.5 hover:bg-[#F7F9FB] hover:text-[#244F78]'
                    }`}
                  >
                    {isActive && renderActiveIndicator('desktop-active-nav-pill')}
                    {renderNavLabel(item.id, item.label)}
                    {renderNavMarker(isActive)}
                  </a>
                );
              })}
            </nav>

            {/* CTA Button */}
            {!isContactPage && (
              <div className="ml-3 hidden shrink-0 items-center gap-2 border-l border-[#DBE4EB] pl-3 xl:flex 2xl:gap-3 2xl:pl-4">
                <ThemeToggle />
                {renderLanguageToggle('desktop')}
                <Button
                  variant="primary"
                  size="sm"
                  className="h-11 min-h-0 rounded-2xl px-4 py-0 text-[15px] font-semibold tracking-normal shadow-[0_10px_24px_rgba(54,105,156,0.22)] 2xl:h-12 2xl:px-5 2xl:text-base"
                  leftIcon={<PhoneCall className="h-4 w-4" aria-hidden="true" />}
                  onClick={(e) => handleLinkClick(e, '/kontak')}
                  aria-label={t('nav.cta')}
                >
                  <span className="hidden min-[1400px]:inline">{t('nav.cta')}</span>
                  <span className="inline min-[1400px]:hidden">
                    {language === 'en' ? 'Discuss' : 'Konsultasi'}
                  </span>
                </Button>
              </div>
            )}
            {isContactPage && (
              <div className="hidden xl:flex items-center ml-3 pl-4 border-l border-[#DBE4EB]">
                <ThemeToggle />
                {renderLanguageToggle('desktop')}
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center gap-2">
              <ThemeToggle variant="mobile" />
              <div className="hidden sm:block">
                {renderLanguageToggle('mobile')}
              </div>
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Buka menu navigasi"
                className="cursor-pointer rounded-xl border border-[#DBE4EB] p-2.5 text-[#172536] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F7F9FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          </div>

        <div className="artavel-header-scroll-edge" aria-hidden="true">
          <div
            className="artavel-header-scroll-edge-progress"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
        </motion.div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onNavigate={onNavigate}
        currentPath={currentPath}
      />
    </>
  );
};
