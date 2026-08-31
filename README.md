# PT Artavel — Official Website

Website resmi PT Artavel berbasis Next.js, TypeScript, dan Tailwind CSS untuk Solusi Digital Pelayanan Publik, Kearsipan Digital, Tata Naskah Dinas Elektronik, Sistem Antrean, CCTV/IoT, keamanan data, website, UI/UX, dan otomasi proses organisasi.

---

## 🚀 Fitur Utama Website Baru

- **Next.js App Router**: Struktur halaman siap produksi dengan static generation untuk halaman marketing, metadata SEO per halaman, dan routing yang lebih rapi.
- **Brand Evolution**: Evolusi identitas visual Artavel mempertahankan 4 warna logo khas (Biru `#36699C`, Hijau `#7DBC5E`, Kuning `#DAA761`, Oranye `#D26353`) dan garis identitas `BrandColorLine`.
- **Benefit-First Architecture**: Navigasi dan komunikasi terfokus pada solusi permasalahan instansi/organisasi sebelum mengenalkan modul teknis.
- **Interaktif & Responsif**: Hero carousel, simulasi workflow, area video profil, animasi scroll, dan penataan formulir konsultasi terstruktur.
- **Aksesibilitas Tinggi (WCAG 2.2 AA)**: Dukungan navigasi keyboard penuh, kontras warna lulus uji, skip-to-content link, dan ARIA attributes.
- **Legal & Verification Safety**: Seluruh data yang belum terverifikasi secara resmi diberi penanda draf/placeholder untuk menghindari klaim palsu.

---

## 🛠️ Panduan Memulai Development

```bash
# Clone repository & masuki direktori
cd artavel-website

# Install dependensi
npm install

# Jalankan server development
npm run dev
# Website berjalan pada http://localhost:3000
```

## 🚀 Production Static Deployment

Website production dibuat sebagai pure static export. Node.js hanya diperlukan di komputer developer untuk instalasi dependensi, development, dan proses build.

```bash
# Install dependensi dan jalankan development
npm install
npm run dev

# Buat static export production
npm run build
```

Hasil build berada di directory `out/`. Upload seluruh isi `out/` ke document root Apache/cPanel, Nginx, atau static hosting. Node.js **TIDAK diperlukan** di server production; jangan gunakan `npm start`, `next start`, atau PM2 untuk deployment static.

Detail audit, daftar route, hasil smoke test, dan instruksi deployment tersedia di [`STATIC_DEPLOYMENT_AUDIT.md`](./STATIC_DEPLOYMENT_AUDIT.md).

---

## 🧪 Perintah Pengujian & Quality Assurance

```bash
# Jalankan Linter
npm run lint

# Jalankan Type Checking
npm run typecheck

# Jalankan Automated Unit & Integration Tests
npm run test

# Jalankan Production Build Test
npm run build
```

---

## 📄 Dokumentasi Proyek Lengkap

- [`PLAN.md`](./PLAN.md) — Strategi redesign, audit website lama, dan arsitektur proyek.
- [`AGENTS.md`](./AGENTS.md) — Petunjuk operasional agen & standar teknis.
- [`CONTENT_VERIFICATION.md`](./CONTENT_VERIFICATION.md) — Daftar poin konfirmasi konten untuk manajemen Artavel.
- [`BRAND_GUIDE.md`](./BRAND_GUIDE.md) — Panduan sistem desain, warna, dan tipografi.
- [`SEO_GUIDE.md`](./SEO_GUIDE.md) — Strategi SEO, Meta Tag, dan Structured Data Schema.
- [`DEPLOYMENT.md`](./DEPLOYMENT.md) — Instruksi static deployment dan security headers.
- [`STATIC_DEPLOYMENT_AUDIT.md`](./STATIC_DEPLOYMENT_AUDIT.md) — Hasil audit dan panduan pure static deployment.
- [`ACCESSIBILITY.md`](./ACCESSIBILITY.md) — Panduan standar aksesibilitas WCAG 2.2 AA.
