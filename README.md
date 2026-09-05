<<<<<<< HEAD
# Website S1 Teknik Informatika

Website ini merupakan website informasi untuk Program Studi S1 Teknik Informatika. Website dibuat untuk menampilkan berbagai informasi seputar program studi, seperti profil, visi dan misi, kegiatan, akademik, fasilitas, berita, serta informasi kontak.

# Konsep Desain

Konsep desain website dibuat dengan gaya modern, sederhana, dan tetap terlihat profesional. Warna yang digunakan terdiri dari merah, kuning, hijau, putih, dan hitam yang disesuaikan dengan identitas visual yang digunakan pada website.

Pada halaman utama terdapat hero section yang menggunakan gambar sebagai background. Bagian ini dilengkapi dengan nama program studi, deskripsi singkat.

Untuk bagian berita, informasi ditampilkan dalam bentuk card yang dapat digeser ke samping. Setiap card berisi gambar, kategori, tanggal, judul, dan deskripsi berita. Card berita juga dapat diperbesar untuk menampilkan informasi yang lebih lengkap.

Website juga dilengkapi dengan beberapa animasi pada saat pengguna melakukan scrolling. Animasi tersebut digunakan supaya tampilan website terasa lebih hidup dan tidak terlalu statis.

# Teknologi dan Library yang Digunakan

Website ini dibuat menggunakan beberapa teknologi dan library, yaitu:

- HTML5, digunakan untuk membuat struktur utama halaman website.
- CSS3, digunakan untuk mengatur tampilan, layout, warna, ukuran, serta responsive design.
- JavaScript, digunakan untuk membuat fitur website menjadi lebih interaktif.
- GSAP, digunakan untuk membuat animasi pada beberapa bagian website.
- ScrollTrigger, digunakan bersama GSAP untuk menjalankan animasi berdasarkan posisi scroll pengguna.
- Google Fonts, digunakan untuk menggunakan beberapa jenis font seperti Poppins, Plus Jakarta Sans, dan Playfair Display.
- Font Awesome, digunakan untuk icon yang terdapat pada website.

Website ini tidak menggunakan framework frontend seperti React atau Vue. Struktur utama website dibuat menggunakan HTML, CSS, dan JavaScript.

# Struktur Folder

Struktur folder yang digunakan pada project secara umum adalah sebagai berikut:

project/
│
├── index.html
├── about.html
├── fasilitas.html
├── kurikulum.html
├── visi-misi.html
├── Pimpinan-prodi.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── navbar.js
│
└── assets/
    └── img/
        ├── UMC-1.png
        ├── ujian 2.jpg
        ├── desa.jpeg
        ├── peta adm.jpeg
        ├── Seminar Nasional.jpeg
        ├── belajar.jpeg
        └── gambar lainnya

# Cara Menjalankan Website Secara Lokal

Untuk menjalankan website secara lokal, berikut langkah-langkah yang dapat dilakukan:

1. Siapkan folder project website.
2. Buka folder project menggunakan Visual Studio Code.
3. Pastikan file HTML, CSS, JavaScript, dan folder assets sudah berada pada struktur folder yang sesuai.
4. Install extension Live Server pada Visual Studio Code.
5. Buka file `index.html`.
6. Klik kanan pada file `index.html`.
7. Pilih menu `Open with Live Server`.
8. Browser akan otomatis terbuka dan menampilkan website.

Penggunaan Live Server lebih disarankan daripada membuka file HTML secara langsung karena beberapa fitur dan path file dapat berjalan lebih baik melalui local server.

# Fitur Website

Beberapa fitur yang terdapat pada website ini antara lain:

- Navbar dengan menu navigasi.
- Dropdown menu pada beberapa bagian navbar.
- Hero section pada halaman beranda.
- Informasi mengenai Program Studi S1 Teknik Informatika.
- Informasi visi dan misi.
- Informasi pimpinan program studi.
- Informasi fasilitas.
- Informasi kurikulum.
- Section berita dan kegiatan.
- Card berita yang dapat digeser secara horizontal.
- Tombol navigasi untuk berpindah antar berita.
- Animasi menggunakan GSAP dan ScrollTrigger.
- Responsive layout untuk menyesuaikan tampilan pada berbagai ukuran layar.
- Bagian kontak dan informasi lokasi kampus.
- Footer yang berisi informasi tambahan dan sosial media.

# Pengelolaan Berita

Data berita pada website saat ini dikelola melalui JavaScript. Data berita terdapat pada array `berita` di dalam file `script.js`.

Setiap berita memiliki beberapa data seperti gambar, kategori, tanggal, judul, dan deskripsi.

Contoh data berita:

{
    gambar: "assets/img/lab.jpg",
    kategori: "Kegiatan",
    tanggal: "12 Agustus 2027",
    judul: "Judul Berita",
    deskripsi: "Deskripsi singkat mengenai berita."
}

Dengan menggunakan cara tersebut, berita baru dapat ditambahkan dengan memasukkan data baru ke dalam array tanpa harus membuat card berita secara manual satu per satu di file HTML.

# Animasi Website

Animasi pada website menggunakan library GSAP dan ScrollTrigger. Animasi digunakan pada beberapa bagian seperti banner, teks, gambar, bagian visi dan misi, serta struktur program studi.

Selain itu, terdapat efek pada background halaman beranda yang memberikan perubahan tampilan ketika pengguna melakukan scrolling.

Penggunaan animasi ini bertujuan untuk membuat website terasa lebih interaktif dan menarik ketika digunakan.

# Catatan
Selama pengerjaan web ini kami ber3 menggunakan ekstensi live share untuk mengerjakan web ini secara bersamaan

Beberapa library yang digunakan pada website dipanggil melalui CDN sehingga membutuhkan koneksi internet ketika website dijalankan.

Pastikan juga file gambar yang digunakan sudah berada di dalam folder `assets/img` dan nama file serta path yang ditulis pada HTML atau JavaScript sesuai dengan nama file yang sebenarnya.

Jika terdapat gambar atau file yang tidak muncul, hal pertama yang perlu diperiksa adalah penulisan path dan lokasi file tersebut.

# Kesimpulan

Website S1 Teknik Informatika ini dibuat sebagai media informasi untuk membantu pengguna mendapatkan informasi mengenai Program Studi S1 Teknik Informatika dengan tampilan yang lebih modern dan interaktif.

Website menggabungkan HTML, CSS, JavaScript, GSAP, dan ScrollTrigger untuk menghasilkan tampilan yang tidak hanya berisi informasi, tetapi juga memiliki animasi dan interaksi yang membuat pengalaman pengguna menjadi lebih menarik.

Website ini masih dapat dikembangkan lagi ke depannya, misalnya dengan menambahkan database untuk berita, halaman admin untuk mengelola konten, sistem login, serta fitur-fitur lainnya sesuai dengan kebutuhan program studi.
=======
lomba
asli
>>>>>>> 1e51a66907fdcf3636b3068f6f0612877108dc33
