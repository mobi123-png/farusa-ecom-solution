import { MessageCircleMore } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan-100/80 bg-white/80 shadow-[0_0_22px_rgba(34,211,238,0.08)] backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 text-slate-950">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/40 bg-[linear-gradient(145deg,rgba(8,145,178,1),rgba(15,23,42,0.96)_58%,rgba(5,150,105,0.9))] text-sm font-bold text-white shadow-[0_0_22px_rgba(34,211,238,0.18)]">
            FE
          </span>
          <span>
            <span className="block text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Farusa
            </span>
            <span className="block text-base font-semibold">Ecom Solution</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#contact" variant="secondary" showIcon>
            Contact Us
          </ButtonLink>
        </div>

        <a
          href="#contact"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
          aria-label="Open contact section"
        >
          <MessageCircleMore className="h-5 w-5" />
        </a>
      </Container>
    </header>
  );
}
