import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    index: "01",
    title: "Levels of questions",
    body: "Questions follow the four papers: Data Structures 1, 2, 3, and 4, so a sitting matches the module a student has reached.",
  },
  {
    index: "02",
    title: "Multiple choice",
    body: "Single-answer questions on arrays, trees, graphs, and the checks that sit between longer problems.",
  },
  {
    index: "03",
    title: "Code submission",
    body: "A question can ask for a program. The student writes it in the browser and submits the source with the rest of the paper.",
  },
  {
    index: "04",
    title: "Instant result",
    body: "The score is calculated when the paper is submitted. There is no wait for a manual queue.",
  },
  {
    index: "05",
    title: "Evaluation over time",
    body: "Each sitting is kept. A student and a trainer can see how the score moves from one attempt to the next.",
  },
  {
    index: "06",
    title: "Certificates",
    body: "A completed paper ends with a certificate in the student’s name, tied to Data Structures 1, 2, 3, or 4.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
        <div className="max-w-2xl">
          <SectionHeading title="What a student can do in one sitting." />
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-foreground/65">
            A data structures paper holds both kinds of work the class trains
            for: a chosen answer, and code that has to run.
          </p>
        </div>

        <ul className="mt-12 grid gap-px bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.index} className="bg-background px-5 py-6 sm:px-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent">
                {feature.index}
              </p>
              <h3 className="mt-4 text-[1.15rem] tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-foreground/60">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
