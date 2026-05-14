import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const buttonLinkVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/15 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-cyan-400/50 bg-[linear-gradient(135deg,rgba(8,145,178,1),rgba(15,23,42,0.96)_52%,rgba(5,150,105,0.92))] px-5 py-3 text-white shadow-[0_0_28px_rgba(34,211,238,0.22)] hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-[0_0_34px_rgba(16,185,129,0.24)]",
        secondary:
          "border-cyan-200/70 bg-white/75 px-5 py-3 text-slate-900 backdrop-blur hover:-translate-y-0.5 hover:border-cyan-400/70 hover:bg-white hover:shadow-[0_0_24px_rgba(34,211,238,0.16)]",
        ghost:
          "border-transparent bg-transparent px-0 py-0 text-slate-700 hover:text-slate-950",
      },
      size: {
        default: "min-h-11",
        lg: "min-h-12 px-6 text-base",
      },
      withIcon: {
        true: "pr-4",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      withIcon: false,
    },
  },
);

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof buttonLinkVariants> & {
    showIcon?: boolean;
  };

export function ButtonLink({
  className,
  children,
  variant,
  size,
  showIcon = false,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        buttonLinkVariants({ variant, size, withIcon: showIcon }),
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
