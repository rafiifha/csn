import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { categories, categorize, company, kbli, legalitas, misi, visi } from "@/data/company";

export default function Home() {
  const grouped = categorize();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-950">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="absolute -bottom-1 right-0 -z-10 h-40 w-2/3 bg-gold-400 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
        <div className="absolute -bottom-1 left-0 -z-10 h-24 w-full bg-cream [clip-path:polygon(0_40%,100%_100%,0_100%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-24 pb-32 lg:grid-cols-[1.3fr_1fr] lg:px-8">
          <div>
            <p className="mb-5 inline-block rounded-full border border-gold-400/40 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-gold-300">
              COMPANY PROFILE
            </p>
            <h1 className="text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
              PT. <span className="gold-text">Citra Sinar Niaga</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{company.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#bidang-usaha"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 font-semibold text-navy-950 transition hover:bg-gold-300"
              >
                Lihat Bidang Usaha <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${company.phoneIntl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-gold-400 hover:text-gold-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <Image
              src="/logo.png"
              alt="Logo PT Citra Sinar Niaga"
              width={380}
              height={341}
              className="drop-shadow-[0_20px_50px_rgba(245,184,74,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy-900/10 shadow-xl lg:grid-cols-4">
          {[
            { v: `${kbli.length}`, l: "Bidang usaha (KBLI)" },
            { v: `${categories.length}`, l: "Sektor layanan" },
            { v: "2026", l: "Tahun berdiri" },
            { v: company.investmentStatus, l: "Status penanaman modal" },
          ].map((s) => (
            <div key={s.l} className="bg-white px-6 py-7 text-center">
              <div className="text-3xl font-extrabold text-navy-900">{s.v}</div>
              <div className="mt-1 text-sm text-navy-700/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="scroll-mt-20 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/hero.jpg" alt="Gedung perkantoran" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -right-4 -bottom-6 rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-xl sm:-right-8">
              <div className="text-xs tracking-widest text-gold-400">BERKEDUDUKAN DI</div>
              <div className="mt-1 font-semibold">{company.domicile}</div>
            </div>
          </div>
          <div>
            <SectionLabel>TENTANG KAMI</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Perusahaan perdagangan & jasa yang tumbuh bersama mitra
            </h2>
            <p className="mt-6 leading-relaxed text-navy-700/80">
              {company.name} adalah badan hukum Perseroan Perorangan yang didirikan oleh {company.founder} dan
              disahkan oleh Kementerian Hukum Republik Indonesia pada {company.founded}. Berkedudukan di{" "}
              {company.domicile}, perusahaan bergerak di bidang perdagangan besar, perdagangan eceran, dan
              berbagai layanan jasa.
            </p>
            <p className="mt-4 leading-relaxed text-navy-700/80">
              Dengan cakupan {kbli.length} klasifikasi usaha — mulai dari pangan dan hasil pertanian, tekstil,
              material bangunan, elektronik, otomotif, hingga jasa boga dan penyediaan tenaga kerja — kami siap
              menjadi mitra satu pintu bagi kebutuhan bisnis Anda.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Terdaftar resmi di OSS & AHU", "Pengusaha Kena Pajak (PKP)", "Jangkauan produk luas", "Layanan responsif"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 font-medium">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-400/20 text-gold-600">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <section id="visi-misi" className="scroll-mt-20 bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <SectionLabel>ARAH PERUSAHAAN</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Visi & Misi</h2>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600 p-10 text-navy-950">
              <h3 className="text-sm font-bold tracking-[0.3em]">VISI</h3>
              <p className="mt-5 text-xl leading-relaxed font-semibold sm:text-2xl">“{visi}”</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-navy-800/60 p-10">
              <h3 className="text-sm font-bold tracking-[0.3em] text-gold-400">MISI</h3>
              <ol className="mt-6 space-y-4">
                {misi.map((m, i) => (
                  <li key={m} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-400/50 text-sm font-bold text-gold-300">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-white/85">{m}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* BIDANG USAHA */}
      <section id="bidang-usaha" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>BIDANG USAHA</SectionLabel>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Sektor yang kami layani</h2>
              <p className="mt-3 max-w-2xl text-navy-700/80">
                {kbli.length} kegiatan usaha terdaftar berdasarkan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI),
                dikelompokkan ke dalam {categories.length} sektor utama.
              </p>
            </div>
            <Link
              href="/bidang-usaha"
              className="inline-flex items-center gap-2 font-semibold text-gold-600 hover:text-gold-500"
            >
              Lihat semua KBLI <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/bidang-usaha#${c.slug}`}
                className="group rounded-2xl border border-navy-900/10 bg-white p-7 transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400 transition group-hover:bg-gold-400 group-hover:text-navy-950">
                  <Icon name={c.icon} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/75">{c.desc}</p>
                <p className="mt-4 text-xs font-semibold tracking-wider text-gold-600">
                  {grouped[c.slug].length} KBLI
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEGALITAS */}
      <section id="legalitas" className="scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <SectionLabel>LEGALITAS</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Terdaftar & diakui secara resmi</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {legalitas.map((l) => (
              <div key={l.title} className="flex gap-4 rounded-2xl border border-navy-900/10 bg-cream p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-400/20 text-gold-600">
                  <Icon name="shield" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">{l.title}</h3>
                  <p className="mt-1 font-mono text-sm break-all text-navy-800">{l.value}</p>
                  <p className="mt-1 text-xs text-navy-700/60">{l.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-navy-900 text-white lg:grid lg:grid-cols-2">
            <div className="p-10 sm:p-14">
              <SectionLabel>HUBUNGI KAMI</SectionLabel>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Mari bermitra bersama kami</h2>
              <p className="mt-4 text-white/70">
                Konsultasikan kebutuhan produk maupun jasa Anda. Tim kami siap merespons dengan cepat.
              </p>
              <ul className="mt-10 space-y-6">
                <ContactItem icon="pin" label="Alamat" value={company.address} />
                <ContactItem icon="phone" label="Telepon / WhatsApp" value={company.phone} href={`https://wa.me/${company.phoneIntl}`} />
                <ContactItem icon="mail" label="Email" value={company.email} href={`mailto:${company.email}`} />
              </ul>
            </div>
            <div className="min-h-80 bg-navy-800">
              <iframe
                title="Lokasi PT Citra Sinar Niaga"
                src="https://www.google.com/maps?q=Cikasungka,+Cikancung,+Kabupaten+Bandung&output=embed"
                className="h-full min-h-80 w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-gold-500">
      <span className="h-px w-8 bg-gold-500" />
      {children}
    </p>
  );
}

function ContactItem({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-400 text-navy-950">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs tracking-widest text-gold-300">{label.toUpperCase()}</span>
        <span className="mt-1 block text-white/90">{value}</span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex gap-4 hover:opacity-90">
          {content}
        </a>
      ) : (
        <div className="flex gap-4">{content}</div>
      )}
    </li>
  );
}
