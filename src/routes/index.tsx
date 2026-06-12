import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/NeuralBackground";
import { useReveal } from "@/components/interactions";
import {
  Target, MessageSquare, Scale, Gauge, Eye, Layers,
  Calendar, Mail, FileText, ArrowRight, ExternalLink, MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VARTA 2026 — Viewpoint Analysis & Representation of Targeted Actors in Indian News" },
      { name: "description", content: "VARTA 2026, a FIRE 2026 Shared Task on entity-level viewpoint analysis, polarity, and intensity estimation in multilingual Indian news." },
      { property: "og:title", content: "VARTA 2026 — FIRE 2026 Shared Task" },
      { property: "og:description", content: "Viewpoint Analysis and Representation of Targeted Actors in Indian News." },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NeuralBackground />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="glass-strong mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#hero" className="flex items-baseline gap-2 font-semibold tracking-tight">
            <span className="text-foreground">VARTA</span>
            <span className="text-xs text-muted-foreground">2026</span>
          </a>
          <div className="hidden gap-7 text-sm md:flex">
            {[
              ["About", "about"],
              ["Objectives", "objectives"],
              ["Languages", "languages"],
              ["Dataset", "dataset"],
              ["Dates", "dates"],
              ["Organizers", "organizers"],
              ["FAQ", "faq"],
            ].map(([l, h]) => (
              <a key={h} href={`#${h}`} className="link-underline text-muted-foreground transition hover:text-foreground">
                {l}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary !py-2 !px-4 !text-xs">Participate</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative z-10 flex min-h-screen items-center px-6 pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.12_215)]" />
            FIRE 2026 · Shared Task
          </div>

          <h1 className="reveal font-display text-6xl font-semibold leading-[1.05] tracking-tight md:text-8xl">
            <span className="text-gradient">VARTA 2026</span>
          </h1>

          <p className="reveal mx-auto mt-8 max-w-3xl text-balance text-lg leading-relaxed text-foreground/85 md:text-xl" style={{ transitionDelay: "0.1s" }}>
            Viewpoint Analysis and Representation of Targeted Actors in Indian News
          </p>

          <p className="reveal mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base" style={{ transitionDelay: "0.2s" }}>
            A FIRE 2026 Shared Task focused on understanding how entities are portrayed in multilingual
            news articles through viewpoint analysis, polarity identification, and intensity estimation.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3" style={{ transitionDelay: "0.3s" }}>
            <a href="#contact" className="btn-primary">
              Participate Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="btn-ghost">Learn More</a>
          </div>

          <div className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/5 md:grid-cols-4" style={{ transitionDelay: "0.4s" }}>
            {[
              { v: "4+", l: "Indian Languages" },
              { v: "4", l: "Subtasks" },
              { v: "2026", l: "FIRE Edition" },
              { v: "Open", l: "Participation" },
            ].map((s) => (
              <div key={s.l} className="bg-[oklch(0.18_0.025_250)] px-5 py-6">
                <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="reveal text-center">
            <span className="eyebrow">About</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">About VARTA 2026</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="reveal card-pro p-8 md:p-10">
              <h3 className="heading-hover font-display text-xl font-semibold">Overview</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                VARTA 2026 is a shared task organized as part of <span className="text-foreground">FIRE 2026</span>. It focuses on understanding how
                entities — political leaders, organizations, institutions, and public stakeholders — are
                portrayed in multilingual news articles.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                News articles often contain multiple viewpoints and describe different entities in
                positive, negative, or factual ways. Traditional sentiment analysis assigns a single
                sentiment to an entire sentence or document, which is insufficient for the complexity
                of news content.
              </p>
            </div>

            <div className="reveal card-pro p-8 md:p-10" style={{ transitionDelay: "0.1s" }}>
              <h3 className="heading-hover font-display text-xl font-semibold">Research Focus</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                VARTA addresses this challenge by encouraging the development of systems that can
                identify target entities, extract opinions expressed toward them, determine sentiment
                polarity, and estimate the strength of those opinions.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The shared task aims to advance research in multilingual NLP, media bias analysis,
                computational journalism, long-context reasoning, and explainable AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section id="objectives" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="reveal text-center">
            <span className="eyebrow">Research Focus</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Research Focus Areas</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Six directions advancing entity-centric understanding of opinions and viewpoints in multilingual news.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: "01", icon: Target, title: "Entity-Centric Analysis", desc: "Understanding how important actors are represented within news articles." },
              { n: "02", icon: MessageSquare, title: "Opinion Understanding", desc: "Analyzing viewpoints and perspectives expressed toward entities." },
              { n: "03", icon: Scale, title: "Sentiment & Polarity", desc: "Investigating positive, negative, and factual portrayals of targeted actors." },
              { n: "04", icon: Gauge, title: "Intensity Assessment", desc: "Exploring the strength and impact of expressed viewpoints on a graded scale." },
              { n: "05", icon: Eye, title: "Media Representation", desc: "Studying how entities are framed across different news sources and outlets." },
              { n: "06", icon: Layers, title: "Long-Context Reasoning", desc: "Understanding opinions distributed across lengthy, multi-paragraph news articles." },
            ].map((o, i) => (
              <div key={o.n} className="reveal card-pro p-7" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">{o.n}</span>
                  <o.icon className="h-4 w-4 text-[oklch(0.78_0.12_215)]" />
                </div>
                <h3 className="heading-hover mt-5 font-display text-lg font-semibold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="section relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="reveal text-center">
            <span className="eyebrow">Languages</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Supported Languages</span>
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { lang: "English", native: "English", code: "EN" },
              { lang: "Hindi", native: "हिन्दी", code: "HI" },
              { lang: "Bengali", native: "বাংলা", code: "BN" },
              { lang: "Telugu", native: "తెలుగు", code: "TE" },
            ].map((l, i) => (
              <div key={l.code} className="reveal card-pro p-6 text-center" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">{l.code}</div>
                <div className="font-display mt-3 text-3xl font-medium text-foreground">{l.native}</div>
                <div className="mt-2 text-sm text-muted-foreground">{l.lang}</div>
              </div>
            ))}
          </div>

          <p className="reveal mt-8 text-center text-sm italic text-muted-foreground">
            Additional languages may be added based on availability.
          </p>
        </div>
      </section>

      {/* Dataset */}
      <section id="dataset" className="section relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="reveal text-center">
            <span className="eyebrow">Dataset</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Dataset & Guidelines</span>
            </h2>
          </div>

          <div className="reveal mt-14 card-pro relative overflow-hidden p-10 text-center md:p-14">
            <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at top, oklch(0.30 0.08 220 / 0.35), transparent 65%)" }} />
            <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-white/5">
              <FileText className="h-5 w-5 text-[oklch(0.78_0.12_215)]" />
            </div>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              Dataset and annotation guidelines will be released soon.
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A curated multilingual corpus of Indian news articles with entity-level viewpoint
              annotations. Please refer to the Important Dates section for release timelines.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.78_0.12_215)]" />
              Coming soon — Q1 2026
            </div>
          </div>
        </div>
      </section>

      {/* Example Outputs */}
      <section id="examples" className="section relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="reveal text-center">
            <span className="eyebrow">Examples</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Example Outputs</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Illustrative entity-level annotations expected from participating systems.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                num: "Example 1",
                entity: "Government",
                opinion: "Major infrastructure development plan improving connectivity.",
                polarity: "Positive",
                cls: "pill-positive",
                intensity: 8,
              },
              {
                num: "Example 2",
                entity: "Opposition",
                opinion: "Criticized the plan as unrealistic and poorly implemented.",
                polarity: "Negative",
                cls: "pill-negative",
                intensity: 9,
              },
            ].map((ex, i) => (
              <div key={ex.num} className="reveal card-pro p-8" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">{ex.num.toUpperCase()}</span>
                  <span className={`pill ${ex.cls}`}>{ex.polarity}</span>
                </div>

                <Field label="Target Entity" value={ex.entity} mono />
                <Field label="Opinion" value={ex.opinion} />

                <div className="mt-5 grid grid-cols-2 gap-5 border-t border-white/8 pt-5">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Polarity</div>
                    <div className="mt-2 font-display text-base font-semibold">{ex.polarity}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Intensity</div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-display text-2xl font-semibold text-foreground">{ex.intensity}</span>
                      <span className="text-xs text-muted-foreground">/ 10</span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[oklch(0.78_0.12_215)]" style={{ width: `${ex.intensity * 10}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="dates" className="section relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="reveal text-center">
            <span className="eyebrow">Schedule</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Important Dates</span>
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="timeline-line hidden md:block" />
            <div className="space-y-8">
              {[
                { date: "February 2026", title: "Training Data Release", desc: "Annotated training set made available to registered teams." },
                { date: "March 2026", title: "Development Data Release", desc: "Development set released for tuning and validation." },
                { date: "May 2026", title: "Test Data Release", desc: "Blind test set distributed for system evaluation." },
                { date: "June 2026", title: "Submission Deadline", desc: "Final system outputs and run files due." },
                { date: "July 2026", title: "Results Announcement", desc: "Official results and leaderboards published." },
                { date: "September 2026", title: "FIRE 2026 Workshop", desc: "System papers and presentations at the FIRE 2026 venue." },
              ].map((d, i) => (
                <div key={d.title} className={`reveal flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:gap-10 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className={`${i % 2 === 1 ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.78_0.12_215)]">
                      <Calendar className="mr-1.5 inline h-3 w-3" />
                      {d.date}
                    </div>
                    <h3 className="heading-hover mt-2 font-display text-xl font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                  <div className="hidden md:flex md:justify-center">
                    <div className="timeline-dot" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Events & References */}
      <section id="previous" className="section relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="reveal text-center">
            <span className="eyebrow">References</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Previous Events & References</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Official resources for the FIRE evaluation campaign and related events.
            </p>
          </div>

          <div className="reveal mt-14 card-pro relative overflow-hidden p-8 md:p-12">
            <div
              className="absolute inset-0 -z-10 opacity-50"
              style={{ background: "radial-gradient(ellipse at top right, oklch(0.32 0.08 220 / 0.35), transparent 60%)" }}
            />

            <div className="mx-auto max-w-xl">
              <a
                href="https://fire.irsi.org.in/fire/2025/home"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-[oklch(0.78_0.12_215)]/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-sm border border-[oklch(0.78_0.12_215)]/40 bg-[oklch(0.78_0.12_215)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[oklch(0.82_0.10_215)]">
                    Conference
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition group-hover:text-[oklch(0.82_0.10_215)]" />
                </div>
                <h3 className="heading-hover mt-5 font-display text-xl font-semibold">FIRE 2025</h3>
                <div className="mt-1 font-mono text-[11px] text-muted-foreground">fire.irsi.org.in</div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Official FIRE conference website showcasing shared tasks, workshops, evaluation campaigns, and multilingual NLP research activities.
                </p>
                <span className="link-underline mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.82_0.10_215)]">
                  Visit Website <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section id="organizers" className="section relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="reveal text-center">
            <span className="eyebrow">Committee</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Organizers</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Dr. Alapan Kuila",
                role: "Assistant Professor",
                affil: "Indian Institute of Information Technology Design and Manufacturing Kurnool",
              },
              {
                name: "Dr. Prashant Kapil",
                role: "Assistant Professor",
                affil: "Bennett University",
              },
            ].map((o, i) => (
              <div key={o.name} className="reveal card-pro flex gap-5 p-7 md:p-8" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-[oklch(0.30_0.06_240)] to-[oklch(0.22_0.04_255)] font-display text-lg font-semibold text-foreground">
                  {o.name.replace("Dr. ", "").split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="heading-hover font-display text-lg font-semibold">{o.name}</h3>
                  <div className="mt-1 text-sm text-[oklch(0.82_0.10_215)]">{o.role}</div>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.affil}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="reveal text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="mt-14 space-y-3">
            {[
              {
                q: "What is VARTA 2026?",
                a: "VARTA 2026 (Viewpoint Analysis and Representation of Targeted Actors in Indian News) is a shared task at FIRE 2026 focused on entity-level opinion, polarity, and intensity analysis in multilingual Indian news articles.",
              },
              {
                q: "Who can participate?",
                a: "Researchers, students, and industry teams worldwide are welcome. There is no restriction on team size, and each team may submit multiple systems across the available language tracks.",
              },
              {
                q: "What is the main task?",
                a: "Given a news article, systems must identify the targeted actors (politicians, parties, institutions, stakeholders) and extract the viewpoint expressed toward each — including opinion span, polarity, and intensity.",
              },
              {
                q: "What languages are supported?",
                a: "VARTA covers English, Hindi, Bengali, and Telugu. Teams may participate in any subset of the supported languages. Additional languages may be added based on availability.",
              },
              {
                q: "When will the dataset be released?",
                a: "Training data is scheduled for release in February 2026, development data in March 2026, and the blind test set in May 2026. Please see the Important Dates section for the full schedule.",
              },
              {
                q: "How can I stay updated about announcements?",
                a: "All official announcements, dataset releases, and deadline changes are posted on the official VARTA 2026 page (fire-2026-sharedtask.github.io/VARTA). You can also reach the organizers by email to be added to the participants' mailing list.",
              },
            ].map((f, i) => (
              <details key={i} className="faq-item reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="reveal text-center">
            <span className="eyebrow">Contact</span>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              <span className="heading-hover">Get in Touch</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              For questions about participation, data, or the shared task, contact the organizers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="reveal card-pro p-8">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[oklch(0.78_0.12_215)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Official Communication</span>
              </div>
              <a href="mailto:varta2026@gmail.com" className="link-underline mt-3 inline-block font-display text-lg font-semibold">
                varta2026@gmail.com
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Primary point of contact for all official announcements, registration, and data access.
              </p>
            </div>

            <div className="reveal card-pro p-8" style={{ transitionDelay: "0.06s" }}>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-[oklch(0.78_0.12_215)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Participation Queries</span>
              </div>
              <div className="mt-3 font-display text-lg font-semibold">Teams & Submissions</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Questions about registration, team eligibility, submission format, evaluation tracks,
                and language selection.
              </p>
            </div>

            <div className="reveal card-pro p-8" style={{ transitionDelay: "0.12s" }}>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[oklch(0.78_0.12_215)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Organizer Information</span>
              </div>
              <div className="mt-3 font-display text-lg font-semibold">FIRE 2026 Workshop</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Forum for Information Retrieval Evaluation, September 2026 — venue and dates to be announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/8 px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-base font-semibold">VARTA 2026</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Viewpoint Analysis and Representation of Targeted Actors in Indian News.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Event</h4>
            <p className="mt-3 text-sm text-muted-foreground">FIRE 2026 Shared Task</p>
            <p className="mt-1 text-sm text-muted-foreground">Forum for Information Retrieval Evaluation</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Organizers</h4>
            <p className="mt-3 text-sm text-muted-foreground">Dr. Alapan Kuila — IIITDM Kurnool</p>
            <p className="mt-1 text-sm text-muted-foreground">Dr. Prashant Kapil — Bennett University</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Quick Links</h4>
            <ul className="mt-3 space-y-1.5 text-sm">
              {[
                ["About", "about"],
                ["Objectives", "objectives"],
                ["Dataset", "dataset"],
                ["Dates", "dates"],
                ["FAQ", "faq"],
                ["Contact", "contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={`#${h}`} className="link-underline text-muted-foreground transition hover:text-foreground">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 VARTA Organizing Committee · FIRE 2026 Shared Task</div>
          <div>All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="mb-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className={`mt-2 leading-relaxed ${mono ? "font-display text-lg font-semibold" : "text-sm text-foreground/90"}`}>{value}</div>
    </div>
  );
}

