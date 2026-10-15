"use client";

import Link from "next/link";
import { AccountGate } from "@/components/AccountGate";

export function DashboardScreen() {
  return (
    <AccountGate>
      {(student) => (
        <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-16 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Dashboard
          </p>
          <h1 className="mt-4 text-[2.2rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Welcome, {student.name.split(" ")[0]}.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-foreground/70">
            Your student account is signed in. The session stays active for 12
            hours.
          </p>

          <dl className="mt-10 grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-3">
            <div className="bg-background px-4 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
                College
              </dt>
              <dd className="mt-2 text-lg tracking-tight text-foreground">
                {student.collegeName}
              </dd>
            </div>
            <div className="bg-background px-4 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
                Batch
              </dt>
              <dd className="mt-2 text-lg tracking-tight text-foreground">
                {student.batch}
              </dd>
            </div>
            <div className="bg-background px-4 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
                Email
              </dt>
              <dd className="mt-2 truncate text-lg tracking-tight text-foreground">
                {student.email}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/assessment"
              className="inline-flex h-10 items-center bg-accent px-5 text-[15px] font-medium text-on-accent"
            >
              Open assessments
            </Link>
            <Link
              href="/profile"
              className="inline-flex h-10 items-center border border-foreground/15 px-5 text-[15px] text-foreground transition-colors hover:border-foreground/40"
            >
              View profile
            </Link>
          </div>
        </main>
      )}
    </AccountGate>
  );
}
