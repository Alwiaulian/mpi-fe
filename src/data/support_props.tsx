export interface SupportProps {
  title: string;
  pic: string;
  address?: string;
  phone?: string;
  fax?: string;
}

export const Supports: SupportProps[] = [
  {
    title: "Notaris",
    pic: "Dini Lestari Siburian, S.H.",
    address:
      "Jalan Margasatwa Raya Komplek Mahkamah Agung Nomor 62, Jakarta Selatan 12450",
    phone: "021-75903352",
    fax: "021-75903352",
  },
  {
    title: "Biro Administrasi Efek",
    pic: "PT Raya Saham Registra",
    address:
      "Gedung Plaza Sentral Lantai 2, Jl. Jend.Sudirman Kav. 47-48 Jakarta, 12930",
    phone: "(021) 3900645, 3905920",
    fax: "(021) 3140185, 3900671",
  },
  {
    title: "Akuntan Publik",
    pic: "TANUBRATA SUTANTO FAHMI BAMBANG & REKAN Anggota BDO International Limited",
    address:
      "Prudential Tower, Lantai 17, Jl. Jend. Sudirman Kav. 79, Jakarta, 12910",
    phone: "(021) 57957300",
    fax: "(021) 57957301",
  },
];
