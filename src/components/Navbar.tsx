"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { ProfileMenu } from "@/components/ProfileMenu";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#assessments", label: "Assessments" },
  { href: "/#results", label: "Results" },
] as const;

export function Navbar() {
  const { student, loading, openAuth, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/10 transition-colors duration-300 ${
        scrolled || open ? "bg-white/85 backdrop-blur-xl" : "bg-[#f7f5f1]/90"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className="flex shrink-0 items-baseline gap-2.5" aria-label="Spardha home">
          <Image
            src="/logo.png"
            alt=""
            width={945}
            height={921}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            priority
          />
          <span className="relative -translate-y-[6px] text-[21px] font-bold uppercase leading-none tracking-[0.16em] text-accent sm:text-[22px]">
            Spardha
          </span>
        </Link>

        <div className="flex min-w-0 items-center justify-end gap-6 lg:gap-8">
          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[12px] uppercase tracking-[0.16em] text-foreground/55 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {loading ? (
            <span className="inline-block size-9 rounded-full bg-foreground/10" aria-hidden="true" />
          ) : student ? (
            <ProfileMenu />
          ) : (
            <button
              type="button"
              className="hidden h-8 items-center bg-accent px-4 text-[13px] font-medium text-on-accent transition-colors hover:bg-accent/90 lg:inline-flex"
              onClick={() => openAuth("register")}
            >
              Login
            </button>
          )}

          <button
            type="button"
            className="relative grid h-10 w-10 place-items-center border border-foreground/10 text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-200 ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-200 ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`absolute inset-x-0 top-full z-50 border-t border-foreground/10 bg-[#f7f5f1] shadow-[0_24px_48px_rgba(26,25,22,0.08)] transition-[max-height,opacity] duration-300 lg:hidden ${
          open
            ? "max-h-[calc(100svh-4.25rem)] overflow-y-auto opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-3 pt-2">
            {student ? (
              <div className="grid gap-1">
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="block px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  onClick={closeMenu}
                  className="block px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70"
                >
                  Settings
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    void logout();
                  }}
                  className="inline-flex h-10 w-full items-center justify-center border border-foreground/15 text-[13px] font-medium text-foreground"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openAuth("register");
                }}
                className="inline-flex h-10 w-full items-center justify-center bg-accent text-[13px] font-medium text-on-accent"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
