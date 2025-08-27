# 📝 Mood Tracker App

Mood Tracker adalah aplikasi web sederhana untuk mencatat suasana hati harian. Aplikasi ini memungkinkan pengguna untuk log mood setiap hari, menambahkan catatan singkat, dan melihat kembali riwayat mood mereka. Semua data disimpan di **localStorage**, sehingga tetap ada meskipun halaman di-refresh.

---

## 📌 Fitur Utama
- Tambah mood harian dengan rating 1-5 dan catatan opsional
- Lihat, edit, dan hapus mood sebelumnya
- Data tersimpan di localStorage (tidak hilang saat refresh)
- Emoji visual sesuai level mood
- Layout responsif, mobile-first

---

## 🛠️ Teknologi yang Digunakan
- **Next.js** – Frontend framework  
- **Tailwind CSS** – Styling modern dan responsive  
- **Zustand** – State management  
- **localStorage** – Penyimpanan data di browser

---

## 🚀 Cara Instalasi & Menjalankan Aplikasi

1. **Clone repository**
   ```bash
   git clone https://github.com/yogiprayoga1313/CAZH-FE-TEST.git
   cd mood-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan aplikasi**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Akses aplikasi**
   Buka browser dan akses `http://localhost:3000`

---

## 📂 Struktur Direktori (Ringkas)

- `src/pages/` — Halaman utama, tambah, edit mood
- `src/components/` — Komponen UI (form, list, dsb)
- `src/store/` — State management (Zustand)
- `src/styles/` — Styling (Tailwind)

---

## 💡 Catatan
- Proyek ini frontend-only, tanpa backend. Semua data disimpan di browser.
- Untuk reset data, hapus data localStorage pada browser Anda.