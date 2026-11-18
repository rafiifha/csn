# Website Company Profile — PT Citra Sinar Niaga

Dibangun dengan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS v4**.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

Build produksi: `npm run build` lalu `npm start`.

## Struktur

```
public/              logo.png, hero.jpg (diambil dari PDF company profile)
src/app/page.tsx     Halaman utama: hero, tentang, visi & misi, bidang usaha, legalitas, kontak
src/app/bidang-usaha Daftar lengkap 99 KBLI dengan fitur pencarian
src/components/      Navbar, Footer, Icon, KbliExplorer
src/data/company.ts  SEMUA konten (alamat, kontak, visi, misi, legalitas, kategori) — edit di sini
src/data/kbli.json   Daftar KBLI dari Surat Pernyataan Perubahan (AHU-A009631)
```

## Mengubah konten

Hampir semua teks ada di `src/data/company.ts`. Pengelompokan KBLI ke sektor diatur oleh
fungsi `match` pada array `categories` (berdasarkan awalan kode KBLI).

## Deploy

Cara termudah: push ke GitHub, lalu import di https://vercel.com.
