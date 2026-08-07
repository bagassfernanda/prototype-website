# SEO_GUIDE.md — Panduan SEO & Metadata PT Artavel

## 1. Strategi Metadata
Website menggunakan strategi SEO terstruktur berbasis target kata kunci B2B & Pemerintah Daerah:
- *Pelayanan Publik Digital*
- *Sistem Kearsipan Digital E-Archive*
- *Tata Naskah Dinas Elektronik (TNDE)*
- *Sistem Antrean Loket Pemda*
- *Digitalisasi Dokumen & Alih Media*
- *Integrasi OSS RBA & SIMBG PBG*

## 2. Struktur Meta Tags Per Halaman

### Homepage (`/`)
- **Title**: `PT Artavel — Solusi Pelayanan Publik, Arsip Digital & Tata Naskah Dinas Elektronik`
- **Meta Description**: `Artavel menyediakan solusi digital terintegrasi untuk pelayanan publik, perizinan, kearsipan digital, tata naskah elektronik, sistem antrean, dan alih media dokumen.`
- **Canonical**: `https://artavel.co.id/`

### Solusi Pelayanan Publik (`/solusi/pelayanan-publik-dan-perizinan`)
- **Title**: `Solusi Pelayanan Publik & Perizinan Terpadu (SIPPADU) — PT Artavel`
- **Meta Description**: `Sistem perizinan terpadu yang terintegrasi OSS RBA & PBG. Memudahkan pemohon melacak status dan mempercepat proses persetujuan instansi.`

### Manajemen Dokumen & Arsip (`/solusi/manajemen-dokumen-dan-arsip`)
- **Title**: `Sistem Manajemen Dokumen & Kearsipan Digital (Smarchlink Archive) — PT Artavel`
- **Meta Description**: `Kelola, simpan, cari, dan telusuri arsip organisasi secara terstruktur. Mendukung pencarian cepat, klasifikasi arsip, dan audit trail.`

## 3. Structured Data (JSON-LD)

Sistem menyuntikkan schema JSON-LD secara dinamis:
1. **Organization Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PT Artavel",
  "url": "https://artavel.co.id",
  "logo": "https://artavel.co.id/brand/artavel-logo.svg",
  "description": "Penyedia solusi digital untuk pelayanan publik, kearsipan, dan otomasi dokumen.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-811-3000-123",
    "contactType": "customer service",
    "areaServed": "ID",
    "availableLanguage": "Indonesian"
  }
}
```
2. **Service Schema**: Disuntikkan pada setiap detail halaman solusi.
3. **BreadcrumbList Schema**: Memudahkan mesin pencari memahami hirarki URL.

## 4. Robots.txt & Sitemap.xml
- `sitemap.xml` diproduksi secara otomatis memuat seluruh rute publik.
- `robots.txt` mengizinkan seluruh search engine crawler umum dan melarang pencrawl-an pada area preview/staging internal.
