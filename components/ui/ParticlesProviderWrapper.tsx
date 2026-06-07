"use client";

import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ReactNode } from "react";

export default function ParticlesProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ParticlesProvider init={loadSlim}>{children}</ParticlesProvider>;
}
