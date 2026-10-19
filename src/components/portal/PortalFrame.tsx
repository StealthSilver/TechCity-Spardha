"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { Sidebar } from "@/components/portal/Sidebar";

export function PortalFrame({ children }: { children: React.ReactNode }) {
  const { student, loading } = useAuth();
  const router = useRouter();
  const signedOut = !loading && !student;

  useEffect(() => {
    if (signedOut) {
      router.replace("/login");
    }
  }, [signedOut, router]);

  return (
    <div className="flex min-h-svh w-full flex-1">
      {student ? (
        <Sidebar student={student} />
      ) : (
        <div className="w-[4.5rem] shrink-0 border-r border-foreground/10" aria-hidden="true" />
      )}
      <div className="relative flex min-w-0 flex-1 flex-col">
        {children}
        {student ? null : (
          <div className="absolute inset-0 flex items-center bg-background px-6 sm:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
              Loading account
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
