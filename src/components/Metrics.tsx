import SectionHeading from "@/components/SectionHeading";

const outcomes = [
  {
    label: "Score",
    title: "The mark is ready when you submit.",
    body: "Multiple choice and code are scored together. A student leaves the sitting with a result, not a wait for someone to grade the paper later.",
  },
  {
    label: "Time",
    title: "The clock stays part of the result.",
    body: "Each paper has a set time. The result shows how much of that clock was used, so the sitting records the work and the pace.",
  },
  {
    label: "Record",
    title: "Earlier attempts stay beside the new one.",
    body: "A second sitting does not erase the first. The student and the trainer can see whether the score moved from one paper to the next.",
  },
  {
    label: "Certificate",
    title: "A finished paper ends with a certificate.",
    body: "The certificate carries the student’s name and the module that was cleared: Data Structures 1, 2, 3, or 4.",
  },
];

export default function Metrics() {
  return (
    <section id="results" className="scroll-mt-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
        <div className="max-w-2xl">
          <SectionHeading
            title="What a student takes from the paper."
            titleClassName="max-w-xl text-[2rem] sm:text-[2.45rem]"
          />
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-foreground/65">
            A technical assessment is more than a single figure. The score,
            the time, the earlier attempts, and a certificate are all part of
            the same result.
          </p>
        </div>

        <ul className="mt-12 border border-foreground/10">
          {outcomes.map((item) => (
            <li
              key={item.label}
              className="grid border-b border-foreground/10 last:border-b-0 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:items-stretch"
            >
              <div className="flex items-center border-b border-foreground/10 bg-accent/[0.06] px-5 py-4 sm:border-b-0 sm:border-r sm:px-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {item.label}
                </p>
              </div>
              <div className="px-5 py-5 sm:px-8 sm:py-8">
                <h3 className="text-[1.2rem] leading-snug tracking-tight text-foreground sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[15px] leading-7 text-foreground/65">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
