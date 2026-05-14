import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <Container className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Farusa Ecom Solution. Practical support for online business growth.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://wa.me/447898152814" target="_blank" rel="noreferrer" className="hover:text-slate-950">
            WhatsApp
          </a>
          <a href="https://t.me/Farusaseller" target="_blank" rel="noreferrer" className="hover:text-slate-950">
            Telegram
          </a>
          <a href="https://t.me/bankstore88" target="_blank" rel="noreferrer" className="hover:text-slate-950">
            Channel
          </a>
        </div>
      </Container>
    </footer>
  );
}
