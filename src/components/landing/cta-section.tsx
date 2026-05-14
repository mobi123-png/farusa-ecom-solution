import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="pb-24 pt-8 sm:pb-28">
      <Container>
        <Reveal>
          <div className="neon-panel relative overflow-hidden rounded-[2.5rem] border bg-white px-8 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="absolute -right-10 bottom-4 h-40 w-40 rounded-full bg-emerald-300/15 blur-3xl" />
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.24),_transparent_55%),radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_48%)] lg:block" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                Farusa Ecom Solution
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Start building your next online move with{" "}
                <span className="neon-text">simple and practical support.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Whether you are setting up a store, improving your online presence, or looking for clearer direction, we are here to help.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="#services" size="lg" showIcon>
                  Get Started
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="lg">
                  Contact Us
                </ButtonLink>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                <ArrowRight className="h-4 w-4 text-cyan-600" />
                Practical support for Shopify, Amazon, eBay, and general online business growth.
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
