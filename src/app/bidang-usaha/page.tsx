import type { Metadata } from "next";
import KbliExplorer from "@/components/KbliExplorer";
import { categories, categorize, kbli } from "@/data/company";

export const metadata: Metadata = {
  title: "Bidang Usaha",
  description: "Daftar lengkap kegiatan usaha (KBLI) PT Citra Sinar Niaga.",
};

export default function BidangUsahaPage() {
  const grouped = categorize();
  const groups = categories.map((c) => ({
    slug: c.slug,
    title: c.title,
    icon: c.icon,
    items: grouped[c.slug],
  }));

  return (
    <>
      <section className="bg-navy-950 pt-36 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold tracking-[0.3em] text-gold-400">BIDANG USAHA</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Daftar Kegiatan Usaha (KBLI)</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            {kbli.length} kegiatan usaha sesuai Surat Pernyataan Perubahan Perseroan Perorangan yang disahkan
            Kementerian Hukum RI (AHU-A009631.AH.01.31.Tahun 2026).
          </p>
        </div>
      </section>
      <KbliExplorer groups={groups} />
    </>
  );
}
