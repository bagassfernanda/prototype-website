# ACCESSIBILITY.md — Standar Aksesibilitas Website PT Artavel

Website PT Artavel dirancang dan dibangun dengan mematuhi standar **WCAG 2.2 Level AA** (Web Content Accessibility Guidelines).

## 1. Prinsip Utama Aksesibilitas
1. **Perceivable (Dapat Dipahami Secara Visual & Auditori)**:
   - Kontras warna teks dengan latar belakang minimal 4.5:1 untuk teks biasa dan 3:1 untuk teks besar.
   - Semua elemen gambar bermakna dilengkapi dengan `alt` text deskriptif.
   - Gambar dekoratif menggunakan `alt=""`.
2. **Operable (Dapat Dioperasikan dengan Berbagai Alat Bantu)**:
   - Navigasi penuh menggunakan keyboard (Tombol `Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`).
   - Indikator fokus keyboard terlampir secara jelas (*Visible Focus Ring*).
   - Terdapat tombol *Skip to Main Content* (`#main-content`) di bagian paling atas halaman.
   - Touch target pada layar sentuh/mobile minimal 44px x 44px.
3. **Understandable (Dapat Dimengerti)**:
   - Struktur heading tersusun secara rinci dan semantik (H1 → H2 → H3) tanpa melompati level.
   - Pesan kesalahan pada formulir terhubung langsung dengan field input melalui `aria-describedby` dan `aria-invalid`.
4. **Robust (Kompatibel dengan Teknologi Asistif)**:
   - Penggunaan komponen semantik HTML5 dan ARIA Roles (`role="navigation"`, `role="dialog"`, `aria-expanded`, `aria-live`).

## 2. Pengujian Aksesibilitas
- Dilakukan otomatis melalui skrip pengujian berbasis ruleset Axe-core (`npm run test`).
- Dilakukan pengujian manual menggunakan navigasi keyboard dan penguji kontras warna.
