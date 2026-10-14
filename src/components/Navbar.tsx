"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/assessment", label: "Assessment" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-zinc-950"
        >
          Spardha
        </Link>
        <div className="flex items-center gap-7">
          <nav className="flex items-center gap-6">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-zinc-950"
                      : "text-zinc-500 hover:text-zinc-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/login"
            className="rounded-full bg-zinc-950 px-4 py-1.5 text-sm text-white transition-colors hover:bg-zinc-800"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
