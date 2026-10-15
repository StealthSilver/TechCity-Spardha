import CtaLink from "@/components/CtaLink";
import GradientField from "@/components/GradientField";

export default function ClosingCta() {
  return (
    <section id="start" className="relative isolate overflow-hidden border-t border-foreground/10">
      <GradientField />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="max-w-xl text-[2rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2.6rem]">
            The next data structures paper is assigned with the training.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-foreground/65">
            Sign in with the account from your college, open Data Structures
            1, 2, 3, or 4, and submit. The result is ready when you are.
          </p>
        </div>
        <CtaLink href="/login" size="lg" className="self-start lg:self-end">
          Login
        </CtaLink>
      </div>
    </section>
  );
}
