import { ArrowRight, Compass, Sparkles, Target } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  {
    icon: Compass,
    title: "Simple direction",
    description: "Clear support that helps you understand what to do next without unnecessary complexity.",
  },
  {
    icon: Target,
    title: "Practical solutions",
    description: "Advice and structure focused on real use, real communication, and realistic progress.",
  },
  {
    icon: Sparkles,
    title: "Effective progress",
    description: "Solutions designed to help clients move forward with confidence in the e-commerce space.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
          <Reveal>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.6)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                About Us
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Farusa Ecom Solution is dedicated to helping people build a stronger online presence.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                We support individuals and businesses in building and improving their online presence with simple, practical, and effective solutions.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Our focus is helping clients move forward in e-commerce with clarity, useful support, and a straightforward process.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                <ArrowRight className="h-4 w-4 text-sky-300" />
                Build, improve, and grow with a practical workflow.
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <Reveal key={principle.title} delay={index * 0.08}>
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-950">{principle.title}</h3>
                        <p className="mt-2 text-base leading-8 text-slate-600">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
