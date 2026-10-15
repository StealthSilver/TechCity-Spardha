"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/auth/AuthProvider";

export function AccountGate({
  children,
}: {
  children: (student: NonNullable<ReturnType<typeof useAuth>["student"]>) => React.ReactNode;
}) {
  const { student, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !student) {
      router.replace("/login");
    }
  }, [loading, student, router]);

  if (loading || !student) {
    return (
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-16 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
          Loading account
        </p>
      </main>
    );
  }

  return <>{children(student)}</>;
}
