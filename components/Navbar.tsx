"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  ["Beranda", "#beranda"],
  ["Produk", "#produk"],
  ["Tentang", "#tentang"],
  ["Harga", "#harga"],
  ["Ulasan", "#ulasan"],
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
      <a className="brand" href="#beranda" aria-label="Digie Store beranda">
        <Image src="/logo-mark.svg" alt="" width={38} height={38} priority />
        <span>Digie Store</span>
      </a>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <a className="nav-cta" href="#kontak">Hubungi kami</a>

      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Buka menu" aria-expanded={open}>
        <MenuIcon />
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Tutup menu">
          <CloseIcon />
        </button>
        <div className="mobile-menu-inner">
          <span className="eyebrow">Menu</span>
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <a className="button button-lime mobile-contact" href="#kontak" onClick={() => setOpen(false)}>
            Mulai proyek
          </a>
        </div>
      </div>
    </header>
  );
}
