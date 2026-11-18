"use client";

import { useMemo, useState } from "react";
import Icon from "./Icon";
import type { Kbli } from "@/data/company";

type Group = { slug: string; title: string; icon: string; items: Kbli[] };

export default function KbliExplorer({ groups }: { groups: Group[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter((k) => k.kode.includes(term) || k.nama.toLowerCase().includes(term)),
      }))
      .filter((g) => g.items.length > 0);
  }, [q, groups]);

  const total = filtered.reduce((n, g) => n + g.items.length, 0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="sticky top-20 z-20 -mx-5 bg-cream/95 px-5 py-4 backdrop-blur lg:-mx-8 lg:px-8">
          <label className="relative block">
            <span className="pointer-events-none absolute inset-y-0 left-4 grid place-items-center text-navy-700/50">
              <Icon name="search" className="h-5 w-5" />
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari kode atau nama kegiatan usaha, misal: beras, 46311, semen…"
              className="w-full rounded-full border border-navy-900/15 bg-white py-3.5 pr-5 pl-12 outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30"
            />
          </label>
          <p className="mt-2 pl-2 text-sm text-navy-700/60">{total} kegiatan usaha ditampilkan</p>
        </div>

        <div className="mt-8 space-y-12">
          {filtered.map((g) => (
            <div key={g.slug} id={g.slug} className="scroll-mt-44">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-bold">{g.title}</h2>
                <span className="rounded-full bg-gold-400/20 px-3 py-0.5 text-xs font-semibold text-gold-600">
                  {g.items.length}
                </span>
              </div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {g.items.map((k) => (
                  <li key={k.kode} className="flex gap-4 rounded-xl border border-navy-900/10 bg-white p-4">
                    <span className="h-fit rounded-md bg-navy-900 px-2.5 py-1 font-mono text-xs font-semibold text-gold-300">
                      {k.kode}
                    </span>
                    <span className="text-sm leading-relaxed">{k.nama}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {total === 0 && <p className="py-16 text-center text-navy-700/60">Tidak ada kegiatan usaha yang cocok.</p>}
        </div>
      </div>
    </section>
  );
}
