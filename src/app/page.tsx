import { AboutSection } from "@/components/landing/about-section";
import { AnimatedBackground } from "@/components/animated-background";
import { ContactSection } from "@/components/landing/contact-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FaqSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialSection } from "@/components/landing/testimonial-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <AnimatedBackground />
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
