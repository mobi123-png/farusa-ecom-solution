export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="animated-grid absolute inset-0 opacity-70" />
      <div className="animated-vignette absolute inset-0" />
      <div className="animated-orb animated-orb-cyan absolute left-[4%] top-[8rem] h-48 w-48 rounded-full bg-cyan-300/16 blur-2xl md:h-64 md:w-64" />
      <div className="animated-orb animated-orb-green absolute right-[8%] top-[12rem] h-52 w-52 rounded-full bg-emerald-300/14 blur-2xl md:h-72 md:w-72" />
      <div className="animated-orb animated-orb-sky absolute left-[18%] top-[44rem] hidden h-72 w-72 rounded-full bg-sky-300/10 blur-2xl xl:block xl:h-96 xl:w-96" />
      <div className="animated-orb animated-orb-teal absolute right-[10%] top-[62rem] hidden h-56 w-56 rounded-full bg-teal-300/10 blur-2xl xl:block xl:h-72 xl:w-72" />
      <div className="animated-beam absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70 shadow-[0_0_18px_rgba(34,211,238,0.45)] md:block" />
    </div>
  );
}
