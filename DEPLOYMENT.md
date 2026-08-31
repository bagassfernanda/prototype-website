# DEPLOYMENT.md — Panduan Deployment PT Artavel Website

## 1. Lingkungan Runtime

Development membutuhkan Node.js `>=20.11.0` sesuai `package.json`. Production menggunakan hasil static export dan tidak membutuhkan Node.js, npm, `next start`, PM2, atau server aplikasi.

## 2. Build Static Production

```bash
npm install
npm run typecheck
npm run lint
npm run test
npm run build
```

Upload **isi directory `out/`** ke document root hosting static.

`npm run preview` dan `npm start` tetap tersedia hanya untuk preview lokal dengan Next.js. Keduanya bukan bagian dari deployment production static.

## 3. Apache / cPanel

Upload isi `out/` ke `public_html` atau document root. Karena `trailingSlash: true`, halaman tersedia sebagai directory dengan `index.html` dan Apache dapat melayani URL nested tanpa rewrite Node.js.

Header keamanan berikut dapat diterapkan di konfigurasi hosting jika modul `mod_headers` tersedia:

```apache
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>
```

## 4. Nginx

Contoh konfigurasi static:

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

## 5. Troubleshooting

- **Build gagal karena TypeScript**: jalankan `npm run typecheck` dan periksa tipe di `src/types/`.
- **Route 404 setelah upload**: pastikan yang di-upload adalah seluruh isi `out/`, termasuk folder `_next`, file `.txt` payload Next.js, serta folder route.
- **Form kontak**: form membuka draft email/WhatsApp melalui browser; tidak ada endpoint API internal yang perlu dijalankan.
