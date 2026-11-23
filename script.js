
// =====================================
// 1. MENU NAVIGASI MOBILE
// =====================================

// Mengambil elemen tombol menu dan daftar navigasi
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Membuka atau menutup menu ketika tombol diklik
menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

    // Memperbarui status aksesibilitas tombol
    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    // Mengubah simbol tombol
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// =====================================
// 2. MENUTUP MENU SETELAH DIKLIK
// =====================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// 3. NAVBAR ACTIVE LINK
// =====================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// =====================================
// 4. TAHUN OTOMATIS PADA FOOTER
// =====================================

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


// =====================================
// 5. VALIDASI FORM KONTAK
// =====================================

// Mengambil elemen form
const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {

    // Mencegah halaman melakukan reload
    event.preventDefault();

    // Mengambil nilai input
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    // Memeriksa apakah semua kolom sudah diisi
    if (name === "" || email === "" || message === "") {

        formStatus.textContent = "Mohon isi semua kolom terlebih dahulu.";

        formStatus.style.color = "red";

        return;

    }

    // Memeriksa format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formStatus.textContent = "Format email tidak valid.";

        formStatus.style.color = "red";

        return;

    }

    // Menampilkan pesan jika validasi berhasil
    formStatus.textContent =
        "Form berhasil divalidasi! Terima kasih, " + name + ".";

    formStatus.style.color = "green";

    // Mengosongkan formulir
    contactForm.reset();

});


/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const header = document.querySelector(".header");

function handleNavbarScroll() {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Jalankan saat halaman di-scroll
window.addEventListener("scroll", handleNavbarScroll);

// Periksa posisi halaman saat pertama kali dibuka
handleNavbarScroll();
