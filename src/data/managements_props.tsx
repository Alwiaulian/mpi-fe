export interface ManagementProps {
  name: string;
  position: string[];
  image: string;
  bio?: string;
  role: number;
}

export interface ManagementRoleProps {
  id: number;
  name: string;
}

export const ManagementRoles: ManagementRoleProps[] = [
  {
    id: 1,
    name: "commissioner",
  },
  {
    id: 2,
    name: "director",
  },
  {
    id: 3,
    name: "audit committee",
  },
  {
    id: 4,
    name: "national remuneration committee",
  },
  {
    id: 5,
    name: "risk managemnet",
  },
  {
    id: 6,
    name: "company structure",
  },
  {
    id: 7,
    name: "professions and supporting institutions",
  },
];

export const Managements: ManagementProps[] = [
  {
    name: "Joefly Joesoef Bahroeny",
    position: ["President Commissioner", "Independent Commissioner"],
    image: "/images/management/commissioners/joefly-joesoef-bahroeny.webp",
    role: 1,
    bio: `
    <p class="indent-8">
    Kelahiran Tanjung Pura tahun 1956, meraih gelar Magister Management Agrobisnis dari Universitas Sumatra Utara, Medan. Born in Tanjung Pura, 1956, had a Magister Management in Agrobusiness from University of North Sumatra, Medan.
    </p>
    <p class="indent-8">
    Memulai karir sejak 1982, Beliau pernah menjabat sebagai : Komisaris Utama PT. Bahruny (1983-sekarang), PT. BAPCO (1983-sekarang), PT. Bahrun & Sons (1983-sekarang), PT. Perkebunan Nusantara III (Persero), (2013-2014), PT. Perkebunan Nusantara III (Persero) Holding (2014-2017), sebagai Komisaris PT. Sisirau (1991-sekarang), PT. Teumaron (1991-sekarang), PT. Satya Agung (2005-sekarang), PT PP London Sumatra, TBK (2004-2007). Kemudian beliau juga pernah menjabat sebagai : Direktur Utama PT. Joefly J. Bahroeny (1983-sekarang), PT. PP. London Sumatra Indonesia, TBK (2007-sekarang) dan Honorary Consul The Republic of Sri Lanka (2003-sekarang). Beliau adalah anggota aktif beberapa organisasi dan saat ini menjabat sebagai Ketua Dewan Penasehat GAPKI.
    </p>
    <p class="indent-8">
    Bapak Joefly Joesoef bahroeny tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris Utama merangkap Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 29 April 2021.
    </p>
    `,
  },
  {
    name: "Sarah Azreen Binti Abdul Samat",
    position: ["Independent Commissioner"],
    image:
      "/images/management/commissioners/sarah-azreen-binti-abdul-samat.webp",
    role: 1,
    bio: `
    <p class="indent-8">
    Kelahiran WP Kuala Lumpur, Malaysia tahun 1975, meraih gelar Bachelor of Commerce (Accounting)U niversity of Canberra, Australia pada tahun 1997. Beliau mendapatkan sertifikasi akuntan dari CPA Australia sejak tahun 2008.
    </p>
    <p class="indent-8">
    Ibu Sarah Azreen binti Abdul Samat memiliki 21 tahun pengalaman di bidang keuangan perusahaan. Beliau memiliki pengalaman luas dalam transaksi yang melibatkan penerbitan ekuitas (Penawaran Umum Perdana dan pasar sekunder), merger dan akuisisi, restrukturisasi perusahaan dan penilaian perusahaan. Beliau memulai karirnya di PriceWaterhouseCoopers dan kemudian berkelana ke industri perbankan investasi dan telah menduduki berbagai posisi di Malaysian International Merchant Bankers Berhad, AmInvestment Bank Berhad, Aseambankers Malaysia Berhad (sekarang dikenal sebagai Maybank Investment Bank Berhad) serta RHB Investment Bank Berhad. Beliau adalah Direktur Eksekutif 3p Capital Advisers Sdn Bhd, sebuah perusahaan berlisensi dengan Securities Commission Malaysia dan saat ini menjabat sebagai Direktur Non-Independen Non-Eksekutif KPower Berhad (sebelumnya dikenal sebagai Kumpulan Powernet Berhad).
    </p>
    <p class="indent-8">
    Beliau tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Ibu Sarah Azreen binti Abdul Samat diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 1 November 2021.
    </p>
    `,
  },
  {
    name: "Imam Fathorrahman",
    position: ["Independent Commissioner"],
    image: "/images/management/commissioners/imam-fathorrahman.webp",
    role: 1,
    bio: `
    <p class="indent-8">
    Kelahiran Sumenep, Indonesia, 17 Juli 1964. Beliau telah menempuh pendidikan Profesi Apoteker di Universitas Airlangga pada tahun 1989, Magister Strategic Management di Sekolah Tinggi Managemen PPM pada tahun 2003, dan saat ini sedang melanjutkan pendidikan Doktoral Farmasi di Universitas Airlangga. Drs. Imam juga telah mengikuti berbagai pelatihan bergengsi seperti Digital Marketing Strategies Data, Automation, AI & Analytics 2020, di Kellogg Executive Education AS pada tahun 2020, dan Building a Capability for Breakthrough Innovation di Babson College AS pada tahun 2021.
    </p>
    <p class="indent-8">
    Mengawali karier sebagai Direktur Utama PT Kimia Farma Apotek anak perusahaan PT Kimia Farma Tbk sejak tahun 2021 s/d 2019. Selanjutnya berdasarkan Rapat Umum Pemegang Saham pada bulan September 2019 beliau diangkat sebagai Direktur Pengembangan Bisnis PT Kimia Farma Tbk s/d Agustus 2021 dan kemudian menjabat sebagai Direktur Pemasaran dan Komersial sejak Agustus 2021 s/d Mei 2022.   
    </p>
    <p class="indent-8">
    Berbagai prestasi yang telah beliau raih, diantaranya The Best Industry Marketing Champion 2021 Pharmaceutical Sector dari Markplus, Inc dalam ajang Marketeer of the Year 2021, The Best Industry Marketing Champion 2020 Pharmaceutical Sector dari Markplus, Inc dalam ajang Marketeer of the Year 2020, The Best Industry Marketing Champion 2017 kategori Pharmaceutical dari Markplus, Inc dalam ajang Marketeer of the Year 2017, dan Indonesia Marketing Champion 2013 untuk sektor Pharmaceutical dari Markplus, Inc dan Indonesia Marketing Association (IMA).  
    </p>
    <p class="indent-8">
    Beliau memiliki kemampuan dibidang Pemasaran & Penjualan, Strategis Bisnis & Manajemen Ritel, Strategi Kewirausahaan, Strategi Digital Apoteker Profesional (Apotek Klinik, Apoteker Advance), Pengembangan Bisnis Internasional / Kemitraan Strategis (Manajer Proyek JV Dawaa Arab Saudi), dan Jaringan Kesehatan (Klinik dan Rumah Sakit).  
    </p>
    <p class="indent-8">
    Bapak Imam Fathorrahman tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainya, serta pemegang saham. Beliau diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa tanggal 21 November 2022.
    </p>
    `,
  },
  {
    name: "Aman Bhakti Pulungan",
    position: ["Independent Commissioner"],
    image: "/images/management/commissioners/aman-bhakti-pulungan.webp",
    role: 1,
    bio: `
    <p class="indent-8">
    Aman B Pulungan adalah Profesor Pediatri, Direktur Eksekutif International Pediatric Association, Konsultan Senior di Endokrinologi Pediatri, Fakultas Kedokteran Universitas Indonesia, anggota NCD Child Governing Council, mantan presiden Ikatan Dokter Anak Indonesia, mantan presiden dari Asia Pacific Pediatric Association, dan mantan presiden Asia Pacific Pediatric Endocrine Society (APPES).
    </p>

    <p class="indent-8">
    Selama 26 tahun terakhir, beliau telah terlibat dalam banyak program diabetes di Indonesia dan kawasan, antara lain, sebagai pemimpin proyek dari World Diabetes Foundation tipe 1 DM di Indonesia, dan pemimpin proyek dari Changeing Diabetes in Children in Indonesia. Sebagai seorang klinisi dan peneliti, ia telah menerbitkan lebih dari 100 artikel ilmiah di berbagai jurnal internasional dan kumpulan karya tulis ilmiah, serta artikel populer.
    </p>
 
    <p class="indent-8">
    Depkes RI telah memberikan penghargaan kepadanya sebagai salah satu tokoh terkemuka yang terlibat aktif dalam program imunisasi nasional. Beliau telah menerima beasiswa kehormatan dari Asosiasi Anak Nasional Turki untuk dedikasi dan kontribusinya terhadap kesehatan anak dan beasiswa kehormatan dari Royal College of Physicians of Ireland (RCPI). Selain itu, ia juga menerima Penghargaan Tokoh Inspirasional 2021 dari Republika.co.id atas kiprahnya di bidang kesehatan anak di masa pandemi COVID-19.
    </p>
 
    <p class="indent-8">
    Beliau juga anggota dewan penasihat kesehatan The Australia-Indonesia Centre dan, divisi media dan komunikasi The Global Pediatric Endocrinology and Diabetes. Beliau memprakarsai pembentukan IKADAR, sebuah organisasi untuk keluarga dengan anak diabetes, termasuk pasien, dokter, dan pendidik. Beliau mengambil peran penting dalam pembentukan Yayasan Keluarga Hiperplasia Adrenal Bawaan (KAHAKI), Forum Keluarga Osteogenesis Imperfecta (FOSTEO), dan Turner Society Indonesia (TSI).
    </p>
 
    <p class="indent-8">
    Prof. Aman adalah anggota dari berbagai organisasi internasional seperti APPES, ESPE, ISPAD, International Fellow of American Academy of Pediatrics, GPED, DOHAD Society, dan Endocrine Society. Beliau juga bagian dari dewan redaksi International Journal of Pediatric Endocrinology, The Annals of Pediatric Endocrinology & Metabolism, dan Human Biology and Public Health.
    </p>

    <p class="indent-8">
    Minat penelitiannya meliputi profil genetik Pygmies Rampasasa di Flores, perawakan pendek dan pengerdilan, hipotiroidisme kongenital, kehidupan awal dan sindrom metabolik, serta kesehatan global. Beliau adalah pemegang hak cipta Grafik Pertumbuhan Nasional Indonesia dan Aplikasi Pediatric Online Immunization Reporting System (I-Points) dan Buku Manual.
    </p>

    <p class="indent-8">
    Prof. Aman Bhakti Pulungan tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa tanggal 21 November 2022.
    </p>
    `,
  },
  {
    name: "Zulkifli Bin Jafar",
    position: ["Commissioner"],
    role: 1,
    image: "/images/management/commissioners/zulkifli-bin-jafar.webp",
    bio: `
    <p class="indent-8">
    Encik Zulkifli bin Jafar, lahir di Johor Baru, 17 November 1972. Beliau adalah seorang Sarjana Hukum, lulus pada tahun 1996 dari International Islamic University Malaysia. Pada tahun 2022, Encik Zulkifli Jafar tersertifikasi sebagai Patent Agent, dan kini melanjutkan pendidikannya di Cambridge Judge Business School, University Of Cambridge untuk Ekonomi Sirkular dan Strategi Keberlanjutan. 
    </p>
    <p class="indent-8">
   Beliau telah memiliki perjalanan karir yang cukup panjang. Berlatar belakang hukum, karirnya dimulai sebagai Penasehat Hukum Panglima Aces Sdn Bhd (1997), Asisten Hukum Senior Messr Raslan Loong (1997-2002) dan Partner Messr Rashid Zulkifli (2002–2020). 
   </p>

   <p class="indent-8">
   Memulai karir dibidang hukum, Encik Zulkifli bin Jafar juga berkiprah didunia bisnis. Bahkan ditahun 2017, beliau dianugerahi penghargaan Anugerah Mahkota Wilayah (AMW). Beliau pernah menjabat sebagai Direktur Cooperative Commission of Malaysia (2018–2010), Direktur Songa Offshore Malaysia Sdn Bhd (2012–2015), Chairman Idaman Manufacturing Sdn Bhd (2020–2022), Kepala Komite Tender Pharmaniaga Berhad (2020–2022), dan juga sebagai Anggota Komite (Komite Nominasi dan Remunerasi, Komite Audit, Komite Dewan Manajemen Resiko) Pharmaniaga Berhad (2020–2022).
   </p>

   <p class="indent-8">
   Saat ini beliau menjabat berbagai posisi strategis, diantaranya Chairman dan Direktur Era Universe Development Sdn Bhd sejak 2014, Dewan Kepercayaan Foundation of Research and Transformation (Kantor Perdana Mentri) sejak 2015, Penasehat Hukum Johor State GLC sejak 2016, Direktur Aladdin Group Sdn Bhd sejak 2016, Direktur Pharmaniaga Berhad (PLC) sejak 2020, dan sejak 2022 beliau menjabat sebagai Direktur Exsekutif Grup Pharmaniaga Berhad.  
   </p>

   <p class="indent-8">
    Bapak Zulkifli bin Jafar tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 25 Mei 2023.
    </p>
    `,
  },
  {
    name: "Ahmad Bin Abu Bakar",
    position: ["President Director"],
    image: "/images/management/director/ahmad-bin-abu-bakar.webp",
    role: 2,
    bio: `
   <p class="indent-8">
    Bapak Ahmad bin Abu Bakar berkewarganegaraan Malaysia dan seorang apoteker terdaftar di Malaysia. Beliau lulus dengan Sarjana Farmasi (BPharm.Hons) dari Universitas Bradford, Inggris Raya pada tahun 1993, dan telah menghabiskan satu tahun sebagai apoteker pendaftaran awal di Bradford Royal Infirmary dan Lipha Pharmaceutical Ltd, Inggris Raya. Malaysian. Beliau memiliki lebih dari 25 tahun pengalaman farmasi dan telah bekerja di berbagai bidang farmasi yaitu apotek ritel & grosir, manufaktur, rumah sakit swasta dan mengajar paruh waktu untuk siswa yang mengejar Diploma Farmasi.
    </p>
    
    <p class="indent-8">
    Beliau telah bekerja dengan Pharmaniaga selama 7 tahun sebelum bergabung dengan MPI. Beliau adalah Manajer Cabang / Wakil Manajer Senior Pharmaniaga Logistics Sdn Bhd (Cabang Utara, Penang) yang bertanggung jawab menjalankan dan mengelola operasi logistik dan distribusi cabang untuk melayani pelanggan terutama di 4 negara bagian utara Semenanjung Malaysia.
    </p>

   <p class="indent-8">
    Bapak Ahmad bin Abu Bakar tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi, serta pemegang saham. Beliau diangkat sebagai Direktur Perseroan pada Rapat Umum Pemegang Saham Luar Biasa berdasarkan Akta Pernyataan Keputusan Rapat Nomor 161 tanggal 16 Juli 2020.  
    </p>
    `,
  },
  {
    name: "Mohamad Fazly Bin Hasan",
    position: ["Director"],
    role: 2,
    image: "/images/management/director/mohamad-fazly-bin-hassan.webp",
    bio: `
    <p class="indent-8">
    Bapak Mohamad Fazly bin Hassan berkerwarganegaraan Malaysia dan lahir pada tahun 1974. Meraih gelar Sarjana Akuntansi dari University of Technology of MARA pada tahun 1998 dan merupakan Chartered Accountant dari Malaysia Institute of Accountant.
    </p>
  
    <p class="indent-8">
    Bapak Mohomad Fazly memulai karirnya pada tahun 2001 sebagai Auditor di Kantor Akuntan Publik dan pada tahun 2003 hingga 2007 bekerja di ACP Industries Berhad dengan jabatan terakhir sebagai Akuntan dan ditugaskan di New Delhi, India untuk membantu anak perusahaan disana.
    </p>
  
    <p class="indent-8">
    Pada tahun 2007 Sampai dengan tahun 2014, beliau bekerja di Perusahaan Otomobil Nasional Sdn Berhad, produsen mobil merek PROTON dengan jabatan terakhir sebagai Senior Manager, Group Reporting (Finance) sebelum ditugaskan ke salah satu anak perusahaan di Indonesia. Bapak Mohamad Fazly telah terlibat dalam beberapa kegiatan restrukturisasi dan sering ditugaskan untuk membantu anak perusahaan Perseroan, termasuk anak perusahaan PROTON di Inggris, Lotus Group International Limited.
    </p>
  
    <p class="indent-8">
    Sejak tahun 2014 hingga terakhir sebelum bergabung dengan PT Millennium Pharmacon International Tbk, beliau bekerja di PT Proton Edar Indonesia, anak perusahaan PROTON yang berkedudukan di Jakarta dengan jabatan terakhir sebagai Direktur Keuangan dan satu-satunya Direktur di Perseroan. Bapak Mohamad Fazly adalah seorang penggila olahraga dan berpartisipasi dalam beberapa acara maraton dan ultra maraton di dalam dan luar negeri.
    </p>

    <p class="indent-8">
    Bapak Mohamad Fazly bin Hassan tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi, serta pemegang saham. Beliau diangkat sebagai Direktur Perseroan pada Rapat Umum Pemegang Saham Luar Biasa berdasarkan Akta Pernyataan Keputusan Rapat Nomor 161 tanggal 16 Juli 2020. 
    </p>
    `,
  },
  {
    name: "Sarah Azreen Binti Abdul Samat",
    position: ["chairman of the audit committee"],
    image:
      "/images/management/commissioners/sarah-azreen-binti-abdul-samat.webp",
    role: 3,
    bio: `
    <p class="indent-8">
    Kelahiran WP Kuala Lumpur, Malaysia tahun 1975, meraih gelar Bachelor of Commerce (Accounting)U niversity of Canberra, Australia pada tahun 1997. Beliau mendapatkan sertifikasi akuntan dari CPA Australia sejak tahun 2008.
    </p>
    <p class="indent-8">
    Ibu Sarah Azreen binti Abdul Samat memiliki 21 tahun pengalaman di bidang keuangan perusahaan. Beliau memiliki pengalaman luas dalam transaksi yang melibatkan penerbitan ekuitas (Penawaran Umum Perdana dan pasar sekunder), merger dan akuisisi, restrukturisasi perusahaan dan penilaian perusahaan. Beliau memulai karirnya di PriceWaterhouseCoopers dan kemudian berkelana ke industri perbankan investasi dan telah menduduki berbagai posisi di Malaysian International Merchant Bankers Berhad, AmInvestment Bank Berhad, Aseambankers Malaysia Berhad (sekarang dikenal sebagai Maybank Investment Bank Berhad) serta RHB Investment Bank Berhad. Beliau adalah Direktur Eksekutif 3p Capital Advisers Sdn Bhd, sebuah perusahaan berlisensi dengan Securities Commission Malaysia dan saat ini menjabat sebagai Direktur Non-Independen Non-Eksekutif KPower Berhad (sebelumnya dikenal sebagai Kumpulan Powernet Berhad).
    </p>
    <p class="indent-8">
    Beliau tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Ibu Sarah Azreen binti Abdul Samat diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 1 November 2021.
    </p>
    `,
  },
  {
    name: "Zulkifli Bin Jafar",
    position: ["audit committee members"],
    role: 3,
    image: "/images/management/commissioners/zulkifli-bin-jafar.webp",
    bio: `
    <p class="indent-8">
    Encik Zulkifli bin Jafar, lahir di Johor Baru, 17 November 1972. Beliau adalah seorang Sarjana Hukum, lulus pada tahun 1996 dari International Islamic University Malaysia. Pada tahun 2022, Encik Zulkifli Jafar tersertifikasi sebagai Patent Agent, dan kini melanjutkan pendidikannya di Cambridge Judge Business School, University Of Cambridge untuk Ekonomi Sirkular dan Strategi Keberlanjutan. 
    </p>
    <p class="indent-8">
   Beliau telah memiliki perjalanan karir yang cukup panjang. Berlatar belakang hukum, karirnya dimulai sebagai Penasehat Hukum Panglima Aces Sdn Bhd (1997), Asisten Hukum Senior Messr Raslan Loong (1997-2002) dan Partner Messr Rashid Zulkifli (2002–2020). 
   </p>

   <p class="indent-8">
   Memulai karir dibidang hukum, Encik Zulkifli bin Jafar juga berkiprah didunia bisnis. Bahkan ditahun 2017, beliau dianugerahi penghargaan Anugerah Mahkota Wilayah (AMW). Beliau pernah menjabat sebagai Direktur Cooperative Commission of Malaysia (2018–2010), Direktur Songa Offshore Malaysia Sdn Bhd (2012–2015), Chairman Idaman Manufacturing Sdn Bhd (2020–2022), Kepala Komite Tender Pharmaniaga Berhad (2020–2022), dan juga sebagai Anggota Komite (Komite Nominasi dan Remunerasi, Komite Audit, Komite Dewan Manajemen Resiko) Pharmaniaga Berhad (2020–2022).
   </p>

   <p class="indent-8">
   Saat ini beliau menjabat berbagai posisi strategis, diantaranya Chairman dan Direktur Era Universe Development Sdn Bhd sejak 2014, Dewan Kepercayaan Foundation of Research and Transformation (Kantor Perdana Mentri) sejak 2015, Penasehat Hukum Johor State GLC sejak 2016, Direktur Aladdin Group Sdn Bhd sejak 2016, Direktur Pharmaniaga Berhad (PLC) sejak 2020, dan sejak 2022 beliau menjabat sebagai Direktur Exsekutif Grup Pharmaniaga Berhad.  
   </p>

   <p class="indent-8">
    Bapak Zulkifli bin Jafar tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 25 Mei 2023.
    </p>
    `,
  },
  {
    name: "Imam Fathorrahman",
    position: ["audit committee members"],
    image: "/images/management/commissioners/imam-fathorrahman.webp",
    role: 3,
    bio: `
    <p class="indent-8">
    Kelahiran Sumenep, Indonesia, 17 Juli 1964. Beliau telah menempuh pendidikan Profesi Apoteker di Universitas Airlangga pada tahun 1989, Magister Strategic Management di Sekolah Tinggi Managemen PPM pada tahun 2003, dan saat ini sedang melanjutkan pendidikan Doktoral Farmasi di Universitas Airlangga. Drs. Imam juga telah mengikuti berbagai pelatihan bergengsi seperti Digital Marketing Strategies Data, Automation, AI & Analytics 2020, di Kellogg Executive Education AS pada tahun 2020, dan Building a Capability for Breakthrough Innovation di Babson College AS pada tahun 2021.
    </p>
    <p class="indent-8">
    Mengawali karier sebagai Direktur Utama PT Kimia Farma Apotek anak perusahaan PT Kimia Farma Tbk sejak tahun 2021 s/d 2019. Selanjutnya berdasarkan Rapat Umum Pemegang Saham pada bulan September 2019 beliau diangkat sebagai Direktur Pengembangan Bisnis PT Kimia Farma Tbk s/d Agustus 2021 dan kemudian menjabat sebagai Direktur Pemasaran dan Komersial sejak Agustus 2021 s/d Mei 2022.   
    </p>
    <p class="indent-8">
    Berbagai prestasi yang telah beliau raih, diantaranya The Best Industry Marketing Champion 2021 Pharmaceutical Sector dari Markplus, Inc dalam ajang Marketeer of the Year 2021, The Best Industry Marketing Champion 2020 Pharmaceutical Sector dari Markplus, Inc dalam ajang Marketeer of the Year 2020, The Best Industry Marketing Champion 2017 kategori Pharmaceutical dari Markplus, Inc dalam ajang Marketeer of the Year 2017, dan Indonesia Marketing Champion 2013 untuk sektor Pharmaceutical dari Markplus, Inc dan Indonesia Marketing Association (IMA).  
    </p>
    <p class="indent-8">
    Beliau memiliki kemampuan dibidang Pemasaran & Penjualan, Strategis Bisnis & Manajemen Ritel, Strategi Kewirausahaan, Strategi Digital Apoteker Profesional (Apotek Klinik, Apoteker Advance), Pengembangan Bisnis Internasional / Kemitraan Strategis (Manajer Proyek JV Dawaa Arab Saudi), dan Jaringan Kesehatan (Klinik dan Rumah Sakit).  
    </p>
    <p class="indent-8">
    Bapak Imam Fathorrahman tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainya, serta pemegang saham. Beliau diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa tanggal 21 November 2022.
    </p>
    `,
  },
  {
    name: "Ary Gunawan",
    position: ["audit committee members"],
    image: "/images/management/committee/ari-gunawan.webp",
    role: 3,
    bio: `
    <p class="indent-8">
      Pendidikan 
    </p>

    <ul>
      <li>  
        Akademi Meteorologi & Geofisika di Jakarta
      </li>
      <li>
        STIE Bisnis Indonesia di Jakarta 
      </li>
      <li>
        Magister Administrasi Bisnis di IPWI Jakarta 
      </li>
      <li>
        Meteorology & Geophysic Academy at Jakarta 
      </li>
      <li>
        STIE Business Indonesia at Jakarta 
      </li>
      <li>
        Master Business Administration at IPWI Jakarta Dasar Pengangkatan (Anggota Komite Audit) 
      </li>
      <li>
        No 007/SK-DK/MPI/2022 Tanggal 16 Desember 2022 
      </li>
    </ul>
    
    <p class="indent-8">
      Pengalaman Kerja 
    </p>

    <ul>
      <li>
        Pendiri & pemilik www.rajaalkes.com 2014-sekarang
      </li>
      <li>
      Komisaris Utama, PT Bio Axion Healthindo 2015-2021
      </li>
      <li>
      Direktur Utama, PT Bioaxi Medika Healthindo 2018-2021
      </li>
      <li>
      Komisaris Utama, PT Woori Bio Corpora 2018-sekarang
      </li>
      <li>
      Managing Director, PT Wooribio Antamax Indonesia 2022-sekarang 
      </li>
      <li>
      Founder & owner www.rajaalkes.com 2014-present
      </li>
      <li>
      President Commissioner, PT Bio Axion Healthindo 2015-2021
      </li>
      <li>
      President Director, PT Bioaxi Medika Healthindo 2018-2021
      </li>
      <li>
      President Commissioner, PT Woori Bio Corpora 2018-present
      </li>
      <li>
      Managing Director, PT Wooribio Antamax Indonesia 2022-present
      </ul>
    </ul>
    `,
  },
  {
    name: "Joefly Joesoef Bahroeny",
    position: [
      "CHAIRMAN OF THE NOMINATION AND REMUNERATION COMMITTEE".toLowerCase(),
    ],
    image: "/images/management/commissioners/joefly-joesoef-bahroeny.webp",
    role: 4,
    bio: `
    <p class="indent-8">
    Kelahiran Tanjung Pura tahun 1956, meraih gelar Magister Management Agrobisnis dari Universitas Sumatra Utara, Medan. Born in Tanjung Pura, 1956, had a Magister Management in Agrobusiness from University of North Sumatra, Medan.
    </p>
    <p class="indent-8">
    Memulai karir sejak 1982, Beliau pernah menjabat sebagai : Komisaris Utama PT. Bahruny (1983-sekarang), PT. BAPCO (1983-sekarang), PT. Bahrun & Sons (1983-sekarang), PT. Perkebunan Nusantara III (Persero), (2013-2014), PT. Perkebunan Nusantara III (Persero) Holding (2014-2017), sebagai Komisaris PT. Sisirau (1991-sekarang), PT. Teumaron (1991-sekarang), PT. Satya Agung (2005-sekarang), PT PP London Sumatra, TBK (2004-2007). Kemudian beliau juga pernah menjabat sebagai : Direktur Utama PT. Joefly J. Bahroeny (1983-sekarang), PT. PP. London Sumatra Indonesia, TBK (2007-sekarang) dan Honorary Consul The Republic of Sri Lanka (2003-sekarang). Beliau adalah anggota aktif beberapa organisasi dan saat ini menjabat sebagai Ketua Dewan Penasehat GAPKI.
    </p>
    <p class="indent-8">
    Bapak Joefly Joesoef bahroeny tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris Utama merangkap Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 29 April 2021.
    </p>
    `,
  },
  {
    name: "Aman Bhakti Pulungan",
    position: [
      "MEMBERS OF THE NOMINATION AND REMUNERATION COMMITTEE".toLowerCase(),
    ],
    image: "/images/management/commissioners/aman-bhakti-pulungan.webp",
    role: 4,
    bio: `
    <p class="indent-8">
    Aman B Pulungan adalah Profesor Pediatri, Direktur Eksekutif International Pediatric Association, Konsultan Senior di Endokrinologi Pediatri, Fakultas Kedokteran Universitas Indonesia, anggota NCD Child Governing Council, mantan presiden Ikatan Dokter Anak Indonesia, mantan presiden dari Asia Pacific Pediatric Association, dan mantan presiden Asia Pacific Pediatric Endocrine Society (APPES).
    </p>

    <p class="indent-8">
    Selama 26 tahun terakhir, beliau telah terlibat dalam banyak program diabetes di Indonesia dan kawasan, antara lain, sebagai pemimpin proyek dari World Diabetes Foundation tipe 1 DM di Indonesia, dan pemimpin proyek dari Changeing Diabetes in Children in Indonesia. Sebagai seorang klinisi dan peneliti, ia telah menerbitkan lebih dari 100 artikel ilmiah di berbagai jurnal internasional dan kumpulan karya tulis ilmiah, serta artikel populer.
    </p>
 
    <p class="indent-8">
    Depkes RI telah memberikan penghargaan kepadanya sebagai salah satu tokoh terkemuka yang terlibat aktif dalam program imunisasi nasional. Beliau telah menerima beasiswa kehormatan dari Asosiasi Anak Nasional Turki untuk dedikasi dan kontribusinya terhadap kesehatan anak dan beasiswa kehormatan dari Royal College of Physicians of Ireland (RCPI). Selain itu, ia juga menerima Penghargaan Tokoh Inspirasional 2021 dari Republika.co.id atas kiprahnya di bidang kesehatan anak di masa pandemi COVID-19.
    </p>
 
    <p class="indent-8">
    Beliau juga anggota dewan penasihat kesehatan The Australia-Indonesia Centre dan, divisi media dan komunikasi The Global Pediatric Endocrinology and Diabetes. Beliau memprakarsai pembentukan IKADAR, sebuah organisasi untuk keluarga dengan anak diabetes, termasuk pasien, dokter, dan pendidik. Beliau mengambil peran penting dalam pembentukan Yayasan Keluarga Hiperplasia Adrenal Bawaan (KAHAKI), Forum Keluarga Osteogenesis Imperfecta (FOSTEO), dan Turner Society Indonesia (TSI).
    </p>
 
    <p class="indent-8">
    Prof. Aman adalah anggota dari berbagai organisasi internasional seperti APPES, ESPE, ISPAD, International Fellow of American Academy of Pediatrics, GPED, DOHAD Society, dan Endocrine Society. Beliau juga bagian dari dewan redaksi International Journal of Pediatric Endocrinology, The Annals of Pediatric Endocrinology & Metabolism, dan Human Biology and Public Health.
    </p>

    <p class="indent-8">
    Minat penelitiannya meliputi profil genetik Pygmies Rampasasa di Flores, perawakan pendek dan pengerdilan, hipotiroidisme kongenital, kehidupan awal dan sindrom metabolik, serta kesehatan global. Beliau adalah pemegang hak cipta Grafik Pertumbuhan Nasional Indonesia dan Aplikasi Pediatric Online Immunization Reporting System (I-Points) dan Buku Manual.
    </p>

    <p class="indent-8">
    Prof. Aman Bhakti Pulungan tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa tanggal 21 November 2022.
    </p>
    `,
  },
  {
    name: "Imam Fathorrahman",
    position: [
      "MEMBERS OF THE NOMINATION AND REMUNERATION COMMITTEE".toLowerCase(),
    ],
    image: "/images/management/commissioners/imam-fathorrahman.webp",
    role: 4,
    bio: `
    <p class="indent-8">
    Kelahiran Sumenep, Indonesia, 17 Juli 1964. Beliau telah menempuh pendidikan Profesi Apoteker di Universitas Airlangga pada tahun 1989, Magister Strategic Management di Sekolah Tinggi Managemen PPM pada tahun 2003, dan saat ini sedang melanjutkan pendidikan Doktoral Farmasi di Universitas Airlangga. Drs. Imam juga telah mengikuti berbagai pelatihan bergengsi seperti Digital Marketing Strategies Data, Automation, AI & Analytics 2020, di Kellogg Executive Education AS pada tahun 2020, dan Building a Capability for Breakthrough Innovation di Babson College AS pada tahun 2021.
    </p>
    <p class="indent-8">
    Mengawali karier sebagai Direktur Utama PT Kimia Farma Apotek anak perusahaan PT Kimia Farma Tbk sejak tahun 2021 s/d 2019. Selanjutnya berdasarkan Rapat Umum Pemegang Saham pada bulan September 2019 beliau diangkat sebagai Direktur Pengembangan Bisnis PT Kimia Farma Tbk s/d Agustus 2021 dan kemudian menjabat sebagai Direktur Pemasaran dan Komersial sejak Agustus 2021 s/d Mei 2022.   
    </p>
    <p class="indent-8">
    Berbagai prestasi yang telah beliau raih, diantaranya The Best Industry Marketing Champion 2021 Pharmaceutical Sector dari Markplus, Inc dalam ajang Marketeer of the Year 2021, The Best Industry Marketing Champion 2020 Pharmaceutical Sector dari Markplus, Inc dalam ajang Marketeer of the Year 2020, The Best Industry Marketing Champion 2017 kategori Pharmaceutical dari Markplus, Inc dalam ajang Marketeer of the Year 2017, dan Indonesia Marketing Champion 2013 untuk sektor Pharmaceutical dari Markplus, Inc dan Indonesia Marketing Association (IMA).  
    </p>
    <p class="indent-8">
    Beliau memiliki kemampuan dibidang Pemasaran & Penjualan, Strategis Bisnis & Manajemen Ritel, Strategi Kewirausahaan, Strategi Digital Apoteker Profesional (Apotek Klinik, Apoteker Advance), Pengembangan Bisnis Internasional / Kemitraan Strategis (Manajer Proyek JV Dawaa Arab Saudi), dan Jaringan Kesehatan (Klinik dan Rumah Sakit).  
    </p>
    <p class="indent-8">
    Bapak Imam Fathorrahman tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainya, serta pemegang saham. Beliau diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa tanggal 21 November 2022.
    </p>
    `,
  },
  {
    name: "Zulkifli Bin Jafar",
    position: ["Chairman Of The Risk Management Committee"],
    role: 5,
    image: "/images/management/commissioners/zulkifli-bin-jafar.webp",
    bio: `
    <p class="indent-8">
    Encik Zulkifli bin Jafar, lahir di Johor Baru, 17 November 1972. Beliau adalah seorang Sarjana Hukum, lulus pada tahun 1996 dari International Islamic University Malaysia. Pada tahun 2022, Encik Zulkifli Jafar tersertifikasi sebagai Patent Agent, dan kini melanjutkan pendidikannya di Cambridge Judge Business School, University Of Cambridge untuk Ekonomi Sirkular dan Strategi Keberlanjutan. 
    </p>
    <p class="indent-8">
   Beliau telah memiliki perjalanan karir yang cukup panjang. Berlatar belakang hukum, karirnya dimulai sebagai Penasehat Hukum Panglima Aces Sdn Bhd (1997), Asisten Hukum Senior Messr Raslan Loong (1997-2002) dan Partner Messr Rashid Zulkifli (2002–2020). 
   </p>

   <p class="indent-8">
   Memulai karir dibidang hukum, Encik Zulkifli bin Jafar juga berkiprah didunia bisnis. Bahkan ditahun 2017, beliau dianugerahi penghargaan Anugerah Mahkota Wilayah (AMW). Beliau pernah menjabat sebagai Direktur Cooperative Commission of Malaysia (2018–2010), Direktur Songa Offshore Malaysia Sdn Bhd (2012–2015), Chairman Idaman Manufacturing Sdn Bhd (2020–2022), Kepala Komite Tender Pharmaniaga Berhad (2020–2022), dan juga sebagai Anggota Komite (Komite Nominasi dan Remunerasi, Komite Audit, Komite Dewan Manajemen Resiko) Pharmaniaga Berhad (2020–2022).
   </p>

   <p class="indent-8">
   Saat ini beliau menjabat berbagai posisi strategis, diantaranya Chairman dan Direktur Era Universe Development Sdn Bhd sejak 2014, Dewan Kepercayaan Foundation of Research and Transformation (Kantor Perdana Mentri) sejak 2015, Penasehat Hukum Johor State GLC sejak 2016, Direktur Aladdin Group Sdn Bhd sejak 2016, Direktur Pharmaniaga Berhad (PLC) sejak 2020, dan sejak 2022 beliau menjabat sebagai Direktur Exsekutif Grup Pharmaniaga Berhad.  
   </p>

   <p class="indent-8">
    Bapak Zulkifli bin Jafar tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 25 Mei 2023.
    </p>
    `,
  },
  {
    name: "Sarah Azreen Binti Abdul Samat",
    position: ["Risk Management Committee Members"],
    image:
      "/images/management/commissioners/sarah-azreen-binti-abdul-samat.webp",
    role: 5,
    bio: `
    <p class="indent-8">
    Kelahiran WP Kuala Lumpur, Malaysia tahun 1975, meraih gelar Bachelor of Commerce (Accounting)U niversity of Canberra, Australia pada tahun 1997. Beliau mendapatkan sertifikasi akuntan dari CPA Australia sejak tahun 2008.
    </p>
    <p class="indent-8">
    Ibu Sarah Azreen binti Abdul Samat memiliki 21 tahun pengalaman di bidang keuangan perusahaan. Beliau memiliki pengalaman luas dalam transaksi yang melibatkan penerbitan ekuitas (Penawaran Umum Perdana dan pasar sekunder), merger dan akuisisi, restrukturisasi perusahaan dan penilaian perusahaan. Beliau memulai karirnya di PriceWaterhouseCoopers dan kemudian berkelana ke industri perbankan investasi dan telah menduduki berbagai posisi di Malaysian International Merchant Bankers Berhad, AmInvestment Bank Berhad, Aseambankers Malaysia Berhad (sekarang dikenal sebagai Maybank Investment Bank Berhad) serta RHB Investment Bank Berhad. Beliau adalah Direktur Eksekutif 3p Capital Advisers Sdn Bhd, sebuah perusahaan berlisensi dengan Securities Commission Malaysia dan saat ini menjabat sebagai Direktur Non-Independen Non-Eksekutif KPower Berhad (sebelumnya dikenal sebagai Kumpulan Powernet Berhad).
    </p>
    <p class="indent-8">
    Beliau tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Ibu Sarah Azreen binti Abdul Samat diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa pada tanggal 1 November 2021.
    </p>
    `,
  },
  {
    name: "Aman Bhakti Pulungan",
    position: ["Risk Management Committee Members"],
    image: "/images/management/commissioners/aman-bhakti-pulungan.webp",
    role: 5,
    bio: `
    <p class="indent-8">
    Aman B Pulungan adalah Profesor Pediatri, Direktur Eksekutif International Pediatric Association, Konsultan Senior di Endokrinologi Pediatri, Fakultas Kedokteran Universitas Indonesia, anggota NCD Child Governing Council, mantan presiden Ikatan Dokter Anak Indonesia, mantan presiden dari Asia Pacific Pediatric Association, dan mantan presiden Asia Pacific Pediatric Endocrine Society (APPES).
    </p>

    <p class="indent-8">
    Selama 26 tahun terakhir, beliau telah terlibat dalam banyak program diabetes di Indonesia dan kawasan, antara lain, sebagai pemimpin proyek dari World Diabetes Foundation tipe 1 DM di Indonesia, dan pemimpin proyek dari Changeing Diabetes in Children in Indonesia. Sebagai seorang klinisi dan peneliti, ia telah menerbitkan lebih dari 100 artikel ilmiah di berbagai jurnal internasional dan kumpulan karya tulis ilmiah, serta artikel populer.
    </p>
 
    <p class="indent-8">
    Depkes RI telah memberikan penghargaan kepadanya sebagai salah satu tokoh terkemuka yang terlibat aktif dalam program imunisasi nasional. Beliau telah menerima beasiswa kehormatan dari Asosiasi Anak Nasional Turki untuk dedikasi dan kontribusinya terhadap kesehatan anak dan beasiswa kehormatan dari Royal College of Physicians of Ireland (RCPI). Selain itu, ia juga menerima Penghargaan Tokoh Inspirasional 2021 dari Republika.co.id atas kiprahnya di bidang kesehatan anak di masa pandemi COVID-19.
    </p>
 
    <p class="indent-8">
    Beliau juga anggota dewan penasihat kesehatan The Australia-Indonesia Centre dan, divisi media dan komunikasi The Global Pediatric Endocrinology and Diabetes. Beliau memprakarsai pembentukan IKADAR, sebuah organisasi untuk keluarga dengan anak diabetes, termasuk pasien, dokter, dan pendidik. Beliau mengambil peran penting dalam pembentukan Yayasan Keluarga Hiperplasia Adrenal Bawaan (KAHAKI), Forum Keluarga Osteogenesis Imperfecta (FOSTEO), dan Turner Society Indonesia (TSI).
    </p>
 
    <p class="indent-8">
    Prof. Aman adalah anggota dari berbagai organisasi internasional seperti APPES, ESPE, ISPAD, International Fellow of American Academy of Pediatrics, GPED, DOHAD Society, dan Endocrine Society. Beliau juga bagian dari dewan redaksi International Journal of Pediatric Endocrinology, The Annals of Pediatric Endocrinology & Metabolism, dan Human Biology and Public Health.
    </p>

    <p class="indent-8">
    Minat penelitiannya meliputi profil genetik Pygmies Rampasasa di Flores, perawakan pendek dan pengerdilan, hipotiroidisme kongenital, kehidupan awal dan sindrom metabolik, serta kesehatan global. Beliau adalah pemegang hak cipta Grafik Pertumbuhan Nasional Indonesia dan Aplikasi Pediatric Online Immunization Reporting System (I-Points) dan Buku Manual.
    </p>

    <p class="indent-8">
    Prof. Aman Bhakti Pulungan tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris dan/atau anggota Direksi lainnya, serta pemegang saham. Beliau diangkat menjadi Komisaris Independen PT Millennium Pharmacon International Tbk pada Rapat Umum Pemegang Saham Luar Biasa tanggal 21 November 2022.
    </p>
    `,
  },
  {
    name: "OLGA INDRIA BOLANG",
    position: ["Company Secretary"],
    image: "/images/management/olga.webp",
    role: 6,
    bio: `
    <p class="indent-8">
    Pendidikan : Prof. Dr. Moestopo (Beragama) University Jakarta, Sarjana Ekonomi (2009) 
    </p>
    <p class="indent-8">
    Dasar Hukum Pengangkatan  Surat Penunjukkan 234/ MPI/DIR/X/2019 tanggal 7 Oktober 2019 </p>
    <p class="indent-8">
Beliau bergabung dengan Perseroan pada tahun 2017 sebagai Manajer Operasi Keuangan sebelum mengemban tugas sebagai Sekretaris Perseroan pada tahun 2019. Sebelum bergabung dengan Perseroan, beliau pernah menjabat sebagai Manajer Administrasi & Keuangan PT Mega Pharmaniaga pada tahun 2013, Manajer Keuangan di PT Harindo Mitragas Utama pada tahun 2008 dan bekerja sebagai sekretaris di PT Indobel Qualita Usaha pada tahun 2002 hingga 2007. Beliau sebelumnya bekerja sebagai staff administrasi di PT Sampurna Kartika Cakra Dwika, 1998 hingga 2002. Pada tahun 1997 beliau bekerja sebagai staff processing di Citibank, na. Awal karir beliau dimulai pada tahun 1996 sebagai staf administrasi di Securicor Indonesia.</p>
    `,
  },
];
