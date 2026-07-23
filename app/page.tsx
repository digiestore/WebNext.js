import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ArrowIcon, CheckIcon, SparkIcon } from "@/components/Icons";
import { BuyButton, NewsletterForm } from "@/components/InteractiveActions";

const products = [
  {
    tag: "Otomasi",
    number: "01",
    title: "Bot WhatsApp",
    description: "Bot responsif untuk toko, komunitas, order, broadcast, dan layanan pelanggan.",
    stat: "24/7",
    statLabel: "siap melayani",
    className: "product-blue",
  },
  {
    tag: "Komunitas",
    number: "02",
    title: "Bot Telegram",
    description: "Menu interaktif, sistem panel, pembayaran, tools, dan manajemen pengguna.",
    stat: "50+",
    statLabel: "fitur modular",
    className: "product-dark",
  },
  {
    tag: "Hosting",
    number: "03",
    title: "Panel Pterodactyl",
    description: "Panel siap pakai untuk menjalankan bot, website, server game, dan aplikasi Node.js.",
    stat: "99.9%",
    statLabel: "target uptime",
    className: "product-lime",
  },
  {
    tag: "Web Development",
    number: "04",
    title: "Website Custom",
    description: "Landing page modern, cepat, responsif, dan dioptimalkan untuk konversi.",
    stat: "100%",
    statLabel: "mobile friendly",
    className: "product-white",
  },
];

const plans = [
  {
    name: "Starter",
    price: "149K",
    description: "Untuk proyek sederhana yang ingin segera online.",
    features: ["1 produk digital", "Setup dasar", "Revisi minor", "Dukungan 7 hari"],
  },
  {
    name: "Growth",
    price: "499K",
    description: "Untuk toko dan komunitas yang membutuhkan sistem lebih lengkap.",
    features: ["Hingga 3 layanan", "Desain dan konfigurasi", "Integrasi WhatsApp", "Dukungan 30 hari"],
    featured: true,
  },
  {
    name: "Custom",
    price: "Hubungi",
    description: "Solusi khusus sesuai alur kerja dan target bisnismu.",
    features: ["Scope fleksibel", "Fitur kustom", "Prioritas pengerjaan", "Dukungan lanjutan"],
  },
];

const testimonials = [
  ["RA", "Raka Aditya", "Owner komunitas", "Bot Telegram-nya rapi, menu mudah dipakai, dan proses setup dijelaskan sampai benar-benar jalan."],
  ["DN", "Dina Nur", "Online seller", "Respons cepat dan hasil website terasa premium. Tampilan HP juga tetap enak dilihat."],
  ["FR", "Farel Rizky", "Developer", "Panel dan port sudah disiapkan dengan baik. Saya tinggal upload project dan menjalankannya."],
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell" id="beranda">
        <div className="hero-sky">
          <Navbar />
          <div className="hero-copy reveal">
            <div className="hero-kicker"><SparkIcon /> Solusi digital yang dibuat lebih mudah</div>
            <h1>Bangun bisnis digital yang <span>lebih cepat.</span></h1>
            <p>Digie Store menyediakan bot, panel hosting, website, dan produk digital yang siap membantu ide kamu tumbuh.</p>
            <div className="hero-actions">
              <a className="button button-glass" href="#produk">Lihat produk</a>
              <BuyButton product="layanan Digie Store" className="button-lime" />
            </div>
          </div>

          <div className="cloud cloud-one" />
          <div className="cloud cloud-two" />
          <div className="cloud cloud-three" />

          <div className="floating-stage" aria-label="Ringkasan layanan Digie Store">
            <div className="float-card float-small card-left">
              <span className="mini-status"><i /> Aktif</span>
              <strong>Bot Online</strong>
              <small>Auto response</small>
            </div>
            <div className="float-card float-stat card-mid-left">
              <span>Pesanan selesai</span>
              <strong>1.2K+</strong>
              <div className="tiny-chart"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="float-card float-upload card-center">
              <span className="plus">+</span>
              <strong>Mulai proyek</strong>
              <small>Ceritakan kebutuhanmu</small>
            </div>
            <div className="float-card float-dark card-mid-right">
              <span>Digie system</span>
              <strong>Bot, panel, web, dan automasi.</strong>
              <i className="orbit-dot" />
            </div>
            <div className="float-card float-chart card-right">
              <span>Performa</span>
              <strong>+48%</strong>
              <svg viewBox="0 0 120 52" aria-hidden="true"><path d="M2 43C20 39 23 24 40 29s23 9 34-3 16-14 44-23" /></svg>
            </div>
          </div>

          <div className="rating-row">
            <span>Dipercaya kreator dan bisnis digital</span>
            <span className="stars">★★★★★</span>
          </div>
        </div>

        <div className="logo-marquee" aria-label="Kategori layanan">
          <div className="marquee-track">
            {Array.from({ length: 2 }).flatMap((_, copy) => ["BOT", "HOSTING", "WEBSITE", "AUTOMATION", "DIGITAL PRODUCT", "SUPPORT"].map((name) => (
              <span key={`${copy}-${name}`}><i>✦</i>{name}</span>
            )))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="tentang">
        <div className="section-label">Tentang kami</div>
        <h2 className="statement-heading">
          Partner digital untuk membangun solusi yang
          <span className="inline-pill pill-blue">cepat</span>,
          <span className="muted"> rapi, dan </span>
          <span className="inline-pill pill-lime">mudah dipakai</span>.
        </h2>

        <div className="stats-grid">
          <article className="stat-card stat-photo">
            <div className="mock-window">
              <div className="window-top"><span /><span /><span /></div>
              <div className="window-content">
                <div className="code-line wide" /><div className="code-line" /><div className="code-line short" />
                <div className="dashboard-bars"><i /><i /><i /><i /></div>
              </div>
            </div>
            <span className="stat-corner">DS</span>
          </article>
          <article className="stat-card stat-neutral">
            <span>Proyek selesai</span>
            <strong>250+</strong>
            <p>Solusi digital untuk toko, komunitas, kreator, dan developer.</p>
          </article>
          <article className="stat-card stat-accent">
            <span>Kepuasan klien</span>
            <strong>98%</strong>
            <p>Kami fokus pada hasil yang jelas, komunikasi cepat, dan dukungan nyata.</p>
          </article>
          <article className="stat-card stat-wide">
            <blockquote>“Teknologi seharusnya membuat pekerjaan lebih sederhana, bukan menambah masalah baru.”</blockquote>
            <span>Prinsip kerja Digie Store</span>
          </article>
          <article className="stat-card stat-dark-card">
            <span>Waktu respons</span>
            <strong>&lt; 15m</strong>
            <p>Pada jam operasional.</p>
          </article>
        </div>
      </section>

      <section className="section products-section" id="produk">
        <div className="section-heading-row">
          <div>
            <div className="section-label">Produk & layanan</div>
            <h2>Semua yang dibutuhkan untuk mulai bergerak.</h2>
          </div>
          <p>Pilih solusi siap pakai atau minta sistem yang disesuaikan dengan kebutuhan proyekmu.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className={`product-card ${product.className}`} key={product.title}>
              <div className="product-top"><span>{product.tag}</span><b>{product.number}</b></div>
              <div className="product-visual" aria-hidden="true">
                <div className="visual-ring" />
                <div className="visual-panel"><i /><i /><i /></div>
                <span className="visual-spark">✦</span>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-bottom">
                <div><strong>{product.stat}</strong><span>{product.statLabel}</span></div>
                <BuyButton product={product.title} className="circle-button" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-copy">
          <div className="section-label section-label-light">Kenapa Digie Store</div>
          <h2>Manusia yang responsif, teknologi yang bekerja otomatis.</h2>
          <p>Kami memadukan komunikasi yang jelas dengan sistem digital yang efisien agar kamu bisa fokus pada pertumbuhan.</p>
          <a className="button button-lime" href="#harga">Lihat paket <ArrowIcon /></a>
        </div>
        <div className="feature-dashboard">
          <div className="dash-head"><span>Project overview</span><i>Live</i></div>
          <div className="dash-main">
            <span>Progress bulan ini</span>
            <strong>84%</strong>
            <div className="progress"><i /></div>
          </div>
          <div className="dash-grid">
            <div><span>Task</span><strong>32</strong><small>+8 minggu ini</small></div>
            <div><span>Uptime</span><strong>99.9%</strong><small>stabil</small></div>
          </div>
          <div className="dash-list">
            {["Website landing", "Bot automation", "Panel deployment"].map((item, i) => (
              <div key={item}><span className={`list-dot dot-${i}`} />{item}<b>{["Done", "Review", "Active"][i]}</b></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="harga">
        <div className="section-heading-row pricing-head">
          <div>
            <div className="section-label">Paket harga</div>
            <h2>Pilih paket yang sesuai dengan tahapmu.</h2>
          </div>
          <p>Harga dapat berubah sesuai tingkat kesulitan. Semua detail dikonfirmasi sebelum pengerjaan dimulai.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              {plan.featured && <span className="popular">Paling populer</span>}
              <div className="price-name">{plan.name}</div>
              <p>{plan.description}</p>
              <div className="price"><span>Rp</span><strong>{plan.price}</strong></div>
              <ul>
                {plan.features.map((feature) => <li key={feature}><CheckIcon />{feature}</li>)}
              </ul>
              <BuyButton product={`paket ${plan.name}`} className={plan.featured ? "button-lime full-button" : "button-dark full-button"} />
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial-section" id="ulasan">
        <div className="section-label">Ulasan pelanggan</div>
        <div className="testimonial-title-row">
          <h2>Apa kata mereka?</h2>
          <span>★★★★★ <small>4.9 dari 5</small></span>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([initials, name, role, quote]) => (
            <article className="testimonial-card" key={name}>
              <div className="quote-mark">“</div>
              <p>{quote}</p>
              <div className="person"><span>{initials}</span><div><strong>{name}</strong><small>{role}</small></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="kontak">
        <div className="cta-orb orb-one" /><div className="cta-orb orb-two" />
        <div className="cta-content">
          <span className="section-label section-label-light">Mulai sekarang</span>
          <h2>Punya ide digital?<br />Mari kita buat jadi nyata.</h2>
          <p>Ceritakan kebutuhanmu dan dapatkan rekomendasi layanan yang paling sesuai.</p>
          <BuyButton product="konsultasi proyek baru" className="button-lime" />
        </div>
        <div className="newsletter-card">
          <span>Update Digie</span>
          <h3>Dapatkan kabar produk dan promo terbaru.</h3>
          <NewsletterForm />
          <small>Tanpa spam. Hanya informasi yang berguna.</small>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#beranda">
            <Image src="/logo-mark.svg" alt="" width={42} height={42} />
            <span>Digie Store</span>
          </a>
          <p>Solusi digital sederhana untuk membantu bisnismu bergerak lebih cepat.</p>
          <div className="footer-links">
            <div><strong>Navigasi</strong><a href="#produk">Produk</a><a href="#tentang">Tentang</a><a href="#harga">Harga</a></div>
            <div><strong>Layanan</strong><a href="#produk">Bot</a><a href="#produk">Panel</a><a href="#produk">Website</a></div>
            <div><strong>Kontak</strong><a href="#kontak">WhatsApp</a><a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com"} target="_blank" rel="noreferrer">Instagram</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Digie Store. All rights reserved.</span><a href="#beranda">Kembali ke atas ↑</a></div>
      </footer>
    </main>
  );
}
