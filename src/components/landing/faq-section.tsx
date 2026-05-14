import { CircleHelp, MessageCircleMore } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    question: "What kind of help does Farusa Ecom Solution provide?",
    answer:
      "We help with practical e-commerce support, including store setup guidance, online business support, simple planning, and direct communication through messaging channels.",
  },
  {
    question: "Which platforms do you support?",
    answer:
      "We currently focus on Shopify, Amazon, and eBay, while also helping clients improve their general online business presence and next steps.",
  },
  {
    question: "How can I contact support quickly?",
    answer:
      "You can contact us directly through WhatsApp or Telegram. A live chat widget can also be enabled on the site for quick conversations.",
  },
  {
    question: "Do I need a full strategy before getting started?",
    answer:
      "No. The approach is intentionally simple and practical. You can start with a basic need, and the next actions can be clarified step by step.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Clear answers for common questions before you get in touch.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This section helps visitors understand the service faster and
              reduces hesitation before they contact you.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.06}>
                <details className="neon-panel group rounded-[1.75rem] border bg-white/92 p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="text-lg font-semibold text-slate-950">
                      {item.question}
                    </span>
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl pr-12 text-base leading-8 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-cyan-300/25 bg-[linear-gradient(180deg,_rgba(15,23,42,1),_rgba(8,47,73,0.98)_58%,_rgba(6,78,59,0.92))] p-8 text-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.6),0_0_28px_rgba(34,211,238,0.12)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-white/10 text-cyan-100">
                <CircleHelp className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">
                Need a direct answer?
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Visitors can use WhatsApp, Telegram, or the live chat widget to
                ask questions right away without leaving the page.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100">
                <MessageCircleMore className="h-4 w-4" />
                Quick contact and simple communication flow
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
