import { useEffect, type ReactNode } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { registerGsap } from "@/anim/registerGsap";

/**
 * Wires the global concerns exactly once:
 * GSAP registration, reduced-motion + save-data detection, error boundary.
 * Head metadata is handled by TanStack Router's route-level head() option
 * (this stack's single head mechanism — react-helmet-async is not used).
 */
export function Providers({ children }: { children: ReactNode }) {
  usePrefersReducedMotion();

  useEffect(() => {
    registerGsap();
  }, []);

  return <ErrorBoundary>{children}</ErrorBoundary>;
}

export default Providers;
