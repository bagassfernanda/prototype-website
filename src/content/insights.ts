import { InsightArticle } from '../types';

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'perbedaan-scan-dokumen-dan-kearsipan-digital',
    slug: 'perbedaan-scan-dokumen-dan-kearsipan-digital',
    title: 'Mengapa Hasil Scan PDF Saja Belum Bisa Disebut Kearsipan Digital?',
    excerpt: 'Memindai kertas menjadi file PDF di komputer hanyalah langkah awal. Tanpa struktur klasifikasi, metadata, dan Jadwal Retensi Arsip (JRA), file PDF tersebut tetap akan sulit dicari.',
    contentMarkdown: `
### Salah Kaprah Seputar Digitalisasi Dokumen

Banyak organisasi menganggap bahwa ketika seluruh berkas fisik sudah dipindai (*scan*) dan disimpan dalam folder komputer, proses digitalisasi kearsipan telah selesai. Padahal, memindai dokumen tanpa sistem manajemen kearsipan yang terstruktur hanya memindahkan **"gudang acak fisik"** menjadi **"gudang acak digital"**.

---

### Tiga Komponen Utama Sistem Kearsipan Digital Sejati

1. **Kode Klasifikasi & Indexing Metadata**
   - Setiap berkas yang diunggah wajib dipasangkan dengan metadata standar: *Nomor Surat, Tanggal, Perihal, Pencipta Arsip, Tingkat Kerahasiaan*, dan *Kode Klasifikasi*.
   - Metadata inilah yang memungkinkan pencarian super cepat dalam waktu kurang dari 3 detik.

2. **Jadwal Retensi Arsip (JRA)**
   - Arsip memiliki siklus hidup: *Aktif, Inaktif, Pemindahan*, hingga *Pemusnahan* atau *Penyerahan ke Arsip Statis*.
   - Sistem E-Archive otomatis memberikan notifikasi saat suatu dokumen telah memasuki batas waktu retensinya sesuai regulasi ANRI.

3. **Hak Akses & Jejak Audit (Audit Trail)**
   - Tidak semua pegawai boleh melihat dokumen berklasifikasi *Rahasia* atau *Sangat Rahasia*.
   - Sistem kearsipan digital profesional mencatat siapa yang membuka, mengunduh, atau mengubah metadata dokumen secara presisi.

---

### Kesimpulan

Untuk membangun tata kelola kearsipan yang berkelanjutan, mulailah dengan memetakan struktur klasifikasi arsip organisasi Anda, lalu gunakan aplikasi manajemen arsip khusus seperti **Smarchlink Archive**.
    `,
    category: 'Kearsipan Digital',
    publishedAt: '2026-07-15',
    readTimeMinutes: 4,
    authorName: 'Tim Konsultan Kearsipan Artavel',
    authorRole: 'Digital Archiving Specialist'
  },
  {
    id: 'mengapa-audit-trail-penting-dalam-tnde',
    slug: 'mengapa-audit-trail-penting-dalam-tnde',
    title: 'Pentingnya Jejak Audit (Audit Trail) pada Sistem Tata Naskah Dinas Elektronik',
    excerpt: 'Dalam tata kelola pemerintahan dan organisasi, kepastian siapa yang memaraf, menyetujui, dan mengubah draft surat merupakan perlindungan hukum utama bagi pejabat dan organisasi.',
    contentMarkdown: `
### Apa Itu Audit Trail dalam TNDE?

*Audit Trail* adalah catatan kronologis terenkripsi yang merekam seluruh aktivitas pengguna di dalam aplikasi. Dalam konteks **Tata Naskah Dinas Elektronik (TNDE)**, audit trail mencatat:
- Siapa yang membuat konsep surat.
- Siapa yang memberikan paraf persetujuan beserta catatan revisinya.
- Jam dan alamat IP saat Pimpinan menandatangani surat secara elektronik (TTE).
- Kepada siapa saja disposisi diteruskan dan kapan penerima membaca disposisi tersebut.

---

### Mengapa Ini Sangat Vital?

1. **Perlindungan Hukum & Akuntabilitas**
   - Saat terjadi sengketa administrasi atau audit internal, jejak audit menjadi bukti sah yang menunjukkan bahwa alur persetujuan telah dijalankan sesuai Prosedur Operasional Standar (SOP).

2. **Mencegah Penomoran Ganda & Manipulasi Surat**
   - Penomoran otomatis oleh sistem yang dicatat dalam log audit menghilangkan risiko pemalsuan nomor surat atau tanggal mundur (*backdate*).

3. **Transparansi Kinerja Disposisi**
   - Pimpinan dapat mengevaluasi berapa lama rata-rata waktu yang dibutuhkan oleh setiap unit kerja untuk menindaklanjuti disposisi yang diberikan.
    `,
    category: 'Tata Naskah',
    publishedAt: '2026-06-28',
    readTimeMinutes: 5,
    authorName: 'Tim Analis Sistem Artavel',
    authorRole: 'Governance & Compliance Lead'
  },
  {
    id: 'perbedaan-cloud-vs-on-premise-layanan-pemerintah',
    slug: 'perbedaan-cloud-vs-on-premise-layanan-pemerintah',
    title: 'On-Premise vs Cloud: Memilih Arsitektur Deployment yang Tepat untuk Instansi',
    excerpt: 'Setiap pilihan infrastruktur memiliki keunggulan tersendiri. Ketahui faktor regulasi, kedaulatan data, ketersediaan anggaran, dan kemampuan tim IT sebelum memutuskan.',
    contentMarkdown: `
### Faktor Pertimbangan Utama

Ketika merencanakan implementasi aplikasi perizinan (SIPPADU) atau kearsipan (Archive), pertanyaan pertama yang muncul adalah: **"Apakah lebih baik diinstal di server lokal (On-Premise) atau di Cloud?"**

---

### 1. Model On-Premise (Server Lokal Instansi)

- **Kelebihan**:
  - Kedaulatan data 100% berada di dalam gedung kantor / Data Center Pemda.
  - Sangat cocok untuk daerah dengan regulasi internal ketat atau intranet tertutup.
  - Akses jaringan lokal ultra cepat tanpa tergantung kuota internet luar.
- **Tantangan**:
  - Membutuhkan investasi awal pembelian hardware server, UPS, pendingin, dan ruang Data Center.
  - Pemeliharaan fisik hardware dan kecukupan SDM administrator server lokal.

---

### 2. Model Private Cloud Terkelola

- **Kelebihan**:
  - Tanpa belanja modal hardware awal (*OpEx Model*).
  - Kemudahan diakses oleh pejabat yang sedang melakukan dinas luar via mobile browser aman.
  - Jaminan *uptime* tinggi, pemeliharaan server, dan backup berkala oleh tim ahli provider.
- **Tantangan**:
  - Membutuhkan koneksi internet publik yang stabil di kantor.

---

### Pendekatan Artavel: Fleksibilitas Penuh

Seluruh paket solusi **Smarchlink® Artavel** mendukung kedua opsi ini (*Hybrid-Ready*). Anda dapat memulai dari On-Premise dan melakukan replikasi backup ke Cloud, atau sebaliknya sesuai kebutuhan regulasi instansi Anda.
    `,
    category: 'Keamanan Data',
    publishedAt: '2026-05-10',
    readTimeMinutes: 6,
    authorName: 'Tim Arsitek Infrastruktur Artavel',
    authorRole: 'System & Infrastructure Specialist'
  }
];
