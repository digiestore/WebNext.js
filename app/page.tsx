import Image from "next/image";
import Navbar from "@/components/Navbar";
import MotionEngine from "@/components/MotionEngine";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { BuyButton, NewsletterForm } from "@/components/InteractiveActions";

const services = [
  { n: "01", title: "Bot WhatsApp", text: "Otomasi order, broadcast, customer service, downloader, dan menu bisnis yang berjalan 24/7.", type: "bot" },
  { n: "02", title: "Bot Telegram", text: "Bot modular untuk tools, panel, pembayaran, komunitas, dan pengelolaan pengguna.", type: "telegram" },
  { n: "03", title: "Panel & Hosting", text: "Pterodactyl siap pakai untuk bot, website, aplikasi Node.js, dan server game.", type: "hosting" },
  { n: "04", title: "Website Custom", text: "Website cepat, responsif, modern, dan dirancang untuk membangun kepercayaan serta konversi.", type: "website" },
];

const plans = [
  { name: "Starter", desc: "Cocok untuk proyek sederhana yang ingin segera online.", price: "149K", features: ["1 produk digital", "Setup dasar", "1 revisi minor", "Dukungan 7 hari"] },
  { name: "Growth", desc: "Untuk bisnis yang membutuhkan sistem digital lebih lengkap.", price: "499K", popular: true, features: ["Hingga 3 layanan", "Desain & konfigurasi", "Integrasi WhatsApp", "Dukungan 30 hari"] },
  { name: "Custom", desc: "Solusi khusus berdasarkan alur kerja dan targetmu.", price: "Custom", features: ["Scope fleksibel", "Fitur kustom", "Prioritas pengerjaan", "Dukungan lanjutan"] },
];

const testimonials = [
  ["Raka Aditya", "Owner komunitas", "Bot Telegram-nya rapi, cepat, dan alurnya dijelaskan sampai benar-benar jalan."],
  ["Dina Nur", "Online seller", "Website terasa premium dan hasil mobile-nya jauh lebih bagus dari yang saya bayangkan."],
  ["Farel Rizky", "Developer", "Panel, allocation, dan deployment sudah disiapkan. Saya tinggal upload lalu menjalankan project."],
  ["Nadia Putri", "Content creator", "Responsnya cepat dan revisinya tepat. Proyek jadi tidak berputar-putar."],
];

const articles = [
  ["AUTOMATION", "Cara bot mempercepat pelayanan pelanggan", "5 menit baca", "article-blue"],
  ["HOSTING", "Memilih panel hosting yang stabil untuk project", "6 menit baca", "article-lime"],
  ["WEBSITE", "Landing page yang terlihat mahal dan tetap cepat", "4 menit baca", "article-dark"],
];

function BrandStrip() {
  const names = ["BOT SYSTEM", "PTERODACTYL", "NEXT.JS", "TELEGRAM", "WHATSAPP", "AUTOMATION", "VERCEL"];
  return (
    <div className="brand-strip" aria-label="Teknologi dan layanan">
      <div className="brand-track">
        {[0, 1].flatMap((copy) => names.map((name, i) => <span key={`${copy}-${i}`}><i className="brand-glyph" />{name}</span>))}
      </div>
    </div>
  );
}

function HeroCards() {
  return (
    <div className="hero-cards" aria-label="Ringkasan layanan Digie Store">
      <article className="h-card h-card-mini h-card-a">
        <div className="mini-pill"><i /> Online</div>
        <div className="mini-row"><span>Pesan masuk</span><b>+48%</b></div>
        <div className="mini-row"><span>Auto reply</span><b>Aktif</b></div>
      </article>

      <article className="h-card h-card-performance h-card-b">
        <div className="card-topline"><span>Performa</span><b>↗</b></div>
        <strong>49%</strong>
        <div className="tiny-line"><i /><i /><i /><i /><i /></div>
        <div className="tag-row"><span>Strategis</span><span>Efisien</span></div>
      </article>

      <article className="h-card h-card-data h-card-c">
        <div className="tag-cloud"><span>Profesional</span><span>Strategis</span><span>Lebih cepat</span></div>
        <small>Digital projects</small>
        <strong>520K+</strong>
        <p>data diproses setiap bulan</p>
      </article>

      <article className="h-card h-card-upload h-card-d">
        <div className="upload-plus">+</div>
        <strong>Mulai proyek</strong>
        <small>Ceritakan kebutuhanmu</small>
      </article>

      <article className="h-card h-card-dark h-card-e">
        <small>Keahlian yang</small>
        <strong>Menggabungkan strategi, data, dan teknologi.</strong>
        <span className="dark-dot" />
      </article>

      <article className="h-card h-card-chart h-card-f">
        <span>Highlight</span>
        <strong>Setiap bulan</strong>
        <svg viewBox="0 0 150 65" aria-hidden="true"><path d="M4 55C25 46 31 52 48 36S75 49 93 25s30-5 53-20" /></svg>
        <div className="chart-axis"><i /><i /><i /><i /><i /></div>
      </article>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="dashboard-scene" data-tilt>
      <div className="dash-glow" />
      <div className="dashboard-window">
        <div className="dashboard-head"><span>Monthly expense</span><div><i /><i /><i /></div></div>
        <div className="expense-row"><div><small>Pengeluaran</small><strong>Rp4.9M</strong></div><span>/ Rp10M</span></div>
        <div className="expense-progress"><i /></div>
        <div className="transaction-list">
          {["Bot premium", "Cloud server", "Website maintenance"].map((x, i) => <div key={x}><span className={`transaction-icon t-${i}`}>{i === 0 ? "B" : i === 1 ? "C" : "W"}</span><p><strong>{x}</strong><small>14 November 2026</small></p><b>{["Rp120K", "Rp350K", "Rp200K"][i]}</b></div>)}
        </div>
      </div>
      <div className="performance-card">
        <span>Performa</span><small>7 hari terakhir</small><strong>50+</strong>
        <div className="performance-bars"><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="analytics-scene" data-tilt>
      <div className="analytics-top"><span>Performance</span><small>7 hari terakhir</small></div>
      <div className="analytics-number"><strong>49</strong><span>%</span><i>+2.5%</i></div>
      <svg viewBox="0 0 500 210" preserveAspectRatio="none" aria-hidden="true">
        <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".35"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs>
        <path className="area" d="M0 182C50 165 79 192 120 144s67 8 112-33 77 27 124-31 80-21 144-67V210H0Z" />
        <path className="line" d="M0 182C50 165 79 192 120 144s67 8 112-33 77 27 124-31 80-21 144-67" />
      </svg>
      <div className="analytics-years">{[2019,2020,2021,2022,2023,2024,2025].map(y => <span key={y}>{y}</span>)}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEngine />

      <section className="hero" id="beranda">
        <Navbar />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-aurora" aria-hidden="true" />
        <div className="cloud cloud-1" /><div className="cloud cloud-2" /><div className="cloud cloud-3" /><div className="cloud cloud-4" />

        <div className="hero-copy">
          <div className="hero-title-mask"><h1><span>Membangun masa depan dengan</span><em>teknologi dan strategi</em></h1></div>
          <p className="hero-sub">Kami membantu bisnis tumbuh lebih cepat melalui bot, hosting, website, dan otomasi yang dibuat dengan cermat.</p>
          <div className="hero-actions">
            <a className="button button-blue magnetic" href="#layanan">Lihat demo</a>
            <BuyButton product="layanan Digie Store" className="button-lime magnetic" />
          </div>
        </div>

        <HeroCards />
        <div className="hero-rating"><span>Dipercaya 4.900+ pelanggan digital</span><b>★★★★★</b></div>
      </section>

      <BrandStrip />

      <section className="section about" id="tentang">
        <div className="eyebrow" data-reveal><i /> Tentang kami</div>
        <h2 className="kinetic-heading" data-reveal>
          Partner digital global yang berdedikasi untuk membangun
          <span className="orb-word"><i className="play-orb">↗</i> sistem lebih pintar</span>
          <span className="muted"> dan </span>
          <span className="orb-word"><i className="idea-orb">✦</i> lebih adaptif.</span>
        </h2>

        <div className="metric-mosaic">
          <article className="metric-card metric-person" data-reveal data-tilt>
            <span className="metric-logo">DIGIE</span>
            <div className="portrait-art"><div className="portrait-head"/><div className="portrait-body"/><i/><b/></div>
            <div className="metric-action">▥</div>
          </article>
          <article className="metric-card metric-white" data-reveal>
            <span>Komitmen pada hasil terukur</span>
            <strong><b data-count="100">0</b>%</strong>
            <p>Setiap produk dibangun dengan tujuan, alur, dan ukuran keberhasilan yang jelas.</p>
          </article>
          <article className="metric-card metric-lime" data-reveal>
            <span>Data points</span>
            <strong><b data-count="520">0</b>K+</strong>
            <p>Diproses setiap bulan untuk mendukung sistem yang lebih cepat dan relevan.</p>
          </article>
          <article className="metric-card metric-quote" data-reveal>
            <span>“Strategi automasi mereka mengubah cara kami bekerja—lebih efisien, rapi, dan terasa ringan.”</span>
            <div className="quote-person"><i>RA</i><p><b>Raka Aditya</b><small>Owner komunitas</small></p></div>
          </article>
          <article className="metric-card metric-blue" data-reveal>
            <span>Proyek digital</span>
            <strong><b data-count="250">0</b>+</strong>
            <p>Bot, panel, website, dan sistem digital yang telah diselesaikan.</p>
          </article>
          <article className="metric-card metric-black" data-reveal>
            <div className="continent-orbit"><i/><i/><i/><i/></div>
            <span>Jangkauan layanan</span>
            <strong><b data-count="20">0</b>+</strong>
            <p>kota dan komunitas digital.</p>
          </article>
        </div>
      </section>

      <section className="services" id="layanan">
        <div className="services-intro section">
          <div>
            <div className="eyebrow eyebrow-light" data-reveal><i /> Layanan</div>
            <h2 data-reveal>Solusi lengkap dan inovasi digital yang cerdas.</h2>
          </div>
          <div className="services-side" data-reveal>
            <p>Dari mengoptimalkan operasional hari ini sampai membangun produk untuk besok, kami membantu kamu bergerak lebih cepat dan percaya diri.</p>
            <BuyButton product="konsultasi layanan" className="button-lime magnetic" />
          </div>
        </div>

        <div className="service-list section">
          {services.map((service) => (
            <article className="service-row" key={service.n} data-reveal data-tilt>
              <span className="service-number">{service.n}</span>
              <div className={`service-icon service-${service.type}`} aria-hidden="true"><i/><b/><span/></div>
              <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p></div>
              <a href="#kontak" aria-label={`Pesan ${service.title}`} className="service-arrow magnetic"><ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise section">
        <div className="expertise-head">
          <div className="eyebrow" data-reveal><i /> Keahlian</div>
          <h2 data-reveal>Di mana pemahaman manusia bertemu teknologi cerdas.</h2>
          <p data-reveal>Kami menggunakan teknologi bukan untuk menggantikan kreativitas, tetapi untuk memperkuat keputusan dan mempercepat pekerjaan.</p>
        </div>

        <div className="expertise-row expertise-row-dark">
          <div className="expertise-copy" data-reveal><span>01</span><h3>Automasi & optimasi</h3><p>Sederhanakan operasional melalui workflow cerdas yang menghemat waktu, mengurangi kesalahan, dan meningkatkan produktivitas.</p></div>
          <DashboardVisual />
        </div>

        <div className="expertise-row expertise-row-light">
          <div className="expertise-copy" data-reveal><span>02</span><h3>Analitik & insight</h3><p>Ubah data mentah menjadi insight strategis melalui dashboard, pelaporan, dan pemodelan yang mudah dipahami.</p></div>
          <AnalyticsVisual />
        </div>
      </section>

      <section className="statement-band">
        <div className="statement-track">
          {[0,1].flatMap(copy => ["PROFESIONAL", "STRATEGIS", "AUTOMATION", "STARTUP FEEL", "LEBIH CEPAT", "SIMPLE"].map((x,i) => <span key={`${copy}-${i}`}>{x}<i>✦</i></span>))}
        </div>
      </section>

      <section className="transformation section">
        <div className="transform-visual" data-reveal data-tilt>
          <div className="transform-ring ring-a"/><div className="transform-ring ring-b"/>
          <div className="customer-stack"><i>RA</i><i>DN</i><i>FR</i><i>NP</i></div>
          <strong>+5.000 pelanggan</strong>
          <div className="big-words"><span>Smart.</span><span>Simple.</span><span>Strategic.</span></div>
        </div>
        <div className="transform-copy" data-reveal>
          <div className="eyebrow"><i /> Transformasi digital</div>
          <h2>Membangun sistem yang ikut tumbuh bersama bisnismu.</h2>
          <p>Kami memodernisasi proses, sistem, dan pengalaman digital agar lebih mudah dikelola serta siap dikembangkan.</p>
          <a className="text-link" href="#kontak">Pelajari lebih lanjut <ArrowIcon /></a>
        </div>
      </section>

      <section className="pricing section" id="harga">
        <div className="pricing-head">
          <div><div className="eyebrow" data-reveal><i /> Harga</div><h2 data-reveal>Paket fleksibel untuk setiap tahap pertumbuhan.</h2></div>
          <div data-reveal><p>Mulai dari setup kecil hingga solusi bisnis penuh. Paket dapat disesuaikan dengan kebutuhan project.</p><a href="#kontak" className="button button-dark magnetic">Mulai sekarang <ArrowIcon /></a></div>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`price-card ${plan.popular ? "price-featured" : ""}`} data-reveal data-tilt>
              {plan.popular && <span className="popular">Paling populer</span>}
              <span className="plan-name">{plan.name}</span>
              <p>{plan.desc}</p>
              <div className="price"><small>Rp</small><strong>{plan.price}</strong>{plan.price !== "Custom" && <span>/project</span>}</div>
              <ul>{plan.features.map(feature => <li key={feature}><CheckIcon />{feature}</li>)}</ul>
              <BuyButton product={`paket ${plan.name}`} className={plan.popular ? "button-lime full" : "button-outline full"} />
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials" id="ulasan">
        <div className="section testimonial-head"><div className="eyebrow eyebrow-light" data-reveal><i /> Testimonial</div><h2 data-reveal>Apa kata mereka?</h2><p data-reveal>Pengalaman pelanggan setelah bekerja dengan tim Digie Store.</p></div>
        <div className="testimonial-mask">
          <div className="testimonial-track">
            {[0,1].flatMap(copy => testimonials.map(([name, role, quote], i) => (
              <article className="testimonial-card" key={`${copy}-${i}`}>
                <div className="testimonial-stars">★★★★★</div>
                <blockquote>“{quote}”</blockquote>
                <div className="testimonial-person"><i>{name.split(" ").map(x=>x[0]).join("").slice(0,2)}</i><p><strong>{name}</strong><span>{role}</span></p></div>
              </article>
            )))}
          </div>
        </div>
      </section>

      <section className="blog section" id="blog">
        <div className="blog-head"><div><div className="eyebrow" data-reveal><i /> Blog & insight</div><h2 data-reveal>Insight dan tren terbaru.</h2></div><a className="text-link" href="#blog">Lihat semua <ArrowIcon /></a></div>
        <div className="article-grid">
          {articles.map(([tag,title,time,style]) => <article className="article-card" key={title} data-reveal data-tilt><div className={`article-art ${style}`}><i/><b/><span/></div><div className="article-meta"><span>{tag}</span><small>{time}</small></div><h3>{title}</h3><a href="#kontak" aria-label={title}><ArrowIcon /></a></article>)}
        </div>
      </section>

      <section className="cta" id="kontak">
        <div className="cta-cloud cta-cloud-a"/><div className="cta-cloud cta-cloud-b"/>
        <div className="cta-copy" data-reveal><span>Dipercaya lebih dari 5.000+</span><h2>Kami menggabungkan insight manusia dengan teknologi.</h2><p>Bangun bot, panel, website, dan sistem yang lebih cepat, terukur, serta mudah digunakan.</p><BuyButton product="konsultasi proyek baru" className="button-lime magnetic" /></div>
        <div className="cta-card" data-reveal data-tilt>
          <div className="cta-card-top"><span>Project growth</span><i>+32%</i></div>
          <div className="cta-bars">{[45,65,54,78,70,94,88,100].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div>
          <div className="cta-card-bottom"><strong>Siap bertumbuh</strong><span>Update langsung setiap saat</span></div>
        </div>
      </section>

      <section className="newsletter">
        <div><span>Mudah beradaptasi dengan perubahan dan berkembang melalui infrastruktur fleksibel yang mendukung pertumbuhan bisnismu.</span></div>
        <div><h3>Berlangganan newsletter</h3><NewsletterForm /></div>
      </section>

      <footer>
        <div className="footer-top">
          <a className="brand footer-brand" href="#beranda"><Image src="/logo-mark.svg" alt="" width={38} height={38}/><span>Digie Store</span></a>
          <div className="footer-links"><div><strong>Halaman</strong><a href="#beranda">Beranda</a><a href="#tentang">Tentang</a><a href="#layanan">Layanan</a></div><div><strong>Bisnis</strong><a href="#harga">Harga</a><a href="#ulasan">Ulasan</a><a href="#blog">Blog</a></div><div><strong>Kontak</strong><a href="#kontak">WhatsApp</a><a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com"}>Instagram</a><a href="mailto:hello@digiestore.id">Email</a></div></div>
        </div>
        <div className="footer-wordmark">DIGIE STORE</div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Digie Store. Semua hak dilindungi.</span><a href="#beranda">Kembali ke atas ↑</a></div>
      </footer>
    </main>
  );
}
