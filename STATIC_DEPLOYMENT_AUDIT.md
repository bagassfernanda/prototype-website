# PT Artavel Static Deployment Audit

## 1. Final Status

```text
STATIC DEPLOYMENT STATUS:
PASS
```

Audit dilakukan pada project Next.js App Router PT Artavel setelah konfigurasi static export dan route locale diperbaiki.

## 2. Architecture

Development:

```text
Next.js + React + TypeScript + Tailwind CSS
↓
Node.js di komputer developer
↓
npm run build
```

Production:

```text
HTML/CSS/JavaScript/assets statis di out/
↓
Apache/Nginx/cPanel/static hosting
```

Production tidak menjalankan Node.js, npm install, `npm start`, `next start`, atau PM2.

## 3. Static Export Configuration

Konfigurasi final di `next.config.mjs`:

- `output: 'export'` menghasilkan directory `out/`.
- `trailingSlash: true` menghasilkan `index.html` di dalam directory setiap route, sehingga sesuai untuk Apache, cPanel, dan static hosting.
- `images.unoptimized: true` mempertahankan komponen `next/image` tanpa request runtime ke `/_next/image`.
- `public/` hanya berisi asset publik yang memang digunakan website.

Project menggunakan **Next.js App Router**. Tidak ditemukan `pages/` atau Pages Router.

Versi yang diaudit:

- Next.js `16.3.0`
- React `19.0.1`
- TypeScript `~5.8.2`
- Node.js requirement development `>=20.11.0`

## 4. Server-Only Feature Audit

Audit source mencakup `use server`, route handlers, cookies, headers, draft mode, revalidation, proxy/middleware, SSR, filesystem runtime, database client, dan `fetch()`.

Hasil:

- Tidak ada Server Action.
- Tidak ada API route atau endpoint `/api/contact`.
- Tidak ada SSR request-time, database, Prisma, Supabase server client, Firebase Admin, atau runtime filesystem.
- `proxy.ts` yang sebelumnya melakukan rewrite dan cookie locale dikeluarkan karena Proxy tidak didukung static export.
- Pembacaan `headers()` dari layout/metadata dikeluarkan.
- Route legacy/product yang sebelumnya memakai `redirect()` server-side menggunakan client-side redirect yang kompatibel dengan static hosting.
- `robots.txt` dan `sitemap.xml` adalah metadata route statis dengan `dynamic = 'force-static'`.

## 5. Changes Made

- `next.config.mjs`: mengaktifkan static export, trailing slash, dan image tanpa optimizer server.
- `src/app/layout.tsx`: menghapus request headers dan menjaga inisialisasi bahasa/theme tetap client-safe.
- `src/app/seo.ts`: metadata dibuat deterministik saat build berdasarkan locale.
- `src/components/layout/SiteShell.tsx`: locale dibaca dari path static `/id/` atau `/en/`.
- `src/components/layout/ClientRedirect.tsx`: redirect client-side untuk URL legacy yang masih perlu dipertahankan.
- `src/app/[locale]/[[...path]]/page.tsx`: membuat route ID/EN dan seluruh slug content saat build-time.
- `src/utils/routeAliases.ts`: memusatkan alias route solusi dan sektor untuk static generation.
- Dynamic route product, solusi, sektor, studi kasus, dan wawasan diberi `generateStaticParams()` serta `dynamicParams = false`.
- `src/app/robots.ts` dan `src/app/sitemap.ts`: ditandai `force-static`.
- `src/proxy.ts`: dihapus karena bergantung pada request runtime.
- `README.md` dan `DEPLOYMENT.md`: diperbarui dengan instruksi static deployment.
- `CONTENT_VERIFICATION.md`: email official diselaraskan menjadi `admin@artavel.co.id`.
- `src/views/PrivacyPolicyPage.tsx`: email kontak publik pada halaman legal diselaraskan menjadi `admin@artavel.co.id`.

Perubahan sebelumnya untuk permintaan CEO juga tetap berlaku: tombol download brosur dan field brochure dihapus, sedangkan PDF dipindahkan ke `private-materials/brochures/` dan tidak masuk output production.

## 6. Dynamic Route Status

Route dynamic yang dibuat statis:

- `/produk/[slug]`
- `/solusi/[slug]`
- `/sektor/[slug]`
- `/studi-kasus/[slug]`
- `/wawasan/[slug]`
- `/[locale]/[[...path]]`

Slug berasal dari data statis di `src/content/`, termasuk product, solution, sector, case study, insight, dan alias route yang sudah ada. Build final menghasilkan **417 static pages**, dengan **416 file HTML** serta file statis `robots.txt` dan `sitemap.xml`.

Route locale menghasilkan:

- `/id/` dan `/en/`
- `/id/solusi/` dan `/en/solutions/`
- `/id/produk/` dan `/en/products/`
- `/id/sektor/` dan `/en/industries/`
- `/id/studi-kasus/` dan `/en/case-studies/`
- `/id/wawasan/` dan `/en/insights/`
- seluruh detail content yang tersedia saat build.

## 7. Contact Form

Form kontak kompatibel dengan static hosting:

- Tidak memanggil `/api` atau server internal.
- Input divalidasi dan disanitasi di client.
- Tombol email membuka draft `mailto:admin@artavel.co.id`.
- Tombol WhatsApp membuka link eksternal WhatsApp.

Limitasi yang disengaja: browser hanya dapat menyiapkan draft email/WhatsApp. Pengunjung tetap perlu menekan tombol kirim pada aplikasi email atau WhatsApp mereka.

## 8. Download Material Audit

Tidak ada CTA download/brosur pada website publik dan tidak ada PDF di output `out/`.

Materi yang dikeluarkan dari public build dan disimpan lokal untuk pertemuan langsung:

- `artavel-it-profile.pdf`
- `footfallcam.pdf`
- `otopos-fnb.pdf`
- `otoschool.pdf`
- `sianter.pdf`
- `tnde-jatim.pdf`

Lokasi lokal: `private-materials/brochures/`.

Uji `http://localhost:8080/brochures/otoschool.pdf` pada static server mengembalikan HTTP `404`.

## 9. Image & Asset Audit

- `next/image` tetap digunakan pada logo dan showcase produk.
- Asset lokal tersalin ke `out/` dengan path yang sama.
- Tidak ada URL optimizer `/_next/image` di HTML hasil build.
- Logo, poster/video hero, gambar produk, dan asset media tersedia di output.
- Audit 18.905 referensi local `href/src` pada HTML lulus tanpa asset atau route yang hilang.
- Theme dan language tetap client-side dan tidak membutuhkan server runtime.

## 10. Internal Link Audit

Audit link memeriksa navigation, CTA, breadcrumb, footer, locale switch path, halaman detail, dan asset references.

Hasil:

- Tidak ada link `localhost` atau API internal di source production.
- URL ID/EN menggunakan route directory static.
- Nested route memiliki `index.html` dan dapat dilayani oleh static server.
- Root, solusi, produk, sektor, studi kasus, wawasan, tentang, kontak, legal, robots, sitemap, dan 404 tersedia.

## 11. Client-Side Feature Audit

JavaScript frontend yang dipertahankan:

- Navbar, mega menu, dan mobile menu.
- Dark/light/system theme mode.
- Language switcher ID/EN.
- Accordion, tabs, FAQ, carousel, filter, animation, dan scroll reveal.
- Contact form UI, validasi, mailto, dan WhatsApp.
- Navigasi studi kasus, product, solution, sector, dan insight.

Tidak ada fitur di atas yang membutuhkan Next.js runtime server setelah file static dimuat.

## 12. SEO & Static Compatibility

Output static berisi:

- title dan meta description per route.
- OpenGraph dan Twitter metadata.
- canonical dan alternate `id`/`en`.
- `out/robots.txt`.
- `out/sitemap.xml`.
- `out/404.html`.

Metadata locale dibuat build-time dan tidak lagi membaca request header.

## 13. Security Audit

Scan output production tidak menemukan:

- `.env`, `.env.local`, API key, token, private key, atau credential.
- `server.js`, `package.json`, `node_modules`, atau database file.
- Data customer, proposal internal, atau PDF materi internal.

Environment variable source hanya digunakan untuk URL demo `NEXT_PUBLIC_*` saat build. Tidak ada nilai secret yang tertanam pada output audit.

Header keamanan tidak dapat disisipkan oleh Next.js server pada static export; terapkan header di hosting layer jika dibutuhkan. Contoh minimal tersedia di `DEPLOYMENT.md`.

## 14. Build Result

```text
npm run lint: PASS
npm run typecheck: PASS
npm run test: PASS (12/12 tests)
npm run test:e2e: PASS (8/8 tests)
npm run build: PASS
```

Build menghasilkan directory:

```text
out/
```

## 15. Static Server Test

Output diuji tanpa `next dev`, `next start`, `npm start`, atau PM2 menggunakan:

```bash
cd out
python3 -m http.server 8080
```

HTTP smoke test lulus:

- Homepage: PASS (`200`)
- ID homepage: PASS (`200`)
- EN homepage: PASS (`200`)
- Solusi: PASS (`200`)
- Product route: PASS (`200`)
- Sektor: PASS (`200`)
- Studi Kasus: PASS (`200`)
- Detail Studi Kasus: PASS melalui static file audit
- Wawasan: PASS (`200`)
- Tentang: PASS (`200`)
- Kontak: PASS (`200`)
- 404: PASS (`200` untuk `404.html`)
- Download material URL: PASS (`404`)

Playwright/agent-browser tidak tersedia di environment audit ini, sehingga visual browser automation tidak dijalankan. Sebagai pengganti, direct HTTP route test, HTML locale markers, static asset test, dan local reference audit dijalankan otomatis.

## 16. Deployment Directory

```text
UPLOAD THIS DIRECTORY:
out/
```

Upload **isi** `out/` ke document root hosting. Pertahankan seluruh folder `_next`, route directory, asset, dan file `.txt` payload yang dihasilkan Next.js karena payload tersebut digunakan untuk client navigation.

## 17. Do Not Upload

Directory production tidak membutuhkan:

```text
node_modules/
.next/
src/
scripts/
private-materials/
.env
.env.local
package.json
package-lock.json
tsconfig.json
Git files
development docs
```

## 18. Deployment Instructions

### Apache / cPanel

1. Jalankan `npm run build` di komputer developer.
2. Buka directory `out/`.
3. Upload seluruh isinya ke `public_html` atau document root.
4. Pastikan `index.html`, `_next/`, folder locale/route, `robots.txt`, dan `sitemap.xml` ikut ter-upload.
5. Tidak perlu menjalankan Node.js atau `npm install` di server.

Dengan `trailingSlash: true`, route nested dilayani dari `route/index.html`. `.htaccess` tidak diperlukan untuk routing dasar apabila Apache mengaktifkan DirectoryIndex standar.

### Nginx

Gunakan document root yang menunjuk ke isi `out/` dan konfigurasi static berikut:

```nginx
server {
    listen 80;
    server_name artavel.co.id;
    root /var/www/artavel;

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
```

### Generic static hosting

Upload isi `out/` sebagai artifact/static directory. Pilih mode hosting yang menyajikan file directory dan `index.html`; jangan memilih mode Node.js server.

## 19. Known Limitations

- Form email/WhatsApp berjalan melalui aplikasi eksternal di perangkat pengunjung, tanpa delivery status server-side.
- Google Fonts dimuat dari CDN eksternal; fallback font tetap tersedia dari CSS.
- Redirect legacy dilakukan client-side karena server redirect tidak tersedia di static export.
- Browser automation tidak tersedia pada environment audit; verifikasi HTTP/static dilakukan penuh.
- Script `npm start`/`npm run preview` tetap ada untuk preview lokal, tetapi tidak boleh digunakan sebagai production static runtime.
