"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import type { StudentPublic } from "@/lib/student";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/assessment", label: "Assessments", icon: "paper" },
  { href: "/results", label: "Results", icon: "results" },
  { href: "/certificates", label: "Certificates", icon: "certificate" },
  { href: "/profile", label: "Profile", icon: "profile" },
  { href: "/settings", label: "Settings", icon: "settings" },
] as const;

type IconName = (typeof links)[number]["icon"] | "logout" | "collapse";

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true,
    className: "size-[18px] shrink-0",
  };

  switch (name) {
    case "dashboard":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" />
          <rect x="13.5" y="3.5" width="7" height="7" />
          <rect x="3.5" y="13.5" width="7" height="7" />
          <rect x="13.5" y="13.5" width="7" height="7" />
        </svg>
      );
    case "paper":
      return (
        <svg {...common}>
          <path d="M7 3.5h7.5L19.5 8.5V20.5h-12.5z" />
          <path d="M14.5 3.5V8.5H19.5" />
          <path d="M9 13h6M9 16.5h6" />
        </svg>
      );
    case "results":
      return (
        <svg {...common}>
          <path d="M4 19.5h16" />
          <path d="M7 19.5V11.5h3v8M14 19.5V6.5h3v13" />
        </svg>
      );
    case "certificate":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="4.5" />
          <path d="M9.2 12.8 8 20.5l4-2.2 4 2.2-1.2-7.7" />
        </svg>
      );
    case "profile":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19.5c1.2-3 3.5-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <path d="M4 8h10M18 8h2M4 16h2M10 16h10" />
          <circle cx="16" cy="8" r="2" />
          <circle cx="8" cy="16" r="2" />
        </svg>
      );
    case "logout":
      return (
        <svg {...common}>
          <path d="M10 5.5H5.5v13H10" />
          <path d="M11 12h8M16 8.5 19.5 12 16 15.5" />
        </svg>
      );
    case "collapse":
      return (
        <svg {...common}>
          <path d="M14.5 6.5 9 12l5.5 5.5" />
        </svg>
      );
  }
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("") || "S";
}

const storageKey = "spardha-sidebar";

export function Sidebar({ student }: { student: StudentPublic }) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey) === "collapsed") {
      setCollapsed(true);
    }
  }, []);

  function toggle() {
    setCollapsed((value) => {
      const next = !value;
      window.localStorage.setItem(storageKey, next ? "collapsed" : "open");
      return next;
    });
  }

  async function onLogout() {
    setPending(true);
    try {
      await logout();
    } finally {
      setPending(false);
    }
  }

  return (
    <aside
      className={`sticky top-0 flex h-svh shrink-0 flex-col border-r border-foreground/10 bg-background motion-safe:transition-[width] motion-safe:duration-300 ${
        collapsed ? "w-[4.5rem]" : "w-60"
      }`}
    >
      <div className={`flex h-16 items-center border-b border-foreground/10 ${collapsed ? "justify-center px-2" : "justify-between px-3"}`}>
        <Link
          href="/dashboard"
          className="grid size-11 shrink-0 place-items-center"
          aria-label="Dashboard"
        >
          <Image
            src="/logo.png"
            alt=""
            width={945}
            height={921}
            className="h-9 w-9 object-contain"
            priority
          />
        </Link>
        {collapsed ? null : (
          <button
            type="button"
            className="grid size-9 place-items-center text-foreground/55 transition-colors hover:text-foreground"
            aria-label="Collapse sidebar"
            aria-expanded
            onClick={toggle}
          >
            <Icon name="collapse" />
          </button>
        )}
      </div>

      {collapsed ? (
        <div className="flex justify-center border-b border-foreground/10 py-2">
          <button
            type="button"
            className="grid size-9 place-items-center text-foreground/55 transition-colors hover:text-foreground"
            aria-label="Expand sidebar"
            aria-expanded={false}
            onClick={toggle}
          >
            <span className="rotate-180">
              <Icon name="collapse" />
            </span>
          </button>
        </div>
      ) : null}

      <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-2 py-3" aria-label="Student">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              title={collapsed ? link.label : undefined}
              className={`flex h-10 items-center gap-3 text-[13px] transition-colors ${
                collapsed ? "justify-center px-0" : "px-3"
              } ${
                active
                  ? "bg-foreground/[0.05] text-foreground"
                  : "text-foreground/55 hover:bg-foreground/[0.03] hover:text-foreground"
              }`}
            >
              <Icon name={link.icon} />
              {collapsed ? <span className="sr-only">{link.label}</span> : <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-foreground/10 p-2">
        <div className={`flex items-center gap-3 px-2 py-2 ${collapsed ? "justify-center px-0" : ""}`}>
          <span className="grid size-8 shrink-0 place-items-center bg-accent text-[11px] font-medium tracking-wide text-on-accent">
            {initials(student.name)}
          </span>
          {collapsed ? null : (
            <span className="min-w-0">
              <span className="block truncate text-sm text-foreground">{student.name}</span>
              <span className="mt-0.5 block truncate font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/40">
                {student.batch}
              </span>
            </span>
          )}
        </div>
        <button
          type="button"
          className={`mt-1 flex h-10 w-full items-center gap-3 text-[13px] text-foreground/55 transition-colors hover:bg-foreground/[0.03] hover:text-foreground disabled:opacity-60 ${
            collapsed ? "justify-center" : "px-3"
          }`}
          disabled={pending}
          title={collapsed ? "Log out" : undefined}
          onClick={onLogout}
        >
          <Icon name="logout" />
          {collapsed ? <span className="sr-only">Log out</span> : <span>{pending ? "Logging out…" : "Log out"}</span>}
        </button>
      </div>
    </aside>
  );
}
