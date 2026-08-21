import { InsightArticle } from '../types';
import { INSIGHT_EN_TRANSLATIONS } from './insightTranslations';

const featuredInsightIds = [
  'ai-dan-analytics-apa-bedanya',
  'smartmap-data-geospasial',
  'pos-modern-bukan-hanya-transaksi'
];

export const ALL_INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'perbedaan-scan-dokumen-dan-kearsipan-digital',
    slug: 'perbedaan-scan-dokumen-dan-kearsipan-digital',
    title: 'Mengapa Hasil Scan PDF Saja Belum Bisa Disebut Kearsipan Digital?',
    excerpt:
      'Memindai kertas menjadi file PDF adalah langkah awal. Tanpa klasifikasi, metadata, hak akses, dan retensi arsip, dokumen digital tetap sulit dikelola.',
    contentMarkdown: `
### Salah Kaprah Seputar Digitalisasi Dokumen

Banyak organisasi menganggap bahwa ketika seluruh berkas fisik sudah dipindai (*scan*) dan disimpan dalam folder komputer, proses digitalisasi kearsipan telah selesai. Padahal, memindai dokumen tanpa sistem manajemen arsip hanya memindahkan masalah dari ruang fisik ke ruang digital.

Dokumen memang sudah tidak lagi berada di lemari, tetapi pencarian, pengendalian akses, siklus retensi, dan pembuktian aktivitas tetap belum otomatis tertata. Dalam skala organisasi, masalah ini akan muncul ketika jumlah file terus bertambah dan banyak unit kerja membutuhkan akses ke dokumen yang sama.

---

### Tiga Komponen Utama Sistem Kearsipan Digital

1. **Kode Klasifikasi dan Metadata**
   - Setiap dokumen perlu dikaitkan dengan metadata seperti nomor surat, tanggal, perihal, pencipta arsip, tingkat kerahasiaan, dan kode klasifikasi.
   - Metadata membantu pencarian tidak bergantung pada nama file atau ingatan personal.

2. **Jadwal Retensi Arsip**
   - Arsip memiliki siklus hidup: aktif, inaktif, dipindahkan, dimusnahkan, atau diserahkan sebagai arsip statis.
   - Sistem yang baik membantu pengelola mengetahui kapan arsip perlu ditinjau sesuai aturan internal dan regulasi yang berlaku.

3. **Hak Akses dan Jejak Audit**
   - Tidak semua pegawai perlu melihat seluruh arsip organisasi.
   - Jejak audit membantu mencatat siapa yang membuka, mengunduh, mengubah, atau memindahkan dokumen.

### Dampak untuk Organisasi

Kearsipan digital yang tertata membuat pencarian dokumen lebih terkendali, mengurangi ketergantungan pada folder personal, dan membantu proses audit. Tim juga dapat membedakan dokumen aktif, dokumen rujukan, dan arsip yang perlu dikelola sesuai masa retensinya.

### Hubungan dengan Smarchlink Archive

Smarchlink Archive dirancang untuk membantu organisasi menata dokumen dan arsip secara lebih terstruktur. Produk ini relevan ketika organisasi ingin bergerak dari sekadar kumpulan file PDF menuju sistem kearsipan digital yang memiliki klasifikasi, hak akses, dan pengelolaan arsip yang lebih jelas.
    `,
    category: 'Digital Government',
    publishedAt: '2026-07-15',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Digital Government Specialist',
    relatedProductIds: ['smarchlink-archive'],
    relatedSolution: {
      label: 'Digital Government & Enterprise',
      path: '/solusi#digital-government-enterprise'
    },
    ctaLabel: 'Pelajari Smarchlink Archive',
    ctaPath: '/produk/smarchlink-archive',
    metadata: {
      title: 'Kearsipan Digital Bukan Sekadar Scan PDF | PT Artavel',
      description:
        'Pelajari perbedaan hasil scan PDF biasa dengan sistem kearsipan digital yang memiliki metadata, klasifikasi, retensi, hak akses, dan audit trail.'
    }
  },
  {
    id: 'mengapa-audit-trail-penting-dalam-tnde',
    slug: 'mengapa-audit-trail-penting-dalam-tnde',
    title: 'Pentingnya Jejak Audit pada Sistem Tata Naskah Dinas Elektronik',
    excerpt:
      'Dalam tata kelola surat dinas, kepastian siapa yang membuat, memeriksa, menyetujui, dan mengirimkan naskah adalah bagian penting dari akuntabilitas organisasi.',
    contentMarkdown: `
### Apa Itu Audit Trail dalam TNDE?

Audit trail adalah catatan kronologis yang merekam aktivitas pengguna di dalam aplikasi. Dalam konteks **Tata Naskah Dinas Elektronik (TNDE)**, audit trail membantu mencatat proses pembuatan konsep, paraf, disposisi, persetujuan, penomoran, hingga pengiriman naskah.

Tanpa jejak audit, organisasi sering kesulitan menjawab pertanyaan sederhana: siapa yang mengubah draft terakhir, kapan disposisi diteruskan, atau unit mana yang belum menindaklanjuti arahan pimpinan.

---

### Mengapa Ini Penting?

1. **Akuntabilitas Alur Persetujuan**
   - Setiap tahapan surat dapat ditelusuri berdasarkan peran dan waktu.
   - Pimpinan dan admin dapat melihat status naskah tanpa mencari informasi secara manual.

2. **Mengurangi Risiko Penomoran dan Versi Ganda**
   - Sistem membantu mengelola nomor, versi, dan status dokumen secara lebih tertib.
   - Tim tidak perlu bergantung pada file lokal yang mudah tertukar.

3. **Monitoring Disposisi**
   - Disposisi dapat dipantau mulai dari penerima, status baca, sampai tindak lanjut.
   - Organisasi memiliki gambaran lebih jelas terhadap beban kerja dan respons unit.

### Kapan TNDE Menjadi Kebutuhan Mendesak?

TNDE menjadi relevan ketika volume surat meningkat, alur persetujuan melibatkan banyak peran, atau organisasi perlu memastikan tata naskah berjalan sesuai kebijakan internal. Sistem ini membantu mengurangi proses manual tanpa menghilangkan kontrol pimpinan.

### Hubungan dengan Produk Artavel

TNDE Artavel berfokus pada digitalisasi tata naskah dinas, disposisi, penomoran, templat surat, dan tanda tangan elektronik sesuai kebutuhan organisasi. Jejak audit menjadi salah satu fondasi agar alur tersebut dapat dipantau dan dipertanggungjawabkan.
    `,
    category: 'Digital Government',
    publishedAt: '2026-06-28',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Governance & Workflow Specialist',
    relatedProductIds: ['tnde'],
    relatedSolution: {
      label: 'Digital Government & Enterprise',
      path: '/solusi#digital-government-enterprise'
    },
    ctaLabel: 'Pelajari TNDE',
    ctaPath: '/produk/tnde',
    metadata: {
      title: 'Audit Trail pada TNDE | PT Artavel',
      description:
        'Mengapa audit trail penting dalam sistem tata naskah dinas elektronik untuk akuntabilitas, monitoring disposisi, dan pengendalian dokumen.'
    }
  },
  {
    id: 'perbedaan-cloud-vs-on-premise-layanan-pemerintah',
    slug: 'perbedaan-cloud-vs-on-premise-layanan-pemerintah',
    title: 'On-Premise vs Cloud: Memilih Arsitektur Deployment yang Tepat untuk Instansi',
    excerpt:
      'Setiap pilihan infrastruktur memiliki konsekuensi. Pertimbangkan regulasi, kontrol data, akses pengguna, anggaran, dan kemampuan tim IT sebelum memutuskan.',
    contentMarkdown: `
### Pertanyaan yang Perlu Dijawab Sejak Awal

Ketika organisasi ingin menerapkan sistem digital, pertanyaan deployment sering muncul lebih awal: apakah aplikasi sebaiknya berjalan di server lokal atau di lingkungan cloud? Jawabannya tidak selalu sama untuk setiap instansi.

Pilihan yang tepat bergantung pada regulasi, tingkat sensitivitas data, kesiapan infrastruktur, pola akses pengguna, serta kemampuan tim internal dalam mengelola server dan backup.

---

### Model On-Premise

On-premise berarti aplikasi berjalan pada server yang dikelola di lingkungan organisasi atau data center yang ditentukan. Model ini cocok ketika organisasi membutuhkan kontrol langsung terhadap infrastruktur, jaringan internal, atau kebijakan penyimpanan data tertentu.

Namun, model ini juga membutuhkan kesiapan perangkat, listrik, pendingin, backup, keamanan jaringan, dan SDM teknis. Tanpa tata kelola yang baik, server lokal dapat menjadi titik risiko baru.

### Model Private Cloud

Private cloud membantu organisasi mengurangi kebutuhan pengadaan perangkat awal dan membuat akses pengguna lebih fleksibel. Model ini relevan ketika pengguna perlu mengakses aplikasi dari berbagai lokasi dengan tata kelola keamanan yang jelas.

Yang perlu diperhatikan adalah kualitas koneksi internet, kebijakan akses, model backup, dan kontrak layanan dengan penyedia infrastruktur.

### Hybrid sebagai Jalan Tengah

Sebagian organisasi memilih pendekatan hybrid. Misalnya, aplikasi utama berjalan pada server tertentu, sementara backup, replika, atau layanan pendukung menggunakan cloud. Pendekatan ini memungkinkan kontrol data tetap dijaga, sambil tetap memperoleh fleksibilitas akses.

### Prinsip Memilih Deployment

Pilihan deployment sebaiknya tidak hanya berdasarkan tren. Keputusan perlu didasarkan pada kebutuhan operasional, regulasi, risiko, dan kemampuan pemeliharaan jangka panjang. Sistem yang baik harus dapat dijalankan secara stabil, diawasi, dan dikembangkan sesuai kebutuhan organisasi.
    `,
    category: 'Teknologi & Transformasi Digital',
    publishedAt: '2026-05-10',
    readTimeMinutes: 6,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'System & Infrastructure Specialist',
    relatedProductIds: ['smarchlink-sippadu', 'smarchlink-archive'],
    relatedSolution: {
      label: 'Digital Government & Enterprise',
      path: '/solusi#digital-government-enterprise'
    },
    ctaLabel: 'Konsultasikan Arsitektur Sistem',
    ctaPath: '/kontak',
    metadata: {
      title: 'On-Premise vs Cloud untuk Sistem Digital | PT Artavel',
      description:
        'Panduan memilih deployment on-premise, private cloud, atau hybrid berdasarkan regulasi, kontrol data, akses pengguna, dan kemampuan operasional.'
    }
  },
  {
    id: 'ai-dan-analytics-apa-bedanya',
    slug: 'ai-dan-analytics-apa-bedanya-dalam-sistem-digital',
    title: 'AI dan Analytics: Apa Bedanya dalam Sistem Digital?',
    excerpt:
      'AI dan analytics sering disebut bersamaan, tetapi keduanya memiliki fungsi berbeda. Memahami bedanya membantu organisasi memilih solusi yang tepat.',
    contentMarkdown: `
### Mengapa Istilah Ini Sering Tercampur?

Banyak organisasi ingin mulai menggunakan AI, tetapi belum selalu jelas kebutuhan yang ingin diselesaikan. Di sisi lain, sebagian kebutuhan sebenarnya cukup dijawab dengan analytics, dashboard, atau visualisasi data yang rapi.

Membedakan AI dan analytics penting agar investasi teknologi tetap realistis. Tidak semua dashboard adalah AI, dan tidak semua sistem digital harus memakai AI untuk memberikan manfaat.

### Analytics Membantu Membaca Data

Analytics berfokus pada pengumpulan, pengolahan, dan penyajian data agar keputusan lebih mudah diambil. Contohnya adalah dashboard jumlah pengunjung, grafik penjualan, laporan performa cabang, peta potensi wilayah, atau ringkasan kehadiran siswa.

Analytics menjawab pertanyaan seperti:

- Apa yang terjadi?
- Di mana lokasinya?
- Kapan polanya muncul?
- Bagian mana yang perlu diperhatikan?

### AI Membantu Mengenali Pola atau Membuat Bantuan Cerdas

AI digunakan ketika sistem perlu mengenali pola, mengklasifikasikan objek, atau membantu membuat draft tertentu. Contohnya adalah computer vision untuk mendeteksi kendaraan, people counting, atau fitur bantuan penyusunan draf soal pada sistem sekolah.

AI tetap perlu dibatasi sesuai konteks. Pada pendidikan, misalnya, AI dapat membantu guru menyusun variasi draf soal, tetapi guru tetap melakukan review dan mengambil keputusan akhir.

### Cara Memilih yang Tepat

Mulailah dari masalah bisnis. Jika masalahnya adalah data tersebar dan sulit dibaca, analytics bisa menjadi langkah awal. Jika masalahnya membutuhkan deteksi visual, klasifikasi pola, atau bantuan generatif terbatas, AI bisa menjadi bagian dari solusi.

### Hubungan dengan Solusi Artavel

Artavel menempatkan AI dan analytics sebagai kapabilitas lintas solusi. SmartMap, FootfallCam, AI CCTV, otoPOS analytics, dan dashboard sekolah berada pada spektrum kebutuhan yang berbeda, tetapi semuanya diarahkan agar organisasi dapat membaca kondisi lapangan dengan lebih jelas.
    `,
    category: 'AI, Analytics & Monitoring',
    publishedAt: '2026-08-21',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Technology Solution Specialist',
    relatedProductIds: ['smartmap-gis-analytics', 'ai-cctv-computer-vision', 'footfallcam'],
    relatedSolution: {
      label: 'AI, Analytics & Smart Monitoring',
      path: '/solusi#ai-analytics-smart-monitoring'
    },
    ctaLabel: 'Jelajahi AI & Analytics',
    ctaPath: '/solusi#ai-analytics-smart-monitoring',
    metadata: {
      title: 'AI dan Analytics: Apa Bedanya? | PT Artavel',
      description:
        'Penjelasan praktis perbedaan AI dan analytics dalam sistem digital, dashboard, computer vision, SmartMap, FootfallCam, dan solusi operasional.'
    }
  },
  {
    id: 'people-counting-untuk-pengambilan-keputusan',
    slug: 'people-counting-untuk-pengambilan-keputusan',
    title: 'People Counting: Mengapa Jumlah Pengunjung Penting untuk Pengambilan Keputusan?',
    excerpt:
      'Data jumlah pengunjung membantu pengelola memahami kepadatan, durasi kunjungan, pola area, dan efektivitas operasional secara lebih objektif.',
    contentMarkdown: `
### Data Pengunjung Bukan Sekadar Angka Masuk

Jumlah pengunjung sering terlihat sederhana, tetapi bagi pengelola ruang publik, retail, mall, museum, perpustakaan, atau area komersial, data ini dapat menjadi dasar pengambilan keputusan yang penting.

Tanpa data yang konsisten, pengelola cenderung mengandalkan perkiraan visual. Perkiraan tersebut sulit dibandingkan antarhari, antarzona, atau antarperiode.

### Apa yang Dapat Dipahami dari People Counting?

People counting membantu membaca pola kunjungan seperti jumlah visitor, durasi kunjungan, returning visitor, outside traffic, zone analytics, dan pola pergerakan antararea. Pada konteks bisnis, data ini dapat dikaitkan dengan operasional toko, performa area, atau kebutuhan penempatan staf.

Untuk ruang publik, data kunjungan dapat membantu memahami waktu ramai, kebutuhan pengaturan antrean, atau evaluasi penggunaan fasilitas.

### Analytics Membantu Membaca Pola

Data people counting menjadi lebih bermanfaat ketika ditampilkan sebagai analytics. Pengelola tidak hanya melihat angka harian, tetapi juga pola tren, area yang paling aktif, perbandingan periode, dan insight yang dapat digunakan untuk perencanaan.

Contoh keputusan yang terbantu:

- Menyesuaikan jadwal staf pada jam ramai.
- Mengevaluasi efektivitas layout area.
- Membaca tren kunjungan antarperiode.
- Mengukur dampak program atau event terhadap trafik.

### Posisi FootfallCam

FootfallCam dapat diposisikan sebagai partner technology untuk kebutuhan people counting dan visitor analytics. Kapabilitas seperti visitor count, visit duration, returning visitor, zone analytics, business intelligence analytics, predictive analytics, centralised counter management, dan API integration dapat digunakan sesuai kebutuhan implementasi.

### Kapan Organisasi Perlu Memulai?

People counting relevan ketika pengelola membutuhkan data pengunjung yang lebih konsisten daripada observasi manual. Langkah awalnya adalah menentukan area yang ingin dipantau, tujuan bisnis atau operasionalnya, dan jenis laporan yang benar-benar dibutuhkan.
    `,
    category: 'AI, Analytics & Monitoring',
    publishedAt: '2026-08-21',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Analytics Solution Specialist',
    relatedProductIds: ['footfallcam'],
    relatedSolution: {
      label: 'AI, Analytics & Smart Monitoring',
      path: '/solusi#ai-analytics-smart-monitoring'
    },
    ctaLabel: 'Pelajari FootfallCam',
    ctaPath: '/produk/footfallcam',
    metadata: {
      title: 'People Counting untuk Pengambilan Keputusan | PT Artavel',
      description:
        'Mengapa visitor count, visit duration, zone analytics, dan business intelligence analytics penting bagi retail, mall, public space, museum, dan library.'
    }
  },
  {
    id: 'smartmap-data-geospasial',
    slug: 'smartmap-data-geospasial-lebih-mudah-dipahami',
    title: 'SmartMap: Mengapa Data Lebih Mudah Dipahami Ketika Ditampilkan Secara Geospasial?',
    excerpt:
      'Data lokasi sering sulit dipahami dalam tabel. Visualisasi geospasial membantu organisasi membaca area, objek, potensi, dan aktivitas lapangan secara lebih cepat.',
    contentMarkdown: `
### Tidak Semua Data Cocok Dibaca sebagai Tabel

Banyak data organisasi sebenarnya memiliki konteks lokasi. Objek pajak, aset, titik pekerjaan lapangan, area layanan, potensi wilayah, dan sebaran fasilitas akan lebih mudah dipahami jika divisualisasikan pada peta.

Ketika data berbasis lokasi hanya disimpan dalam tabel, pengguna perlu membayangkan hubungan antarwilayah secara manual. Ini membuat analisis menjadi lambat, terutama ketika keputusan membutuhkan konteks area.

### Apa yang Dimaksud SmartMap?

SmartMap adalah cara public-facing untuk menjelaskan kapabilitas peta digital, GIS, WebGIS, VirtualMAP, JobMAP, dan location analytics. Istilah ini membantu visitor memahami bahwa peta bukan hanya tampilan lokasi, tetapi alat untuk membaca data.

Dalam implementasi, nama produk atau modul resmi seperti VirtualMAP dan JobMAP tetap perlu dipertahankan. SmartMap digunakan sebagai payung komunikasi agar manfaatnya lebih mudah dipahami.

### Contoh Kebutuhan yang Terbantu

- Melihat objek dan statusnya berdasarkan wilayah.
- Membaca peta potensi atau sebaran area layanan.
- Memantau pekerjaan lapangan berdasarkan titik lokasi.
- Menghubungkan data PBB atau objek wilayah dengan visual peta.
- Melihat informasi detail objek tanpa membuka banyak tabel terpisah.

### Analytics Berbasis Lokasi

Location analytics membantu organisasi memahami data berdasarkan ruang. Perbedaan lokasi, kepadatan objek, prioritas area, dan perubahan status dapat terlihat lebih jelas ketika divisualisasikan pada map.

Namun, penting untuk tidak menyebut semua mapping sebagai AI. Jika sistem hanya melakukan visualisasi dan analisis geospasial, istilah yang lebih akurat adalah GIS analytics atau location analytics.

### Hubungan dengan Solusi Artavel

SmartMap & GIS Analytics Artavel menghubungkan kebutuhan peta digital dengan produk atau modul seperti WebGIS, VirtualMAP, JobMAP, PBB online berbasis map, peta potensi, dan monitoring berbasis lokasi. Fokusnya adalah membantu organisasi membaca data wilayah secara lebih terukur.
    `,
    category: 'AI, Analytics & Monitoring',
    publishedAt: '2026-08-21',
    readTimeMinutes: 6,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'GIS & Analytics Specialist',
    relatedProductIds: ['smartmap-gis-analytics'],
    relatedSolution: {
      label: 'AI, Analytics & Smart Monitoring',
      path: '/solusi#ai-analytics-smart-monitoring'
    },
    ctaLabel: 'Pelajari SmartMap & GIS Analytics',
    ctaPath: '/produk/smartmap-gis-analytics',
    metadata: {
      title: 'SmartMap dan Data Geospasial | PT Artavel',
      description:
        'Mengapa GIS, WebGIS, VirtualMAP, JobMAP, peta potensi, dan location analytics membantu organisasi memahami data berbasis lokasi.'
    }
  },
  {
    id: 'data-sekolah-terintegrasi',
    slug: 'data-akademik-dan-administrasi-sekolah-terintegrasi',
    title: 'Mengapa Data Akademik dan Administrasi Sekolah Sebaiknya Terintegrasi?',
    excerpt:
      'Sekolah membutuhkan data yang konsisten untuk akademik, administrasi, keuangan, komunikasi, dan monitoring. Integrasi membantu mengurangi kerja ganda.',
    contentMarkdown: `
### Masalah Umum di Lingkungan Sekolah

Sekolah sering memiliki banyak data yang berjalan terpisah: data siswa, jadwal, nilai, absensi, keuangan, informasi orang tua, dan dokumen administrasi. Ketika data tersebut dikelola pada spreadsheet atau aplikasi berbeda, sinkronisasi menjadi pekerjaan rutin yang memakan waktu.

Masalah biasanya tidak muncul ketika jumlah data masih kecil. Namun, ketika sekolah memiliki banyak kelas, jenjang, atau unit, perubahan data satu siswa dapat berdampak pada banyak proses.

### Apa Manfaat Data Terintegrasi?

Data terintegrasi membantu sekolah mengurangi input berulang dan memperjelas sumber data utama. Ketika data siswa, guru, kelas, tagihan, kehadiran, dan aktivitas belajar saling terhubung, proses administrasi menjadi lebih mudah dipantau.

Manfaat yang dapat dirasakan:

- Admin tidak perlu mengulang input pada banyak tempat.
- Guru dapat mengakses informasi kelas dan siswa dengan lebih rapi.
- Orang tua memperoleh informasi sekolah melalui kanal yang lebih jelas.
- Pimpinan sekolah dapat membaca ringkasan operasional dari dashboard.

### Peran Portal Berbasis Peran

Sistem sekolah yang baik tidak hanya menyediakan satu dashboard untuk semua orang. Admin, yayasan, guru, siswa, dan orang tua memiliki kebutuhan berbeda. Karena itu, portal berbasis peran membantu setiap pengguna melihat informasi yang relevan dengan tanggung jawabnya.

### Hubungan dengan otoSchool

otoSchool diposisikan sebagai sistem manajemen sekolah terpadu. Modul seperti website sekolah, PPDB online, portal admin/yayasan, portal guru, portal siswa, portal orang tua, pembelajaran digital, raport, kehadiran, kalender akademik, keuangan, tagihan, e-wallet, multi-jenjang, multi-role, dan Progressive Web App berada dalam satu ekosistem.

### Mulai dari Proses Paling Prioritas

Sekolah tidak harus mendigitalisasi semuanya sekaligus. Pemetaan awal dapat dimulai dari proses paling sering menyita waktu, seperti PPDB, administrasi siswa, absensi, komunikasi orang tua, atau pelaporan akademik.
    `,
    category: 'Pendidikan Digital',
    publishedAt: '2026-08-21',
    readTimeMinutes: 6,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Education Solution Specialist',
    relatedProductIds: ['otoschool'],
    relatedSolution: {
      label: 'Smart Education',
      path: '/solusi#smart-education'
    },
    ctaLabel: 'Pelajari otoSchool',
    ctaPath: '/produk/otoschool',
    metadata: {
      title: 'Integrasi Data Akademik dan Administrasi Sekolah | PT Artavel',
      description:
        'Mengapa sekolah perlu menghubungkan data akademik, administrasi, keuangan, komunikasi, dan dashboard melalui sistem terpadu seperti otoSchool.'
    }
  },
  {
    id: 'ai-untuk-guru-draf-soal',
    slug: 'ai-untuk-guru-menyusun-draf-soal',
    title: 'AI untuk Guru: Membantu Menyusun Soal Tanpa Menggantikan Peran Guru',
    excerpt:
      'AI dapat membantu guru menyusun variasi draf soal, tetapi kualitas, konteks, dan keputusan akhir tetap berada pada guru.',
    contentMarkdown: `
### AI Sebagai Alat Bantu, Bukan Pengganti Guru

Di lingkungan pendidikan, AI sebaiknya diposisikan sebagai alat bantu. Tujuannya bukan menggantikan guru, melainkan membantu pekerjaan yang berulang atau membutuhkan variasi awal, seperti menyusun draf soal berdasarkan topik tertentu.

Guru tetap memegang peran utama dalam menentukan kesesuaian materi, tingkat kesulitan, konteks kelas, dan standar penilaian.

### Bagaimana AI Membantu Penyusunan Draf Soal?

Dalam konteks otoSchool, AI dapat membantu menyusun variasi draf soal berdasarkan topik yang dimasukkan guru. Draf tersebut kemudian ditinjau, diedit, dan disetujui oleh guru sebelum digunakan.

Alur yang sehat adalah:

1. Guru menentukan topik dan konteks pembelajaran.
2. AI membantu membuat variasi draf soal.
3. Guru meninjau bahasa, jawaban, tingkat kesulitan, dan kesesuaian kurikulum.
4. Guru memutuskan soal mana yang layak dipakai.

### Mengapa Review Guru Tetap Penting?

AI tidak memahami karakter kelas secara utuh. Guru mengetahui kemampuan siswa, tujuan pembelajaran, dan konteks sekolah. Karena itu, hasil bantuan AI perlu diperlakukan sebagai draf, bukan keputusan final.

Review guru juga penting untuk menghindari soal yang ambigu, tidak sesuai materi, atau terlalu mudah/sulit untuk tujuan evaluasi tertentu.

### Hubungan dengan SmartExam dan Bank Soal

AI penyusunan draf soal menjadi lebih bermanfaat ketika terhubung dengan SmartExam dan bank soal. Guru dapat mengelola soal, menyiapkan ujian, meninjau hasil, dan melakukan evaluasi dengan alur yang lebih rapi.

### Prinsip Penggunaan yang Bertanggung Jawab

Gunakan AI untuk mempercepat tahap awal, tetapi tetap jadikan guru sebagai pengendali kualitas. Dengan posisi seperti ini, AI membantu produktivitas tanpa mengurangi peran profesional pendidik.
    `,
    category: 'Pendidikan Digital',
    publishedAt: '2026-08-21',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Education Technology Specialist',
    relatedProductIds: ['otoschool'],
    relatedSolution: {
      label: 'Smart Education',
      path: '/solusi#smart-education'
    },
    ctaLabel: 'Pelajari Modul otoSchool',
    ctaPath: '/produk/otoschool#modul-produk',
    metadata: {
      title: 'AI untuk Guru dalam Penyusunan Draf Soal | PT Artavel',
      description:
        'Cara memposisikan AI sebagai alat bantu guru untuk menyusun draf soal, tetap dengan review dan persetujuan guru sebelum digunakan.'
    }
  },
  {
    id: 'pos-modern-bukan-hanya-transaksi',
    slug: 'pos-modern-tidak-cukup-mencatat-transaksi',
    title: 'Mengapa POS Modern Tidak Cukup Hanya Mencatat Transaksi?',
    excerpt:
      'Bisnis F&B membutuhkan POS yang terhubung dengan inventory, karyawan, loyalty, keuangan, aset, dan dashboard performa.',
    contentMarkdown: `
### Kasir Hanya Satu Bagian dari Operasional F&B

Pada tahap awal, sistem kasir sering dipahami sebagai alat untuk mencatat penjualan. Namun, pada bisnis F&B yang berkembang, transaksi hanya satu bagian dari operasi harian.

Owner dan manager perlu memahami item apa yang terjual, siapa yang melayani, stok mana yang berkurang, cabang mana yang ramai, serta bagaimana performa shift dan operasional outlet berjalan.

### Data Penjualan Perlu Terhubung dengan Operasional

Jika kasir berdiri sendiri, data penjualan akan terpisah dari inventory, keuangan, dan data karyawan. Akibatnya, banyak rekap masih dilakukan secara manual. Situasi ini menyulitkan ketika bisnis mulai memiliki banyak cabang atau banyak peran operasional.

POS modern sebaiknya membantu membaca:

- Penjualan dine-in, take-away, dan delivery.
- Pembayaran, meja, modifier produk, dan tiket dapur.
- Performa kasir dan cabang.
- Stok per cabang dan bahan baku yang digunakan.
- Ringkasan keuangan dan biaya operasional.

### Workforce dan Sales Analytics

Dalam konteks F&B, data karyawan dapat memberi konteks tambahan terhadap data penjualan. Bukan hanya berapa yang terjual, tetapi siapa yang menjual, kapan shift berjalan, dan bagaimana ketepatan waktu atau jam kerja aktual memengaruhi operasi.

Istilah yang tepat untuk kebutuhan ini adalah operational analytics atau workforce analytics. Jika belum ada capability AI yang terverifikasi, tidak perlu menyebutnya AI.

### Hubungan dengan otoPOS F&B

otoPOS F&B menggabungkan kasir dan penjualan dengan modul karyawan dan absensi cerdas, loyalty member, inventori cerdas, keuangan, perawatan aset, serta dashboard performa. Fokusnya bukan hanya pencatatan transaksi, tetapi pengelolaan operasional F&B yang lebih menyatu.
    `,
    category: 'Retail & F&B',
    publishedAt: '2026-08-21',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Retail & F&B Solution Specialist',
    relatedProductIds: ['otopos-fnb'],
    relatedSolution: {
      label: 'Retail & F&B',
      path: '/solusi#retail-fnb'
    },
    ctaLabel: 'Pelajari otoPOS F&B',
    ctaPath: '/produk/otopos-fnb',
    metadata: {
      title: 'POS Modern Bukan Hanya Pencatat Transaksi | PT Artavel',
      description:
        'Mengapa bisnis F&B membutuhkan POS yang terhubung dengan inventory, workforce analytics, loyalty, keuangan, aset, dan dashboard performa.'
    }
  },
  {
    id: 'inventory-fnb-berbasis-resep',
    slug: 'inventory-fnb-berbasis-resep',
    title: 'Inventory F&B Berbasis Resep: Mengapa Lebih Kompleks dari Stok Produk Biasa?',
    excerpt:
      'Inventory F&B tidak hanya menghitung produk jadi. Bahan baku, resep, modifier, cabang, dan pemakaian harian perlu dikelola bersama.',
    contentMarkdown: `
### Stok F&B Tidak Sesederhana Stok Barang Jadi

Pada retail umum, stok sering dihitung berdasarkan item produk. Dalam F&B, satu menu dapat terdiri dari banyak bahan baku, satu bahan baku dapat dipakai di banyak menu, dan modifier dapat memengaruhi komposisi penjualan.

Karena itu, mencatat stok akhir saja tidak cukup. Bisnis perlu memahami hubungan antara transaksi, resep, pemakaian bahan, dan stok per cabang.

### Mengapa Resep Menjadi Penting?

Resep membantu sistem memahami bahan apa yang berkurang ketika menu terjual. Tanpa struktur resep, pengelola harus menghitung bahan baku secara manual. Ini rentan terlambat, terutama ketika transaksi ramai atau outlet tersebar di beberapa cabang.

Inventory berbasis resep membantu membaca:

- Stok bahan baku per cabang.
- Pemakaian bahan berdasarkan transaksi.
- Pengaruh modifier terhadap komposisi menu.
- Kebutuhan restock berdasarkan operasional.
- Perbedaan stok unit, bahan baku, dan produk jual.

### Tantangan Multi-Cabang

Pada bisnis multi-cabang, setiap outlet memiliki kondisi stok, penjualan, dan jadwal operasional yang berbeda. Tanpa sistem terpusat, owner sulit membandingkan performa antaroutlet dan mengidentifikasi kebutuhan stok secara cepat.

### Hubungan dengan otoPOS F&B

otoPOS F&B memiliki modul inventori cerdas yang mendukung pengelolaan stok berbasis unit, bahan baku, resep, modifier, dan stok per cabang. Data inventory dapat terhubung dengan transaksi, sehingga operasional tidak hanya dilihat dari omzet, tetapi juga dari kesiapan bahan dan efisiensi outlet.

### Mulai dari Menu Paling Aktif

Implementasi inventory berbasis resep sebaiknya dimulai dari menu yang paling sering terjual atau paling sensitif terhadap biaya bahan. Dari sana, bisnis dapat memperluas struktur resep secara bertahap.
    `,
    category: 'Retail & F&B',
    publishedAt: '2026-08-21',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Retail & F&B Solution Specialist',
    relatedProductIds: ['otopos-fnb'],
    relatedSolution: {
      label: 'Retail & F&B',
      path: '/solusi#retail-fnb'
    },
    ctaLabel: 'Pelajari Inventory otoPOS',
    ctaPath: '/produk/otopos-fnb#modul-produk',
    metadata: {
      title: 'Inventory F&B Berbasis Resep | PT Artavel',
      description:
        'Mengapa inventory F&B perlu mengelola bahan baku, resep, modifier, stok per cabang, dan keterhubungan dengan transaksi POS.'
    }
  },
  {
    id: 'security-awareness-training',
    slug: 'security-awareness-training-manusia-dalam-cybersecurity',
    title: 'Security Awareness Training: Mengapa Manusia Tetap Menjadi Bagian Penting dari Cybersecurity?',
    excerpt:
      'Perlindungan endpoint dan email tidak cukup tanpa kesiapan pengguna. Pelatihan awareness membantu organisasi mengurangi risiko dari perilaku sehari-hari.',
    contentMarkdown: `
### Teknologi Keamanan Tetap Membutuhkan Pengguna yang Siap

Cybersecurity tidak hanya berbicara tentang perangkat, endpoint, atau sistem deteksi. Banyak insiden berawal dari aktivitas pengguna: membuka tautan yang mencurigakan, mengunduh lampiran, membagikan kredensial, atau mengabaikan prosedur keamanan.

Karena itu, security awareness training menjadi bagian penting dari program keamanan organisasi.

### Apa yang Dilatih?

Security awareness training membantu karyawan memahami risiko siber dalam pekerjaan harian. Materinya dapat mencakup pengenalan phishing, praktik kata sandi, keamanan email, kewaspadaan terhadap tautan, dan kebiasaan melaporkan aktivitas mencurigakan.

Dalam pendekatan modern, pelatihan tidak harus berupa sesi panjang. Microlearning, simulasi phishing, automated training, dan reporting membantu organisasi menjalankan program awareness secara lebih terukur.

### Phishing Simulation sebagai Latihan Aman

Simulasi phishing membantu organisasi menguji kesiapan pengguna tanpa menunggu serangan nyata. Tujuannya bukan menyalahkan karyawan, tetapi memahami area yang perlu diperbaiki dan memberikan pembelajaran yang relevan.

Hasil simulasi dapat digunakan untuk menyusun pelatihan lanjutan, melihat tren risiko, dan memperkuat kebijakan internal.

### Hubungan dengan OpenText Cybersecurity

OpenText Cybersecurity menyediakan solusi security awareness training yang mencakup topik seperti phishing simulation, microlearning, automated training, reporting, dan employee security awareness. Dalam konteks Artavel, OpenText diposisikan sebagai partner technology, bukan produk buatan Artavel.

Referensi resmi dapat dilihat pada [halaman OpenText Security Awareness Training](https://cybersecurity.opentext.com/products/email-security/security-awareness-training/).

### Posisi dalam Strategi Keamanan

Security awareness training sebaiknya dipadukan dengan endpoint security, EDR, kebijakan akses, dan monitoring. Dengan begitu, organisasi tidak hanya melindungi perangkat, tetapi juga membangun kebiasaan pengguna yang lebih aman.
    `,
    category: 'Cyber Security',
    publishedAt: '2026-08-21',
    readTimeMinutes: 5,
    authorName: 'Tim Cybersecurity Artavel',
    authorRole: 'Cybersecurity Solution Specialist',
    relatedProductIds: ['opentext-cybersecurity'],
    relatedSolution: {
      label: 'Cyber Security',
      path: '/solusi/cyber-security'
    },
    ctaLabel: 'Pelajari OpenText Cybersecurity',
    ctaPath: '/produk/opentext-cybersecurity',
    metadata: {
      title: 'Security Awareness Training dan Peran Manusia | PT Artavel',
      description:
        'Mengapa security awareness training, phishing simulation, microlearning, automated training, dan reporting penting dalam program cybersecurity organisasi.'
    }
  },
  {
    id: 'tracking-status-pelayanan-publik',
    slug: 'tracking-status-pelayanan-publik-digital',
    title: 'Mengapa Tracking Status Penting dalam Pelayanan Publik Digital?',
    excerpt:
      'Tracking status membantu masyarakat memahami posisi permohonan, sementara petugas dapat memantau alur layanan secara lebih tertib.',
    contentMarkdown: `
### Ketidakpastian Status Sering Menjadi Masalah Layanan

Dalam pelayanan publik, masyarakat tidak hanya membutuhkan layanan selesai. Mereka juga membutuhkan kepastian alur: berkas sudah diterima atau belum, sedang diverifikasi oleh siapa, kapan perlu melengkapi dokumen, dan apakah proses sudah dapat dilanjutkan.

Tanpa tracking status, pertanyaan tersebut sering kembali ke loket atau petugas. Akibatnya, beban komunikasi meningkat dan masyarakat merasa proses tidak transparan.

### Tracking Membantu Dua Sisi

Bagi masyarakat, tracking memberikan informasi yang lebih jelas tentang posisi permohonan. Bagi petugas, tracking membantu melihat tahapan yang sedang berjalan, unit yang menangani, dan potensi hambatan dalam proses.

Tracking status dapat digunakan untuk:

- Melihat posisi berkas atau nomor layanan.
- Mengurangi pertanyaan berulang ke loket.
- Membantu petugas memprioritaskan tindak lanjut.
- Memberikan transparansi alur layanan.
- Menjadi dasar evaluasi waktu proses.

### Hubungan dengan Sistem Antrean

Pada ruang layanan fisik, tracking juga berkaitan dengan antrean. Masyarakat perlu tahu nomor antrean, loket tujuan, status panggilan, dan estimasi proses berikutnya. Ketika antrean dan tracking terhubung, pengalaman layanan menjadi lebih tertata.

### Hubungan dengan SIPPADU dan SIANter

Smarchlink SIPPADU relevan untuk alur permohonan, verifikasi, perizinan, tracking, dan integrasi layanan. SIANter relevan untuk pengelolaan antrean, panggilan loket, display, dan tracking pemohon. Keduanya membantu instansi menata layanan dari sisi proses maupun interaksi di ruang layanan.

### Prinsip Implementasi

Tracking status sebaiknya dibuat sederhana bagi masyarakat, tetapi cukup detail bagi petugas. Informasi yang terlalu teknis dapat membingungkan pengguna, sedangkan informasi yang terlalu minim tidak membantu mengurangi ketidakpastian.
    `,
    category: 'Digital Government',
    publishedAt: '2026-08-21',
    readTimeMinutes: 5,
    authorName: 'Tim Solusi Digital Artavel',
    authorRole: 'Public Service Solution Specialist',
    relatedProductIds: ['smarchlink-sippadu', 'sianter'],
    relatedSolution: {
      label: 'Digital Government & Enterprise',
      path: '/solusi#digital-government-enterprise'
    },
    ctaLabel: 'Pelajari Solusi Pelayanan Publik',
    ctaPath: '/solusi/pelayanan-publik-dan-perizinan',
    metadata: {
      title: 'Tracking Status dalam Pelayanan Publik Digital | PT Artavel',
      description:
        'Mengapa tracking status penting untuk transparansi layanan publik, alur permohonan, antrean, panggilan loket, dan monitoring petugas.'
    }
  }
];

export const INSIGHTS_DATA: InsightArticle[] = featuredInsightIds
  .map((id) => ALL_INSIGHTS_DATA.find((article) => article.id === id))
  .filter((article): article is InsightArticle => Boolean(article));

export const getLocalizedInsights = (language: 'id' | 'en'): InsightArticle[] => {
  if (language === 'id') return ALL_INSIGHTS_DATA;

  return ALL_INSIGHTS_DATA.map((article) => {
    const translation = INSIGHT_EN_TRANSLATIONS[article.id];

    if (!translation) return article;
    const { relatedSolution, metadata, ...translatedFields } = translation;
    const localizedArticle: InsightArticle = {
      ...article,
      ...translatedFields
    };

    if (article.relatedSolution) {
      localizedArticle.relatedSolution = {
        ...article.relatedSolution,
        ...relatedSolution
      };
    }

    if (article.metadata) {
      localizedArticle.metadata = {
        ...article.metadata,
        ...metadata
      };
    }

    return localizedArticle;
  });
};

export const getLocalizedFeaturedInsights = (language: 'id' | 'en'): InsightArticle[] => {
  const localizedInsights = getLocalizedInsights(language);

  return featuredInsightIds
    .map((id) => localizedInsights.find((article) => article.id === id))
    .filter((article): article is InsightArticle => Boolean(article));
};
