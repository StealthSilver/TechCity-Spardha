const links = [
  { href: "/#about", label: "About" },
  { href: "/#how-it-works", label: "Working" },
  { href: "/#features", label: "Features" },
  { href: "/#assessments", label: "Assessments" },
  { href: "/login", label: "Login" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <a
          href="https://techcityskills.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-fit items-center bg-accent px-5 text-[13px] font-medium text-on-accent transition-colors hover:bg-accent/90"
        >
          Visit Site
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/45 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[12px] text-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>TechCity Hub, Level 4, Cyber City 400001</p>
          <a
            href="mailto:hello@techcityskills.com"
            className="underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground"
          >
            hello@techcityskills.com
          </a>
        </div>
      </div>
    </footer>
  );
}
