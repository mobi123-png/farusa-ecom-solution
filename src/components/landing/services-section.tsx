import { ChartNoAxesColumn, CircleHelp, Store } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    icon: Store,
    title: "E-commerce Setup",
    description:
      "Store setup guidance for Shopify, Amazon, and eBay with a practical step-by-step approach.",
    items: ["Platform setup guidance", "Store structure support", "Marketplace orientation"],
  },
  {
    icon: ChartNoAxesColumn,
    title: "Business Support",
    description:
      "Online business help and basic planning to keep your next steps simple, realistic, and useful.",
    items: ["Basic planning", "Direction for growth", "Simple action-focused support"],
  },
  {
    icon: CircleHelp,
    title: "Practical Assistance",
    description:
      "Straightforward communication and ongoing help for people who want clarity instead of noise.",
    items: ["Problem-solving support", "Quick follow-up guidance", "Clear recommendations"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Focused support for building and improving your online business.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Every service is designed to stay clear, practical, and useful so you can move forward with confidence.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
