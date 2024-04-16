import { PrismaClient } from "@prisma/client";

export async function BranchesSeeder(prisma: PrismaClient) {
  await prisma.branches.create({
    data: {
      name: "Head Office",
      fax: "021-2708 5958",
      address:
        "Crown Bungur Arteri Lantai 2 - 4 Jl. Sultan Iskadar Muda No. 18 / Jl. Bungur No. 1 Kel.Kebayoran Lama Selatan, Kec.Kebayoran Lama, Jakarta Selatan 12220 Telp. 021-2708 5961 /64 /65 /66",
      picBranches: {
        create: [
          {
            name: "Eko Handoko",
            phone: "081513508991",
          },
          {
            name: "Rizki Arif",
            phone: "081513508991",
          },
        ],
      },
    },
  });

  await prisma.branches.createMany({
    data: [
      {
        name: "Head Office",
        fax: "021-2708 5958",
        address:
          "Crown Bungur Arteri Lantai 2 - 4 Jl. Sultan Iskadar Muda No. 18 / Jl. Bungur No. 1 Kel.Kebayoran Lama Selatan, Kec.Kebayoran Lama, Jakarta Selatan 12220 Telp. 021-2708 5961 /64 /65 /66",
      },
      {
        name: "JAKARTA 1 (021)",
        address:
          "Ruko Melawai, Jl. Ciledug Raya, No.17, RT.010/RW.04, Kel. Ulujami, Kec. Pesanggrahan, Jakarta Selatan 12250 Tlp. 021-2273-5917 ",
        fax: "021-7366-9094",
        email: "bm.jk1@mpi-pharmaniaga.co.id",
      },
      {
        name: "JAKARTA 2 (021)",
        address: "Jl. Panjang No. 83 HH, Jakarta Barat Tlp. 021-56952205/4",
        fax: "021-5633254",
        email: "bm.jk2@mpi-pharmaniaga.co.id",
      },
      {
        name: "BEKASI (021)",
        address:
          "Ruko Grand Mal Bekasi Blok D20 - D21 Tlp. 021-8855720, 8857039, 88959632",
        fax: "021-7366-9094",
        email: "bm.bks@mpi-pharmaniaga.co.id",
      },
      {
        name: "TANGERANG (021)",
        address:
          "ergudangan Sinar Hati Jl. Sinar hati No. 88 Blok H dan I kel. Sukajati, Kec. Karawaci Tangerang, Banten. Telp. 021-5576 3319, 5576 3320",
        fax: "021-7366-9094",
        email: "bm.jk1@mpi-pharmaniaga.co.id",
      },
      {
        name: "BOGOR (0251)",
        address:
          "RJl. Raya Pemda Pangkalan II No. 2, Kampung Tunggilis RT01 RW13 Kelurahan Kedunghalang, Kecamatan Bogor Utara, Kota Bogor Telp 0251 7508112 , 0251 7508113",
        fax: "021-7366-9094",
        email: "bm.jk1@mpi-pharmaniaga.co.id",
      },
      {
        name: "BANDUNG (022)",
        address: "Jl. Jend. Sudirman 656, Bandung Tlp. 022-6030371, 6034715",
        fax: "021-7366-9094",
        email: "bm.jk1@mpi-pharmaniaga.co.id",
      },
      {
        name: "CIREBON (0231)",
        address:
          "Jl. Buyut No. 28 RT 02 RW 14 Kamp. Kutasirap Kel. PEGAMBIRAN, Kec. Lemah wungkuk. Kota Cirebon. Telp (0231) 231615",
        fax: "021-7366-9094",
        email: "bm.jk1@mpi-pharmaniaga.co.id",
      },
      {
        name: "PURWOKERTO (0281)",
        address:
          "JL. KH Ahmad Dahlan No.15, RT.03, RW.02, Kel.Karangsari, Kec.Kembaran, Kab.Banyumas, Purwokerto 53182 Telepon : 0281-6577843 WA ( Order ) TOS : 0853-2529-8843  ",
        fax: "021-7366-9094",
        email: "bm.jk1@mpi-pharmaniaga.co.id",
      },
    ],
  });
}
