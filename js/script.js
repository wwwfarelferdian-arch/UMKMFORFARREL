/* =========================================================
   Farrel UMKM Store - script.js
   ========================================================= */

/* --- PENGATURAN YANG BISA DIEDIT --- */
// Ganti dengan nomor WhatsApp asli (format: 62 + nomor tanpa angka 0 di depan).
// Contoh: 0812-3456-7890 menjadi 6281234567890
const NOMOR_WA = "6281234567890";

/* --- 1. Tombol WhatsApp ---
   Setiap tombol dengan class "wa-order" akan membuka WhatsApp
   dengan pesan otomatis. Nama produk diambil dari atribut data-produk. */
document.querySelectorAll(".wa-order").forEach(function (tombol) {
  const produk = tombol.dataset.produk;
  const pesan = produk
    ? "Halo Farrel UMKM Store, saya ingin memesan: " + produk + "."
    : "Halo Farrel UMKM Store, saya ingin bertanya tentang produk Anda.";
  tombol.href = "https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent(pesan);
  tombol.target = "_blank";
  tombol.rel = "noopener noreferrer";
});

/* --- 2. Menu navigasi untuk layar kecil --- */
const tombolMenu = document.querySelector(".menu-toggle");
const daftarMenu = document.getElementById("menu-utama");

if (tombolMenu && daftarMenu) {
  tombolMenu.addEventListener("click", function () {
    const terbuka = daftarMenu.classList.toggle("open");
    tombolMenu.setAttribute("aria-expanded", terbuka);
  });
}

/* --- 3. Animasi muncul halus saat di-scroll --- */
const elemen = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const pengamat = new IntersectionObserver(function (daftar) {
    daftar.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("show");
        pengamat.unobserve(item.target);
      }
    });
  }, { threshold: 0.15 });
  elemen.forEach(function (el) { pengamat.observe(el); });
} else {
  elemen.forEach(function (el) { el.classList.add("show"); });
}

/* --- 4. Tahun otomatis di footer --- */
const tahun = document.getElementById("tahun");
if (tahun) tahun.textContent = new Date().getFullYear();
