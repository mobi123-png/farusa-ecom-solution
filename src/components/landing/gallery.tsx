"use client";

import React from "react";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop", alt: "Employee at desk" },
  { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80&auto=format&fit=crop", alt: "Team collaborating" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop", alt: "Person working on laptop" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop", alt: "Developer pair" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop", alt: "Open office" },
  { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop", alt: "Focused work" },
  { src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80&auto=format&fit=crop", alt: "Designer at work" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop", alt: "Office meeting" },
];

export function Gallery() {
  return (
    <section aria-label="Employee gallery" className="mt-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Our Team (real people)</h3>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {IMAGES.map((img, i) => (
          <figure key={i} className="snap-start min-w-[220px] sm:min-w-[260px] md:min-w-[300px]">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-48 w-full rounded-2xl object-cover shadow-sm"
            />
            <figcaption className="mt-2 text-sm text-slate-600">Employee {i + 1} — working</figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-2 text-xs text-slate-500">
        Photos from Unsplash — used for illustrative purposes.
      </p>
    </section>
  );
}
