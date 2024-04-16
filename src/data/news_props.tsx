export interface NewsCardProps {
  img: string;
  title: string;
  desc: string;
  attachments?: Attachments[];
  createdAt: string;
}

export interface Attachments {
  title: string;
  url: string;
  createdAt: string;
}

export const NEWS: NewsCardProps[] = [
  {
    img: "/images/news/best-stock/best-stock-head.jpg",
    title: "PT MPI TBK Raih Penghargaan Best Stock Awards 2024",
    desc: `
    <p class="indent-8">
    25 Januari 2024, Jakarta - PT Millennium Pharmacon International Tbk (PT MPI) berhasil meraih penghargaan Best Stock Awards 2024 kategori sektor konsumen premier small cap yang diselanggarakan oleh investortrust.id di Hotel Artotel Mangkuluhur, Jakarta. Sebagai catatan, penilaian Best Stock Awards 2024 dilakukan terhadap 903 saham emiten yang tercatat di Bursa Efek Indonesia (BEI) hingga akhir Desember 2023. Kinerja keuangan, pertumbuhan harga saham periode Januari hingga Desember 2023 menjadi basis perhitungan, selain itu tingkat likuditas saham juga menjadi poin penting dalam menentukan pemenang Best Stock Awards 2024. 
    </p>
    <p class="indent-8">
    Direktur PT Infovesta Utama Parto Kawito membeberkan, bahwa sebelum melakukan perhitungan saham yang layak dalam pemeringkatan Best Stock Awards, pihaknya mengawali penilaian dengan menerapkan seleksi awal dengan kriteria antara lain; Emiten tercatat di IDX minimal 5 tahun, Rata-rata nilai transaksi harian dalam 1 tahun terakhir minimal Rp 1 miliar, tidak mempunyai notasi khusus dari IDX sampai batas waktu pengolahan data yang ditentukan kemudian, tidak pernah atau tidak sedang mengalami masalah hukum berdasarkan keputusan resmi dalam 3 tahun terakhir. Aspek Kinerja Keuangan diberi bobot 40% dan menggunakan 5 indikator penilaian yakni; tren pertumbuhan top line (pendapatan) dan bottom line (laba bersih), Pertumbuhan gross profit margin, pertumbuhan laba operasi, pertumbuhan arus kas dari operasi, dan pertumbuhan ROE dan ROA selama 5 tahun. 
    </p>
    <p class="indent-8">
    Terpilih nya PT MPI Tbk dalam penghargaan Best Stock Awards 2024 ini, tentu tidak lepas dari kinerja seluruh karyawan yang luar biasa telah memberikan yang terbaik untuk Perusahaan. Penghargaan ini juga mencerminkan semangat untuk terus berkembang, bergerak maju mencapai tujuan, dan dapat memberikan kontribusi positif yang berkelanjutan agar dapat terus memberikan yang terbaik untuk seluruh pemegang saham dan pemangku kepentingan lainnya.  
    </p>
    `,
    createdAt: "January 25th, 2024",
    attachments: [
      {
        title: "Best Stock Awards 2024",
        url: "/images/news/best-stock/best-stock-1.jpg",
        createdAt: "January 25th, 2024",
      },
      {
        title: "Best Stock Awards 2024",
        url: "/images/news/best-stock/best-stock-2.jpg",
        createdAt: "January 25th, 2024",
      },
    ],
  },
  {
    img: "/images/news/gala-dinner/gala-dinner-head.webp",
    title: "Gala Dinner Rakernas 2024",
    desc: `
    <p class="indent-8">

    18 Januari 2024, Yogyakarta - Gala Dinner sukses menutup perhelatan RAKERNAS 2024 PT MPI, dengan dihadiri langsung oleh Bapak Joefly Joesoef Bahroeny Presiden Komisaris PT MPI, Bapak Imam Fathorrahman Komisaris PT MPI, beserta Bapak Ahmad bin Abu Bakar Direktur Utama PT MPI, dan Bapak Mohamad Fazly bin Hassan Direktur PT MPI. 
    </p>
    <p class="indent-8">
    Bertemakan "Summer Carnival", seluruh peserta RAKERNAS kompak mengenakan kostum-kostum menarik ala karnaval di musim panas. Mulai dari kostum badut, Hawaiian, sampai baju-baju pantai lainnya yang penuh dengan warna. Acara makan malam yang dibalut dengan kemeriahan khas ala karnaval ini berhasil cairkan suasana malam penutup RAKERNAS 2024. Dalam kesempatan yang sama, Top Manajemen memberikan apresiasi atas kinerja selama tahun 2023 melalui pemberian penghargaan kepada cabang dari berbagai kategori, mulai dari Cabang Audit Terbaik, Cabang CDOB Terbaik, Salesman Terbaik Nasional, Pengurusan Pajak Terbaik, Cabang Operational Terbaik, dan Cabang Terbaik Keseluruhan (Cabang Sehat). 
    </p>
    <p class="indent-8">
    Gala Dinner ini diharapkan dapat menjadi penyegar dan memberi semangat serta warna baru bagi kepala cabang serta manajemen MPI, untuk membuka tahun ini dengan strategi-strategi yang disampaikan dalam Rakernas 2024 untuk mencapai target 5 Triliun.
    </p>
    `,
    createdAt: "January 18th, 2024",
    attachments: [
      {
        title: "Gala Dinner Rakernas 2024",
        url: "/images/news/gala-dinner/gala-dinner-1.webp",
        createdAt: "January 18th, 2024",
      },
      {
        title: "Gala Dinner Rakernas 2024",
        url: "/images/news/gala-dinner/gala-dinner-2.webp",
        createdAt: "January 18th, 2024",
      },
    ],
  },
  {
    img: "/images/news/csr/csr-head.webp",
    title: "CSR: Donasi Kepada Yaketunis Yogyakarta",
    desc: `
    <p class="indent-8">
    18 Januari 2024, Yogyakarta – PT Millennium Pharmacon International Tbk (PT MPI) melakukan kegiatan Corporate Social Responsibility (CSR) melalui pemberian donasi dengan nilai sebesar Rp 14.000.000,- kepada Yaketunis Yogyakarta. Kegiatan CSR ini merupakan bagian dari RAKERNAS PT MPI 2024 yang diselenggarakan di Daerah Istimewa Yogyakarta. 
    </p>
    <p class="indent-8">
    Yaketunis merupakan sekolah bagi anak-anak yang memiliki kelainan pada indra visualnya tidak berfungsi secara sempurna (tunanetra), baik yang low vision (kurang penglihatan) atau yang blind (buta total), serta ada anak-anak dengan tuna ganda dan autis. Selain itu juga terdapat Panti Asuhan yang merawat 40 orang anak. PT MPI memberikan donasi berupa sembako senilai Rp 4.000.000,- dan uang tunai senilai Rp 10.000.000,- serta sumbangan pribadi dari peserta Rakernas 2024 kepada Yaketunis. 
    </p>
    <p class="indent-8">
    Pemberian donasi ini, diharapkan dapat memberikan dampak yang positif dengan membantu kegiatan belajar mengajar dan pembinaan bagi anak-anak tunanetra di Yaketunis agar dapat berprestasi serta terampil untuk kemandirian di masa depan.
    </p>
    `,
    createdAt: "January 18th, 2024",
    attachments: [
      {
        title: "CSR: Donasi Kepada Yaketunis Yogyakarta",
        url: "/images/news/csr/csr-1.webp",
        createdAt: "January 18th, 2024",
      },
      {
        title: "CSR: Donasi Kepada Yaketunis Yogyakarta",
        url: "/images/news/csr/csr-2.webp",
        createdAt: "January 18th, 2024",
      },
    ],
  },
];
