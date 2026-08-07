import { Sector } from '../types';

export const SECTORS_DATA: Sector[] = [
  {
    id: 'pemerintahan',
    slug: 'pemerintahan',
    title: 'Pemerintah Daerah & Instansi Publik',
    subtitle: 'Mendukung Tata Kelola Pemerintahan Digital (SPBE) yang Terintegrasi & Akuntabel',
    description: 'Artavel menyediakan paket solusi perizinan terpadu, tata naskah dinas, dan e-archive yang disesuaikan dengan nomenklatur regulasi daerah, standar BSSN/BSrE, dan prinsip Sistem Pemerintahan Berbasis Elektronik (SPBE).',
    iconName: 'Building2',
    targetOrganizations: [
      'Pemerintah Kabupaten / Kota / Provinsi',
      'Dinas Penanaman Modal & PTSP (DPMPTSP)',
      'Sekretariat Daerah (Setda) & Bagian Umum',
      'Dinas Kearsipan dan Perpustakaan Daerah',
      'Dinas Komunikasi dan Informatika (Diskominfo)'
    ],
    keyChallenges: [
      'Ekspektasi masyarakat akan kepastian waktu layanan publik yang semakin tinggi.',
      'Persyaratan integrasi nasional dengan OSS RBA, SIMBG, dan Sistem Penghubung Layanan Pemerintah.',
      'Risiko penumpukan fisik surat dinas dan dokumen perizinan di masa lalu.',
      'Tuntutan efisiensi anggaran cetak dan percepatan disposisi pimpinan.'
    ],
    recommendedSolutions: [
      'pelayanan-publik-dan-perizinan',
      'tata-naskah-dinas-elektronik',
      'manajemen-dokumen-dan-arsip',
      'sistem-antrean-dan-tracking'
    ],
    expectedImpacts: [
      'Peningkatan Indeks Pelayanan Publik dan Indeks SPBE Instansi.',
      'Proses penerbitan perizinan dan disposisi pimpinan menjadi lebih mudah dipantau.',
      'Terwujudnya kearsipan daerah yang rapi dan siap diaudit.'
    ]
  },
  {
    id: 'organisasi-dan-perusahaan',
    slug: 'organisasi-dan-perusahaan',
    title: 'Organisasi, BUMD & Swasta',
    subtitle: 'Efisiensi Operasional, Manajemen Kontrak & Pengamanan Aset Dokumen Organisasi',
    description: 'Transformasikan alur kerja internal korporasi dan BUMD dari ketergantungan proses manual menuju otomasi dokumen, persetujuan bertingkat, dan arsip digital yang mudah diakses tim antar-cabang.',
    iconName: 'Briefcase',
    targetOrganizations: [
      'Badan Usaha Milik Daerah (BUMD) / BUMN',
      'Perusahaan Penyedia Jasa & Manufaktur',
      'Organisasi Non-Profit & Lembaga Pendidikan',
      'Rumah Sakit & Lembaga Kesehatan'
    ],
    keyChallenges: [
      'Kesulitan melacak posisi berkas penawaran, kontrak, dan tagihan yang sedang diproses.',
      'Penyimpanan dokumen transaksi dan legalitas perusahaan yang tersebar di banyak folder personal karyawan.',
      'Risiko hilangnya dokumen historis saat terjadi pergantian personel (*turnover*).'
    ],
    recommendedSolutions: [
      'manajemen-dokumen-dan-arsip',
      'tata-naskah-dinas-elektronik',
      'digitalisasi-dan-alih-media',
      'keamanan-data-dan-integrasi'
    ],
    expectedImpacts: [
      'Pencarian dokumen legalitas dan transaksi menjadi lebih terstruktur.',
      'Siklus persetujuan dokumen internal lebih mudah dilacak dan dievaluasi.',
      'Pencegahan kebocoran data sensitif perusahaan.'
    ]
  },
  {
    id: 'layanan-publik',
    slug: 'layanan-publik',
    title: 'Pusat Layanan Terpadu & Loket Publik',
    subtitle: 'Pengalaman Ruang Tunggu yang Nyaman, Teratur, dan Terukur untuk Masyarakat',
    description: 'Solusi manajemen antrean fisik dan digital untuk Mal Pelayanan Publik (MPP), loket kesehatan, dan ruang layanan terpadu guna menciptakan keteraturan dan kepastian waktu panggil.',
    iconName: 'Users',
    targetOrganizations: [
      'Mal Pelayanan Publik (MPP)',
      'Kantor Bersama SAMSAT / Loket Retribusi',
      'Pusat Layanan Pelanggan PDAM & BUMD',
      'Ruang Tunggu Pendaftaran Rumah Sakit / Puskesmas'
    ],
    keyChallenges: [
      'Kepadatan antrean pengunjung pada jam-jam sibuk tanpa estimasi waktu panggil.',
      'Ketidakseimbangan beban kerja antar-loket layanan.',
      'Ketiadaan data Indeks Kepuasan Masyarakat (IKM) real-time pasca pelayanan.'
    ],
    recommendedSolutions: [
      'sistem-antrean-dan-tracking',
      'pelayanan-publik-dan-perizinan'
    ],
    expectedImpacts: [
      'Alur antrean pengunjung di ruang tunggu lebih tertata.',
      'Transparansi estimasi panggilan di layar TV dan HP warga.',
      'Data kuantitatif kinerja petugas loket untuk bahan evaluasi mingguan.'
    ]
  }
];
