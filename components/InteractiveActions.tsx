"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowIcon } from "./Icons";

export function BuyButton({ product, className = "" }: { product: string; className?: string }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";
  const href = useMemo(() => {
    const message = encodeURIComponent(`Halo Digie Store, saya tertarik dengan ${product}. Bisa minta detailnya?`);
    return `https://wa.me/${number}?text=${message}`;
  }, [number, product]);

  return (
    <a className={`button ${className}`} href={href} target="_blank" rel="noreferrer">
      Pesan sekarang <ArrowIcon />
    </a>
  );
}

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    if (!email || !email.includes("@")) {
      setMessage("Masukkan alamat email yang valid.");
      return;
    }
    setMessage("Terima kasih! Kamu sudah masuk daftar update Digie Store.");
    form.reset();
  }

  return (
    <form className="newsletter-form" onSubmit={submit} noValidate>
      <label className="sr-only" htmlFor="newsletter-email">Alamat email</label>
      <input id="newsletter-email" name="email" type="email" placeholder="nama@email.com" />
      <button type="submit" aria-label="Daftar newsletter"><ArrowIcon /></button>
      <p className="form-message" aria-live="polite">{message}</p>
    </form>
  );
}
