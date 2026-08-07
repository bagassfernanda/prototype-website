/**
 * Interactive Application Demo Data Generator
 * Explicitly labeled "Data Demo / Fiktif" for presentation safety.
 */

export interface MockDocumentTrack {
  registrationNumber: string;
  applicantName: string;
  serviceType: string;
  submissionDate: string;
  currentStepName: string;
  status: 'Dalam Verifikasi' | 'Menunggu Parf' | 'Selesai / Terbit' | 'Perlu Perbaikan';
  estimatedCompletion: string;
  timeline: {
    date: string;
    step: string;
    officerRole: string;
    status: 'completed' | 'in-progress' | 'pending';
  }[];
}

export const DEMO_TRACKING_SAMPLES: Record<string, MockDocumentTrack> = {
  'PRZ-2026-0891': {
    registrationNumber: 'PRZ-2026-0891',
    applicantName: 'Bapak Ahmad Subagyo (Data Demo)',
    serviceType: 'Izin Operasional Layanan Publik',
    submissionDate: '01 Agustus 2026',
    currentStepName: 'Penandatanganan Elektronik Kepala Dinas',
    status: 'Menunggu Parf',
    estimatedCompletion: '04 Agustus 2026',
    timeline: [
      { date: '01 Aug 2026 09:15', step: 'Pendaftaran Online via Portal', officerRole: 'Sistem Pemohon', status: 'completed' },
      { date: '01 Aug 2026 14:20', step: 'Verifikasi Berkas Administrasi', officerRole: 'Petugas Loket 02', status: 'completed' },
      { date: '02 Aug 2026 11:00', step: 'Verifikasi Teknis & Kajian Lapangan', officerRole: 'Tim Teknis Dinas', status: 'completed' },
      { date: '03 Aug 2026 08:30', step: 'Pengesahan TTE Sertifikat Digital', officerRole: 'Kepala Dinas', status: 'in-progress' }
    ]
  },
  'ARS-2026-0412': {
    registrationNumber: 'ARS-2026-0412',
    applicantName: 'Sekretariat Utama (Data Demo)',
    serviceType: 'Peminjaman Arsip Vital Organisasi',
    submissionDate: '02 Agustus 2026',
    currentStepName: 'Dokumen Digital Siap Diunduh',
    status: 'Selesai / Terbit',
    estimatedCompletion: 'Selesai',
    timeline: [
      { date: '02 Aug 2026 10:00', step: 'Pengajuan Hak Akses Arsip', officerRole: 'Staff Keuangan', status: 'completed' },
      { date: '02 Aug 2026 10:15', step: 'Otorisasi Kepala Arsip', officerRole: 'Arsiparis Ahli', status: 'completed' },
      { date: '02 Aug 2026 10:18', step: 'Enkripsi & Watermark PDF', officerRole: 'System Smarchlink', status: 'completed' }
    ]
  }
};

export interface MockQueueStatus {
  counterNumber: string;
  serviceCategory: string;
  currentTicketNumber: string;
  servingTicketNumber: string;
  totalWaiting: number;
  averageServiceMinutes: number;
}

export const DEMO_QUEUE_COUNTERS: MockQueueStatus[] = [
  {
    counterNumber: 'Loket A-01',
    serviceCategory: 'Perizinan Layanan Publik',
    currentTicketNumber: 'A-042',
    servingTicketNumber: 'A-038',
    totalWaiting: 4,
    averageServiceMinutes: 8
  },
  {
    counterNumber: 'Loket B-02',
    serviceCategory: 'Konsultasi Kearsipan & Surat',
    currentTicketNumber: 'B-015',
    servingTicketNumber: 'B-012',
    totalWaiting: 3,
    averageServiceMinutes: 10
  },
  {
    counterNumber: 'Loket C-01',
    serviceCategory: 'Penyerahan Dokumen Terbit',
    currentTicketNumber: 'C-088',
    servingTicketNumber: 'C-085',
    totalWaiting: 3,
    averageServiceMinutes: 3
  }
];
