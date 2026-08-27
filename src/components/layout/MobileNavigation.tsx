import React, { useEffect, useRef } from 'react';
import { X, ChevronDown, PhoneCall } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { MAIN_NAVIGATION, NavLinkItem } from '../../content/navigation';
import { ArtavelLogo } from '../brand/ArtavelLogo';
import { Button } from '../ui/Button';
import { Language, useLanguage } from '../i18n/LanguageProvider';
import { ThemeToggle } from '../theme/ThemeToggle';
import { toLocalizedPath } from '../../utils/i18nRouting';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentPath
}) => {
  const { language, setLanguage, t, text } = useLanguage();
  const [expandedNavId, setExpandedNavId] = React.useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const isContactPage = currentPath === '/kontak' || currentPath.startsWith('/kontak/');
  const consultationCtaLabel = isContactPage
    ? language === 'en'
      ? 'Fill Out the Form'
      : 'Isi Formulir'
    : t('nav.cta');

  const scrollToContactForm = () => {
    const contactForm =
      document.getElementById('formulir-inkuiri-demo') ||
      document.getElementById('artavel-contact-form');

    if (contactForm) {
      const headerShell = document.querySelector('.artavel-header-shell');
      const headerBottom =
        headerShell instanceof HTMLElement ? headerShell.getBoundingClientRect().bottom : 96;
      const formTop = contactForm.getBoundingClientRect().top + window.scrollY;
      const comfortableGap = 28;

      window.scrollTo({
        top: Math.max(formTop - headerBottom - comfortableGap, 0),
        behavior: shouldReduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  const handleConsultationCtaClick = () => {
    if (isContactPage) {
      onClose();
      window.setTimeout(scrollToContactForm, shouldReduceMotion ? 0 : 180);
      return;
    }

    handleLinkClick('/kontak');
  };

  const toggleSubmenu = (navId: string) => {
    setExpandedNavId((prev) => (prev === navId ? null : navId));
  };

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    const currentDisplayPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    onNavigate(toLocalizedPath(currentDisplayPath, nextLanguage));
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

  const renderMobileActiveIndicator = () => (
    <>
      <motion.span
        layoutId="mobile-active-nav-pill"
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: 'spring' as const, stiffness: 460, damping: 34, mass: 0.8 }
        }
        className="artavel-nav-active-surface pointer-events-none absolute inset-0 z-0 rounded-xl border border-[#36699C]/30 bg-[#EAF2F8] shadow-[0_10px_24px_rgba(54,105,156,0.14)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-y-2 left-2 z-[1] w-1 rounded-full bg-gradient-to-b from-[#36699C] to-[#7DBC5E]"
        aria-hidden="true"
      />
    </>
  );

  const navLabelMap: Record<string, string> = {
    'nav-solusi': t('nav.solutions'),
    'nav-sektor': t('nav.sectors'),
    'nav-studi-kasus': t('nav.caseStudies'),
    'nav-tentang': t('nav.about'),
    'nav-wawasan': t('nav.insights'),
    'nav-kontak': t('nav.contact')
  };

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

  const renderLanguageToggle = () => (
    <div className="artavel-language-toggle inline-flex items-center rounded-full border border-[#DBE4EB] bg-[#F7F9FB] px-2 py-1">
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
          {index === 0 && <span className="mx-0.5 h-4 w-px bg-[#DBE4EB]" aria-hidden="true" />}
        </React.Fragment>
      ))}
    </div>
  );

  const renderMobileSubmenuItem = (
    child: NavLinkItem,
    depth = 0,
    nested = false
  ): React.ReactNode => {
    const hasNestedChildren = child.children && child.children.length > 0;

    if (hasNestedChildren && child.isGroup) {
      return (
        <div key={child.id} className="flex flex-col gap-1">
          <div
            className={`px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#36699C] ${
              depth > 0 ? 'pl-5' : ''
            }`}
          >
            {childLabelMap[child.id] || child.label}
          </div>
          <div className="flex flex-col gap-1">
            {child.children?.map((nestedChild) => renderMobileSubmenuItem(nestedChild, depth + 1))}
          </div>
        </div>
      );
    }

    const isChildActive = isNavItemActive(child);
    const isAllProductsLink = child.id === 'nav-produk-semua';
    const shouldShowMeta = Boolean(child.meta && (!child.id.startsWith('nav-produk-') || isAllProductsLink));

    const link = (
      <a
        key={child.id}
        href={child.path}
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(child.path);
        }}
        aria-current={isChildActive ? 'page' : undefined}
        className={`relative block text-sm font-medium transition-all duration-200 ${
          nested
            ? 'rounded-md px-2.5 py-2'
            : hasNestedChildren
              ? 'rounded-md px-3 py-2'
              : 'rounded-lg border px-3 py-2'
        } ${
          nested
            ? isChildActive
              ? 'bg-[#EAF2F8] text-[#173955]'
              : 'text-[#5C6B79] hover:bg-white hover:text-[#172536]'
            : hasNestedChildren
              ? 'text-[#172536] hover:bg-white hover:text-[#244F78]'
              : isAllProductsLink
                ? `artavel-mobile-submenu-all-products border-[#36699C]/25 bg-[#EAF2F8] text-[#173955] shadow-sm ${isChildActive ? 'artavel-dropdown-card-active' : ''}`
                : isChildActive
                  ? 'artavel-dropdown-card-active border-[#36699C]/25 bg-white text-[#173955] shadow-sm'
                  : 'border-transparent text-[#5C6B79] hover:bg-white hover:text-[#172536]'
        }`}
      >
        {isChildActive && (
          <span
            className="absolute inset-y-2 left-1.5 w-1 rounded-full bg-[#36699C]"
            aria-hidden="true"
          />
        )}
        <span className={`block ${isChildActive ? 'pl-2' : ''}`}>
          {childLabelMap[child.id] || child.label}
        </span>
        {child.description && (
          <span
            className={`mt-0.5 block line-clamp-1 text-xs ${
              isChildActive ? 'pl-2 text-[#244F78]' : 'text-[#7A8792]'
            }`}
          >
            {text(child.description)}
          </span>
        )}
        {shouldShowMeta && (
          <span
            className={`mt-1 block text-[11px] font-semibold ${
              isChildActive ? 'pl-2 text-[#244F78]/80' : 'text-[#7A8792]'
            }`}
          >
            {child.meta ? text(child.meta) : ''}
          </span>
        )}
      </a>
    );

    if (hasNestedChildren) {
      return (
        <div
          key={child.id}
          className={`flex min-w-0 flex-col rounded-lg border p-1 transition-all duration-200 ${
            isChildActive
              ? 'artavel-dropdown-card-active border-[#36699C]/25 bg-white shadow-sm'
              : 'border-[#DBE4EB]/70 bg-[#F7F9FB]'
          }`}
        >
          {link}
          <div className="flex min-w-0 flex-col gap-0.5 px-1 pb-1 pl-3">
            {child.children?.map((nestedChild) => renderMobileSubmenuItem(nestedChild, depth + 1, true))}
          </div>
        </div>
      );
    }

    return link;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="artavel-mobile-nav-overlay"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={text('Menu Navigasi Mobile')}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full w-full max-w-xs flex-col justify-between overflow-y-auto border-l border-[#DBE4EB] bg-white p-6 shadow-2xl sm:max-w-sm"
          >
            <div>
              {/* Header Bar */}
              <div className="border-b border-[#DBE4EB] pb-6">
                <div className="flex items-center justify-between gap-3">
                  <ArtavelLogo size="sm" showSubbrand={false} />
                  <button
                    onClick={onClose}
                    aria-label={text('Tutup menu navigasi')}
                    className="cursor-pointer rounded-lg p-2 text-[#5C6B79] transition-all duration-200 hover:bg-[#F7F9FB] hover:text-[#172536] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C]"
                  >
                    <X className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <ThemeToggle variant="mobile" />
                  {renderLanguageToggle()}
                </div>
              </div>

              {/* Nav List */}
              <nav className="mt-6 flex flex-col gap-1">
                {MAIN_NAVIGATION.map((item: NavLinkItem) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = expandedNavId === item.id;
                  const hasActiveChild = item.children?.some(isNavItemActive);
                  const isActive = isPathActive(item.path) || Boolean(hasActiveChild);

                  return (
                    <div key={item.id} className="border-b border-[#DBE4EB]/60 pb-1">
                      {hasChildren ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleSubmenu(item.id)}
                            aria-expanded={isExpanded}
                            aria-controls={`mobile-sub-${item.id}`}
                            aria-current={isActive ? 'page' : undefined}
                            className={`relative isolate flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-xl px-4 py-3 text-left text-base font-semibold transition-all duration-300 ${
                              isActive
                                ? 'artavel-nav-item-active text-[#173955]'
                                : 'text-[#172536] hover:bg-[#F7F9FB] hover:text-[#244F78]'
                            }`}
                          >
                            {isActive && renderMobileActiveIndicator()}
                            <span className="relative z-20">{navLabelMap[item.id] || item.label}</span>
                            <ChevronDown
                              className={`relative z-20 w-5 h-5 text-[#36699C] transition-transform duration-200 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                              aria-hidden="true"
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                id={`mobile-sub-${item.id}`}
                                initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="artavel-mobile-submenu mt-2 flex flex-col gap-1 rounded-xl bg-[#F7F9FB] py-2 pl-4 pr-2">
                                  {item.children?.map((child) => renderMobileSubmenuItem(child))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(item.path);
                          }}
                          aria-current={isActive ? 'page' : undefined}
                          className={`relative isolate block overflow-hidden rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                            isActive
                              ? 'artavel-nav-item-active text-[#173955]'
                              : 'text-[#172536] hover:bg-[#F7F9FB] hover:text-[#244F78]'
                          }`}
                        >
                          {isActive && renderMobileActiveIndicator()}
                          <span className="relative z-20">{navLabelMap[item.id] || item.label}</span>
                        </a>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 border-t border-[#DBE4EB] pt-6">
              <Button
                variant="primary"
                size="md"
                className="artavel-header-consultation-cta w-full"
                leftIcon={
                  <span className="artavel-header-cta-phone-icon">
                    <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  </span>
                }
                onClick={handleConsultationCtaClick}
              >
                {consultationCtaLabel}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
