export interface NavLinkItem {
  id: string;
  label: string;
  path: string;
  description?: string;
  children?: NavLinkItem[];
}

export const MAIN_NAVIGATION: NavLinkItem[] = [
  {
    id: 'nav-solusi',
    label: 'Solusi',
    path: '/solusi',
    children: [
      {
        id: 'nav-solusi-pelayanan',
        label: 'Pelayanan Publik & Perizinan',
        path: '/solusi/pelayanan-publik-dan-perizinan',
        description: 'SIPPADU — Alur perizinan terpadu & integrasi OSS/PBG'
      },
      {
        id: 'nav-solusi-arsip',
        label: 'Manajemen Dokumen & Arsip',
        path: '/solusi/manajemen-dokumen-dan-arsip',
        description: 'Smarchlink Archive — Penataan, pencarian cepat & retensi JRA'
      },
      {
        id: 'nav-solusi-tnde',
        label: 'Tata Naskah Dinas Elektronik',
        path: '/solusi/tata-naskah-dinas-elektronik',
        description: 'TNDE — Disposisi kilat, TTE BSrE & template resmi'
      },
      {
        id: 'nav-solusi-antrean',
        label: 'Sistem Antrean & Tracking',
        path: '/solusi/sistem-antrean-dan-tracking',
        description: 'SIANTER — Manajemen panggilan loket & tracking pemohon'
      },
      {
        id: 'nav-solusi-digitalisasi',
        label: 'Digitalisasi & Alih Media',
        path: '/solusi/digitalisasi-dan-alih-media',
        description: 'Pendampingan alih media arsip kertas ke digital'
      },
      {
        id: 'nav-solusi-keamanan',
        label: 'Keamanan Data & Integrasi',
        path: '/solusi/keamanan-data-dan-integrasi',
        description: 'API Gateway, Audit Trail & Hardening Layanan'
      },
      {
        id: 'nav-solusi-cctv-iot',
        label: 'CCTV, IoT & Monitoring',
        path: '/solusi/cctv-iot-dan-monitoring',
        description: 'Kamera, perangkat terhubung & monitoring operasional'
      },
      {
        id: 'nav-solusi-website-uiux',
        label: 'Website, UI/UX & Aplikasi Web',
        path: '/solusi/website-ui-ux-dan-aplikasi-web',
        description: 'Website resmi, dashboard, portal & pengalaman pengguna'
      }
    ]
  },
  {
    id: 'nav-sektor',
    label: 'Sektor',
    path: '/sektor',
    children: [
      {
        id: 'nav-sektor-pemerintahan',
        label: 'Pemerintah Daerah',
        path: '/sektor/pemerintahan',
        description: 'Dinas PMPTSP, Setda, Diskominfo & Instansi Publik'
      },
      {
        id: 'nav-sektor-organisasi',
        label: 'Organisasi & Perusahaan',
        path: '/sektor/organisasi-dan-perusahaan',
        description: 'BUMD, Swasta, Lembaga & Rumah Sakit'
      },
      {
        id: 'nav-sektor-layanan',
        label: 'Layanan Publik & MPP',
        path: '/sektor/layanan-publik',
        description: 'Mal Pelayanan Publik & Loket Terpadu'
      }
    ]
  },
  {
    id: 'nav-studi-kasus',
    label: 'Studi Kasus',
    path: '/studi-kasus'
  },
  {
    id: 'nav-cara-kerja',
    label: 'Cara Kami Bekerja',
    path: '/cara-kami-bekerja'
  },
  {
    id: 'nav-tentang',
    label: 'Tentang Artavel',
    path: '/tentang'
  },
  {
    id: 'nav-wawasan',
    label: 'Wawasan',
    path: '/wawasan'
  },
  {
    id: 'nav-kontak',
    label: 'Kontak',
    path: '/kontak'
  }
];

export const FOOTER_SOLUTIONS_NAV = MAIN_NAVIGATION[0].children || [];

export const FOOTER_LEGAL_NAV = [
  { label: 'Kebijakan Privasi', path: '/kebijakan-privasi' },
  { label: 'Syarat & Ketentuan', path: '/syarat-ketentuan' },
  { label: 'Aksesibilitas', path: '/aksesibilitas' }
];
