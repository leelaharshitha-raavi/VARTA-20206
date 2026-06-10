import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NeuralBackground } from "@/components/NeuralBackground";
import { CustomCursor, Counter, useReveal } from "@/components/interactions";
import {
  Newspaper, Target, Eye, Sparkles, Calendar, Mail, Users, Database,
  BarChart3, ArrowRight, Brain, Globe, Github, Twitter, Linkedin,
  Scale, Megaphone, BookOpen, Filter, Layers, Gauge, Activity, Zap, FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VARTA 2026 — Viewpoint Analysis & Representation of Targeted Actors" },
      { name: "description", content: "VARTA 2026 — A shared task on detecting target actors and analyzing viewpoints in Indian news, across multiple languages." },
      { property: "og:title", content: "VARTA 2026" },
      { property: "og:description", content: "Viewpoint Analysis and Representation of Targeted Actors in Indian News — shared task & research conference 2026." },
    ],
  }),
  component: Home,
});

const KEYWORDS = [
  { text: "Government", x: "6%", y: "18%", size: "3.6rem", delay: "0s" },
  { text: "Opposition", x: "78%", y: "10%", size: "3.8rem", delay: "1s" },
  { text: "Narrative", x: "10%", y: "62%", size: "4rem", delay: "2s" },
  { text: "Entity", x: "82%", y: "68%", size: "4.2rem", delay: "0.5s" },
  { text: "Sentiment", x: "44%", y: "84%", size: "3.4rem", delay: "1.5s" },
  { text: "मीडिया", x: "55%", y: "28%", size: "3.8rem", delay: "2.5s" },
  { text: "Viewpoint", x: "28%", y: "44%", size: "5rem", delay: "0.8s" },
  { text: "Bias", x: "68%", y: "48%", size: "4rem", delay: "1.8s" },
  { text: "Opinion", x: "20%", y: "80%", size: "3.4rem", delay: "0.3s" },
  { text: "News", x: "88%", y: "32%", size: "3.4rem", delay: "1.2s" },
];

const NEWS_SNIPPETS = [
  { t: "“Opposition slams policy rollout…”", x: "12%", y: "32%" },
  { t: "“Government announces reforms…”", x: "72%", y: "22%" },
  { t: "“Critics question minister's stance”", x: "18%", y: "72%" },
  { t: "“Media coverage divides nation”", x: "76%", y: "78%" },
  { t: "“Party leader defends position”", x: "48%", y: "16%" },
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
        {NEWS_SNIPPETS.map((n, i) => (
          <div
            key={i}
            className="news-snippet"
            style={{
              left: n.x,
              top: n.y,
              animation: `${i % 2 ? "float-slower" : "float-slow"} ${14 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {n.t}
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
            {["About", "Problem", "Workflow", "Dataset", "Metrics", "Dates", "FAQ"].map((l) => (
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
            A multilingual shared task uncovering how Indian news represents entities — across viewpoints, narratives, polarities, and intensities.
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
              { v: 5, s: "", l: "Indian Languages" },
              { v: 50000, s: "+", l: "News Articles" },
              { v: 6, s: "", l: "Eval Metrics" },
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
                Indian news is a rich, multilingual landscape where political actors, institutions, and movements are framed through countless competing viewpoints. VARTA challenges researchers to build systems that <span className="text-foreground">identify targeted entities</span> and <span className="text-foreground">decode the viewpoints</span> projected onto them.
              </p>
            </div>
            <div className="reveal-right glass glow-card p-8 md:p-10">
              <Globe className="mb-5 h-9 w-9 text-[oklch(0.72_0.25_340)]" />
              <h3 className="heading-hover font-display text-2xl font-bold">Why It Matters</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                In a media ecosystem reaching 500M+ readers in over a dozen languages, understanding <span className="text-foreground">how entities are represented</span> is essential for media literacy, bias research, and trustworthy AI for the Global South.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="section relative z-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Problem Statement" title="Why It's Hard" />
          <p className="reveal mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            Traditional document-level sentiment fails on news. Articles are long, multi-entity, and packed with conflicting opinions. Polarity must be grounded to <span className="text-foreground">whom</span>, not the document.
          </p>

          <div className="mt-14 grid gap-3">
            {[
              { icon: FileText, title: "Long Articles", desc: "Thousands of tokens spanning multiple narratives and quoted sources." },
              { icon: Users, title: "Multiple Entities", desc: "Politicians, parties, institutions and movements all referenced in one piece." },
              { icon: Layers, title: "Mixed Opinions", desc: "A single article praises one actor, criticises another, stays neutral on a third." },
              { icon: Filter, title: "Distributed Context", desc: "Stance signals scatter across paragraphs — coreference and discourse cues matter." },
              { icon: Target, title: "Need for Entity-Level Analysis", desc: "Each opinion must be bound to its specific target with polarity and intensity." },
            ].map((s, i, arr) => (
              <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="cascade-step">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.55_0.25_270)] to-[oklch(0.72_0.25_340)] shadow-[0_8px_30px_oklch(0.55_0.25_290/0.4)]">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-hover font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                {i < arr.length - 1 && <div className="cascade-arrow" />}
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
            <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
              {[
                { icon: Newspaper, label: "News Article", sub: "Multilingual input" },
                { icon: Target, label: "Entity Detection", sub: "Targets in text" },
                { icon: Eye, label: "Opinion Extraction", sub: "Spans & cues" },
                { icon: Scale, label: "Polarity Analysis", sub: "Pos / Neu / Neg" },
                { icon: Gauge, label: "Intensity Scoring", sub: "Strength of stance" },
                { icon: BarChart3, label: "Structured Output", sub: "Per-entity record" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <div className="pulse-glow flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.25_0.08_290)] to-[oklch(0.18_0.05_280)] ring-1 ring-white/10">
                    <s.icon className="h-7 w-7 text-[oklch(0.82_0.16_200)]" />
                  </div>
                  <div className="mt-3 font-display text-sm font-semibold">{s.label}</div>
                  <div className="text-[11px] text-muted-foreground">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Example output */}
          <div className="mt-12">
            <div className="reveal mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.82_0.16_200)]">
              Example Output
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { label: "Target Entity", value: "Finance Minister", color: "oklch(0.82 0.16 200)" },
                { label: "Opinion", value: "“praised the budget rollout”", color: "oklch(0.72 0.25 340)" },
                { label: "Polarity", value: "Positive", color: "oklch(0.78 0.18 160)" },
                { label: "Intensity", value: "0.82", color: "oklch(0.65 0.25 300)" },
              ].map((c, i) => (
                <div key={c.label} className="reveal glass glow-card p-5" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: c.color }}>{c.label}</div>
                  <div className="mt-2 font-display text-lg font-bold">{c.value}</div>
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
            Curated articles from leading Indian outlets, annotated for entities and viewpoints across five major languages.
          </p>

          <div className="reveal mt-14 grid grid-cols-2 gap-5 md:grid-cols-5">
            {[
              { lang: "English", native: "English", count: "12k" },
              { lang: "Hindi", native: "हिन्दी", count: "10k" },
              { lang: "Telugu", native: "తెలుగు", count: "8k" },
              { lang: "Tamil", native: "தமிழ்", count: "8k" },
              { lang: "Bengali", native: "বাংলা", count: "7k" },
            ].map((l, i) => (
              <div
                key={l.lang}
                className="glass glow-card orbit-card relative overflow-hidden p-6 text-center"
                style={{
                  animationDelay: `${i * 0.4}s`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <Database className="mx-auto mb-3 h-6 w-6 text-[oklch(0.82_0.16_200)]" />
                <div className="font-display text-2xl font-bold text-gradient">{l.native}</div>
                <div className="mt-1 font-display font-semibold">{l.lang}</div>
                <div className="mt-2 text-xs text-muted-foreground">{l.count} articles</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Applications" title="Use Cases" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { icon: Scale, title: "Media Bias Detection", desc: "Quantify systematic positive/negative framing across outlets and over time, per entity.", color: "oklch(0.82 0.16 200)" },
              { icon: Megaphone, title: "Political Narrative Analysis", desc: "Trace how parties, coalitions, and movements are positioned across competing media narratives.", color: "oklch(0.72 0.25 340)" },
              { icon: BookOpen, title: "Computational Journalism", desc: "Tooling for fact-checkers and editors to audit entity-level coverage at scale.", color: "oklch(0.78 0.18 160)" },
              { icon: Filter, title: "Balanced News Recommendation", desc: "Diversify feeds by surfacing articles with opposing viewpoints on the same entity.", color: "oklch(0.65 0.25 300)" },
              { icon: Layers, title: "Long-Context NLP", desc: "Drive research in document-length reasoning, multi-entity attribution, and coreference.", color: "oklch(0.78 0.18 220)" },
              { icon: Activity, title: "Public Opinion Tracking", desc: "Monitor how entity sentiment shifts across regions, languages, and news cycles.", color: "oklch(0.72 0.25 30)" },
            ].map((u, i) => (
              <div key={u.title} className="reveal glass glow-card usecase p-7" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${u.color}, oklch(0.55 0.25 290))`, boxShadow: `0 8px 30px ${u.color}` }}>
                  <u.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-hover font-display text-lg font-bold">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Hover to learn more.</p>
                <div className="uc-detail">
                  <p>{u.desc}</p>
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
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { name: "Precision", desc: "Fraction of predicted entity–opinion pairs that are correct.", icon: Target },
              { name: "Recall", desc: "Fraction of true entity–opinion pairs successfully retrieved.", icon: Eye },
              { name: "F1 Score", desc: "Harmonic mean of precision and recall per label.", icon: Zap },
              { name: "Macro F1", desc: "Unweighted mean F1 across all polarity classes.", icon: BarChart3 },
              { name: "MAE", desc: "Mean absolute error on continuous intensity scores.", icon: Gauge },
              { name: "BERTScore", desc: "Semantic similarity between predicted and gold opinion spans.", icon: Brain },
            ].map((m, i) => (
              <div key={m.name} className="reveal glass glow-card p-7" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-start justify-between">
                  <div className="text-gradient font-display text-4xl font-bold">0{i + 1}</div>
                  <m.icon className="h-5 w-5 text-[oklch(0.82_0.16_200)]" />
                </div>
                <h3 className="heading-hover mt-3 font-display text-xl font-bold">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates — horizontal timeline */}
      <section id="dates" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Schedule" title="Important Dates" />
          <div className="reveal mt-12 h-timeline">
            {[
              { date: "Feb 15, 2026", title: "Training Data Release", desc: "Annotated multilingual training corpus published." },
              { date: "Mar 20, 2026", title: "Development Release", desc: "Dev set released for tuning and validation." },
              { date: "May 10, 2026", title: "Test Release", desc: "Blind test set released to all registered teams." },
              { date: "May 24, 2026", title: "Submission Deadline", desc: "Final system outputs must be submitted." },
              { date: "Jun 15, 2026", title: "Results Announcement", desc: "Official leaderboards published." },
              { date: "Sep 12, 2026", title: "VARTA Workshop", desc: "Presentations & awards, co-located with ICON 2026." },
            ].map((d, i) => (
              <div key={d.title} className="h-timeline-item">
                <div className="h-timeline-connector" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="timeline-dot" />
                  <div className="glass glow-card mt-5 w-full p-5 text-center">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[oklch(0.82_0.16_200)]">
                      <Calendar className="mr-1 inline h-3 w-3" />
                      {d.date}
                    </div>
                    <h3 className="heading-hover mt-2 font-display text-base font-bold">{d.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{d.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section id="organizers" className="section relative z-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="The Team" title="Organizers" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {[
              {
                name: "Dr. Alapan Kuila",
                role: "Assistant Professor",
                affil: "Indian Institute of Information Technology, Design and Manufacturing Kurnool",
                focus: "NLP · Opinion Mining · Indian News Analysis",
              },
              {
                name: "Dr. Prashant Kapil",
                role: "Assistant Professor",
                affil: "Bennett University",
                focus: "NLP · Computational Social Science",
              },
            ].map((o, i) => (
              <div key={o.name} className="reveal glass glow-card p-8 text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.55_0.25_270)] to-[oklch(0.72_0.25_340)] font-display text-3xl font-bold text-white shadow-[0_0_40px_oklch(0.65_0.25_300/0.5)]">
                  {o.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="heading-hover font-display text-xl font-bold">{o.name}</h3>
                <div className="mt-1 text-sm text-[oklch(0.82_0.16_200)]">{o.role}</div>
                <div className="mt-2 text-sm text-muted-foreground">{o.affil}</div>
                <div className="mt-3 text-xs text-muted-foreground/80">{o.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section id="impact" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Looking Ahead" title="Expected Impact" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { icon: Globe, title: "Multilingual NLP Research", desc: "Advancing entity-level understanding across India's linguistic diversity." },
              { icon: Scale, title: "Media Bias Detection", desc: "Quantifying systematic framing patterns across outlets and ideologies." },
              { icon: BookOpen, title: "Computational Journalism", desc: "Tooling for newsrooms, fact-checkers, and editorial audits at scale." },
              { icon: Layers, title: "Long-Context Reasoning", desc: "Pushing models toward document-level discourse and coreference." },
              { icon: Brain, title: "Explainable AI for News", desc: "Transparent, attributable opinion extraction grounded in source spans." },
              { icon: Activity, title: "Public Discourse Studies", desc: "Empirical signals for political science and communication research." },
            ].map((m, i) => (
              <div key={m.title} className="reveal glass glow-card p-7" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.55_0.25_270)] to-[oklch(0.72_0.25_340)] shadow-[0_8px_30px_oklch(0.55_0.25_290/0.4)]">
                  <m.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="heading-hover font-display text-lg font-bold">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
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
              { q: "What is VARTA 2026?", a: "VARTA 2026 — Viewpoint Analysis and Representation of Targeted Actors in Indian News — is a shared task at FIRE 2026 focused on entity-centric opinion, polarity, and intensity analysis in multilingual Indian news." },
              { q: "Who can participate?", a: "Researchers, students, and industry teams worldwide are welcome. Each team may submit multiple systems across the available subtasks and language tracks." },
              { q: "What is the main task?", a: "Given a news article, systems must identify the targeted actors (politicians, parties, institutions, stakeholders) and extract the viewpoint expressed toward each — including opinion span, polarity, and intensity." },
              { q: "What languages are supported?", a: "VARTA covers major Indian languages including English, Hindi, Telugu, Tamil, and Bengali. Teams may participate in any subset of languages." },
              { q: "When will the dataset be released?", a: "Training data is released in February 2026, development data in March, and the blind test set in May 2026. See the Important Dates section for the full schedule." },
            ].map((f, i) => (
              <details key={i} className="faq-item reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Further Reading" title="References" />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {[
              { title: "Media Bias in Presidential Elections", authors: "D'Alessio & Allen" },
              { title: "News Framing Research", authors: "De Vreese et al." },
              { title: "News Has Various Shades", authors: "Kuila et al." },
              { title: "From Text to Context", authors: "Kuila & Sarkar" },
              { title: "Natural Language Inference in Context", authors: "Liu et al." },
              { title: "FAIR Guiding Principles", authors: "Wilkinson et al." },
              { title: "BERTScore", authors: "Zhang et al." },
              { title: "Implicit Sentiment Analysis", authors: "Zhou et al." },
            ].map((r, i) => (
              <div key={r.title} className="reveal glass glow-card flex items-start gap-4 p-5" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.55_0.25_270)] to-[oklch(0.72_0.25_340)]">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="heading-hover font-display text-base font-bold leading-snug">{r.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{r.authors}</p>
                </div>
              </div>
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
                <Mail className="h-4 w-4" />
                <span>varta2026@iiit.ac.in</span>
              </a>
              <a href="#" className="btn-ghost">
                <Users className="h-4 w-4" /> Mailing List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-[oklch(0.82_0.16_200)]" />
              <span className="text-gradient font-display text-lg font-bold">VARTA 2026</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Viewpoint Analysis and Representation of Targeted Actors in Indian News.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[oklch(0.82_0.16_200)]">Venue</h4>
            <p className="mt-3 text-sm text-muted-foreground">FIRE 2026 Shared Task</p>
            <p className="text-sm text-muted-foreground">Forum for Information Retrieval Evaluation</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[oklch(0.82_0.16_200)]">Organizers</h4>
            <p className="mt-3 text-sm text-muted-foreground">Dr. Alapan Kuila — IIITDM Kurnool</p>
            <p className="text-sm text-muted-foreground">Dr. Prashant Kapil — Bennett University</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[oklch(0.82_0.16_200)]">Contact</h4>
            <a href="mailto:varta2026@iiit.ac.in" className="mt-3 block text-sm text-muted-foreground transition hover:text-foreground">varta2026@iiit.ac.in</a>
            <div className="mt-4 flex gap-4 text-muted-foreground">
              <a href="#" className="transition hover:text-foreground"><Github className="h-5 w-5" /></a>
              <a href="#" className="transition hover:text-foreground"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="transition hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 VARTA Organizing Committee · FIRE 2026 Shared Task
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
