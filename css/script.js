// Register Plugin GSAP
gsap.registerPlugin(ScrollTrigger);

// Scroll Smooth Lenis
let lenis;
if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

// LOGIKA BERITA
document.addEventListener("DOMContentLoaded", () => {
    const berita = [
        {
            gambar: "assets/img/desa.jpeg",
            kategori: "Kegiatan",
            tanggal: "12 agustus 2027",
            judul: "Pengabdian Desa",
            deskripsi: "deskripsi"
        },
        {
            gambar: "assets/img/peta adm.jpeg",
            kategori: "Kegiatan",
            tanggal: "12 agustus 2027",
            judul: "Peta Desa",
            deskripsi: "deskripsi"
        },
        {
            gambar: "assets/img/Seminar Nasional.jpeg",
            kategori: "seminar",
            tanggal: "12 agustus 2027",
            judul: "Seminar Nasional",
            deskripsi: "deskripsi"
        },
        {
            gambar: "assets/img/belajar.jpeg",
            kategori: "praktek",
            tanggal: "12 agustus 2027",
            judul: "Mahasiswa Yang Sedang Praktik Pemograman",
            deskripsi: "deskripsi"
        },
    ];

    const content = document.querySelector("#daftarBerita");
    if (content) {
        berita.forEach((item) => {
            const kotak = document.createElement("div");
            kotak.className = "kotak-berita";
            kotak.style.cursor = "pointer";
            kotak.addEventListener("click", () => {
                document.querySelector("#berita").style.display = "none";
                document.querySelector("#detailBerita").style.display = "block";
                document.querySelector("#detailGambar").src = item.gambar;
                document.querySelector("#detailTanggal").textContent = item.tanggal;
                document.querySelector("#detailJudul").textContent = item.judul;
                document.querySelector("#detailDeskripsi").textContent = item.deskripsi;
            });

            kotak.innerHTML = `
                <div class="gambar-berita" style="background-image: url('${item.gambar}')">
                    <div class="kategori-berita">${item.kategori}</div>
                    <button class="tombol-buka">+</button>
                    <button class="tombol-tutup">x</button>
                </div>
                <div class="isi-berita">
                    <div class="tanggal-berita">
                        <span></span>
                        <p>${item.tanggal}</p>
                    </div>
                    <h3>${item.judul}</h3>
                    <p class="deskripsi-berita">${item.deskripsi}</p>
                </div>
            `;

            const tombolBuka = kotak.querySelector(".tombol-buka");
            const tombolTutup = kotak.querySelector(".tombol-tutup");
            tombolBuka.addEventListener("click", (e) => {
                e.stopPropagation();
                kotak.classList.add("diperbesar");
            });
            tombolTutup.addEventListener("click", (e) => {
                e.stopPropagation();
                kotak.classList.remove("diperbesar");
            });

            content.appendChild(kotak);
        });
    }

    const prevBerita = document.querySelector("#prevBerita"); 
    const nextBerita = document.querySelector("#nextBerita"); 
    if (prevBerita && nextBerita && content) { 
        nextBerita.addEventListener("click", () => { 
            content.scrollBy({ left: 408, behavior: "smooth" }); 
        }); 
        prevBerita.addEventListener("click", () => { 
            content.scrollBy({ left: -408, behavior: "smooth" }); 
        }); 
    } 

    const tombolKembali = document.querySelector("#tombolKembali");
    if (tombolKembali) {
        tombolKembali.addEventListener("click", () => { 
            document.querySelector("#detailBerita").style.display = "none"; 
            document.querySelector("#berita").style.display = "block"; 
            window.scrollTo({ top: 0, behavior: "smooth" }); 
        }); 
    }
});

// ==================== ANIMASI GSAP KHUSUS SECTION ABOUT ====================
let ctxAbout = gsap.context(() => {

    // 1. Banner Parallax (Berjalan di semua halaman jika ada .banner-about)
    if (document.querySelector(".banner-about")) {
        gsap.from(".banner-img", {
            scale: 1.15,
            duration: 1.6,
            ease: "power2.out"
        });

        gsap.to(".banner-img", {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
                trigger: ".banner-about",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.from([".breadcrumb-about", ".banner-teks h2"], {
            y: 35,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });
    }

    // 2. Teks & Foto Profil (INDEX.HTML)
    if (document.querySelector(".about-isi")) {
        gsap.from(".about-teks > *", {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-isi",
                start: "top 88%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".about-foto", {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".about-isi",
                start: "top 88%",
                toggleActions: "play none none reverse"
            }
        });
    }

    // 3. Garis Pemisah
    if (document.querySelector(".garis-about")) {
        gsap.utils.toArray(".garis-about").forEach((garis) => {
            gsap.from(garis, {
                scaleX: 0,
                duration: 1.2,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: garis,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }

    // 4. Visi & Misi (VISI-MISI.HTML)
    if (document.querySelector(".visi-misi-grid")) {
        gsap.from(".kolom-visi > *", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".kolom-visi",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".kolom-misi > .nomor-section, .kolom-misi > h3", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".kolom-misi",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".list-misi li", {
            x: -35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".kolom-misi",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }

    // 5. Pimpinan Program Studi (PIMPINAN PRODI)
    if (document.querySelector(".struktur-prodi")) {
        gsap.utils.toArray(".item-struktur").forEach((item, i) => {
            const foto = item.querySelector(".foto-struktur");
            const teks = item.querySelectorAll(".teks-struktur > *");
            const dariKanan = i % 2 !== 0;

            gsap.from(foto, {
                opacity: 0,
                x: dariKanan ? 50 : -50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

            gsap.from(teks, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.12,
                delay: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }

}, ".khusus-about");

// Hover Foto About
const fotoAbout = document.querySelector(".khusus-about .about-foto img");
if (fotoAbout) {
    fotoAbout.addEventListener("mouseenter", () => {
        gsap.to(fotoAbout, { scale: 1.06, duration: 0.6, ease: "power2.out" });
    });

    fotoAbout.addEventListener("mouseleave", () => {
        gsap.to(fotoAbout, { scale: 1, duration: 0.6, ease: "power2.out" });
    });
}

// Refresh ScrollTrigger
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});


// Background Beranda
// const bgGambar = document.querySelector('.bg-gambar');

// bgGambar.addEventListener('animationend', function() {
//     bgGambar.style.animation = 'none'; 
// });

// window.addEventListener('scroll', function() {
//     const scrollY = window.scrollY;
//     const maxScroll = 400; 
    
//     if (bgGambar.style.animation !== 'none') {
//         bgGambar.style.animation = 'none';
//     }

//     const progress = Math.min(scrollY / maxScroll, 1);
    
//     if (scrollY > 0) {
//         const scaleVal = 1 - (progress * 0.15); 
//         const blurVal = progress * 10;          
//         bgGambar.style.filter = `brightness(0.3) blur(${blurVal}px)`;
//     } else {
//         bgGambar.style.filter = 'brightness(0.3) blur(0px)';
//     }
// });