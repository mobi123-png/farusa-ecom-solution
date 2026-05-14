import { ExternalLink, Mail, MessageCircleMore, Phone, Send } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const contactMethods = [
  {
    icon: Phone,
    title: "WhatsApp / Phone",
    value: "+44 7898 152814",
    description: "Direct support for quick communication and practical help.",
    href: "https://wa.me/+447898152814",
    linkLabel: "Open WhatsApp",
  },
  {
    icon: Send,
    title: "Telegram",
    value: "@Farusaseller",
    description: "Reach out directly through Telegram for updates and support.",
    href: "https://t.me/Farusaseller",
    linkLabel: "Open Telegram",
  },
  {
    icon: MessageCircleMore,
    title: "Telegram Channel",
    value: "Farusa Accounts Hub",
    description: "Follow the channel link for additional updates and contact points.",
    href: "https://t.me/bankstore88",
    linkLabel: "Open Channel",
  },
  {
    icon: Mail,
    title: "Support",
    value: "Available on Telegram & WhatsApp",
    description: "Support is currently available through the main messaging channels above.",
    href: "https://t.me/Farusaseller",
    linkLabel: "Start a conversation",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Contact Farusa Ecom Solution through the channel that works best for you.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              WhatsApp, Telegram, and direct support are all ready to help you move your online business forward.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
          <div className="grid gap-6 sm:grid-cols-2">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <Reveal key={method.title} delay={index * 0.08}>
                  <article className="neon-panel flex h-full flex-col rounded-[2rem] border bg-white p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/40 bg-[linear-gradient(145deg,rgba(8,145,178,1),rgba(15,23,42,0.96)_58%,rgba(5,150,105,0.9))] text-white shadow-[0_0_24px_rgba(34,211,238,0.18)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-slate-950">{method.title}</h3>
                    <p className="mt-3 text-lg font-medium text-slate-800">{method.value}</p>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{method.description}</p>
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-sky-700"
                    >
                      {method.linkLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.16}>
            <div className="rounded-[2rem] border border-cyan-400/25 bg-[linear-gradient(180deg,_rgba(15,23,42,1),_rgba(8,47,73,0.98)_52%,_rgba(6,78,59,0.94))] p-8 text-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.6),0_0_36px_rgba(34,211,238,0.14)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Quick Access
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Ready to get support for your online business?
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Use the direct channels below to start the conversation and explain what kind of help you need.
              </p>
              <div className="mt-8 space-y-4">
                <ButtonLink
                  href="https://wa.me/+447898152814"
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="lg"
                  showIcon
                  className="w-full justify-between border-white/15 bg-white/10 text-white hover:border-white/25 hover:bg-white/15"
                >
                  Message on WhatsApp
                </ButtonLink>
                <ButtonLink
                  href="https://t.me/Farusaseller"
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="lg"
                  showIcon
                  className="w-full justify-between border-white/15 bg-white/10 text-white hover:border-white/25 hover:bg-white/15"
                >
                  Open Telegram
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
