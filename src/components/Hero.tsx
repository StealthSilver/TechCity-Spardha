import type { CSSProperties } from "react";
import CtaLink from "@/components/CtaLink";
import GradientField from "@/components/GradientField";

const choices = [
  { id: "array", label: "Array", selected: false },
  { id: "map", label: "Hash map", selected: true },
  { id: "stack", label: "Stack", selected: false },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden">
      <GradientField />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4.25rem)] w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-20">
        <div className="max-w-xl fade-up">
          <h1 className="text-[2.35rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4.15rem]">
            The data structures paper that follows the training.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">
            TechCity teaches data structures inside the college. Spardha is
            where those students sit the paper, answer multiple choice, submit
            code, and leave with a score.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CtaLink href="/login" size="lg">
              Login to begin
            </CtaLink>
            <a
              href="/#assessments"
              className="inline-flex h-10 items-center border border-foreground/15 px-5 text-[15px] text-foreground transition-colors hover:border-foreground/40"
            >
              See the papers
            </a>
          </div>
        </div>

        <div
          className="fade-up border border-foreground/10 bg-background/80 p-5 shadow-[0_24px_80px_rgba(59,99,196,0.08)] backdrop-blur-sm sm:p-6"
          style={{ "--fade-delay": "120ms" } as CSSProperties}
        >
          <div className="flex items-center justify-between gap-4 border-b border-foreground/10 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Paper 02
              </p>
              <p className="mt-1 text-[15px] tracking-tight text-foreground">
                Data Structures 2
              </p>
            </div>
            <p className="text-right font-mono text-[10px] uppercase leading-4 tracking-[0.14em] text-foreground/45">
              Intermediate
              <span className="mt-1 block text-foreground">42:18 left</span>
            </p>
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
            Question 12 of 24 · Multiple choice
          </p>
          <p className="mt-3 text-lg leading-7 tracking-tight text-foreground">
            Which structure gives constant-time lookup by key?
          </p>
          <ul className="mt-5 grid gap-2">
            {choices.map((choice) => (
              <li key={choice.id}>
                <div
                  className={`flex items-center gap-3 border px-3 py-2.5 text-sm ${
                    choice.selected
                      ? "border-accent bg-accent/8 text-foreground"
                      : "border-foreground/10 text-foreground/70"
                  }`}
                >
                  <span
                    className={`grid size-3.5 place-items-center rounded-full border ${
                      choice.selected ? "border-accent" : "border-foreground/25"
                    }`}
                  >
                    {choice.selected ? (
                      <span className="size-1.5 rounded-full bg-accent" />
                    ) : null}
                  </span>
                  {choice.label}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 border border-foreground/10 bg-foreground/[0.03] p-3">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/40">
              <span>Code · Q13</span>
              <span>Python</span>
            </div>
            <pre className="mt-3 overflow-x-auto font-mono text-[12px] leading-6 text-foreground/80">
              <code>{`def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
