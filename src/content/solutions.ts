import { Solution } from '../types';

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: 'pelayanan-publik-dan-perizinan',
    slug: 'pelayanan-publik-dan-perizinan',
    title: 'Pelayanan Publik & Perizinan Terpadu',
    productFamily: 'Smarchlink®',
    productName: 'SIPPADU (Sistem Informasi Pelayanan Perizinan Terpadu)',
    shortDescription: 'Aplikasi perizinan terpadu untuk menata permohonan, verifikasi, penerbitan rekomendasi, tanda tangan elektronik, dan pelaporan layanan publik.',
    heroDescription: 'Solusi pelayanan publik berbasis web yang membantu DPMPTSP, MPP, dan instansi teknis mengotomasi proses perizinan, memetakan alur verifikasi, menghubungkan pemohon dengan petugas, serta menyiapkan dashboard pemantauan yang lebih jelas bagi pimpinan.',
    iconName: 'FileCheck2',
    accentColor: 'blue',
    targetAudience: [
      'Dinas Penanaman Modal dan PTSP (DPMPTSP)',
      'Mal Pelayanan Publik (MPP)',
      'Dinas Teknis Penyelenggara Perizinan',
      'Administrator Layanan Publik BUMD & Instansi Vertikal'
    ],
    problemsSolved: [
      'Berkas permohonan fisik menumpuk dan rawan hilang di meja verifikator.',
      'Masyarakat harus berulang kali bertanya melalui telepon atau datang langsung untuk mengetahui status perizinan.',
      'Koordinasi verifikasi teknis antar-dinas membutuhkan waktu lama dan sulit dilacak bottleneck-nya.',
      'Sistem perizinan eksisting belum terintegrasi sempurna dengan OSS RBA & SIMBG (PBG).'
    ],
    keyOutcomes: [
      'Alur pemrosesan izin lebih mudah dipantau di setiap tahapan verifikasi.',
      'Pemohon dan petugas memiliki rujukan status yang lebih jelas melalui nomor resi, notifikasi, atau dashboard layanan.',
      'Dokumen persyaratan dapat dikelola secara elektronik sehingga proses administrasi lebih tertata.',
      'Laporan berkala untuk pimpinan dan instansi terkait dapat disiapkan dari data proses yang lebih rapi.'
    ],
    capabilities: [
      {
        id: 'cap-1',
        title: 'Modul Perizinan Reguler & Online',
        description: 'Pendaftaran izin, unggah dokumen persyaratan, pengecekan berkas, dan pemantauan proses melalui antarmuka berbasis web.'
      },
      {
        id: 'cap-2',
        title: 'Workflow Perizinan Paket & Rekomendasi',
        description: 'Konfigurasi alur persetujuan bertingkat untuk jenis izin, paket layanan, rekomendasi teknis, dan kebutuhan koordinasi antar-dinas.'
      },
      {
        id: 'cap-3',
        title: 'TTE, IKM Dinamis, Dashboard & Pelaporan',
        description: 'Dukungan tanda tangan elektronik, indeks kepuasan masyarakat, dashboard pimpinan, dan penyusunan laporan layanan.'
      },
      {
        id: 'cap-4',
        title: 'Retribusi PBG/SIMBG, Fintek, GIS, KBLI, SMS & Email Gateway',
        description: 'Modul pendukung untuk retribusi, fingerprint, layanan berbasis peta, referensi KBLI, serta notifikasi SMS dan email sesuai kebutuhan instansi.'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Pendaftaran & Unggah Berkas',
        description: 'Pemohon mengisi formulir digital dan mengunggah persyaratan dokumen pendukung.',
        iconName: 'Upload'
      },
      {
        stepNumber: 2,
        title: 'Verifikasi Administrasi & Teknis',
        description: 'Petugas loket dan tim teknis memeriksa keabsahan berkas dengan sistem penanda catatan.',
        iconName: 'UserCheck'
      },
      {
        stepNumber: 3,
        title: 'Penetapan & Persetujuan Kepala Dinas',
        description: 'Dokumen perizinan disetujui secara elektronik menggunakan sertifikat TTE resmi.',
        iconName: 'FileSignature'
      },
      {
        stepNumber: 4,
        title: 'Penerbitan & Notifikasi Pemohon',
        description: 'Izin terbit dikirim otomatis melalui email/WhatsApp dan siap diunduh pemohon.',
        iconName: 'Send'
      }
    ],
    deploymentOptions: [
      {
        id: 'on-premise',
        title: 'On-Premise Server Pemda',
        subtitle: 'Terisolasi di Data Center Instansi',
        description: 'Solusi diinstal penuh pada infrastruktur fisik/virtual lokal Pemda untuk pemenuhan kedaulatan data penuh.',
        benefits: ['Akses jaringan intranet cepat', 'Sesuai regulasi lokal khusus', 'Integrasi database lokal direct']
      },
      {
        id: 'private-cloud',
        title: 'Private Cloud Artavel',
        subtitle: 'Tingkat Keamanan Server Terkelola',
        description: 'Infrastruktur cloud khusus terenkripsi dengan manajemen backup berkala dan pemeliharaan server otomatis.',
        benefits: ['Tanpa investasi hardware awal', 'Kapasitas dapat disesuaikan', 'Pemeliharaan server lebih terkelola']
      }
    ],
    integrations: [
      'OSS RBA (Online Single Submission Risk-Based Approach)',
      'SIMBG / PBG (Sistem Informasi Manajemen Bangunan Gedung)',
      'BSrE / BSSN Tanda Tangan Elektronik',
      'Bank Pembangunan Daerah (BPD) & Payment Gateway'
    ],
    securityFeatures: [
      'Role-Based Access Control (RBAC) ketat per peran petugas',
      'Enkripsi data dokumen saat disimpan (At-Rest) dan dikirim (In-Transit)',
      'Audit Trail mencatat detail IP, waktu, dan aksi perubahan status berkas'
    ],
    faqs: [
      {
        id: 'faq-1',
        question: 'Apakah Smarchlink SIPPADU kompatibel dengan sistem OSS RBA nasional?',
        answer: 'Ya, sistem kami dirancang dengan API Gateway terbuka yang siap disinkronkan dengan OSS RBA nasional untuk pertukaran data perizinan berusaha dan non-berusaha.'
      },
      {
        id: 'faq-2',
        question: 'Berapa lama estimasi waktu implementasi SIPPADU?',
        answer: 'Waktu implementasi perlu ditentukan setelah asesmen jumlah jenis izin, kompleksitas alur teknis, kesiapan data, dan kebutuhan integrasi TTE.'
      }
    ]
  },
  {
    id: 'manajemen-dokumen-dan-arsip',
    slug: 'manajemen-dokumen-dan-arsip',
    title: 'Manajemen Dokumen & Kearsipan Digital',
    productFamily: 'Smarchlink®',
    productName: 'Smarchlink Archive (E-Archive)',
    shortDescription: 'Temukan, kelola, dan telusuri arsip vital organisasi tanpa bergantung pada ingatan personal atau tumpukan fisik.',
    heroDescription: 'Solusi pengelolaan dokumen dan arsip terstruktur yang membantu organisasi menyimpan, mengklasifikasikan, mengamankan, dan menelusuri arsip aktif maupun inaktif dengan cepat dan akurat.',
    iconName: 'FolderKanban',
    accentColor: 'green',
    targetAudience: [
      'Lembaga Kearsipan Daerah (LKD)',
      'Sekretariat Organisasi & Sekretariat Daerah',
      'Divisi Legal, HR, & Keuangan BUMD/Perusahaan',
      'Unit Pengelola Arsip Instansi Pemerintah'
    ],
    problemsSolved: [
      'Pencarian dokumen fisik memakan waktu puluhan menit hingga berhari-hari.',
      'Risiko kehilangan arsip vital akibat bencana fisik, kelembapan, atau salah penempatan.',
      'Ketidakpastian Jadwal Retensi Arsip (JRA) sehingga penumpukan dokumen terus terjadi.',
      'Akses dokumen sensitif yang sulit dibatasi dan tidak memiliki jejak audit.'
    ],
    keyOutcomes: [
      'Pencarian dokumen lebih cepat menggunakan kata kunci metadata atau teks pencarian.',
      'Pengelompokan arsip sesuai Tata Naskah & Klasifikasi Arsip Baku.',
      'Penerapan Hak Akses Berlapis (Role-Based Authorization) untuk keamanan dokumen rahasia.',
      'Manajemen Otomatis Jadwal Retensi Arsip (JRA) untuk penyusutan dan pemusnahan resmi.'
    ],
    capabilities: [
      {
        id: 'cap-archive-1',
        title: 'Penataan Struktur Klasifikasi Arsip',
        description: 'Penyusunan hirarki folder dan kode klasifikasi kearsipan sesuai standar ANRI / regulasi internal.'
      },
      {
        id: 'cap-archive-2',
        title: 'Pencarian Cerdas & Metadata OCR',
        description: 'Mesin pencari cepat berbasis nomor, tanggal, subjek, serta pengenalan teks isi dokumen.'
      },
      {
        id: 'cap-archive-3',
        title: 'Manajemen Lokasi Fisik & Rak Arsip',
        description: 'Pemetaan lokasi fisik (Gedung, Depo, Lemari, Box, Map) terhubung dengan fisik digitalnya.'
      },
      {
        id: 'cap-archive-4',
        title: 'Otomasi Retensi & Pemusnahan',
        description: 'Notifikasi saat arsip memasuki masa pemindahan, pemusnahan, atau penyerahan ke arsip statis.'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Registrasi & Pengunggahan Arsip',
        description: 'Perekaman metadata dokumen baru (nomor, tanggal, perihal) beserta berkas digital.',
        iconName: 'FilePlus'
      },
      {
        stepNumber: 2,
        title: 'Klasifikasi & Pemberian Otorisasi',
        description: 'Penentuan kode klasifikasi arsip dan pengaturan hak akses pengguna.',
        iconName: 'ShieldCheck'
      },
      {
        stepNumber: 3,
        title: 'Penyimpanan & indexing',
        description: 'Penyimpanan terenkripsi dan ekstraksi indeks untuk pencarian cepat.',
        iconName: 'Database'
      },
      {
        stepNumber: 4,
        title: 'Peminjaman & Pemantauan JRA',
        description: 'Pencatatan alur peminjaman fisik/digital serta pemantauan retensi berkala.',
        iconName: 'Clock'
      }
    ],
    deploymentOptions: [
      {
        id: 'on-premise',
        title: 'On-Premise / Local Server',
        subtitle: 'Kedaulatan Arsip Lokal',
        description: 'Dideploy di server jaringan lokal instansi agar seluruh dokumen vital tidak pernah keluar dari jaringan gedung.',
        benefits: ['Pencarian ultra cepat jaringan lokal', 'Keamanan fisik terjamin', 'Tanpa batasan kuota internet']
      },
      {
        id: 'private-cloud',
        title: 'Enterprise Hybrid Cloud',
        subtitle: 'Sinkronisasi Multi-Cabang',
        description: 'Cocok untuk organisasi dengan banyak kantor cabang yang membutuhkan akses arsip terpusat aman.',
        benefits: ['Akses dari lokasi kerja mana saja', 'Backup otomatis ke data center terpisah', 'Skala penyimpanan besar']
      }
    ],
    integrations: [
      'Mesin Pemindai / Scanner Dokumen High-Speed',
      'Sistem Tata Naskah Dinas Elektronik (TNDE)',
      'Sistem Kepegawaian & ERP Internal'
    ],
    securityFeatures: [
      'Watermarking otomatis pada preview dokumen sensitif',
      'Pencegahan pengunduhan tanpa izin hak akses',
      'Log Audit lengkap mencatat penglihatan, pengunduhan, dan perubahan'
    ],
    faqs: [
      {
        id: 'faq-archive-1',
        question: 'Apakah sistem ini sesuai dengan pedoman ANRI (Arsip Nasional Republik Indonesia)?',
        answer: 'Ya, struktur data dan metodologi Jadwal Retensi Arsip (JRA) pada Smarchlink Archive dirancang mengikuti standar baku kearsipan ANRI.'
      }
    ]
  },
  {
    id: 'tata-naskah-dinas-elektronik',
    slug: 'tata-naskah-dinas-elektronik',
    title: 'Tata Naskah Dinas Elektronik (TNDE)',
    productFamily: 'Smarchlink®',
    productName: 'Smarchlink TNDE',
    shortDescription: 'Percepatan alur disposisi, pembuatan surat dinas standar, dan penandatanganan elektronik tanpa hambatan jarak.',
    heroDescription: 'Sistem tata naskah dinas elektronik yang mentransformasi alur korespondensi, persetujuan, dan disposisi pejabat menjadi lebih cepat, transparan, dan dapat dipantau dari mana saja.',
    iconName: 'MailCheck',
    accentColor: 'blue',
    targetAudience: [
      'Sekretariat Daerah (Sekda)',
      'Bagian Umum & Kepegawaian Organisasi',
      'Pimpinan Instansi, Kepala Dinas, & Kabid',
      'Sekretariat Perusahaan BUMD / BUMN'
    ],
    problemsSolved: [
      'Disposisi surat tertahan lama ketika Pimpinan sedang bertugas di luar kantor.',
      'Format dan penomoran surat sering tidak seragam antar-unit kerja.',
      'Kesulitan melacak riwayat posisi surat masuk/keluar secara *real-time*.',
      'Risiko kebocoran dokumen dinas bersifat rahasia/sangat rahasia.'
    ],
    keyOutcomes: [
      'Disposisi kilat via perangkat mobile dalam hitungan menit.',
      'Standardisasi format templat surat dinas sesuai Permendagri / Peraturan Organisasi.',
      'Penghematan biaya cetak, kertas, dan pengiriman kurir fisik.',
      'Penomoran surat otomatis tanpa risiko penomoran ganda.'
    ],
    capabilities: [
      {
        id: 'cap-tnde-1',
        title: 'Pembuat Surat & Templat Otomatis',
        description: 'Penyusunan naskah dinas dengan templat baku, nomor surat otomatis, dan verifikasi hirarki draft.'
      },
      {
        id: 'cap-tnde-2',
        title: 'Disposisi Digital Multi-Tingkat',
        description: 'Fitur disposisi cepat dilengkapi petunjuk arahan, catatan khusus, dan target waktu tindak lanjut.'
      },
      {
        id: 'cap-tnde-3',
        title: 'Tanda Tangan Elektronik Tersertifikasi',
        description: 'Integrasi sertifikat digital BSrE untuk pengesahan surat resmi legal sah demi hukum.'
      },
      {
        id: 'cap-tnde-4',
        title: 'Monitoring & Tracking Surat Real-time',
        description: 'Dashboard pemantauan posisi surat, durasi berhenti di pejabat tertentu, dan statistik korespondensi.'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Penerimaan / Pembuatan Surat',
        description: 'Agenda surat masuk dicatat atau draft surat keluar disusun oleh konseptor.',
        iconName: 'Edit3'
      },
      {
        stepNumber: 2,
        title: 'Verifikasi & Paraf Hirarki',
        description: 'Pemeriksaan draft oleh atasan langsung secara bertingkat sebelum ditandatangani.',
        iconName: 'CheckSquare'
      },
      {
        stepNumber: 3,
        title: 'TTE & Penomoran Resmi',
        description: 'Penandatanganan elektronik oleh Pimpinan dan penomoran otomatis oleh sistem.',
        iconName: 'ShieldCheck'
      },
      {
        stepNumber: 4,
        title: 'Disposisi & Distribusi',
        description: 'Pengiriman disposisi ke unit pelaksana dan arsip dinas secara otomatis.',
        iconName: 'Share2'
      }
    ],
    deploymentOptions: [
      {
        id: 'on-premise',
        title: 'On-Premise Server Instansi',
        subtitle: 'Kedaulatan Surat Dinas',
        description: 'Infrastruktur di dalam jaringan intranet instansi untuk menjaga kerahasiaan penuh korespondensi pimpinan.',
        benefits: ['Lokal jaringan terproteksi', 'Akses instan dari gedung kantor', 'Integrasi active directory / SSO']
      },
      {
        id: 'private-cloud',
        title: 'Managed Private Cloud',
        subtitle: 'Mobile Disposisi Anywhere',
        description: 'Dideploy pada server cloud terdedikasi agar Pimpinan dapat melakukan disposisi saat dinas luar.',
        benefits: ['Akses via mobile browser aman', 'Notifikasi disposisi cepat', 'SLA pemeliharaan penuh']
      }
    ],
    integrations: [
      'BSrE (Balai Sertifikasi Elektronik - BSSN)',
      'Sistem Informasi Kepegawaian (SIMPEG)',
      'E-Email Server & WhatsApp Gateway Instansi'
    ],
    securityFeatures: [
      'Klasifikasi Sifat Surat (Biasa, Terbatas, Rahasia, Sangat Rahasia)',
      'Verifikasi keaslian dokumen via QR Code Validation Page',
      'Audit Trail lengkap setiap aksi paraf, tanda tangan, dan disposisi'
    ],
    faqs: [
      {
        id: 'faq-tnde-1',
        question: 'Apakah surat yang ditandatangani di TNDE memiliki kekuatan hukum yang sah?',
        answer: 'Ya, dengan integrasi sertifikat digital BSrE/BSSN, TTE pada naskah dinas memiliki keabsahan hukum sesuai UU ITE yang berlaku di Indonesia.'
      }
    ]
  },
  {
    id: 'sistem-antrean-dan-tracking',
    slug: 'sistem-antrean-dan-tracking',
    title: 'Sistem Antrean & Tracking Pemohon',
    productFamily: 'Smarchlink®',
    productName: 'Smarchlink SIANTER',
    shortDescription: 'Tertibkan ruang pelayanan, kurangi waktu tunggu, dan sajikan estimasi panggilan transparan bagi masyarakat.',
    heroDescription: 'Solusi manajemen antrean fisik dan digital yang membantu gedung pelayanan publik mengatur alur kedatangan warga, mengelola beban kerja loket, serta menyediakan fitur tracking status layanan secara mandiri.',
    iconName: 'Users',
    accentColor: 'yellow',
    targetAudience: [
      'Mal Pelayanan Publik (MPP)',
      'Kantor Pelayanan Pajak / Retribusi Daerah',
      'Loket Layanan Kependudukan & Perizinan',
      'Pusat Layanan Pelanggan BUMD / Rumah Sakit'
    ],
    problemsSolved: [
      'Penumpukan antrean fisik di ruang tunggu yang menyebabkan ketidaknyamanan.',
      'Kurangnya kepastian kapan nomor antrean akan dipanggil.',
      'Alokasi petugas loket yang tidak seimbang dengan kepadatan pengunjung.',
      'Ketiadaan data statistik waktu tunggu dan waktu pelayanan per loket.'
    ],
    keyOutcomes: [
      'Ruang tunggu lebih teratur dengan estimasi panggilan di layar digital / HP pemohon.',
      'Otomatisasi panggilan suara bahasa Indonesia yang jernih dan ramah.',
      'Integrasi antrean online (pengambilan nomor dari rumah) dan antrean ditempat (Kiosk).',
      'Statistik kinerja loket real-time untuk evaluasi Pimpinan Layanan.'
    ],
    capabilities: [
      {
        id: 'cap-sianter-1',
        title: 'Anjungan Mandiri Cetak Nomor (Kiosk)',
        description: 'Touchscreen Kiosk interaktif untuk mendaftar dan mencetak nomor antrean sesuai kategori layanan.'
      },
      {
        id: 'cap-sianter-2',
        title: 'Display Panggilan Utama & Suara Otomatis',
        description: 'Layar TV panggilan publik dengan suara panggilan otomatis jernih dan running text informasi.'
      },
      {
        id: 'cap-sianter-3',
        title: 'Aplikasi Caller Petugas Loket',
        description: 'Antarmuka sederhana bagi petugas loket untuk memanggil, memanggil ulang, atau mengalihkan pemohon.'
      },
      {
        id: 'cap-sianter-4',
        title: 'Portal Tracking Status Pemohon',
        description: 'Masyarakat dapat memantau posisi antrean dan status dokumennya dari smartphone.'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Pengambilan Nomor Antrean',
        description: 'Masyarakat mengambil nomor antrean via Kiosk loket atau pendaftaran online sebelumnya.',
        iconName: 'Ticket'
      },
      {
        stepNumber: 2,
        title: 'Menunggu di Ruang Layanan',
        description: 'Pemohon dapat memantau pergerakan antrean via TV display atau browser handphone.',
        iconName: 'Clock'
      },
      {
        stepNumber: 3,
        title: 'Panggilan & Pelayanan Loket',
        description: 'Petugas memanggil pemohon via aplikasi caller dan melayani kebutuhan pemohon.',
        iconName: 'Volume2'
      },
      {
        stepNumber: 4,
        title: 'Evaluasi & Kepuasan Layanan (SKM)',
        description: 'Pemohon memberikan masukan kepuasan pada mesin Indeks Kepuasan Masyarakat (IKM).',
        iconName: 'Star'
      }
    ],
    deploymentOptions: [
      {
        id: 'on-premise',
        title: 'On-Premise Local Kiosk Server',
        subtitle: 'Respon Panggilan Instan Tanpa Delay',
        description: 'Server lokal di dalam gedung MPP/Kantor Layanan untuk menjamin panggilan suara dan display TV tetap berjalan lancar walaupun koneksi internet terputus.',
        benefits: ['Layar TV tidak lag', 'Kiosk berjalan stabil', 'Integrasi hardware Kiosk Printer direct']
      }
    ],
    integrations: [
      'Mesin Kiosk & Thermal Printer Antrean',
      'Layar Smart TV Display Multimedia Ruang Tunggu',
      'Sistem Perizinan SIPPADU & WhatsApp Notifikasi'
    ],
    securityFeatures: [
      'Pencegahan kecurangan pengambilan nomor berulang (*spam ticketing*)',
      'Aturan kuota harian antrean per jenis layanan'
    ],
    faqs: [
      {
        id: 'faq-sianter-1',
        question: 'Apakah SIANTER membutuhkan perangkat hardware khusus?',
        answer: 'SIANTER dapat menggunakan PC/Mini-PC standar yang terhubung ke TV Display via HDMI. Untuk mesin Kiosk, kami menyediakan spesifikasi rekomendasi atau paket terintegrasi.'
      }
    ]
  },
  {
    id: 'digitalisasi-dan-alih-media',
    slug: 'digitalisasi-dan-alih-media',
    title: 'Digitalisasi & Alih Media Dokumen',
    productFamily: 'Artavel Core',
    productName: 'Layanan Pendampingan & Alih Media Dokumen',
    shortDescription: 'Ubah tumpukan arsip kertas menjadi aset digital terstruktur yang terindeks, teruji, dan aman.',
    heroDescription: 'Jasa profesional dan metodologi alih media terpadu yang membantu organisasi memindai, mengindeks, memverifikasi, dan mengunggah fisik arsip masa lalu ke dalam sistem kearsipan digital.',
    iconName: 'ScanLine',
    accentColor: 'orange',
    targetAudience: [
      'Organisasi dengan Depo Arsip Fisik Besar',
      'Dinas Kearsipan, Rumah Sakit, & Perbankan',
      'Instansi dengan Dokumen Sertifikat / Warkah Vital'
    ],
    problemsSolved: [
      'Ruang gudang/depo penuh sesak oleh ribuan dus arsip kertas tua.',
      'Kerusakan fisik kertas akibat pelapukan, jamur, atau bencana air.',
      'Proses pemindaian internal yang lambat karena keterbatasan alat scanner dan SDM terampil.',
      'Hasil pemindaian acak tanpa metadata sehingga tetap tidak bisa dicari dengan cepat.'
    ],
    keyOutcomes: [
      'Penyelamatan isi informasi dari dokumen fisik yang mulai mengalami kerusakan.',
      'Hasil pemindaian berkualitas tinggi lengkap dengan metadata standar kearsipan.',
      'Efisiensi ruang fisik gedung hingga puluhan meter persegi.',
      'Proses pemindaian yang mematuhi standar otentikasi alih media resmi.'
    ],
    capabilities: [
      {
        id: 'cap-digitalize-1',
        title: 'Pemilahan & Pemberkasan Arsip Fisik',
        description: 'Pembersihan, penataan ulang klip, dan pengelompokan arsip sebelum masuk proses pemindaian.'
      },
      {
        id: 'cap-digitalize-2',
        title: 'Pemindaian Resolusi Tinggi (High-Speed Scanning)',
        description: 'Penggunaan pemindai dokumen profesional dengan standar resolusi 300+ DPI color/grayscale.'
      },
      {
        id: 'cap-digitalize-3',
        title: 'Perekaman Metadata & Indexing',
        description: 'Input data indeks (nomor, tanggal, perihal, pihak terkait) oleh tim operator terlatih.'
      },
      {
        id: 'cap-digitalize-4',
        title: 'Quality Control & Re-Assembly',
        description: 'Verifikasi keterbacaan hasil scan, pengecekan kelengkapan halaman, dan penataan kembali arsip fisik.'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Inventarisasi & Pengambilan Arsip',
        description: 'Serah terima berkas fisik dengan berita acara pencatatan jumlah dan kondisi awal.',
        iconName: 'ClipboardList'
      },
      {
        stepNumber: 2,
        title: 'Pemindaian & OCR',
        description: 'Proses scanning fisik dan ekstraksi karakter teks dokumen.',
        iconName: 'Scan'
      },
      {
        stepNumber: 3,
        title: 'Pemeriksaan Kualitas (QC)',
        description: 'Pemeriksaan kejelasan hasil scan dan koreksi metadata oleh Quality Controller.',
        iconName: 'CheckCircle2'
      },
      {
        stepNumber: 4,
        title: 'Unggah ke Sistem & Pengembalian Fisik',
        description: 'Pengunggahan file digital ke E-Archive dan penataan kembali dokumen fisik ke box arsip.',
        iconName: 'Archive'
      }
    ],
    deploymentOptions: [
      {
        id: 'on-premise',
        title: 'On-Site Digitalization Project',
        subtitle: 'Pengerjaan Langsung di Gedung Client',
        description: 'Tim dan peralatan Artavel diboyong langsung ke lokasi kantor instansi demi menjaga keamanan arsip vital agar tidak keluar gedung.',
        benefits: ['Arsip vital tidak keluar kantor', 'Pengawasan langsung oleh pengelola arsip instansi', 'Serah terima terjamin']
      }
    ],
    integrations: [
      'Smarchlink Archive (E-Archive)',
      'Mesin Scanner Profesional Kodak / Fujitsu / Canon',
      'Sistem E-Repository Organisasi'
    ],
    securityFeatures: [
      'Prosedur penanganan berkas rahasia dengan NDA tim operator khusus',
      'Pemeriksaan integritas checksum file (MD5/SHA256) agar hasil scan tidak korup'
    ],
    faqs: [
      {
        id: 'faq-digi-1',
        question: 'Apakah alih media dikerjakan di lokasi kantor kami atau diluar?',
        answer: 'Secara standar, proyek alih media dokumen vital dilakukan secara On-Site di ruang khusus kantor Anda untuk menjamin keamanan fisik arsip tidak pernah keluar dari gedung.'
      }
    ]
  },
  {
    id: 'keamanan-data-dan-integrasi',
    slug: 'keamanan-data-dan-integrasi',
    title: 'Keamanan Data & Integrasi Sistem',
    productFamily: 'Artavel Core',
    productName: 'Arsitektur Integrasi & Hardening Layanan',
    shortDescription: 'Hubungkan aplikasi yang terpisah, amankan pertukaran data, dan bangun tata kelola teknologi yang berkesinambungan.',
    heroDescription: 'Layanan konsultasi, arsitektur integrasi API, serta penguatan keamanan (*hardening*) yang memastikan ekosistem aplikasi di organisasi Anda saling terhubung dengan aman dan terukur.',
    iconName: 'ShieldAlert',
    accentColor: 'blue',
    targetAudience: [
      'Dinas Komunikasi dan Informatika (Diskominfo)',
      'Chief Technology Officer (CTO) & Tim IT BUMD',
      'Manajer Pengelola Infrastruktur & Cyber Security'
    ],
    problemsSolved: [
      'Aplikasi antar-bidang berdiri sendiri-sendiri (*siloed systems*) sehingga data harus di-input berulang.',
      'Kerentanan celah keamanan pada pertukaran data Web Service tanpa autentikasi ketat.',
      'Ketiadaan dokumentasi API yang jelas sehingga pengembang selanjutnya kesulitan melanjutkan sistem.',
      'Kekhawatiran kebocoran data sensitif akibat akses yang tidak terpantau.'
    ],
    keyOutcomes: [
      'Terwujudnya Satu Data Organisasi melalui pertukaran data terstandar (API Gateway).',
      'Peningkatan pertahanan keamanan aplikasi sesuai best-practice OWASP Top 10.',
      'Kemudahan monitoring performa antar-service dan log aktivitas lalu lintas data.',
      'Dokumentasi teknis arsitektur yang rapi dan mudah dirawat.'
    ],
    capabilities: [
      {
        id: 'cap-sec-1',
        title: 'Desain API Gateway Terpusat',
        description: 'Penyusunan pintu gerbang pertukaran data dengan autentikasi OAuth2 / API Key terenkripsi.'
      },
      {
        id: 'cap-sec-2',
        title: 'Audit Trail & Log Monitoring',
        description: 'Pencatatan real-time setiap request data untuk pencegahan dan investigasi anomali.'
      },
      {
        id: 'cap-sec-3',
        title: 'Penerapan Enkripsi Data Sensitif',
        description: 'Perlindungan variabel kunci, password, dan dokumen sensitif dengan algoritma enkripsi standar industri.'
      },
      {
        id: 'cap-sec-4',
        title: 'Konsultasi Perencanaan Disaster Recovery (DRP)',
        description: 'Penyusunan skenario pemulihan bencana sistem dan tata cara penggandaan cadangan (*backup strategy*).'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Audit Arsitektur Existing',
        description: 'Pemetaan celah keamanan, struktur database, dan titik integrasi aplikasi yang ada.',
        iconName: 'Search'
      },
      {
        stepNumber: 2,
        title: 'Perancangan Blueprint Integrasi',
        description: 'Penyusunan arsitektur bus data, spesifikasi API, dan pola enkripsi.',
        iconName: 'Cpu'
      },
      {
        stepNumber: 3,
        title: 'Implementasi & Testing Keamanan',
        description: 'Pengembangan middleware integrasi dan uji penetrasi (*vulnerability assessment*).',
        iconName: 'Lock'
      },
      {
        stepNumber: 4,
        title: 'Serah Terima Dokumentasi & Pelatihan',
        description: 'Penyampaian dokumentasi OpenAPI / Swagger dan pembekalan tim IT internal.',
        iconName: 'BookOpen'
      }
    ],
    deploymentOptions: [
      {
        id: 'hybrid',
        title: 'Hybrid Integration Gateway',
        subtitle: 'Menghubungkan On-Premise ke Cloud',
        description: 'Arsitektur jembatan aman yang memungkinkan aplikasi lokal di data center berhubungan dengan cloud API secara terenkripsi.',
        benefits: ['Pemisahan data sensitif di lokal', 'Fleksibilitas koneksi luar', 'Zero-trust network access']
      }
    ],
    integrations: [
      'SPLP (Sistem Penghubung Layanan Pemerintah) Kominfo',
      'Sertifikat Digital BSrE / BSSN',
      'Single Sign-On (SSO) SAML / Keycloak / Active Directory'
    ],
    securityFeatures: [
      'Proteksi dari serangan OWASP (SQL Injection, XSS, CSRF)',
      'Rate limiting per IP / API token untuk mencegah Denial of Service',
      'Penyimpanan rahasia menggunakan Secret Vault terdedikasi'
    ],
    faqs: [
      {
        id: 'faq-sec-1',
        question: 'Apakah Artavel dapat menjamin sistem 100% aman dari peretasan?',
        answer: 'Dalam prinsip keamanan siber profesional, tidak ada satu pun sistem yang dapat mengklaim keamanan 100% mutlak. Namun, kami menerapkan pertahanan berlapis (*defense-in-depth*), kepatuhan OWASP, serta strategi mitigasi risiko cepat untuk memperkecil celah dan mempercepat pemulihan.'
      }
    ]
  },
  {
    id: 'cctv-iot-dan-monitoring',
    slug: 'cctv-iot-dan-monitoring',
    title: 'CCTV, IoT & Monitoring Infrastruktur',
    productFamily: 'Artavel Core',
    productName: 'Perancangan Perangkat Terhubung & Monitoring Operasional',
    shortDescription: 'Rancang, pasang, dan integrasikan kamera pengawas, perangkat IoT, jaringan, serta dashboard monitoring untuk kebutuhan operasional organisasi.',
    heroDescription: 'Layanan integrasi CCTV, IoT, jaringan, dan monitoring yang membantu organisasi mengawasi area layanan, aset fisik, perangkat operasional, serta aktivitas lapangan secara lebih tertata.',
    iconName: 'Camera',
    accentColor: 'green',
    targetAudience: [
      'Gedung pelayanan publik, MPP, kantor pemerintahan, dan fasilitas BUMD',
      'Perusahaan yang membutuhkan pengawasan area operasional dan aset fisik',
      'Tim IT, General Affairs, Security, dan pengelola fasilitas',
      'Organisasi yang ingin menghubungkan perangkat lapangan ke dashboard monitoring'
    ],
    problemsSolved: [
      'CCTV dan perangkat monitoring belum terintegrasi dengan jaringan dan kebutuhan operasional.',
      'Rekaman, status perangkat, dan titik pantau sulit dikelola karena tersebar di banyak lokasi.',
      'Tim operasional tidak memiliki dashboard sederhana untuk melihat kondisi perangkat dan area prioritas.',
      'Perencanaan perangkat, kabel, jaringan, dan penyimpanan rekaman belum terdokumentasi rapi.'
    ],
    keyOutcomes: [
      'Pemetaan titik kamera dan perangkat IoT sesuai kebutuhan area operasional.',
      'Dashboard monitoring perangkat dan status jaringan yang lebih mudah dibaca tim teknis.',
      'Dokumentasi topologi perangkat, jaringan, penyimpanan, dan hak akses.',
      'Kesiapan integrasi data perangkat dengan aplikasi internal atau sistem pelaporan.'
    ],
    capabilities: [
      {
        id: 'cap-iot-1',
        title: 'Survey Titik Perangkat & Topologi Jaringan',
        description: 'Pemetaan area pemasangan, kebutuhan jaringan, jalur kabel, bandwidth, dan penyimpanan rekaman.'
      },
      {
        id: 'cap-iot-2',
        title: 'Instalasi CCTV & Perangkat IoT',
        description: 'Pemasangan perangkat pengawasan, sensor, gateway, dan perangkat pendukung sesuai kebutuhan lokasi.'
      },
      {
        id: 'cap-iot-3',
        title: 'Dashboard Monitoring Operasional',
        description: 'Tampilan ringkas untuk melihat status perangkat, konektivitas, area pantau, dan catatan gangguan.'
      },
      {
        id: 'cap-iot-4',
        title: 'Hardening Akses Perangkat',
        description: 'Pengaturan akun, segmentasi jaringan, enkripsi akses, dan prosedur pengelolaan perangkat.'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Survey Lokasi & Kebutuhan',
        description: 'Mengidentifikasi area pantau, kondisi jaringan, kebutuhan penyimpanan, dan risiko operasional.',
        iconName: 'Search'
      },
      {
        stepNumber: 2,
        title: 'Desain Topologi & Spesifikasi',
        description: 'Menyusun desain perangkat, jaringan, dashboard, dan kebutuhan keamanan akses.',
        iconName: 'Network'
      },
      {
        stepNumber: 3,
        title: 'Instalasi & Konfigurasi',
        description: 'Melakukan pemasangan perangkat, konfigurasi jaringan, dan pengujian konektivitas.',
        iconName: 'Camera'
      },
      {
        stepNumber: 4,
        title: 'Serah Terima & Pendampingan',
        description: 'Menyerahkan dokumentasi, pelatihan pengguna, dan prosedur pemantauan berkala.',
        iconName: 'Headphones'
      }
    ],
    deploymentOptions: [
      {
        id: 'on-premise',
        title: 'On-Premise Monitoring',
        subtitle: 'Perangkat dan rekaman berada di jaringan lokal',
        description: 'Cocok untuk organisasi yang membutuhkan kontrol penuh terhadap perangkat, rekaman, dan akses jaringan internal.',
        benefits: ['Kontrol penuh perangkat lokal', 'Akses internal lebih stabil', 'Topologi mudah diaudit']
      },
      {
        id: 'hybrid',
        title: 'Hybrid Monitoring Gateway',
        subtitle: 'Monitoring lokal dengan akses terbatas dari luar jaringan',
        description: 'Menghubungkan perangkat lokal ke akses monitoring terbatas melalui pengamanan jaringan yang disepakati.',
        benefits: ['Monitoring lintas lokasi', 'Akses tetap dibatasi', 'Siap integrasi dashboard']
      }
    ],
    integrations: [
      'NVR / DVR dan IP Camera',
      'Sensor IoT, gateway, dan perangkat jaringan',
      'Dashboard monitoring internal dan sistem pelaporan organisasi'
    ],
    securityFeatures: [
      'Segmentasi jaringan perangkat untuk membatasi akses tidak perlu',
      'Pengaturan akun dan hak akses administrator secara berlapis',
      'Dokumentasi topologi dan prosedur pemeliharaan perangkat'
    ],
    faqs: [
      {
        id: 'faq-iot-1',
        question: 'Apakah Artavel hanya memasang perangkat atau juga menyiapkan sistem monitoring?',
        answer: 'Artavel dapat membantu dari survey, desain topologi, instalasi perangkat, konfigurasi jaringan, hingga dashboard monitoring sesuai kebutuhan organisasi.'
      }
    ]
  },
  {
    id: 'website-ui-ux-dan-aplikasi-web',
    slug: 'website-ui-ux-dan-aplikasi-web',
    title: 'Website, UI/UX & Aplikasi Web',
    productFamily: 'Artavel Core',
    productName: 'Perancangan Antarmuka, Website Resmi & Dashboard Operasional',
    shortDescription: 'Bangun website perusahaan, portal layanan, dashboard internal, dan pengalaman pengguna yang rapi, cepat dipahami, dan mudah dikembangkan.',
    heroDescription: 'Layanan desain UI/UX, pengembangan website, dan aplikasi web yang membantu organisasi menampilkan profil, produk, layanan, data, dan proses kerja dengan tampilan formal serta terpercaya.',
    iconName: 'Globe2',
    accentColor: 'blue',
    targetAudience: [
      'Perusahaan dan instansi yang membutuhkan website resmi profesional',
      'Tim layanan publik yang membutuhkan portal informasi atau portal pemohon',
      'Organisasi yang ingin merapikan dashboard internal dan alur kerja digital',
      'UMKM, BUMD, dan lembaga yang membutuhkan identitas digital lebih kuat'
    ],
    problemsSolved: [
      'Website lama tidak lagi mencerminkan kredibilitas, cakupan layanan, dan kualitas perusahaan.',
      'Informasi produk dan layanan tersebar sehingga calon klien sulit memahami kapabilitas organisasi.',
      'Dashboard internal sulit digunakan karena alur, hierarki visual, dan tampilan data belum tertata.',
      'Pengembangan aplikasi web tidak memiliki panduan desain yang konsisten.'
    ],
    keyOutcomes: [
      'Website resmi dengan struktur informasi yang jelas dan tampilan brand yang konsisten.',
      'Desain UI/UX yang memudahkan pengguna memahami alur, status, dan tindakan penting.',
      'Komponen antarmuka yang reusable agar pengembangan berikutnya lebih rapi.',
      'Konten layanan dan produk tersusun benefit-first sesuai kebutuhan calon klien.'
    ],
    capabilities: [
      {
        id: 'cap-web-1',
        title: 'Information Architecture & UX Flow',
        description: 'Pemetaan struktur halaman, navigasi, alur pengguna, dan prioritas konten.'
      },
      {
        id: 'cap-web-2',
        title: 'UI Design System',
        description: 'Perancangan komponen, warna, tipografi, status interaksi, dan pola visual yang konsisten.'
      },
      {
        id: 'cap-web-3',
        title: 'Website Profil & Landing Layanan',
        description: 'Pembuatan halaman profil perusahaan, produk, solusi, artikel, kontak, dan halaman pendukung.'
      },
      {
        id: 'cap-web-4',
        title: 'Dashboard & Portal Operasional',
        description: 'Pengembangan dashboard internal, portal tracking, formulir digital, dan integrasi data.'
      }
    ],
    workflowSteps: [
      {
        stepNumber: 1,
        title: 'Audit Website & Kebutuhan Konten',
        description: 'Meninjau struktur lama, target audiens, pesan brand, dan prioritas halaman.',
        iconName: 'Search'
      },
      {
        stepNumber: 2,
        title: 'Wireframe & UI Direction',
        description: 'Menyusun layout, gaya visual, komponen, dan pengalaman interaksi utama.',
        iconName: 'Palette'
      },
      {
        stepNumber: 3,
        title: 'Development & Integrasi',
        description: 'Mengembangkan website atau aplikasi web dengan struktur komponen yang dapat dirawat.',
        iconName: 'Code2'
      },
      {
        stepNumber: 4,
        title: 'Testing, SEO & Serah Terima',
        description: 'Melakukan pengecekan aksesibilitas, performa, SEO teknis, dan dokumentasi penggunaan.',
        iconName: 'CheckCircle'
      }
    ],
    deploymentOptions: [
      {
        id: 'private-cloud',
        title: 'Managed Hosting / Private Cloud',
        subtitle: 'Hosting terkelola untuk website dan aplikasi web',
        description: 'Cocok untuk website profil, portal layanan, dan dashboard yang membutuhkan pengelolaan teknis berkala.',
        benefits: ['Pemeliharaan lebih sederhana', 'Skalabilitas lebih mudah', 'Siap integrasi domain dan SSL']
      },
      {
        id: 'on-premise',
        title: 'On-Premise Web Application',
        subtitle: 'Aplikasi web berjalan di server internal',
        description: 'Cocok untuk dashboard internal atau portal yang harus berada dalam jaringan organisasi.',
        benefits: ['Kontrol penuh data internal', 'Akses intranet', 'Integrasi database lokal']
      }
    ],
    integrations: [
      'CMS dan sistem konten internal',
      'API aplikasi eksisting dan database organisasi',
      'Analytics, formulir kontak, email, dan layanan notifikasi'
    ],
    securityFeatures: [
      'Validasi input dan sanitasi konten untuk formulir publik',
      'Konfigurasi HTTPS, header keamanan, dan proteksi akses admin',
      'Audit akses serta dokumentasi deployment untuk pemeliharaan'
    ],
    faqs: [
      {
        id: 'faq-web-1',
        question: 'Apakah Artavel dapat membuat ulang website lama tanpa menghilangkan identitas brand?',
        answer: 'Ya, proses redesign dapat mempertahankan identitas utama brand sambil memperbarui struktur informasi, visual, UI/UX, performa, dan kualitas konten.'
      }
    ]
  }
];
