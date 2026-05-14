import Balancer from "react-wrap-balancer";
import { BadgeCheck, MessageCircle, ShoppingBag, Store } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const highlights = ["Shopify", "Amazon", "eBay", "Practical Support"];

const supportCards = [
  {
    icon: Store,
    title: "Simple store guidance",
    description: "Clear steps for launching or refining your online store without unnecessary complexity.",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace readiness",
    description: "Support for product presentation, setup flow, and selling on familiar platforms.",
  },
  {
    icon: MessageCircle,
    title: "Direct communication",
    description: "Fast contact through WhatsApp and Telegram when you need practical next steps.",
  },
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.94),_rgba(248,250,252,0.82))]" />
      <div className="absolute left-[8%] top-10 -z-10 hidden h-40 w-40 rounded-full bg-cyan-300/16 blur-2xl md:block" />
      <div className="absolute right-[12%] top-24 -z-10 hidden h-44 w-44 rounded-full bg-emerald-300/14 blur-2xl md:block" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center">
          <div className="max-w-3xl">
            <div className="neon-border mb-6 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-cyan-600" />
              Helping you build and grow your online business
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              <Balancer>
                Simple and practical support for your{" "}
                <span className="neon-text">e-commerce journey.</span>
              </Balancer>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Farusa Ecom Solution helps individuals and businesses move
              forward online with clear setup guidance, focused business
              support, and direct communication when it matters.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#services" size="lg" showIcon>
                Get Started
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" size="lg">
                Contact Us
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="neon-border rounded-full border bg-white/85 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_46%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.16),_transparent_42%)] blur-xl" />
            <div className="neon-panel rounded-[2rem] border bg-white/82 p-6 backdrop-blur xl:p-7">
              <div className="mb-6 rounded-[1.5rem] border border-cyan-400/30 bg-[linear-gradient(145deg,rgba(2,6,23,1),rgba(12,74,110,0.95)_60%,rgba(6,78,59,0.9))] p-6 text-white shadow-[0_0_26px_rgba(34,211,238,0.14)]">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">
                  Farusa Ecom Solution
                </p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-white">
                  Practical online business support with a clean and focused
                  approach.
                </p>
              </div>

              <div className="space-y-4">
                {supportCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-[1.5rem] border border-cyan-100 bg-slate-50/90 p-5 shadow-[0_0_18px_rgba(34,211,238,0.06)]"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200 bg-white text-cyan-700 shadow-[0_0_12px_rgba(34,211,238,0.1)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h2 className="text-lg font-semibold text-slate-950">
                            {card.title}
                          </h2>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
