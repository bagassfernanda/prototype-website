import type { CaseStudy, CaseStudyResult, CaseStudyVerificationStatus } from '../types';

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    slug: 'digitalisasi-pelayanan-perizinan',
    title: 'Dinas PMPTSP Kabupaten di Jawa Timur',
    anonymousName: 'Dinas PMPTSP Kabupaten di Jawa Timur',
    publicationPermission: false,
    sector: 'Pemerintah Daerah',
    region: 'Jawa Timur',
    shortDescription:
      'Meningkatnya volume permohonan perizinan dan kebutuhan koordinasi antarunit mendorong perlunya sistem pelayanan yang lebih terstruktur, mudah dipantau, dan mendukung proses persetujuan digital.',
    challenge:
      'Meningkatnya volume permohonan perizinan membutuhkan proses verifikasi, koordinasi antarunit teknis, pengelolaan antrean, serta penyampaian informasi status pelayanan yang lebih terstruktur.',
    needs: ['Pelayanan lebih terstruktur', 'Tracking status', 'Pengelolaan antrean', 'Koordinasi proses'],
    solution:
      'Implementasi solusi pelayanan terpadu menggunakan Smarchlink® SIPPADU dan SIANTER untuk mendukung pengelolaan permohonan, alur verifikasi, antrean pelayanan, tracking status, serta proses persetujuan dokumen secara digital.',
    products: ['Smarchlink® SIPPADU', 'Smarchlink® SIANTER'],
    approach: ['Discovery', 'Configuration', 'Implementation', 'Training', 'Support'],
    results: [
      {
        status: 'pending',
        title: 'Efisiensi Proses Pelayanan',
        description:
          'Indikator peningkatan efisiensi proses pelayanan masih memerlukan verifikasi berdasarkan data implementasi dan evaluasi resmi.',
        verified: false
      },
      {
        status: 'pending',
        title: 'Persetujuan Digital',
        description:
          'Pemanfaatan proses persetujuan digital perlu dikonfirmasi berdasarkan ruang lingkup implementasi sebenarnya.',
        verified: false
      }
    ],
    verified: false,
    metadataTitle: 'Digitalisasi Pelayanan Perizinan — Studi Kasus Artavel'
  },
  {
    slug: 'digitalisasi-pengelolaan-arsip',
    title: 'Sekretariat Daerah Kabupaten di Jawa Timur',
    anonymousName: 'Sekretariat Daerah Kabupaten di Jawa Timur',
    publicationPermission: false,
    sector: 'Pemerintah Daerah',
    region: 'Jawa Timur',
    shortDescription:
      'Bertambahnya volume arsip fisik aktif dan inaktif menciptakan kebutuhan terhadap proses digitalisasi, pengelompokan, serta pencarian dokumen yang lebih terstruktur.',
    challenge:
      'Bertambahnya volume arsip fisik aktif dan inaktif membutuhkan pengelolaan yang lebih terstruktur agar dokumen keputusan, surat dinas, dan arsip administratif dapat ditemukan kembali dengan lebih mudah ketika dibutuhkan.',
    needs: ['Digitalisasi arsip', 'Metadata', 'Penelusuran dokumen', 'Pengelompokan arsip'],
    solution:
      'Penerapan Smarchlink® Archive disertai proses alih media dokumen untuk membantu digitalisasi, pengelompokan, penyusunan metadata, dan penelusuran arsip secara lebih terstruktur.',
    products: ['Smarchlink® Archive', 'Layanan Alih Media Dokumen'],
    approach: ['Discovery', 'Configuration', 'Implementation', 'Training', 'Support'],
    results: [
      {
        status: 'pending',
        title: 'Kemudahan Penelusuran Arsip',
        description:
          'Digitalisasi dan pengelompokan dokumen dirancang untuk membantu pengguna menemukan arsip berdasarkan metadata dan informasi dokumen tanpa bergantung pada pencarian fisik.',
        verified: false
      }
    ],
    verified: false,
    metadataTitle: 'Digitalisasi dan Pengelolaan Arsip — Studi Kasus Artavel'
  },
  {
    slug: 'sentralisasi-dokumen-perusahaan',
    title: 'BUMD Pengelola Layanan Umum',
    anonymousName: 'BUMD Pengelola Layanan Umum',
    publicationPermission: false,
    sector: 'BUMD / Perusahaan',
    region: 'Jawa Timur',
    shortDescription:
      'Penyimpanan dokumen kontrak, sertifikat, dan arsip penting di beberapa lokasi menciptakan kebutuhan terhadap sentralisasi dokumen dan pengaturan akses yang lebih terstruktur.',
    challenge:
      'Dokumen kontrak kerja sama, sertifikat aset, dan dokumen administratif lainnya tersimpan pada beberapa lokasi dan unit kerja sehingga membutuhkan mekanisme penyimpanan serta pengendalian akses yang lebih terpusat.',
    needs: ['Sentralisasi dokumen', 'Pengaturan akses', 'Repository terstruktur', 'Penelusuran dokumen'],
    solution:
      'Penerapan Smarchlink® Archive untuk mendukung sentralisasi arsip digital, pengaturan akses berdasarkan peran pengguna, serta pengelolaan dokumen yang lebih terstruktur.',
    products: ['Smarchlink® Archive', 'Integrasi & Hardening Layanan'],
    approach: ['Discovery', 'Configuration', 'Implementation', 'Training', 'Support'],
    results: [
      {
        status: 'pending',
        title: 'Sentralisasi Dokumen',
        description:
          'Dokumen digital dapat dikelola dalam repository yang lebih terstruktur dengan mekanisme akses yang disesuaikan berdasarkan peran pengguna.',
        verified: false
      }
    ],
    verified: false,
    metadataTitle: 'Sentralisasi Dokumen Perusahaan — Studi Kasus Artavel'
  }
];

export const getCaseStudyDisplayName = (caseStudy: CaseStudy) =>
  caseStudy.publicationPermission && caseStudy.clientName
    ? caseStudy.clientName
    : caseStudy.anonymousName;

export const getCaseStudyResultStatus = (result: CaseStudyResult): CaseStudyVerificationStatus => {
  if (result.verified) return result.status;
  return result.status === 'draft' ? 'draft' : 'pending';
};
