import kbliRaw from "./kbli.json";

export type Kbli = { kode: string; nama: string };

export const company = {
  name: "PT Citra Sinar Niaga",
  shortName: "Citra Sinar Niaga",
  tagline: "Mitra perdagangan dan jasa terpercaya untuk pertumbuhan bisnis Indonesia.",
  founder: "Rudi Hendiana",
  founded: "3 Juli 2026",
  domicile: "Kabupaten Bandung, Jawa Barat",
  address:
    "Kp. Sindangsari, RT 002, RW 012, Desa Cikasungka, Kec. Cikancung, Kabupaten Bandung, Jawa Barat 40396",
  phone: "087844080134",
  phoneIntl: "6287844080134",
  email: "citrasinarniaga@gmail.com",
  investmentStatus: "PMDN",
};

export const visi =
  "Menjadi perusahaan perdagangan dan jasa terpercaya yang menjadi mitra utama dalam pertumbuhan bisnis Indonesia, dengan komitmen penuh terhadap kualitas, inovasi, dan keberlanjutan.";

export const misi = [
  "Menyediakan produk dan jasa berkualitas tinggi",
  "Memberikan layanan pelanggan yang responsif",
  "Membangun kemitraan jangka panjang yang saling menguntungkan",
  "Berinovasi dan beradaptasi dengan perubahan pasar",
  "Berkontribusi pada pembangunan ekonomi Indonesia",
  "Menjalankan bisnis dengan etika dan tanggung jawab sosial",
];

export const legalitas = [
  {
    title: "Nomor Induk Berusaha (NIB)",
    value: "0607260074913",
    note: "Perizinan Berusaha Berbasis Risiko (OSS)",
  },
  {
    title: "SK Pengesahan Pendirian",
    value: "AHU-A101675.AH.01.30.Tahun 2026",
    note: "Kementerian Hukum RI · 3 Juli 2026",
  },
  {
    title: "SK Perubahan Badan Hukum",
    value: "AHU-A009631.AH.01.31.Tahun 2026",
    note: "Kementerian Hukum RI · 23 Juli 2026",
  },
  {
    title: "Pengusaha Kena Pajak (PKP)",
    value: "S-00267/SPPKP-CT/KPP.0914/2026",
    note: "KPP Pratama Majalaya · sejak 22 Juli 2026",
  },
  {
    title: "NPWP Perusahaan",
    value: "1000 0000 1020 6929",
    note: "Terdaftar 3 Juli 2026",
  },
];

export const kbli: Kbli[] = kbliRaw as Kbli[];

export type Category = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  match: (k: Kbli) => boolean;
};

const starts = (k: Kbli, ...prefixes: string[]) =>
  prefixes.some((p) => k.kode.startsWith(p));

export const categories: Category[] = [
  {
    slug: "pangan",
    title: "Pangan & Hasil Pertanian",
    desc: "Beras, sayur, buah, kopi, teh, daging, ikan, telur, bakeri, dan bahan pangan lainnya.",
    icon: "leaf",
    match: (k) =>
      starts(k, "4620", "4631", "4632", "4633", "4721", "4722", "4723", "4724", "4711", "46752"),
  },
  {
    slug: "tekstil",
    title: "Tekstil, Pakaian & Alas Kaki",
    desc: "Perdagangan tekstil, pakaian jadi, alas kaki, kulit, serta perlengkapan jahit.",
    icon: "shirt",
    match: (k) => starts(k, "4641", "4751", "46208"),
  },
  {
    slug: "material",
    title: "Material Bangunan",
    desc: "Semen, pasir, kaca, cat, kayu, porselen, perpipaan, dan material konstruksi lainnya.",
    icon: "building",
    match: (k) => starts(k, "4673", "47521", "46793"),
  },
  {
    slug: "teknologi",
    title: "Elektronik & Teknologi",
    desc: "Komputer, perangkat lunak, telekomunikasi, audio-video, dan suku cadang elektronik.",
    icon: "cpu",
    match: (k) => starts(k, "4651", "4652", "4740"),
  },
  {
    slug: "otomotif",
    title: "Mesin, Otomotif & Reparasi",
    desc: "Sepeda motor baru & bekas, suku cadang, mesin industri, serta jasa perawatan.",
    icon: "gear",
    match: (k) => starts(k, "4659", "4663", "95320", "33119"),
  },
  {
    slug: "jasa-boga",
    title: "Jasa Boga & Kafe",
    desc: "Katering acara, penyediaan jasa boga, kafe, dan kedai minuman.",
    icon: "cup",
    match: (k) => starts(k, "562", "5630"),
  },
  {
    slug: "jasa",
    title: "Jasa & Sumber Daya Manusia",
    desc: "Penyediaan tenaga kerja, pelatihan, kebersihan gedung, agen perjalanan, dan desain.",
    icon: "users",
    match: (k) => starts(k, "78200", "85589", "79110", "812", "46100", "74112"),
  },
  {
    slug: "ritel",
    title: "Ritel & Perdagangan Umum",
    desc: "Grosir, swalayan, furnitur, peralatan rumah tangga, alat tulis, kesehatan, dan lainnya.",
    icon: "cart",
    match: () => true,
  },
];

/** Assign every KBLI to the first category that matches it. */
export function categorize(): Record<string, Kbli[]> {
  const out: Record<string, Kbli[]> = Object.fromEntries(categories.map((c) => [c.slug, []]));
  for (const k of kbli) {
    const cat = categories.find((c) => c.match(k))!;
    out[cat.slug].push(k);
  }
  return out;
}
