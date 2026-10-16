import type { CSSProperties } from "react";
import CtaLink from "@/components/CtaLink";
import GradientField from "@/components/GradientField";
import HeroPaper from "@/components/HeroPaper";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden">
      <GradientField tone="blue" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4.25rem)] w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-20">
        <div className="max-w-xl fade-up">
          <h1 className="text-[2.35rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4.15rem]">
            A technical assessment for TechCity students.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">
            Spardha is where students sit the assessment that follows the
            training: multiple choice, code, and a score. Data structures is
            open now. AI/ML, cloud computing, and other assessments will follow.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CtaLink href="/login" size="lg">
              Login to begin
            </CtaLink>
            <a
              href="/#assessments"
              className="inline-flex h-10 items-center border border-foreground/15 px-5 text-[15px] text-foreground transition-colors hover:border-foreground/40"
            >
              See the assessments
            </a>
          </div>
        </div>

        <div className="fade-up" style={{ "--fade-delay": "120ms" } as CSSProperties}>
          <HeroPaper />
        </div>
      </div>
    </section>
  );
}
