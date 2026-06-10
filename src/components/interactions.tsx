import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dx = 0, dy = 0, rx = 0, ry = 0;
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      if (glow.current) glow.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, summary, .heading-hover, .glow-card")) {
        ring.current?.style.setProperty("width", "60px");
        ring.current?.style.setProperty("height", "60px");
        ring.current?.style.setProperty("border-color", "rgba(244, 114, 182, 0.8)");
      } else {
        ring.current?.style.setProperty("width", "40px");
        ring.current?.style.setProperty("height", "40px");
        ring.current?.style.setProperty("border-color", "rgba(167, 139, 250, 0.6)");
      }
    };
    window.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={glow} className="mouse-glow" />
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-zoom, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}
