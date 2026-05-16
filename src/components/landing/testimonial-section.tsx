import { Container } from "@/components/ui/container";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const autplayRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // autoplay every 4s
    if (autplayRef.current) window.clearInterval(autplayRef.current);
    autplayRef.current = window.setInterval(() => {
      if (!isPaused) emblaApi.scrollNext();
    }, 4000) as unknown as number;

    return () => {
      if (autplayRef.current) window.clearInterval(autplayRef.current);
    };
  }, [emblaApi, isPaused]);

  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center">
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

        <div className="relative">
          <div
            className="embla overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                {testimonials.map((item, idx) => (
                  <div
                    key={item.name}
                    className="embla__slide min-w-[80%] md:min-w-[45%] xl:min-w-[30%]"
                  >
                    <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-[0_0_24px_rgba(34,211,238,0.06)] h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4">
                          <img
                            src={`https://i.pravatar.cc/120?img=${(idx % 70) + 1}`}
                            alt={item.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-base font-semibold text-slate-950">{item.name}</h3>
                            <p className="text-sm text-slate-500">{item.role}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-lg leading-8 text-slate-700">“{item.quote}”</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white"
          >
            ‹
          </button>

          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  );
}
