"use client";

import { AccountGate } from "@/components/AccountGate";
import { useAuth } from "@/components/auth/AuthProvider";

function SettingsBody() {
  const { student, logout } = useAuth();
  if (!student) return null;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        Settings
      </p>
      <h1 className="mt-4 text-[2.2rem] font-normal leading-[1.1] tracking-tight text-foreground">
        Account settings
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/65">
        You are signed in as {student.email}. This session stays active for 12
        hours, or until you log out.
      </p>

      <dl className="mt-8 border border-foreground/10">
        <div className="grid gap-1 border-b border-foreground/10 px-4 py-4 sm:grid-cols-[10rem_1fr] sm:items-center">
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
            College
          </dt>
          <dd className="text-sm text-foreground">{student.collegeName}</dd>
        </div>
        <div className="grid gap-1 px-4 py-4 sm:grid-cols-[10rem_1fr] sm:items-center">
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
            Batch
          </dt>
          <dd className="text-sm text-foreground">{student.batch}</dd>
        </div>
      </dl>

      <button
        type="button"
        className="mt-8 inline-flex h-10 items-center border border-foreground/15 px-5 text-[15px] text-foreground transition-colors hover:border-foreground/40"
        onClick={() => logout()}
      >
        Logout
      </button>
    </main>
  );
}

export function SettingsScreen() {
  return (
    <AccountGate>
      {() => <SettingsBody />}
    </AccountGate>
  );
}
