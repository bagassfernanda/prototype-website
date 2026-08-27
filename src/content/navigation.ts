import { PRODUCTS_FOR_MEGAMENU } from './products';

export interface NavLinkItem {
  id: string;
  label: string;
  path: string;
  activePaths?: string[];
  description?: string;
  meta?: string;
  isGroup?: boolean;
  children?: NavLinkItem[];
}

const PRODUCT_ACTIVE_PATH_ALIASES: Record<string, string[]> = {
  'smarchlink-sippadu': [
    '/solusi/pelayanan-publik-dan-perizinan',
    '/solusi/pelayanan-publik-dan-perizinan-terpadu',
    '/solusi/sippadu'
  ],
  'smarchlink-archive': [
    '/solusi/manajemen-dokumen-dan-arsip',
    '/solusi/manajemen-dokumen',
    '/solusi/archive'
  ],
  tnde: [
    '/solusi/tnde',
    '/solusi/tata-naskah-dinas-elektronik',
    '/solusi/tata-naskah-elektronik'
  ],
  sianter: [
    '/solusi/sianter',
    '/solusi/sistem-antrean-dan-tracking',
    '/solusi/sistem-antrean',
    '/solusi/antrean-dan-tracking'
  ]
};

const createProductNavItem = (productId: string): NavLinkItem => {
  const product = PRODUCTS_FOR_MEGAMENU.find((item) => item.id === productId);
  const activePaths = [
    product?.detailPath,
    product?.redirectPath,
    product ? `/solusi/${product.slug}` : undefined,
    ...(PRODUCT_ACTIVE_PATH_ALIASES[productId] || [])
  ].filter((path): path is string => Boolean(path));

  return {
    id: `nav-produk-${productId}`,
    label: product?.name || productId,
    path: product?.detailPath || '/produk',
    activePaths,
    description: product?.subtitle,
    meta: product?.categoryLabel
  };
};

export const MAIN_NAVIGATION: NavLinkItem[] = [
  {
    id: 'nav-solusi',
    label: 'Solusi',
    path: '/solusi',
    children: [
      {
        id: 'nav-solusi-group-ai-analytics',
        label: 'AI, Analytics & Smart Monitoring',
        path: '/solusi#ai-analytics-smart-monitoring',
        isGroup: true,
        children: [
          createProductNavItem('smartmap-gis-analytics'),
          {
            ...createProductNavItem('ai-cctv-computer-vision'),
            children: [createProductNavItem('footfallcam')]
          }
        ]
      },
      {
        id: 'nav-solusi-group-smart-education',
        label: 'Smart Education',
        path: '/solusi#smart-education',
        isGroup: true,
        children: [createProductNavItem('otoschool')]
      },
      {
        id: 'nav-solusi-group-retail-fnb',
        label: 'Retail & F&B',
        path: '/solusi#retail-fnb',
        isGroup: true,
        children: [createProductNavItem('otopos-fnb')]
      },
      {
        id: 'nav-solusi-group-cyber-security',
        label: 'Cyber Security',
        path: '/solusi/cyber-security',
        isGroup: true,
        children: [createProductNavItem('opentext-cybersecurity')]
      },
      {
        id: 'nav-solusi-group-digital-government',
        label: 'Digital Government & Enterprise',
        path: '/solusi#digital-government-enterprise',
        isGroup: true,
        children: [
          createProductNavItem('smarchlink-sippadu'),
          createProductNavItem('sianter'),
          createProductNavItem('tnde'),
          createProductNavItem('smarchlink-archive'),
          {
            id: 'nav-produk-semua',
            label: 'Lihat Semua Produk',
            path: '/produk',
            description: 'Daftar produk Artavel dan partner technology',
            meta: 'Produk & Technology'
          }
        ]
      }
    ]
  },
  {
    id: 'nav-sektor',
    label: 'Sektor',
    path: '/sektor',
    children: [
      {
        id: 'nav-sektor-pemerintah-layanan-publik',
        label: 'Pemerintah & Layanan Publik',
        path: '/sektor/pemerintah-layanan-publik',
        description: 'Pemda, Dinas, MPP, BUMD dan layanan publik'
      },
      {
        id: 'nav-sektor-pendidikan',
        label: 'Pendidikan',
        path: '/sektor/pendidikan',
        description: 'Sekolah, Yayasan dan Institusi Pendidikan'
      },
      {
        id: 'nav-sektor-retail-fnb',
        label: 'Retail & F&B',
        path: '/sektor/retail-fnb',
        description: 'Retail, restoran, kafe dan bisnis multi-outlet'
      },
      {
        id: 'nav-sektor-enterprise-organisasi',
        label: 'Enterprise & Organisasi',
        path: '/sektor/enterprise-organisasi',
        description: 'Perusahaan, BUMD, lembaga dan organisasi'
      }
    ]
  },
  {
    id: 'nav-studi-kasus',
    label: 'Studi Kasus',
    path: '/studi-kasus'
  },
  {
    id: 'nav-wawasan',
    label: 'Wawasan',
    path: '/wawasan'
  },
  {
    id: 'nav-tentang',
    label: 'Tentang',
    path: '/tentang',
    children: [
      {
        id: 'nav-tentang-artavel',
        label: 'Tentang Artavel',
        path: '/tentang',
        description: 'Profil perusahaan, nilai kerja, dan fokus solusi Artavel'
      },
      {
        id: 'nav-cara-kerja',
        label: 'Cara Kami Bekerja',
        path: '/cara-kami-bekerja',
        description: 'Tahapan discovery, desain solusi, implementasi, dan dukungan'
      }
    ]
  },
  {
    id: 'nav-kontak',
    label: 'Kontak',
    path: '/kontak'
  }
];

export const FOOTER_SOLUTIONS_NAV: NavLinkItem[] = [
  {
    id: 'footer-solusi-ai-analytics',
    label: 'AI, Analytics & Smart Monitoring',
    path: '/solusi#ai-analytics-smart-monitoring'
  },
  {
    id: 'footer-solusi-smart-education',
    label: 'Smart Education',
    path: '/solusi#smart-education'
  },
  {
    id: 'footer-solusi-retail-fnb',
    label: 'Retail & F&B',
    path: '/solusi#retail-fnb'
  },
  {
    id: 'footer-solusi-cyber-security',
    label: 'Cyber Security',
    path: '/solusi/cyber-security'
  },
  {
    id: 'footer-solusi-government-enterprise',
    label: 'Digital Government & Enterprise',
    path: '/solusi#digital-government-enterprise'
  },
  {
    id: 'footer-solusi-products',
    label: 'Lihat Semua Produk',
    path: '/produk'
  }
];

export const FOOTER_LEGAL_NAV = [
  { label: 'Kebijakan Privasi', path: '/kebijakan-privasi' },
  { label: 'Syarat & Ketentuan', path: '/syarat-ketentuan' },
  { label: 'Aksesibilitas', path: '/aksesibilitas' }
];
