"use client";

import { useEffect } from "react";

export default function MotionEngine() {
  useEffect(() => {
    const root = document.documentElement;
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const hero = document.querySelector<HTMLElement>(".hero");

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--scroll", String(ratio));
      if (progress) progress.style.transform = `scaleX(${ratio})`;

      const y = Math.min(window.scrollY, window.innerHeight * 1.15);
      root.style.setProperty("--hero-scroll", `${y}px`);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => revealObserver.observe(node));

    const counterObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count || 0);
          const decimals = Number(el.dataset.decimals || 0);
          const duration = 1450;
          const start = performance.now();

          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = (target * eased).toFixed(decimals);
            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        }
      },
      { threshold: 0.65 },
    );

    document.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => counterObserver.observe(node));

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onHeroPointer = (event: PointerEvent) => {
      if (!hero || !finePointer || reduced) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", x.toFixed(3));
      hero.style.setProperty("--my", y.toFixed(3));
    };

    const onTilt = (event: PointerEvent) => {
      if (!finePointer || reduced) return;
      const card = (event.target as HTMLElement).closest<HTMLElement>("[data-tilt]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -7;
      const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 9;
      card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      card.style.setProperty("--shine-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--shine-y", `${event.clientY - rect.top}px`);
    };

    const resetTilt = (event: PointerEvent) => {
      const card = (event.target as HTMLElement).closest<HTMLElement>("[data-tilt]");
      if (!card) return;
      const next = event.relatedTarget as Node | null;
      if (next && card.contains(next)) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };

    const onMagnetic = (event: PointerEvent) => {
      if (!finePointer || reduced) return;
      const item = (event.target as HTMLElement).closest<HTMLElement>(".magnetic");
      if (!item) return;
      const rect = item.getBoundingClientRect();
      item.style.setProperty("--mag-x", `${(event.clientX - rect.left - rect.width / 2) * 0.16}px`);
      item.style.setProperty("--mag-y", `${(event.clientY - rect.top - rect.height / 2) * 0.16}px`);
    };

    const resetMagnetic = (event: PointerEvent) => {
      const item = (event.target as HTMLElement).closest<HTMLElement>(".magnetic");
      if (!item) return;
      const next = event.relatedTarget as Node | null;
      if (next && item.contains(next)) return;
      item.style.setProperty("--mag-x", "0px");
      item.style.setProperty("--mag-y", "0px");
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    hero?.addEventListener("pointermove", onHeroPointer);
    document.addEventListener("pointermove", onTilt);
    document.addEventListener("pointerout", resetTilt);
    document.addEventListener("pointermove", onMagnetic);
    document.addEventListener("pointerout", resetMagnetic);

    const timer = window.setTimeout(() => document.body.classList.add("page-ready"), 80);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", updateScroll);
      hero?.removeEventListener("pointermove", onHeroPointer);
      document.removeEventListener("pointermove", onTilt);
      document.removeEventListener("pointerout", resetTilt);
      document.removeEventListener("pointermove", onMagnetic);
      document.removeEventListener("pointerout", resetMagnetic);
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
