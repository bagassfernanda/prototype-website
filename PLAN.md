# PLAN.md — PT Artavel Website Redesign & Re-architecture Strategy

## 1. Kondisi Awal Repository
- **Teknologi**: Next.js App Router + React 19 + Tailwind CSS v4 + TypeScript + Lucide React + Motion.
- **Struktur Awal**: Halaman publik memakai `src/app` untuk routing/metadata dan `src/views` untuk komponen halaman presentasional.
- **Aset & Konten**: Belum ada data terstruktur, logo SVG/PNG resmi perlu diekstrak dan dibuatkan SVG vector Artavel yang presisi sesuai identitas 4 warna (Biru `#36699C`, Hijau `#7DBC5E`, Kuning `#DAA761`, Oranye `#D26353`).

## 2. Hasil Audit Website Lama (artavel.co.id)

### A. Temuan Halaman & Konten Lama
1. **Layanan & Produk**:
   - Mention merek master **Smarchlink®** dan sub-produk: **SIPPADU** (Pelayanan Perizinan Terpadu), **TNDE** (Tata Naskah Dinas Elektronik), **Archive** (Sistem Kearsipan Digital / E-Archive), **SIANTER** (Sistem Antrean & Tracking Pemohon).
   - Istilah usang: *"IT Bussiness Solutions"* (typo double 's' pada Bussiness), *"PPN 10%"* (tarif pajak usang, PPN RI saat ini 11%), regulasi *"IMB"* (Izin Mendirikan Bangunan) yang secara nasional sudah bertransformasi menjadi **PBG** (Persetujuan Bangunan Gedung) dan **SLF** (Sertifikat Laik Fungsi).
   - Terdapat narasi mixing pada studi kasus yang perlu diselaraskan dengan mode anonim dan status verifikasi konten.
2. **Kemitraan & Lisensi**:
   - Mengklaim status *"IBM Business Partner"*, *"Webroot Partner"*, *"PMA/PMDN"*.
   - Informasi ini perlu diverifikasi oleh manajemen Artavel sebelum dipublikasikan sebagai klaim resmi di website baru.
3. **Struktur Navigasi & UX Lama**:
   - Terlalu kaku, banyak link mati/tidak responsif, penyampaian fitur sangat teknis tanpa menjelaskan manfaat bisnis/layanan publik (*feature-first* alih-alih *benefit-first*).
   - Belum ada alur konversi yang jelas (konsultasi, demo, proposal).

### B. Materi yang Masih Dapat Digunakan (Dengan Penyesuaian)
- Nilai dasar keberadaan Artavel sebagai pengembang perangkat lunak pelayanan publik & kearsipan.
- Sektor target utama: Pemerintah Daerah, Dinas Perizinan (DPMPTSP), Sekretariat/Arsip Daerah, BUMD, dan Perusahaan Swasta.
- Daftar modul inti Smarchlink (SIPPADU, TNDE, Archive, SIANTER) disesuaikan dengan nomenklatur dan regulasi terbaru.

### C. Materi yang Harus Dihapus / Diperbaiki
- Menghapus klaim harga/tarif lama (misal "Archive Express", "Workgroup" dengan nominal acak).
- Menghapus referensi IMB usang, diganti dengan deskripsi modul integrasi PBG / SIMBG & OSS RBA.
- Menghapus penulisan typo seperti "IT Bussiness Solutions".
- Menghapus persentase PPN 10%.

## 3. Asumsi
1. **Model Operasional**: Artavel bertindak sebagai mitra solusi end-to-end (Consultation → Customization/Configuration → Deployment → Training → Maintenance/SLA).
2. **Deployment Flexibility**: Produk dapat dideploy On-Premise (Server Lokal Pemda/Perusahaan) maupun Private/Public Cloud sesuai regulasi keamanan data instansi.
3. **Multi-device & Accessibility**: Pengguna terdiri dari pimpinan instansi (desktop/tablet), petugas lapangan/loket (desktop), dan masyarakat umum (smartphone/mobile browser).

## 4. Data yang Belum Terverifikasi (Diarsipkan di `CONTENT_VERIFICATION.md`)
- Legalitas resmi lengkap, Nomor Induk Berusaha (NIB), KBLI utama.
- Status resmi kemitraan IBM & Webroot terbaru.
- Daftar nama klien resmi yang memberikan izin pemuatan logo & testimonial (*publicationPermission*).
- Angka pasti dampak efisiensi (misal % penurunan waktu tunggu antrean atau kecepatan pencarian arsip).

## 5. Strategi Brand & Positioning

### Positioning Utama
> "Artavel adalah mitra solusi digital untuk pelayanan publik, pengelolaan dokumen, kearsipan, dan otomasi proses organisasi."

### Brand Promise
> "Teknologi yang membuat proses lebih jelas, pelayanan lebih tertata, dan keputusan lebih dapat dipercaya."

### Brand Essence
> "Proses yang jelas membangun kepercayaan."

### Pendukung Komunikasi
> "Yang ribet, biar sistem yang bekerja." *(Digunakan secara selektif pada materi pemasaran/wawasan)*.

## 6. System Identitas Visual & Warna
- **Warna Utama**:
  - `Artavel Blue` (`#36699C` / `#173955`): Dominan (25-30%), melambangkan kepercayaan, stabilitas, dan teknologi pemerintah/korporasi.
  - `Artavel Green` (`#7DBC5E` / `#568F3E`): Aksesibel (10-15%), melambangkan pertumbuhan, efisiensi, status sukses, dan progresif.
  - `Artavel Yellow` (`#DAA761` / `#AA7838`): Aksen (3-5%), optimisme, highlight, status perhatian.
  - `Artavel Orange` (`#D26353` / `#A9473B`): Aksen (3-5%), energi, notifikasi, penanda interaktif.
  - `Neutral Light`: Canvas background (`#FFFFFF` / `#F7F9FB`) (50-60%).
- **Bahasa Bentuk**: Geometri segitiga/atap naik dari logo Artavel yang diterjemahkan menjadi divider diagonal halus, progress bar, dan motif visual *BrandColorLine* (garis horizontal 4 warna 3px).

## 7. Arsitektur Informasi & Sitemap
```
/
├── /solusi
│   ├── /pelayanan-publik-dan-perizinan (SIPPADU)
│   ├── /manajemen-dokumen-dan-arsip (Smarchlink Archive)
│   ├── /tata-naskah-dinas-elektronik (TNDE)
│   ├── /sistem-antrean-dan-tracking (SIANTER)
│   ├── /digitalisasi-dan-alih-media
│   └── /keamanan-data-dan-integrasi
├── /sektor
│   ├── /pemerintahan
│   ├── /organisasi-dan-perusahaan
│   └── /layanan-publik
├── /studi-kasus
│   └── /[slug]
├── /tentang
├── /cara-kami-bekerja
├── /wawasan
│   └── /[slug]
├── /kontak
├── /kebijakan-privasi
├── /syarat-dan-ketentuan
└── /aksesibilitas
```

## 8. User Journey Utama
1. **Pimpinan/Kepala Dinas**:
   - Masuk via Google / Tautan → Membaca Hero & Problem Section → Melihat Ringkasan Solusi & Keamanan Data → Mengunduh/Membaca Studi Kasus → Klik "Konsultasikan Kebutuhan" → Mengisi Form Konsultasi.
2. **Tim Teknis / IT Instansi**:
   - Masuk Halaman Solusi (contoh: Keamanan & Integrasi) → Memeriksa skema deployment (On-prem/Cloud), integrasi API, audit trail → Menghubungi Artavel untuk diskusi arsitektur & demo.
3. **Masyarakat / Umum**:
   - Memahami transparansi layanan, sistem antrean, dan cara Artavel membantu menciptakan pelayanan publik yang ramah & cepat.

## 9. Arsitektur Teknis
- **Framework**: Client-side Single Page Application / Multi-route SPA dengan Client Router (React Router / Hash Router / State Router yang seamless dengan URL history) + Dynamic SSR-friendly Meta Tag & JSON-LD injectors.
- **Form Handling & Validation**: Custom React Form state + Zod Schema Validation + Sanitization + Rate-Limiting Abstraction + Local Logging Service.
- **Styling**: Tailwind CSS v4 dengan Design Tokens CSS Variables di `src/index.css`.
- **Aksesibilitas**: Full WCAG 2.2 AA compliant, Keyboard Trap Protection, Skip Link, Screen Reader Friendly (`aria-live`, `aria-expanded`), High Contrast check.
- **Testing**: Automated Unit Test & End-to-End Test Suite (`npm run test`) + Axe Accessibility Smoke Tester.

## 10. Tahapan Pengerjaan
1. **Fase 1**: Dokumentasi Fondasi (`PLAN.md`, `AGENTS.md`, `CONTENT_VERIFICATION.md`, `BRAND_GUIDE.md`, dll).
2. **Fase 2**: Data Architecture & Content Store (`src/content/*` berisi typed content objects).
3. **Fase 3**: Layout & UI Components (`Header`, `Footer`, `BrandColorLine`, `Button`, `SolutionCard`, `ProcessTimeline`, `ContactForm`, dll).
4. **Fase 4**: Halaman & Routing Utama (`Homepage`, `Solusi Detail`, `Sektor`, `Studi Kasus`, `Tentang`, `Wawasan`, `Kontak`, `Legal Pages`).
5. **Fase 5**: SEO, JSON-LD, Security Headers & Abstractions.
6. **Fase 6**: Testing (Lint, Typecheck, Unit Test, E2E, Axe Accessibility Audit) & Production Build.

## 11. Risiko & Mitigasi
- **Risiko**: Pengunjung bingung membedakan Artavel dan Smarchlink.
  - **Mitigasi**: Menggunakan strategi *Masterbrand*: "PT Artavel" sebagai entitas perusahaan & mitra terpercaya, "Smarchlink®" sebagai nama ekosistem produk/solusi.
- **Risiko**: Ketiadaan foto asli berlisensi publik.
  - **Mitigasi**: Menampilkan ilustrasi diagram alur proses SVG khusus yang bersih, diagram tata kelola, dan mockup UI aplikasi demo fiktif (*Data Demo*) yang berestetika tinggi.

## 12. Acceptance Criteria
- [x] Positioning Artavel tersampaikan dalam 5 detik pertama.
- [x] Sistem warna 4-tone Artavel diimplementasikan secara harmonis.
- [x] Komponen `BrandColorLine` terpasang di tempat strategis.
- [x] Seluruh klaim yang belum diverifikasi berlabel draf / placeholder jelas.
- [x] Tidak ada typo usang ("IT Bussiness Solutions", "PPN 10%", "IMB").
- [x] Form kontak dilengkapi validasi Zod & state UX lengkap.
- [x] Lulus uji `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`.
- [x] Dokumentasi lengkap 9 file standar.
