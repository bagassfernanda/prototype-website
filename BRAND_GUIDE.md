# BRAND_GUIDE.md — Panduan Brand & Sistem Desain PT Artavel

Dokumen ini menjadi acuan utama identitas visual, nada komunikasi (*tone of voice*), serta aturan penerapan antarmuka PT Artavel.

---

## 1. Fondasi Merek (Brand Essence)

- **Positioning**: "Artavel adalah mitra solusi digital untuk pelayanan publik, pengelolaan dokumen, kearsipan, dan otomasi proses organisasi."
- **Brand Promise**: "Teknologi yang membuat proses lebih jelas, pelayanan lebih tertata, dan keputusan lebih dapat dipercaya."
- **Brand Essence**: "Proses yang jelas membangun kepercayaan."
- **Visual Personality**: *Professional, Optimistic, Human-Centered, Trustworthy, Modern, Timeless.*

---

## 2. Sistem Warna (Color Palette)

Identitas warna Artavel berasal dari 4 warna logo resmi:

```css
:root {
  /* Biru Artavel (Dominan - Trust, Technology, Governance) */
  --artavel-blue: #36699C;
  --artavel-blue-dark: #244F78;
  --artavel-blue-deep: #173955;
  --artavel-blue-light: #EAF2F8;

  /* Hijau Artavel (Pertumbuhan, Hasil, Efisiensi, Sukses) */
  --artavel-green: #7DBC5E;
  --artavel-green-dark: #568F3E;
  --artavel-green-light: #EFF8EA;

  /* Oranye Artavel (Aksen Energi, Perhatian, Highlight) */
  --artavel-orange: #D26353;
  --artavel-orange-dark: #A9473B;
  --artavel-orange-light: #FBEEEA;

  /* Kuning Artavel (Aksen Optimisme, Badge, Notifikasi) */
  --artavel-yellow: #DAA761;
  --artavel-yellow-dark: #AA7838;
  --artavel-yellow-light: #FFF7E8;

  /* Netral & Canvas */
  --background: #FFFFFF;
  --surface: #F7F9FB;
  --surface-blue: #F2F7FB;
  --text-primary: #172536;
  --text-secondary: #5C6B79;
  --border: #DBE4EB;
}
```

### Proporsi Distribusi Warna
- **Netral & Putih**: 50–60% (Latar belakang bersih, ruang bernapas luas).
- **Biru Artavel**: 25–30% (Header, CTA Utama, Navigasi Aktif, Footer, Kartu Prioritas).
- **Hijau Artavel**: 10–15% (Status Berhasil, Checklist, Indikator Pertumbuhan, Badge Solusi).
- **Oranye & Kuning**: 3–5% (Aksen hangat, highlight statistik, detail ilustrasi).

---

## 3. Komponen Khas: `BrandColorLine`

Garis tipis horizontal 4 warna (tinggi 3px–4px) yang mengekspresikan kesatuan identitas Artavel:
- **Komposisi Lebar**: Biru 38%, Hijau 30%, Kuning 16%, Oranye 16%.
- **Penempatan**:
  - Tepat di atas Header atau di bawah Header sticky.
  - Tepat di atas Footer utama.
  - Sebagai pemisah halus pada section pembatas kampanye/kontak.
- **Dilarang**: Jangan memasang `BrandColorLine` di setiap kartu, setiap tombol, atau setiap border input form.

---

## 4. Bahasa Bentuk & Motif Geometri

1. **Atap / Segitiga Naik**: Terinspirasi dari sudut puncak logo Artavel. Digunakan secara terukur untuk:
   - Aksentuasi indikator progres alur kerja.
   - Diagonal subtle cut pada hero atau pembatas section.
   - Ikon kustom dan badge solusi.
2. **Tingkatan Batang Hijau**: Menyimbolkan statistik pertumbuhan efisiensi dan peningkatan kearsipan.

---

## 5. Tipografi (Typography System)

- **Font Heading**: *Plus Jakarta Sans* / *Manrope* (Sangat profesional, bersih, dan modern).
- **Font Body**: *Inter* (Sangat legible, tinggi x-height optimal).
- **Aturan Hierarchy**:
  - `H1`: 36px (mobile) / 52px (desktop), font-bold, tracking-tight.
  - `H2`: 28px (mobile) / 38px (desktop), font-semibold.
  - `H3`: 20px (mobile) / 24px (desktop), font-semibold.
  - `Body Normal`: 16px, line-height 1.65 (`leading-relaxed`), text-color `#172536`.
  - `Body Small`: 14px, text-color `#5C6B79`.

---

## 6. Contoh Penggunaan Benar vs. Salah

### ✅ BENTUK PENGGUNAAN BENAR
- Menggunakan Biru Artavel (`#36699C`) sebagai tombol CTA utama dengan status hover yang lebih gelap (`#244F78`).
- Menggunakan Hijau Artavel (`#7DBC5E` / `#568F3E`) untuk menandai poin-poin manfaat (*checklist*) dan angka hasil efisiensi.
- Menggunakan latar belakang putih atau off-white (`#F7F9FB`) untuk keterbacaan tinggi.

### ❌ BENTUK PENGGUNAAN SALAH
- Meniru susunan empat titik warna atau UI Google Workspace.
- Membuat kartu berbentuk segitiga atau sudut miring ekstrem yang merusak keterbacaan teks.
- Menggunakan teks abu-abu terang yang tidak memenuhi WCAG 2.2 AA.
- Membuat tampilan dark mode penuh yang terasa seperti cyberpunk atau game.
