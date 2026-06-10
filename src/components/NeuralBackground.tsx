import { useEffect, useRef } from "react";

export function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0, h = 0;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = [];

    const palette = ["#60a5fa", "#a78bfa", "#22d3ee", "#f472b6"];

    const resize = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 20000));
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
        c: palette[Math.floor(Math.random() * palette.length)],
      });
    }

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX * devicePixelRatio;
      mouse.y = e.clientY * devicePixelRatio;
    };
    window.addEventListener("mousemove", onMove);

    const maxDist = 140 * devicePixelRatio;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        // mouse attraction
        const mdx = mouse.x - n.x, mdy = mouse.y - n.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 200 * devicePixelRatio) {
          n.x += (mdx / md) * 0.3;
          n.y += (mdy / md) * 0.3;
        }
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const op = 1 - d / maxDist;
            ctx.strokeStyle = `rgba(167, 139, 250, ${op * 0.25})`;
            ctx.lineWidth = 0.6 * devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = n.c;
        ctx.shadowBlur = 12;
        ctx.shadowColor = n.c;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="neural-bg" aria-hidden />;
}
