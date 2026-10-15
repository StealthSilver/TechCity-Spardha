"use client";

import { AccountGate } from "@/components/AccountGate";

const rows = [
  ["Name", "name"],
  ["Email", "email"],
  ["College name", "collegeName"],
  ["Batch", "batch"],
] as const;

export function ProfileScreen() {
  return (
    <AccountGate>
      {(student) => (
        <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Profile
          </p>
          <h1 className="mt-4 text-[2.2rem] font-normal leading-[1.1] tracking-tight text-foreground">
            {student.name}
          </h1>
          <p className="mt-4 text-sm leading-6 text-foreground/65">
            These details were saved with your student account.
          </p>
          <dl className="mt-8 border border-foreground/10">
            {rows.map(([label, key]) => (
              <div
                key={key}
                className="grid gap-1 border-b border-foreground/10 px-4 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:items-center"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
                  {label}
                </dt>
                <dd className="text-sm text-foreground">{student[key]}</dd>
              </div>
            ))}
          </dl>
        </main>
      )}
    </AccountGate>
  );
}
