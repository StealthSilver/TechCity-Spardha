export function ComingSoon({ title }: { title: string }) {
  return (
    <main className="flex min-h-svh w-full flex-col">
      <header className="border-b border-foreground/10 px-6 py-10 sm:px-10 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {title}
        </p>
        <h1 className="mt-4 text-[2.4rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
      </header>
      <div className="flex w-full flex-1 items-center px-6 sm:px-10 lg:px-12">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-foreground/45">
          Coming soon
        </p>
      </div>
    </main>
  );
}
