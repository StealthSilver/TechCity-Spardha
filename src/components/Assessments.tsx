"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const papers = [
  {
    index: "01",
    title: "Data Structures 1",
    line: "Arrays, strings, and linked lists from the opening module.",
    level: "Beginner",
    format: "MCQ and code",
    time: "60 min",
    topics: ["Arrays and indexing", "Strings", "Linked lists"],
  },
  {
    index: "02",
    title: "Data Structures 2",
    line: "Stacks, queues, recursion, and hashing.",
    level: "Intermediate",
    format: "MCQ and code",
    time: "75 min",
    topics: ["Stacks", "Queues", "Recursion", "Hash maps"],
  },
  {
    index: "03",
    title: "Data Structures 3",
    line: "Trees, heaps, and the structures that branch.",
    level: "Intermediate",
    format: "MCQ and code",
    time: "75 min",
    topics: ["Binary trees", "Binary search trees", "Heaps", "Tries"],
  },
  {
    index: "04",
    title: "Data Structures 4",
    line: "Graphs, traversal, and the problems that move across them.",
    level: "Advanced",
    format: "MCQ and code",
    time: "90 min",
    topics: [
      "Graph representation",
      "Breadth-first search",
      "Depth-first search",
      "Shortest paths",
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-3 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 4.5 6 8.5 10 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Assessments() {
  const [openIndex, setOpenIndex] = useState<string | null>("01");

  return (
    <section
      id="assessments"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
        <div className="max-w-2xl">
          <SectionHeading title="Four data structures papers, one after the other." />
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-foreground/65">
            Open a paper to see the topics it asks. Each sitting is multiple
            choice and code, set to the point the batch has reached.
          </p>
        </div>

        <ul className="mt-10 border-t border-foreground/10">
          {papers.map((paper) => {
            const open = openIndex === paper.index;
            return (
              <li key={paper.index} className="border-b border-foreground/10">
                <button
                  type="button"
                  className="group grid w-full grid-cols-[3.25rem_minmax(0,1fr)_2.25rem] items-center gap-x-4 px-1 py-5 text-left transition-colors duration-200 hover:bg-accent/[0.06] focus-visible:bg-accent/[0.06] focus-visible:outline-none md:grid-cols-[3.25rem_minmax(0,1fr)_auto_2.25rem] md:gap-x-6 md:px-2 md:py-6"
                  aria-expanded={open}
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === paper.index ? null : paper.index,
                    )
                  }
                >
                  <span className="self-start pt-1 font-mono text-[11px] tracking-[0.16em] text-accent md:self-center md:pt-0">
                    {paper.index}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[1.15rem] tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {paper.title}
                    </span>
                    <span className="mt-1 block max-w-xl text-[15px] leading-6 text-foreground/60">
                      {paper.line}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/45 md:hidden">
                      <span>{paper.level}</span>
                      <span className="text-foreground/20">/</span>
                      <span>{paper.format}</span>
                      <span className="text-foreground/20">/</span>
                      <span className="text-foreground">{paper.time}</span>
                    </span>
                  </span>
                  <span className="hidden items-center gap-x-4 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/45 md:flex">
                    <span>{paper.level}</span>
                    <span className="text-foreground/20">/</span>
                    <span>{paper.format}</span>
                    <span className="text-foreground/20">/</span>
                    <span className="text-foreground">{paper.time}</span>
                  </span>
                  <span
                    className={`grid size-9 place-items-center justify-self-end border transition-colors duration-200 ${
                      open
                        ? "border-accent bg-accent text-on-accent"
                        : "border-foreground/15 text-foreground/45 group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <Chevron open={open} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="border-t border-foreground/10 md:ml-[4.75rem]">
                      {paper.topics.map((topic) => (
                        <li
                          key={topic}
                          className="border-b border-foreground/10 py-3 text-[15px] text-foreground/75 last:border-b-0"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
