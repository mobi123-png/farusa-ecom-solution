import { Container } from "@/components/ui/container";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Shopify Store Owner",
    quote:
      "Farusa Ecom Solution made my store setup simple and easy to understand.",
  },
  {
    name: "Sara Ali",
    role: "Online Seller",
    quote: "I got clear guidance and fast support whenever I needed help.",
  },
  {
    name: "Muhammad Hassan",
    role: "Amazon Seller",
    quote:
      "They helped me move forward with confidence in my online business.",
  },
  {
    name: "Ayesha Noor",
    role: "Small Business Owner",
    quote: "Professional, quick, and practical support from start to finish.",
  },
  {
    name: "Usman Raza",
    role: "eBay Seller",
    quote:
      "The team gave me simple steps that were easy to follow and use.",
  },
  {
    name: "Fatima Zahra",
    role: "Business Founder",
    quote: "Very helpful advice that saved me time and confusion.",
  },
  {
    name: "Ali Ahmed",
    role: "E-commerce Beginner",
    quote: "I finally understood what I needed to do for my store.",
  },
  {
    name: "Hira Malik",
    role: "Digital Seller",
    quote: "Fast communication and clean support made everything easier.",
  },
  {
    name: "Bilal Shaikh",
    role: "Marketplace Seller",
    quote: "Their support was practical and focused on real results.",
  },
  {
    name: "Nimra Khan",
    role: "Startup Owner",
    quote: "A smooth experience with clear help at every step.",
  },
];

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            What clients say about Farusa Ecom Solution
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Real feedback from business owners who needed simple, practical online
            support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-[0_0_24px_rgba(34,211,238,0.06)]"
            >
              <p className="text-lg leading-8 text-slate-700">"{item.quote}"</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <h3 className="text-base font-semibold text-slate-950">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
