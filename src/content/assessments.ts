export type AssessmentProfileId = 'general' | 'government-document';

export type AssessmentDimensionId =
  | 'process'
  | 'data'
  | 'analytics'
  | 'security'
  | 'infrastructure'
  | 'automation'
  | 'monitoring'
  | 'adoption'
  | 'document-management'
  | 'approval-workflow';

export interface LocalizedCopy {
  id: string;
  en: string;
}

export interface AssessmentOption {
  id: string;
  label: LocalizedCopy;
  score: number;
}

export interface AssessmentQuestion {
  id: string;
  dimensionId: AssessmentDimensionId;
  prompt: LocalizedCopy;
  options: AssessmentOption[];
}

export interface AssessmentDimension {
  id: AssessmentDimensionId;
  label: LocalizedCopy;
}

export interface AssessmentRecommendation {
  dimensionId: AssessmentDimensionId;
  title: LocalizedCopy;
  description: LocalizedCopy;
  solutionFamily: LocalizedCopy;
  solutionPath: string;
}

export interface AssessmentDefinition {
  id: AssessmentProfileId;
  title: LocalizedCopy;
  description: LocalizedCopy;
  dimensions: AssessmentDimension[];
  questions: AssessmentQuestion[];
  recommendations: AssessmentRecommendation[];
}

const dimension = (id: AssessmentDimensionId, label: string, en: string): AssessmentDimension => ({
  id,
  label: { id: label, en }
});

const option = (id: string, label: string, en: string, score: number): AssessmentOption => ({
  id,
  label: { id: label, en },
  score
});

const generalDimensions: AssessmentDimension[] = [
  dimension('process', 'Digitalisasi Proses', 'Process Digitalization'),
  dimension('data', 'Integrasi Data', 'Data Integration'),
  dimension('analytics', 'Analytics & Pelaporan', 'Analytics & Reporting'),
  dimension('security', 'Keamanan & Akses', 'Security & Access'),
  dimension('infrastructure', 'Infrastruktur', 'Infrastructure'),
  dimension('automation', 'Otomasi', 'Automation'),
  dimension('monitoring', 'Monitoring / IoT', 'Monitoring / IoT'),
  dimension('adoption', 'Adopsi Pengguna', 'User Adoption')
];

const generalQuestions: AssessmentQuestion[] = [
  {
    id: 'general-process-1',
    dimensionId: 'process',
    prompt: {
      id: 'Seberapa banyak proses utama organisasi Anda sudah berjalan secara digital dan terdokumentasi?',
      en: 'How many of your organization’s core processes are digital and documented?'
    },
    options: [
      option('none', 'Hampir seluruhnya manual dan bergantung pada dokumen terpisah.', 'Almost entirely manual and dependent on separate documents.', 0),
      option('some', 'Beberapa proses sudah digital, tetapi belum konsisten.', 'Some processes are digital, but not consistently.', 1),
      option('most', 'Sebagian besar proses sudah digital dengan SOP yang cukup jelas.', 'Most processes are digital with reasonably clear SOPs.', 2),
      option('connected', 'Proses utama digital, terdokumentasi, dan mudah dipantau.', 'Core processes are digital, documented, and easy to monitor.', 3),
      option('optimized', 'Proses digital terus diukur dan diperbaiki berdasarkan data.', 'Digital processes are continuously measured and improved using data.', 4)
    ]
  },
  {
    id: 'general-process-2',
    dimensionId: 'process',
    prompt: {
      id: 'Bagaimana organisasi menangani persetujuan, pekerjaan lintas unit, atau permintaan layanan?',
      en: 'How does your organization handle approvals, cross-unit work, or service requests?'
    },
    options: [
      option('manual', 'Melalui kertas, chat, atau email tanpa status terpusat.', 'Through paper, chat, or email without centralized status.', 0),
      option('partial', 'Menggunakan beberapa aplikasi dan rekap manual.', 'Using several applications and manual recaps.', 1),
      option('workflow', 'Menggunakan workflow digital pada proses-proses tertentu.', 'Using digital workflows for selected processes.', 2),
      option('integrated', 'Workflow digital terhubung dengan data, peran, dan notifikasi.', 'Digital workflows connect data, roles, and notifications.', 3),
      option('measured', 'Workflow terukur dengan SLA, audit trail, dan evaluasi berkala.', 'Workflows are measured with SLAs, audit trails, and regular reviews.', 4)
    ]
  },
  {
    id: 'general-data-1',
    dimensionId: 'data',
    prompt: {
      id: 'Seberapa baik aplikasi dan sumber data organisasi saling terhubung?',
      en: 'How well are your organization’s applications and data sources connected?'
    },
    options: [
      option('isolated', 'Sistem berdiri sendiri dan data sering dipindahkan manual.', 'Systems are isolated and data is often moved manually.', 0),
      option('partial', 'Ada ekspor-impor atau integrasi terbatas antar sistem.', 'There are exports, imports, or limited integrations between systems.', 1),
      option('planned', 'Integrasi utama sudah direncanakan dan berjalan pada beberapa area.', 'Key integrations are planned and work in selected areas.', 2),
      option('connected', 'Sistem utama terhubung melalui integrasi yang dikelola.', 'Core systems are connected through managed integrations.', 3),
      option('governed', 'Integrasi memiliki standar, pemilik data, dan pemantauan kualitas.', 'Integrations have standards, data owners, and quality monitoring.', 4)
    ]
  },
  {
    id: 'general-data-2',
    dimensionId: 'data',
    prompt: {
      id: 'Apakah organisasi memiliki sumber data yang konsisten untuk keputusan operasional?',
      en: 'Does your organization have a consistent data source for operational decisions?'
    },
    options: [
      option('scattered', 'Laporan berasal dari banyak file dan versi yang berbeda.', 'Reports come from many files and different versions.', 0),
      option('manual', 'Ada sumber utama, tetapi perlu dibersihkan dan direkap manual.', 'There is a main source, but it needs manual cleaning and recaps.', 1),
      option('defined', 'Sumber data utama dan definisi indikator sudah ditetapkan.', 'Primary data sources and metric definitions are established.', 2),
      option('shared', 'Data bersama dapat dipakai lintas unit dengan hak akses yang jelas.', 'Shared data can be used across units with clear access rights.', 3),
      option('governed', 'Kualitas, kepemilikan, retensi, dan perubahan data dikelola.', 'Data quality, ownership, retention, and changes are governed.', 4)
    ]
  },
  {
    id: 'general-analytics-1',
    dimensionId: 'analytics',
    prompt: {
      id: 'Seberapa rutin pimpinan dan tim menggunakan dashboard atau analytics untuk mengambil keputusan?',
      en: 'How regularly do leaders and teams use dashboards or analytics to make decisions?'
    },
    options: [
      option('none', 'Keputusan terutama berdasarkan intuisi atau laporan manual.', 'Decisions mainly rely on intuition or manual reports.', 0),
      option('periodic', 'Laporan dibuat berkala, tetapi belum mudah ditelusuri.', 'Reports are made periodically but are not easy to trace.', 1),
      option('dashboard', 'Dashboard digunakan untuk beberapa indikator utama.', 'Dashboards are used for selected key indicators.', 2),
      option('operational', 'Dashboard dipakai dalam rapat dan pemantauan operasional.', 'Dashboards are used in meetings and operational monitoring.', 3),
      option('predictive', 'Analytics dipakai untuk menemukan pola dan merencanakan tindakan.', 'Analytics is used to identify patterns and plan actions.', 4)
    ]
  },
  {
    id: 'general-security-1',
    dimensionId: 'security',
    prompt: {
      id: 'Bagaimana organisasi mengelola hak akses, pencatatan aktivitas, dan perlindungan data?',
      en: 'How does your organization manage access, activity logging, and data protection?'
    },
    options: [
      option('open', 'Akses banyak dibagikan dan aktivitas sulit dilacak.', 'Access is widely shared and activity is difficult to trace.', 0),
      option('basic', 'Ada akun pengguna, tetapi pengaturan dan log belum konsisten.', 'There are user accounts, but settings and logs are inconsistent.', 1),
      option('role', 'Hak akses berdasarkan peran dan backup dasar sudah tersedia.', 'Role-based access and basic backups are available.', 2),
      option('controlled', 'RBAC, audit trail, backup, dan pengamanan endpoint dikelola.', 'RBAC, audit trails, backups, and endpoint protection are managed.', 3),
      option('reviewed', 'Kontrol keamanan diuji, ditinjau, dan diperbaiki secara berkala.', 'Security controls are tested, reviewed, and improved regularly.', 4)
    ]
  },
  {
    id: 'general-infrastructure-1',
    dimensionId: 'infrastructure',
    prompt: {
      id: 'Seberapa siap infrastruktur organisasi untuk menjalankan dan mengembangkan sistem digital?',
      en: 'How ready is your infrastructure to run and scale digital systems?'
    },
    options: [
      option('fragile', 'Perangkat, jaringan, dan backup belum memiliki standar yang jelas.', 'Devices, networks, and backups lack clear standards.', 0),
      option('basic', 'Infrastruktur dasar tersedia, tetapi masih bergantung pada beberapa titik tunggal.', 'Basic infrastructure exists but still depends on a few single points of failure.', 1),
      option('planned', 'Kapasitas, deployment, dan backup mulai direncanakan.', 'Capacity, deployment, and backups are beginning to be planned.', 2),
      option('ready', 'On-premise, private cloud, atau hybrid dapat dipilih sesuai kebutuhan.', 'On-premise, private cloud, or hybrid deployment can be selected as needed.', 3),
      option('resilient', 'Monitoring, redundansi, pemulihan, dan kapasitas dikelola terukur.', 'Monitoring, redundancy, recovery, and capacity are managed measurably.', 4)
    ]
  },
  {
    id: 'general-automation-1',
    dimensionId: 'automation',
    prompt: {
      id: 'Seberapa banyak pekerjaan berulang sudah dibantu oleh workflow atau otomasi?',
      en: 'How much repetitive work is supported by workflows or automation?'
    },
    options: [
      option('manual', 'Hampir seluruhnya dilakukan manual.', 'Almost entirely performed manually.', 0),
      option('templates', 'Menggunakan template atau spreadsheet untuk mempercepat pekerjaan.', 'Templates or spreadsheets help speed up work.', 1),
      option('selected', 'Beberapa proses memiliki notifikasi atau otomasi sederhana.', 'Selected processes have notifications or simple automation.', 2),
      option('workflow', 'Workflow, approval, dan pelaporan berjalan terintegrasi.', 'Workflows, approvals, and reporting run in an integrated way.', 3),
      option('optimized', 'Otomasi dipantau berdasarkan waktu, risiko, dan kualitas hasil.', 'Automation is monitored by time, risk, and outcome quality.', 4)
    ]
  },
  {
    id: 'general-monitoring-1',
    dimensionId: 'monitoring',
    prompt: {
      id: 'Bagaimana organisasi menggunakan monitoring lapangan, CCTV, sensor, atau IoT?',
      en: 'How does your organization use field monitoring, CCTV, sensors, or IoT?'
    },
    options: [
      option('none', 'Belum tersedia atau hanya menjadi rekaman pasif.', 'Not available or used only as passive recordings.', 0),
      option('basic', 'Perangkat tersedia, tetapi data belum terpusat.', 'Devices are available, but data is not centralized.', 1),
      option('visible', 'Sebagian data dapat dipantau melalui dashboard.', 'Some data can be viewed through dashboards.', 2),
      option('integrated', 'Monitoring terhubung dengan analytics atau workflow tindak lanjut.', 'Monitoring connects to analytics or follow-up workflows.', 3),
      option('proactive', 'Peringatan dan insight dipakai untuk tindakan proaktif.', 'Alerts and insights are used for proactive action.', 4)
    ]
  },
  {
    id: 'general-adoption-1',
    dimensionId: 'adoption',
    prompt: {
      id: 'Bagaimana kesiapan pengguna dalam menerima, menggunakan, dan mengembangkan sistem digital?',
      en: 'How ready are users to adopt, use, and improve digital systems?'
    },
    options: [
      option('resistant', 'Pengguna belum memiliki pemahaman dan pendampingan yang cukup.', 'Users lack sufficient understanding and support.', 0),
      option('mixed', 'Sebagian pengguna siap, tetapi cara kerja masih berbeda-beda.', 'Some users are ready, but ways of working vary.', 1),
      option('trained', 'Pelatihan dan panduan dasar sudah tersedia.', 'Basic training and guides are available.', 2),
      option('supported', 'Ada pelatihan, admin, dukungan, dan evaluasi penggunaan.', 'Training, admins, support, and usage reviews are available.', 3),
      option('improving', 'Pengguna aktif memberi masukan dan ikut memperbaiki proses.', 'Users actively provide feedback and help improve processes.', 4)
    ]
  }
];

const governmentDimensions: AssessmentDimension[] = [
  dimension('document-management', 'Manajemen Dokumen & Arsip', 'Document & Archive Management'),
  dimension('approval-workflow', 'Persetujuan & Workflow', 'Approvals & Workflow')
];

const governmentQuestions: AssessmentQuestion[] = [
  {
    id: 'government-archive-storage',
    dimensionId: 'document-management',
    prompt: {
      id: 'Bagaimana cara organisasi Anda menyimpan arsip & surat dinas saat ini?',
      en: 'How does your organization currently store archives and official correspondence?'
    },
    options: [
      option('physical', 'Mayoritas kertas di ordner/lemari fisik', 'Mostly paper in binders or physical cabinets', 1),
      option('files', 'File PDF tersebar di folder komputer/GDrive', 'PDF files scattered across computer folders or GDrive', 2),
      option('application', 'Sudah ada aplikasi tapi belum terintegrasi TTE', 'An application exists but is not integrated with e-signatures', 3),
      option('centralized', 'Sistem terpusat terintegrasi TTE BSrE', 'A centralized system integrated with BSrE e-signatures', 4)
    ]
  },
  {
    id: 'government-search-time',
    dimensionId: 'document-management',
    prompt: {
      id: 'Berapa rata-rata waktu yang dibutuhkan untuk menemukan satu berkas dokumen lama?',
      en: 'How long does it usually take to find one older document file?'
    },
    options: [
      option('over-day', 'Lebih dari 1 hari / sering tidak ditemukan', 'More than 1 day / often not found', 1),
      option('hours', 'Beberapa jam (harus bongkar ordner)', 'Several hours (physical binder search required)', 2),
      option('minutes', '15-30 menit (cari di folder komputer)', '15–30 minutes (computer-folder search)', 3),
      option('instant', 'Kurang dari 1 menit (pencarian metadata E-Archive)', 'Less than 1 minute (E-Archive metadata search)', 4)
    ]
  },
  {
    id: 'government-approval',
    dimensionId: 'approval-workflow',
    prompt: {
      id: 'Bagaimana alur persetujuan / disposisi surat & perizinan dilakukan?',
      en: 'How are approvals and dispositions for letters and permits handled?'
    },
    options: [
      option('wet-signature', 'Tanda tangan basah di kertas cetak', 'Wet signatures on printed paper', 1),
      option('chat-pdf', 'Kirim PDF via WhatsApp lalu diprint', 'PDF sent through WhatsApp and then printed', 2),
      option('internal-app', 'Aplikasi internal tanpa sertifikat digital', 'Internal application without a digital certificate', 3),
      option('tnde', 'Aplikasi TNDE / SIPPADU terhubung TTE BSrE', 'TNDE / SIPPADU connected to BSrE e-signatures', 4)
    ]
  }
];

const recommendation = (
  dimensionId: AssessmentDimensionId,
  title: string,
  titleEn: string,
  description: string,
  descriptionEn: string,
  family: string,
  familyEn: string,
  solutionPath: string
): AssessmentRecommendation => ({
  dimensionId,
  title: { id: title, en: titleEn },
  description: { id: description, en: descriptionEn },
  solutionFamily: { id: family, en: familyEn },
  solutionPath
});

const recommendations: AssessmentRecommendation[] = [
  recommendation('process', 'Rapikan digitalisasi proses', 'Strengthen process digitalization', 'Petakan SOP utama lalu mulai dari workflow yang paling sering menimbulkan antrean, rekap, atau persetujuan manual.', 'Map the core SOPs, then start with workflows that create the most queues, recaps, or manual approvals.', 'Digital Government & Enterprise', 'Digital Government & Enterprise', '/solusi/tata-naskah-dinas-elektronik'),
  recommendation('data', 'Prioritaskan integrasi data', 'Prioritize data integration', 'Bangun sumber data bersama dan integrasi yang membuat status, dokumen, atau informasi operasional lebih mudah ditelusuri.', 'Build shared data sources and integrations that make operational status, documents, and information easier to trace.', 'Digital Government & Enterprise', 'Digital Government & Enterprise', '/solusi/keamanan-data-dan-integrasi'),
  recommendation('analytics', 'Bangun analytics operasional', 'Build operational analytics', 'Mulai dari indikator yang paling penting, lalu hadirkan dashboard yang membantu tim melihat kondisi dan mengambil tindakan.', 'Start with the most important indicators, then introduce dashboards that help teams understand conditions and act.', 'AI, Analytics & Smart Monitoring', 'AI, Analytics & Smart Monitoring', '/solusi/cctv-iot-dan-monitoring'),
  recommendation('security', 'Perkuat keamanan berbasis peran', 'Strengthen role-based security', 'Tata hak akses, audit trail, backup, dan perlindungan endpoint sebagai fondasi sebelum memperluas sistem.', 'Establish access control, audit trails, backups, and endpoint protection before expanding the system.', 'Cyber Security', 'Cyber Security', '/solusi/keamanan-data-dan-integrasi'),
  recommendation('infrastructure', 'Siapkan infrastruktur yang tangguh', 'Prepare resilient infrastructure', 'Tentukan kebutuhan deployment, kapasitas, backup, dan pemulihan agar sistem dapat berkembang tanpa mengorbankan stabilitas.', 'Define deployment, capacity, backup, and recovery needs so the system can grow without sacrificing stability.', 'Cyber Security', 'Cyber Security', '/solusi/keamanan-data-dan-integrasi'),
  recommendation('automation', 'Otomatiskan pekerjaan berulang', 'Automate repetitive work', 'Pilih pekerjaan berulang dengan dampak paling terasa, lalu hubungkan workflow, notifikasi, persetujuan, dan pelaporan.', 'Choose repetitive work with the greatest impact, then connect workflows, notifications, approvals, and reporting.', 'Digital Government & Enterprise', 'Digital Government & Enterprise', '/solusi/tata-naskah-dinas-elektronik'),
  recommendation('monitoring', 'Ubah monitoring menjadi insight', 'Turn monitoring into insight', 'Hubungkan perangkat, CCTV, sensor, atau data lokasi ke dashboard dan aturan tindak lanjut yang jelas.', 'Connect devices, CCTV, sensors, or location data to dashboards and clear follow-up rules.', 'AI, Analytics & Smart Monitoring', 'AI, Analytics & Smart Monitoring', '/solusi/cctv-iot-dan-monitoring'),
  recommendation('adoption', 'Perkuat adopsi pengguna', 'Strengthen user adoption', 'Siapkan champion, pelatihan berbasis peran, panduan kerja, dan siklus umpan balik agar perubahan benar-benar digunakan.', 'Prepare champions, role-based training, working guides, and feedback cycles so change is actually adopted.', 'Digital Government & Enterprise', 'Digital Government & Enterprise', '/cara-kami-bekerja')
];

const governmentRecommendations: AssessmentRecommendation[] = [
  recommendation('document-management', 'Rapikan manajemen dokumen dan arsip', 'Strengthen document and archive management', 'Mulai dari klasifikasi, metadata, retensi, dan pencarian terpusat agar dokumen resmi mudah ditemukan dan dikendalikan.', 'Start with classification, metadata, retention, and centralized search so official documents are easier to find and govern.', 'Digital Government & Enterprise', 'Digital Government & Enterprise', '/produk/smarchlink-archive'),
  recommendation('approval-workflow', 'Perkuat persetujuan dan disposisi digital', 'Strengthen digital approvals and dispositions', 'Petakan hierarki persetujuan, status, TTE, dan audit trail agar surat serta permohonan dapat diproses lebih terukur.', 'Map approval hierarchies, statuses, e-signatures, and audit trails so letters and requests can be processed more measurably.', 'Digital Government & Enterprise', 'Digital Government & Enterprise', '/solusi/tata-naskah-dinas-elektronik')
];

export const ASSESSMENT_DEFINITIONS: AssessmentDefinition[] = [
  {
    id: 'general',
    title: { id: 'Cek Kesiapan Digital Organisasi', en: 'Digital Readiness Assessment' },
    description: {
      id: 'Gambaran awal tentang kesiapan proses, data, analytics, keamanan, infrastruktur, otomasi, monitoring, dan adopsi pengguna.',
      en: 'A practical first view of process, data, analytics, security, infrastructure, automation, monitoring, and user adoption readiness.'
    },
    dimensions: generalDimensions,
    questions: generalQuestions,
    recommendations
  },
  {
    id: 'government-document',
    title: { id: 'Kesiapan Digital Government & Dokumen', en: 'Government & Document Readiness' },
    description: {
      id: 'Pertanyaan khusus untuk arsip, surat dinas, persetujuan, TTE, dan alur dokumen organisasi.',
      en: 'Focused questions for archives, official correspondence, approvals, e-signatures, and organizational document workflows.'
    },
    dimensions: governmentDimensions,
    questions: governmentQuestions,
    recommendations: governmentRecommendations
  }
];

export const getAssessmentDefinition = (id: AssessmentProfileId) =>
  ASSESSMENT_DEFINITIONS.find((assessment) => assessment.id === id) ?? ASSESSMENT_DEFINITIONS[0];
