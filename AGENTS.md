# AGENTS.md — Developer & Agent Operations Guide for PT Artavel Website

## 1. Structure Repository
```
/
├── .env.example                # Templat variabel lingkungan
├── AGENTS.md                   # Petunjuk pengoperasian proyek ini
├── PLAN.md                     # Strategi redesign & arsitektur proyek
├── CONTENT_VERIFICATION.md     # Daftar verifikasi konten dengan manajemen Artavel
├── BRAND_GUIDE.md              # Panduan sistem desain & identitas brand
├── SEO_GUIDE.md                # Panduan SEO, Meta & Structured Data
├── DEPLOYMENT.md               # Instruksi deployment & integrasi server
├── ACCESSIBILITY.md            # Standar aksesibilitas WCAG 2.2 AA
├── README.md                   # Rangkuman umum & petunjuk memulainya
├── package.json                # Dependencies, scripts & versi paket
├── next.config.mjs             # Konfigurasi Next.js
├── postcss.config.mjs          # Konfigurasi Tailwind CSS via PostCSS
├── tsconfig.json               # Konfigurasi TypeScript strict mode
└── src/
    ├── app/                    # Next.js App Router, layout, metadata, static routes
    │   ├── _client-pages/      # Wrapper client per halaman untuk navigasi interaktif
    │   └── seo.ts              # Helper metadata halaman
    ├── views/                  # Komponen halaman presentasional
    ├── index.css               # Global CSS + Design Tokens + Tailwind v4
    ├── types/                  # Typed interfaces (solutions, case studies, forms)
    ├── content/                # Structured typed content data (solutions.ts, company.ts, etc.)
    ├── components/
    │   ├── brand/              # BrandColorLine, ArtavelLogo, BrandPattern
    │   ├── layout/             # Header, Footer, Container, Section, Breadcrumb
    │   ├── ui/                 # Button, Badge, Card, Modal, Tabs, Accordion
    │   ├── sections/           # Hero, Problem, Solution, HowWeWork, Trust, Security
    │   ├── forms/              # ContactForm, Zod Validation, FormFeedback
    │   └── seo/                # MetaInjector, JsonLdInjector
    ├── utils/                  # Sanitizer, Logger, Mock Generators
    └── tests/                  # Unit, Integration & Axe Accessibility Tests
```

## 2. Command Reference
- **Instalasi Paket**: `npm install`
- **Development Server**: `npm run dev` (Next.js, Port 3000, 0.0.0.0)
- **Lint**: `npm run lint`
- **Type Check**: `npm run typecheck`
- **Unit & Integration Test**: `npm run test`
- **End-to-End Test**: `npm run test:e2e`
- **Production Build**: `npm run build`

## 3. TypeScript Rules
- Strict mode diaktifkan (`strict: true`).
- Hindari penggunaan `any`. Selalu gunakan tipe data eksplisit dari `src/types/`.
- Semua props komponen wajib menggunakan interface TypeScript yang terdokumentasi.
- Gunakan `enum` standar atau `union type` literal untuk status dan kategori.

## 4. Aturan Pembuatan Komponen UI
- Komponen harus modular, dapat digunakan kembali (*reusable*), dan berdiri sendiri.
- Gunakan Tailwind CSS utility classes secara langsung.
- Setiap komponen utama wajib memiliki `id` unik untuk target aksesibilitas dan analisis.
- Selalu sediakan status visual lengkap: default, hover, active, focus-visible, disabled, dan loading.

## 5. Aturan Aksesibilitas (WCAG 2.2 AA)
- Gunakan tag HTML semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Semua tombol dan link wajib memiliki label teks yang jelas. Jika berupa ikon saja, berikan `aria-label`.
- Semua gambar bermakna wajib memiliki `alt` text deskriptif. Gambar dekoratif wajib menggunakan `alt=""`.
- Pastikan kontras warna antara teks dan background memenuhi rasio minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar.
- Hormati pengaturan pengguna `prefers-reduced-motion`.

## 6. Aturan Konten & Copywriting
- Bahasa utama adalah **Bahasa Indonesia** yang baku, hangat, ramah, dan profesional.
- Pendekatan *benefit-first*: Jelaskan manfaat nyata bagi instansi/masyarakat sebelum menyebut nama fitur/produk.
- Jangan gunakan istilah usang: ganti "IMB" dengan "PBG/SIMBG", hapus "IT Bussiness Solutions", hapus "PPN 10%".

## 7. Aturan Penggunaan Aset & Logo
- Gunakan logo Artavel dalam format SVG vector resmi dengan kombinasi 4 warna khas (Biru, Hijau, Kuning, Oranye).
- Jangan mengubah susunan warna logo Artavel menjadi skema warna lain yang tidak disetujui.
- Semua mockup aplikasi harus menggunakan data fiktif bertanda "Data Demo".

## 8. Larangan Membuat Data dan Klaim Palsu
- Dilarang keras mengarang angka klaim performa, persentase efisiensi, atau testimonial palsu tanpa izin terverifikasi.
- Jika data belum terverifikasi oleh manajemen, wajib menyantumkan label: `"Draf — memerlukan verifikasi manajemen Artavel"`.

## 9. Definition of Done (DoD)
1. Seluruh halaman utama dan pendukung dapat diakses tanpa error.
2. Form kontak berfungsi dengan validasi Zod dan feedback UX yang lengkap.
3. Tidak ada error linting (`npm run lint`).
4. Tidak ada error typecheck (`npm run typecheck`).
5. Seluruh suite pengujian otomatis lulus (`npm run test`).
6. Production build berhasil (`npm run build`).
7. Skor aksesibilitas dan performa berada pada kriteria sangat baik.
8. Seluruh dokumentasi terisi dengan lengkap dan akurat.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
