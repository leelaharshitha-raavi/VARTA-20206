import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NeuralBackground } from "@/components/NeuralBackground";
import { CustomCursor, Counter, useReveal } from "@/components/interactions";
import {
  Newspaper, Target, Eye, Sparkles, Calendar, Mail, Users, Database,
  BarChart3, ArrowRight, Brain, Globe, Github, Twitter, Linkedin
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VARTA 2026 — Viewpoint Analysis & Representation of Targeted Actors" },
      { name: "description", content: "VARTA 2026 — A shared task on detecting target actors and analyzing viewpoints in Indian news, in multiple languages." },
      { property: "og:title", content: "VARTA 2026" },
      { property: "og:description", content: "Viewpoint Analysis and Representation of Targeted Actors in Indian News — shared task & research conference 2026." },
    ],
  }),
  component: Home,
});

const KEYWORDS = [
  { text: "विचार", x: "8%", y: "20%", size: "4rem", delay: "0s" },
  { text: "Bias", x: "78%", y: "12%", size: "5rem", delay: "1s" },
  { text: "Narrative", x: "12%", y: "65%", size: "4.5rem", delay: "2s" },
  { text: "Actor", x: "82%", y: "70%", size: "5.5rem", delay: "0.5s" },
  { text: "Sentiment", x: "45%", y: "85%", size: "3.5rem", delay: "1.5s" },
  { text: "मीडिया", x: "55%", y: "30%", size: "4rem", delay: "2.5s" },
  { text: "Viewpoint", x: "30%", y: "45%", size: "6rem", delay: "0.8s" },
  { text: "खबर", x: "70%", y: "50%", size: "4rem", delay: "1.8s" },
];

function Home() {
  useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroTitle = "VARTA 2026";
  const subTitle = "Viewpoint Analysis & Representation of Targeted Actors in Indian News";

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NeuralBackground />
      <CustomCursor />

      {/* Floating background keywords */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {KEYWORDS.map((k, i) => (
          <div
            key={i}
            className="float-keyword"
            style={{
              left: k.x,
              top: k.y,
              fontSize: k.size,
              animation: `${i % 2 ? "float-slower" : "float-slow"} ${10 + i}s ease-in-out infinite`,
              animationDelay: k.delay,
            }}
          >
            {k.text}
          </div>
        ))}
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="glass-strong mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#hero" className="flex items-center gap-2 font-display text-lg font-bold">
            <Brain className="h-5 w-5 text-[oklch(0.82_0.16_200)]" />
            <span className="text-gradient">VARTA</span>
            <span className="text-xs text-muted-foreground">2026</span>
          </a>
          <div className="hidden gap-6 text-sm font-medium md:flex">
            {["About", "Workflow", "Dataset", "Metrics", "Dates", "FAQ"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground transition hover:text-foreground">
                {l}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm">Register</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, oklch(0.4 0.2 290 / 0.4), transparent 60%)",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="mx-auto max-w-5xl text-center">
          <div className="reveal-zoom mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.82_0.16_200)]" />
            <span>Shared Task · ICON 2026 Co-located</span>
          </div>

          <h1 className="char-reveal font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl lg:text-[9rem]">
            {heroTitle.split("").map((c, i) => (
              <span
                key={i}
                className={c === " " ? "mx-4" : "text-gradient"}
                style={{ animationDelay: `${0.05 * i + 0.2}s` }}
              >
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </h1>

          <p className="reveal mt-8 text-balance text-lg text-muted-foreground md:text-2xl" style={{ transitionDelay: "0.8s" }}>
            {subTitle}
          </p>

          <p className="reveal mx-auto mt-4 max-w-2xl text-sm text-muted-foreground/80 md:text-base" style={{ transitionDelay: "1s" }}>
            A multilingual shared task uncovering how Indian news represents actors — across viewpoints, narratives, and bias — powered by modern NLP.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4" style={{ transitionDelay: "1.2s" }}>
            <a href="#about" className="btn-primary">
              Explore the Task <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#dates" className="btn-ghost">Key Dates</a>
          </div>

          {/* Stats */}
          <div className="reveal mt-20 grid grid-cols-2 gap-4 md:grid-cols-4" style={{ transitionDelay: "1.4s" }}>
            {[
              { v: 12, s: "+", l: "Indian Languages" },
              { v: 50000, s: "+", l: "News Articles" },
              { v: 3, s: "", l: "Subtasks" },
              { v: 25, s: "+", l: "Participating Teams" },
            ].map((s) => (
              <div key={s.l} className="glass p-5">
                <div className="text-gradient font-display text-3xl font-bold md:text-4xl">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="The Task" title="About VARTA" />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="reveal-left glass glow-card p-8 md:p-10">
              <Newspaper className="mb-5 h-9 w-9 text-[oklch(0.82_0.16_200)]" />
              <h3 className="heading-hover font-display text-2xl font-bold">The Mission</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Indian news is a rich, multilingual landscape where political actors, institutions, and movements are framed through countless competing viewpoints. VARTA challenges researchers to build systems that <span className="text-foreground">identify targeted actors</span> and <span className="text-foreground">decode the viewpoints</span> projected onto them.
              </p>
            </div>
            <div className="reveal-right glass glow-card p-8 md:p-10">
              <Globe className="mb-5 h-9 w-9 text-[oklch(0.72_0.25_340)]" />
              <h3 className="heading-hover font-display text-2xl font-bold">Why It Matters</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                In a media ecosystem reaching 500M+ readers in over a dozen languages, understanding <span className="text-foreground">how actors are represented</span> is essential for media literacy, bias research, and trustworthy AI for the Global South.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Problem Statement" title="The Challenge" />
          <div className="reveal mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Target Actor Detection", desc: "Identify named or implicit actors — politicians, parties, organizations — being discussed in a news article." },
              { icon: Eye, title: "Viewpoint Analysis", desc: "Classify the stance, sentiment, and framing the article applies to each detected actor." },
              { icon: BarChart3, title: "Representation Output", desc: "Produce a structured, interpretable representation: who, in what light, with what intensity." },
            ].map((c, i) => (
              <div key={c.title} className="glass glow-card p-7" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.55_0.25_270)] to-[oklch(0.72_0.25_340)] shadow-[0_8px_30px_oklch(0.55_0.25_290/0.4)]">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-hover font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Pipeline" title="Visual Workflow" />
          <div className="reveal-zoom mt-16 glass-strong p-8 md:p-12">
            <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
              {[
                { icon: Newspaper, label: "News Article", sub: "Multilingual input" },
                { icon: Target, label: "Target Actor Detection", sub: "NER + grounding" },
                { icon: Eye, label: "Viewpoint Analysis", sub: "Stance & framing" },
                { icon: BarChart3, label: "Representation Output", sub: "Structured signal" },
              ].map((s, i, arr) => (
                <div key={s.label} className="flex flex-1 items-center gap-4 md:flex-col md:gap-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="pulse-glow flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.25_0.08_290)] to-[oklch(0.18_0.05_280)] ring-1 ring-white/10">
                      <s.icon className="h-8 w-8 text-[oklch(0.82_0.16_200)]" />
                    </div>
                    <div className="mt-3 font-display font-semibold">{s.label}</div>
                    <div className="text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden flex-1 md:block">
                      <div className="flow-arrow" />
                    </div>
                  )}
                  {i < arr.length - 1 && (
                    <div className="block h-8 w-px self-center bg-gradient-to-b from-[oklch(0.65_0.25_300)] to-[oklch(0.82_0.16_200)] md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dataset */}
      <section id="dataset" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Dataset" title="VARTA-Corpus" />
          <p className="reveal mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            Curated articles from leading Indian outlets, annotated for actors and viewpoints across twelve languages.
          </p>

          <div className="reveal mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Hindi", "English", "Tamil", "Telugu",
              "Bengali", "Marathi", "Kannada", "Malayalam",
              "Gujarati", "Punjabi", "Urdu", "Odia",
            ].map((lang, i) => (
              <div
                key={lang}
                className="glass glow-card relative overflow-hidden p-5 text-center"
                style={{
                  transform: `translateY(${Math.sin(i) * 8}px)`,
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <Database className="mx-auto mb-2 h-5 w-5 text-[oklch(0.82_0.16_200)]" />
                <div className="font-display font-bold">{lang}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {(2 + (i % 4)).toFixed(1)}k articles
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section id="metrics" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Evaluation" title="Metrics" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Macro F1", desc: "Balanced performance across target actor categories and viewpoint labels." },
              { name: "Span-Level IoU", desc: "Token overlap for accurately localizing actor spans within news text." },
              { name: "Viewpoint Accuracy", desc: "Correct classification of stance and framing per detected actor." },
            ].map((m, i) => (
              <div key={m.name} className="reveal glass glow-card p-7" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-gradient font-display text-5xl font-bold">0{i + 1}</div>
                <h3 className="heading-hover mt-3 font-display text-xl font-bold">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates */}
      <section id="dates" className="section relative z-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Schedule" title="Important Dates" />
          <div className="relative mt-16">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.65_0.25_300)] via-[oklch(0.82_0.16_200)] to-transparent md:left-1/2" />
            {[
              { date: "Feb 15, 2026", title: "Registration Opens", desc: "Teams may register and receive trial data." },
              { date: "Mar 10, 2026", title: "Training Data Released", desc: "Full multilingual training corpus published." },
              { date: "May 20, 2026", title: "Test Phase Begins", desc: "Blind test set released; 2 weeks to submit." },
              { date: "Jun 05, 2026", title: "System Description Due", desc: "Submit your paper detailing your approach." },
              { date: "Sep 12, 2026", title: "VARTA Workshop", desc: "Co-located with ICON 2026 — presentations & awards." },
            ].map((d, i) => (
              <div
                key={d.title}
                className={`reveal relative mb-10 flex items-start gap-6 md:gap-12 ${i % 2 ? "md:flex-row-reverse md:text-right" : ""}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="timeline-dot mt-2 md:absolute md:left-1/2 md:-translate-x-1/2" />
                <div className="glass glow-card flex-1 p-6 md:max-w-[44%]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.82_0.16_200)]">
                    <Calendar className="mr-1 inline h-3.5 w-3.5" />
                    {d.date}
                  </div>
                  <h3 className="heading-hover mt-2 font-display text-lg font-bold">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section id="organizers" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="The Team" title="Organizers" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Dr. Aditi Sharma", role: "IIT Delhi", focus: "NLP & Discourse" },
              { name: "Prof. Ravi Kumar", role: "IIIT Hyderabad", focus: "Indic Languages" },
              { name: "Dr. Meera Iyer", role: "AI4Bharat", focus: "Multilingual Models" },
              { name: "Prof. Arjun Banerjee", role: "ISI Kolkata", focus: "Computational Social Science" },
            ].map((o, i) => (
              <div key={o.name} className="reveal glass glow-card p-6 text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.55_0.25_270)] to-[oklch(0.72_0.25_340)] font-display text-2xl font-bold text-white">
                  {o.name.split(" ").map((n) => n[0]).slice(-2).join("")}
                </div>
                <h3 className="heading-hover font-display font-bold">{o.name}</h3>
                <div className="text-sm text-[oklch(0.82_0.16_200)]">{o.role}</div>
                <div className="mt-1 text-xs text-muted-foreground">{o.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section relative z-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Questions" title="FAQ" />
          <div className="mt-14 space-y-4">
            {[
              { q: "Who can participate in VARTA 2026?", a: "Researchers, students, and industry teams worldwide are welcome. Each team may submit up to three systems per subtask." },
              { q: "Is the dataset freely available?", a: "Yes. Training and trial data are released under a research-only license. The test set is released during a fixed evaluation window." },
              { q: "Do I need to handle all 12 languages?", a: "No. Teams may participate in any subset of languages. Separate leaderboards exist for monolingual and multilingual tracks." },
              { q: "Are LLMs allowed?", a: "Absolutely. Both open-source and proprietary LLMs are permitted. Systems must report all resources, prompts, and finetuning data used." },
              { q: "How is the final ranking decided?", a: "Subtask-level rankings use Macro F1; an overall leaderboard aggregates rank across subtasks via mean reciprocal rank." },
            ].map((f, i) => (
              <details key={i} className="faq-item reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="reveal-zoom glass-strong relative overflow-hidden p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-radial)" }} />
            <Mail className="mx-auto mb-5 h-10 w-10 text-[oklch(0.82_0.16_200)]" />
            <h2 className="heading-hover font-display text-4xl font-bold md:text-5xl">
              <span className="text-gradient">Join VARTA 2026</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Be part of a new generation of NLP research focused on the world's most linguistically diverse media ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:varta2026@iiit.ac.in" className="btn-primary">
                <Mail className="h-4 w-4" /> varta2026@iiit.ac.in
              </a>
              <a href="#" className="btn-ghost">
                <Users className="h-4 w-4" /> Mailing List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-[oklch(0.82_0.16_200)]" />
            <span className="text-gradient font-display font-bold">VARTA 2026</span>
            <span className="text-xs text-muted-foreground">· Indian News NLP</span>
          </div>
          <div className="flex gap-4 text-muted-foreground">
            <a href="#" className="transition hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href="#" className="transition hover:text-foreground"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="transition hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
          </div>
          <div className="text-xs text-muted-foreground">© 2026 VARTA Organizing Committee</div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <div className="reveal mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[oklch(0.82_0.16_200)]">
        {eyebrow}
      </div>
      <h2 className="reveal font-display text-5xl font-bold tracking-tight md:text-6xl">
        <span className="heading-hover text-gradient">{title}</span>
      </h2>
    </div>
  );
}
