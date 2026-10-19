"use client";

import { useState } from "react";
import GradientField from "@/components/landing/GradientField";
import { AuthPanel } from "@/components/auth/AuthPanel";

export function LoginScreen() {
  const [view, setView] = useState<"register" | "login">("login");

  return (
    <main className="relative isolate flex flex-1 overflow-hidden">
      <GradientField />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:py-20">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Student account
          </p>
          <h1 className="mt-5 text-[2.35rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {view === "register"
              ? "Create the account for your sitting."
              : "Log in with email and password."}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-foreground/75">
            {view === "register"
              ? "Add your name, email, password, college, and batch. If you already have an account, switch to login in the same window."
              : "Use the email and password from your student account. A signed-in session lasts 12 hours."}
          </p>
        </div>
        <AuthPanel view={view} onViewChange={setView} />
      </div>
    </main>
  );
}
