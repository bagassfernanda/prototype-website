# DEPLOYMENT.md — Panduan Deployment PT Artavel Website

## 1. Lingkungan Runtime & Server Requirements
- **Node.js**: versi >= 18.0.0 (LTS direkomendasikan v20+).
- **Port Ingress**: Port 3000 (0.0.0.0).
- **Environment Production**: Container Cloud Run / Docker Container / Nginx Reverse Proxy.

## 2. Langkah Build & Jalankan Production
```bash
# 1. Install seluruh dependensi
npm install

# 2. Jalankan pemeriksaan tipe data dan linter
npm run typecheck
npm run lint

# 3. Jalankan pengujian otomatis
npm run test

# 4. Buat bundel produksi
npm run build

# 5. Jalankan server pratinjau produksi
npm run preview
```

## 3. Security Headers Configuration (Nginx / Express Proxy)
Aplikasi dikonfigurasi dengan header keamanan tingkat lanjut:
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'self';
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## 4. Troubleshooting
- **Build Gagal karena TypeScript Error**: Pastikan seluruh tipe data pada `src/types/` telah didefinisikan secara eksplisit.
- **Port Busy Error**: Pastikan tidak ada proses Node lain yang berjalan pada Port 3000.
