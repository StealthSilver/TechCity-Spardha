"use client";

import { useEffect, useState, type CSSProperties } from "react";
import CtaLink from "@/components/landing/CtaLink";
import Grainient from "@/components/Grainient";
import HeroPaper from "@/components/landing/HeroPaper";

/** Dark: blue → teal → warm orange. */
const DARK_COLORS = ["#0a1020", "#0f2a3a", "#1a4a6e", "#2f6fed", "#f97316"];
/** Light: sky → teal → coral for a brighter student look. */
const LIGHT_COLORS = ["#eef6ff", "#d4e8ff", "#b8f0e8", "#6eb8f7", "#f97316"];

function readIsLight() {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.theme === "light";
}

export default function Hero() {
  const [light, setLight] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const sync = () => setLight(readIsLight());
    sync();
    window.addEventListener("spardha-theme", sync);
    return () => window.removeEventListener("spardha-theme", sync);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden">
      <div className="hero-grainient" aria-hidden="true">
        <Grainient
          key={`${light ? "light" : "dark"}-${compact ? "sm" : "lg"}`}
          colors={light ? LIGHT_COLORS : DARK_COLORS}
          angle={55}
          flow={0.8}
          silk={0.35}
          grainAmount={0.08}
          type="linear"
          bands={1}
          softness={1}
          scale={1}
          speed={1}
          grainSize={1.2}
          grainAnimated
          contrast={1.05}
          saturation={1.2}
          variation={0.15}
          interactive={!compact}
          stir={1}
          clickSwirl={!compact}
          intro
          lightMode={false}
        />
      </div>
      <div className="hero-grainient-scrim" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-4.25rem)] w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-20">
        <div className="max-w-xl fade-up">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            TechCity assessments
          </p>
          <h1 className="text-[2.35rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4.15rem]">
            A technical assessment for TechCity students.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
            Sit the assessment that follows your training — multiple choice,
            code, and a score the same day. Data structures is open now. AI/ML,
            cloud computing, and more will follow.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CtaLink href="/login" size="lg">
              Login to begin
            </CtaLink>
            <a
              href="/#assessments"
              className="inline-flex h-10 items-center border border-foreground/20 bg-background/40 px-5 text-[15px] text-foreground backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
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
