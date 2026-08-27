import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, PhoneCall } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { MAIN_NAVIGATION, NavLinkItem } from '../../content/navigation';
import { ArtavelLogo } from '../brand/ArtavelLogo';
import { Button } from '../ui/Button';
import { MobileNavigation } from './MobileNavigation';
import { Language, useLanguage } from '../i18n/LanguageProvider';
import { ThemeToggle } from '../theme/ThemeToggle';
import { toLocalizedPath } from '../../utils/i18nRouting';

interface HeaderProps {
  currentPath: string;
  displayPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, displayPath, onNavigate }) => {
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

  const normalizePath = (path: string) => {
    const basePath = path.split('#')[0]?.split('?')[0] || '/';
    return basePath.length > 1 ? basePath.replace(/\/+$/, '') : basePath;
  };

  const isPathActive = (path: string) => {
    const normalizedCurrentPath = normalizePath(currentPath);
    const normalizedPath = normalizePath(path);

    return (
      normalizedCurrentPath === normalizedPath ||
      (normalizedPath !== '/' && normalizedCurrentPath.startsWith(`${normalizedPath}/`))
    );
  };

  const isNavItemActive = (item: NavLinkItem): boolean => {
    const candidatePaths = [item.path, ...(item.activePaths || [])];
    const isSelfActive = !item.isGroup && candidatePaths.some(isPathActive);
    return isSelfActive || Boolean(item.children?.some(isNavItemActive));
  };

  const isContactPage = isPathActive('/kontak');
  const consultationCtaLabel = isContactPage
    ? language === 'en'
      ? 'Fill Out the Form'
      : 'Isi Formulir'
    : t('nav.cta');
  const consultationCtaShortLabel = isContactPage
    ? language === 'en'
      ? 'Fill Out Form'
      : 'Isi Formulir'
      : language === 'en'
      ? 'Consult'
      : 'Konsultasi';

  const scrollToContactForm = () => {
    const contactForm =
      document.getElementById('formulir-inkuiri-demo') ||
      document.getElementById('artavel-contact-form');

    if (contactForm) {
      const headerShell = document.querySelector('.artavel-header-shell');
      const headerBottom =
        headerShell instanceof HTMLElement ? headerShell.getBoundingClientRect().bottom : 112;
      const formTop = contactForm.getBoundingClientRect().top + window.scrollY;
      const comfortableGap = 36;

      window.scrollTo({
        top: Math.max(formTop - headerBottom - comfortableGap, 0),
        behavior: shouldReduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  const handleConsultationCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(null);

    if (isContactPage) {
      scrollToContactForm();
      return;
    }

    onNavigate('/kontak');
  };

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const currentDisplayPath =
      typeof window === 'undefined'
        ? displayPath
        : `${window.location.pathname}${window.location.search}${window.location.hash}`;
    onNavigate(toLocalizedPath(currentDisplayPath, nextLanguage));
  };

  const renderActiveIndicator = (layoutId: string) => (
    <motion.span
      layoutId={layoutId}
      transition={activeIndicatorTransition}
      className="artavel-nav-active-surface pointer-events-none absolute inset-0 z-0 rounded-xl border border-[#36699C]/30 bg-[#EAF2F8] shadow-[0_10px_26px_rgba(54,105,156,0.16)]"
      aria-hidden="true"
    />
  );

  const desktopNavBase =
    'artavel-nav-item relative isolate inline-flex h-14 shrink-0 items-center justify-center gap-1 overflow-hidden rounded-2xl px-2.5 py-2 text-[14px] font-bold leading-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] focus-visible:ring-offset-2 focus-visible:ring-offset-white min-[1500px]:gap-1.5 min-[1500px]:px-3.5 min-[1500px]:text-[15px] min-[1680px]:px-5';

  const desktopNavWidthMap: Record<string, string> = {
    'nav-studi-kasus': 'min-w-[7.35rem] min-[1680px]:min-w-[8.25rem]'
  };

  const getDesktopNavWidthClass = (itemId: string) =>
    desktopNavWidthMap[itemId] || 'min-w-fit';

  const navLabelMap: Record<string, string> = {
    'nav-solusi': t('nav.solutions'),
    'nav-sektor': t('nav.sectors'),
    'nav-studi-kasus': t('nav.caseStudies'),
    'nav-tentang': t('nav.about'),
    'nav-wawasan': t('nav.insights'),
    'nav-kontak': t('nav.contact')
  };

  const navLabelLines: Record<string, string[]> = language === 'en'
    ? {
        'nav-solusi': ['Solutions'],
        'nav-sektor': ['Industries'],
        'nav-studi-kasus': ['Case Studies'],
        'nav-tentang': ['About'],
        'nav-wawasan': ['Insights'],
        'nav-kontak': ['Contact']
      }
    : {
        'nav-solusi': ['Solusi'],
        'nav-sektor': ['Sektor'],
        'nav-studi-kasus': ['Studi Kasus'],
        'nav-tentang': ['Tentang'],
        'nav-wawasan': ['Wawasan'],
        'nav-kontak': ['Kontak']
      };

  const renderNavLabel = (itemId: string, fallbackLabel: string) => (
    <span className="relative z-20 flex h-9 min-w-max flex-col items-center justify-center px-0.5 text-center font-bold leading-[0.9] text-current">
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
        'nav-solusi-group-ai-analytics': 'AI, Analytics & Smart Monitoring',
        'nav-solusi-group-smart-education': 'Smart Education',
        'nav-solusi-group-retail-fnb': 'Retail & F&B',
        'nav-solusi-group-cyber-security': 'Cyber Security',
        'nav-solusi-group-digital-government': 'Digital Government & Enterprise',
        'nav-produk-smartmap-gis-analytics': 'SmartMap & GIS Analytics',
        'nav-produk-ai-cctv-computer-vision': 'AI CCTV & Computer Vision',
        'nav-produk-footfallcam': 'FootfallCam',
        'nav-produk-otoschool': 'otoSchool',
        'nav-produk-otopos-fnb': 'otoPOS F&B',
        'nav-produk-opentext-cybersecurity': 'OpenText Cybersecurity',
        'nav-produk-smarchlink-sippadu': 'Smarchlink SIPPADU',
        'nav-produk-smarchlink-archive': 'Smarchlink Archive',
        'nav-produk-tnde': 'TNDE',
        'nav-produk-sianter': 'SIANter',
        'nav-produk-semua': 'View All Products',
        'nav-tentang-artavel': 'About Artavel',
        'nav-cara-kerja': 'How We Work',
        'nav-sektor-pemerintah-layanan-publik': 'Government & Public Services',
        'nav-sektor-pendidikan': 'Education',
        'nav-sektor-retail-fnb': 'Retail & F&B',
        'nav-sektor-enterprise-organisasi': 'Enterprise & Organizations'
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
            onClick={() => handleLanguageChange(item)}
            aria-pressed={language === item}
            className={`rounded-full px-2 py-1 text-xs font-extrabold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
              language === item
                ? 'bg-[#173955] text-white'
                : 'text-[#7A8792] hover:text-[#173955]'
            }`}
          >
            {item.toUpperCase()}
          </button>
          {index === 0 && <span className="mx-1.5 h-4 w-px bg-[#DBE4EB]" aria-hidden="true" />}
        </React.Fragment>
      ))}
    </div>
  );

  const renderDropdownLeaf = (child: NavLinkItem): React.ReactNode => {
    const isChildActive = isNavItemActive(child);
    const isAllProductsLink = child.id === 'nav-produk-semua';

    return (
      <a
        key={child.id}
        href={child.path}
        onClick={(e) => handleLinkClick(e, child.path)}
        aria-current={isChildActive ? 'page' : undefined}
        className={`artavel-dropdown-card group relative block rounded-xl border p-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
          isAllProductsLink
            ? `artavel-dropdown-card-all-products border-[#36699C]/30 bg-[#EAF2F8] shadow-sm ${isChildActive ? 'artavel-dropdown-card-active' : ''}`
            : isChildActive
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
        {child.meta && (
          <div
            className={`mt-1 text-[11px] font-semibold ${
              isChildActive ? 'pl-2 text-[#244F78]/80' : 'text-[#7A8792]'
            }`}
          >
            {text(child.meta)}
          </div>
        )}
      </a>
    );
  };

  const renderDropdownItem = (child: NavLinkItem, depth = 0): React.ReactNode => {
    const hasNestedChildren = child.children && child.children.length > 0;

    if (hasNestedChildren) {
      return (
        <div key={child.id} className="flex flex-col gap-1">
          <div
            className={`px-3 pb-1 pt-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#36699C] ${
              depth > 0 ? 'pl-5' : ''
            }`}
          >
            {childLabelMap[child.id] || child.label}
          </div>
          <div className="flex flex-col gap-1">
            {child.children?.map((nestedChild) => renderDropdownItem(nestedChild, depth + 1))}
          </div>
        </div>
      );
    }

    return renderDropdownLeaf(child);
  };

  const renderMegaMenuProduct = (
    child: NavLinkItem,
    compact = false,
    nested = false
  ): React.ReactNode => {
    const isChildActive = isNavItemActive(child);
    const hasNestedChildren = Boolean(child.children?.length);

    const productLink = (
      <a
        key={child.id}
        href={child.path}
        onClick={(e) => handleLinkClick(e, child.path)}
        aria-current={isChildActive ? 'page' : undefined}
        className={`group relative block transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
          nested
            ? 'rounded-lg px-2.5 py-2'
            : hasNestedChildren
              ? 'rounded-lg px-3 py-2.5'
              : 'artavel-dropdown-card rounded-xl border px-3 py-2.5'
        } ${
          nested
            ? isChildActive
              ? 'bg-[#EAF2F8] text-[#173955]'
              : 'text-[#172536] hover:bg-[#F2F7FB] hover:text-[#36699C]'
            : hasNestedChildren
              ? 'text-[#172536] hover:bg-[#F2F7FB] hover:text-[#36699C]'
              : isChildActive
                ? 'artavel-dropdown-card-active border-[#36699C]/30 bg-[#EAF2F8] shadow-sm'
                : 'border-transparent hover:-translate-y-0.5 hover:bg-[#F2F7FB]'
        }`}
      >
        {isChildActive && (
          <span
            className={`absolute ${nested || hasNestedChildren ? 'inset-y-2 left-2' : 'inset-y-2.5 left-2'} w-1 rounded-full bg-[#36699C]`}
            aria-hidden="true"
          />
        )}
        <div
          className={`text-[13px] leading-tight transition-colors ${
            hasNestedChildren ? 'font-bold' : 'font-semibold'
          } ${
            isChildActive
              ? 'pl-2 text-[#173955]'
              : 'text-[#172536] group-hover:text-[#36699C]'
          }`}
        >
          {childLabelMap[child.id] || child.label}
        </div>
        {child.description && (
          <div
            className={`mt-1 line-clamp-1 text-xs leading-snug ${
              isChildActive ? 'pl-2 text-[#244F78]' : 'text-[#5C6B79]'
            }`}
          >
            {text(child.description)}
          </div>
        )}
      </a>
    );

    if (!hasNestedChildren) {
      return productLink;
    }

    return (
      <div
        key={child.id}
        className={`artavel-dropdown-card relative flex min-w-0 flex-col rounded-xl border p-1.5 transition-all duration-200 ${
          isChildActive
            ? 'artavel-dropdown-card-active border-[#36699C]/30 bg-[#EAF2F8] shadow-sm'
            : 'border-transparent hover:bg-[#F2F7FB]'
        }`}
      >
        {productLink}
        <div className="flex min-w-0 flex-col gap-0.5 px-1 pb-1 pl-4">
          {child.children?.map((nestedChild) => renderMegaMenuProduct(nestedChild, compact, true))}
        </div>
      </div>
    );
  };

  const renderSolutionGroup = (group: NavLinkItem | undefined, compactGrid = false) => {
    if (!group) {
      return null;
    }

    const children = group.children?.filter((child) => child.id !== 'nav-produk-semua') || [];

    return (
      <div key={group.id} className="flex min-w-0 flex-col gap-1">
        <div className="px-3 pb-0.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#36699C]">
          {childLabelMap[group.id] || group.label}
        </div>
        <div className={compactGrid ? 'grid grid-cols-2 gap-1' : 'flex flex-col gap-1'}>
          {children.map((child) => renderMegaMenuProduct(child, compactGrid))}
        </div>
      </div>
    );
  };

  const renderAllProductsFooter = (child: NavLinkItem) => {
    const isChildActive = isNavItemActive(child);

    return (
      <a
        key={child.id}
        href={child.path}
        onClick={(e) => handleLinkClick(e, child.path)}
        aria-current={isChildActive ? 'page' : undefined}
        className={`artavel-dropdown-card-all-products artavel-mega-menu-footer-link group relative flex items-center justify-between gap-4 rounded-xl border px-4 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
          isChildActive ? 'artavel-dropdown-card-active' : ''
        }`}
      >
        <span className="min-w-0">
          <span className="block text-sm font-extrabold leading-tight text-[#244F78]">
            {childLabelMap[child.id] || child.label}
          </span>
          {child.description && (
            <span className="mt-0.5 block line-clamp-1 text-xs text-[#5C6B79]">
              {text(child.description)}
            </span>
          )}
        </span>
        <span className="shrink-0 text-lg leading-none text-[#36699C]" aria-hidden="true">
          →
        </span>
      </a>
    );
  };

  const renderSolutionsMegaMenu = (item: NavLinkItem) => {
    const groups = item.children || [];
    const getGroup = (groupId: string) => groups.find((group) => group.id === groupId);
    const allProductsLink = groups
      .flatMap((group) => group.children || [])
      .find((child) => child.id === 'nav-produk-semua');

    return (
      <div className="artavel-solutions-mega-menu flex flex-col gap-3">
        <div className="grid gap-4 md:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)]">
          <div className="flex min-w-0 flex-col gap-3">
            {renderSolutionGroup(getGroup('nav-solusi-group-ai-analytics'))}
            {renderSolutionGroup(getGroup('nav-solusi-group-retail-fnb'))}
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              {renderSolutionGroup(getGroup('nav-solusi-group-smart-education'))}
              {renderSolutionGroup(getGroup('nav-solusi-group-cyber-security'))}
            </div>
            {renderSolutionGroup(getGroup('nav-solusi-group-digital-government'), true)}
          </div>
        </div>

        {allProductsLink && renderAllProductsFooter(allProductsLink)}
      </div>
    );
  };

  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#36699C] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        {text('Lompati ke konten utama')}
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
              className={`mr-2 flex h-full shrink-0 items-center justify-center rounded-2xl p-0 transition-all duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] min-[1500px]:mr-3 ${
                isScrolled ? 'scale-[0.98]' : 'scale-[1.04]'
              }`}
              aria-label={text('PT Artavel Beranda')}
            >
              <span className="xl:hidden">
                <ArtavelLogo size="sm" showSubbrand={false} className="translate-y-[1px]" />
              </span>
              <span className="hidden xl:inline-flex">
                <ArtavelLogo size="md" showSubbrand={false} className="translate-y-[1px]" />
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden min-w-0 flex-1 items-center justify-evenly gap-1 xl:flex min-[1680px]:gap-2">
              {MAIN_NAVIGATION.map((item: NavLinkItem) => {
                const hasChildren = item.children && item.children.length > 0;
                const hasActiveChild = item.children?.some(isNavItemActive);
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
                        className={`${desktopNavBase} ${getDesktopNavWidthClass(item.id)} cursor-pointer ${
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
                          className={`absolute top-full left-0 z-50 pt-2 ${
                            item.id === 'nav-solusi' ? 'w-[min(86vw,58rem)]' : 'w-84'
                          }`}
                        >
                          <div className="artavel-dropdown-panel flex max-h-[calc(100vh-7rem)] flex-col gap-1 overflow-y-auto overscroll-contain rounded-2xl border border-[#DBE4EB] bg-white/[0.96] p-3 shadow-[0_24px_60px_rgba(23,57,85,0.16)] backdrop-blur-xl">
                            {item.id === 'nav-solusi'
                              ? renderSolutionsMegaMenu(item)
                              : item.children?.map((child) => renderDropdownItem(child))}
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
                    className={`${desktopNavBase} ${getDesktopNavWidthClass(item.id)} ${
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
            <div className="ml-3 hidden shrink-0 items-center gap-2 border-l border-[#DBE4EB] pl-3 xl:flex 2xl:gap-3 2xl:pl-4">
              <ThemeToggle />
              {renderLanguageToggle('desktop')}
              <Button
                variant="primary"
                size="sm"
                className="artavel-header-consultation-cta h-11 min-h-0 rounded-2xl px-4 py-0 text-[15px] font-semibold tracking-normal shadow-[0_10px_24px_rgba(54,105,156,0.22)] 2xl:h-12 2xl:px-5 2xl:text-base"
                leftIcon={
                  <span className="artavel-header-cta-phone-icon">
                    <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  </span>
                }
                onClick={handleConsultationCtaClick}
                aria-label={consultationCtaLabel}
              >
                <span className="hidden min-[1680px]:inline">{consultationCtaLabel}</span>
                <span className="inline min-[1680px]:hidden">
                  {consultationCtaShortLabel}
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center gap-2">
              <ThemeToggle variant="mobile" />
              <div className="hidden sm:block">
                {renderLanguageToggle('mobile')}
              </div>
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label={text('Buka menu navigasi')}
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
