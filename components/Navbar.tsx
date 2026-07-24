"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  ["Beranda", "#beranda"],
  ["Tentang", "#tentang"],
  ["Layanan", "#layanan"],
  ["Harga", "#harga"],
  ["Blog", "#blog"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand magnetic" href="#beranda" aria-label="Digie Store beranda">
        <Image src="/logo-mark.svg" alt="" width={34} height={34} priority />
        <span>Digie Store</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>

      <a className="nav-cta magnetic" href="#kontak">Hubungi kami</a>

      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Buka menu" aria-expanded={open}>
        <MenuIcon />
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-top">
          <a className="brand" href="#beranda" onClick={() => setOpen(false)}>
            <Image src="/logo-mark.svg" alt="" width={34} height={34} />
            <span>Digie Store</span>
          </a>
          <button className="menu-close" onClick={() => setOpen(false)} aria-label="Tutup menu"><CloseIcon /></button>
        </div>
        <div className="mobile-menu-inner">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>
          ))}
          <a className="button button-lime mobile-contact" href="#kontak" onClick={() => setOpen(false)}>Mulai proyek</a>
        </div>
      </div>
    </header>
  );
}
