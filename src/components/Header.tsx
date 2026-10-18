"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why MSI" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/msi-emblem.png" alt="" width={40} height={35} priority />
          <span className="font-display text-lg font-bold tracking-tight text-navy-900">
            {site.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </nav>

        <button
          className="rounded-md p-2 text-navy-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-navy-900 px-4 py-3 font-semibold text-white"
          >
            <Phone className="size-4" />
            Call {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
