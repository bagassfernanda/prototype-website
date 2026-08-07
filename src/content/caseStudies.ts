import { CaseStudy } from '../types';

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'mpp-kabupaten-lamongan',
    slug: 'mpp-kabupaten-lamongan',
    clientName: 'Dinas PMPTSP Kabupaten Lamongan',
    anonymousClientLabel: 'Dinas PMPTSP Kabupaten di Jawa Timur',
    publicationPermission: false,
    sector: 'Pemerintah Daerah',
    region: 'Jawa Timur',
    challenge: 'Meningkatnya volume pemohon perizinan di Mal Pelayanan Publik (MPP) Lamongan yang membutuhkan kepastian alur verifikasi berkas antar-dinas teknis, integrasi sistem antrean loket, serta percepatan penandatanganan dokumen perizinan.',
    solutionProvided: 'Implementasi terpadu Smarchlink® SIPPADU dan SIANTER (Sistem Antrean & Tracking Pemohon) yang dihubungkan langsung dengan layar panggil loket MPP dan notifikasi status via SMS/WhatsApp.',
    results: [
      {
        value: 'Draf',
        unit: 'Efisiensi Waktu Tunggu',
        description: 'Indikator evaluasi layanan MPP yang perlu diverifikasi bersama manajemen dan pihak terkait.',
        verified: false,
        source: 'Draf - memerlukan verifikasi manajemen Artavel'
      },
      {
        value: 'Draf',
        unit: 'Persetujuan Elektronik',
        description: 'Penerbitan izin menggunakan Tanda Tangan Elektronik (TTE) resmi sesuai kesiapan instansi.',
        verified: false
      }
    ],
    implementationDuration: 'Draf - perlu verifikasi',
    productsUsed: ['Smarchlink® SIPPADU', 'Smarchlink® SIANTER'],
    testimonial: {
      quote: 'Integrasi sistem perizinan dan antrean lokasi sangat membantu petugas kami dalam melayani warga secara lebih tertata, cepat, dan transparan.',
      authorName: 'Tim Pengelola Layanan MPP',
      authorRole: 'Koordinator Layanan Terpadu',
      verified: false
    },
    verified: false
  },
  {
    id: 'sistem-kearsipan-sekretariat-daerah',
    slug: 'sistem-kearsipan-sekretariat-daerah',
    clientName: 'Instansi Pemerintah Daerah',
    anonymousClientLabel: 'Sekretariat Daerah Kabupaten di Jawa Timur',
    publicationPermission: false, // Anonymous mode
    sector: 'Pemerintah Daerah',
    region: 'Jawa Timur',
    challenge: 'Penumpukan puluhan ribu berkas fisik arsip aktif dan inaktif di ruang penyimpan Sekretariat yang menyebabkan kesulitan penelusuran dokumen keputusan dan surat dinas masa lalu.',
    solutionProvided: 'Penerapan Smarchlink® Archive (E-Archive) disertai proyek pendampingan alih media (digitalisasi) dan penyusunan struktur klasifikasi arsip sesuai pedoman ANRI.',
    results: [
      {
        value: 'Draf',
        unit: 'Kecepatan Pencarian',
        description: 'Indikator waktu pencarian arsip digital yang perlu diverifikasi melalui data implementasi resmi.',
        verified: false
      }
    ],
    implementationDuration: 'Draf - perlu verifikasi',
    productsUsed: ['Smarchlink® Archive', 'Layanan Alih Media Dokumen'],
    verified: false
  },
  {
    id: 'digitalisasi-arsip-bumd',
    slug: 'digitalisasi-arsip-bumd',
    clientName: 'Perusahaan Daerah BUMD',
    anonymousClientLabel: 'BUMD Pengelola Layanan Umum',
    publicationPermission: false,
    sector: 'BUMD / Perusahaan',
    region: 'Jawa Timur',
    challenge: 'Risiko kehilangan dokumen fisik kontrak kerja sama dan sertifikat aset akibat lokasi penyimpanan yang tersebar di beberapa kantor cabang.',
    solutionProvided: 'Sentralisasi penyimpanan arsip digital dengan Smarchlink Archive berbasis Cloud Private dan proteksi hak akses Role-Based.',
    results: [
      {
        value: 'Draf',
        unit: 'Aset Dokumen Terindeks',
        description: 'Indikator cakupan dokumen yang perlu diverifikasi berdasarkan berita acara implementasi resmi.',
        verified: false
      }
    ],
    implementationDuration: 'Draf - perlu verifikasi',
    productsUsed: ['Smarchlink® Archive', 'Arsitektur Integrasi & Hardening Layanan'],
    verified: false
  }
];
