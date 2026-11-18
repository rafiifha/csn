import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={56} height={50} />
            <span className="text-lg font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{company.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gold-400">NAVIGASI</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/#tentang" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/#visi-misi" className="hover:text-white">Visi & Misi</Link></li>
            <li><Link href="/bidang-usaha" className="hover:text-white">Daftar Bidang Usaha (KBLI)</Link></li>
            <li><Link href="/#legalitas" className="hover:text-white">Legalitas</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gold-400">KONTAK</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{company.address}</li>
            <li><a href={`tel:${company.phone}`} className="hover:text-white">{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs">
        © {new Date().getFullYear()} {company.name}. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
