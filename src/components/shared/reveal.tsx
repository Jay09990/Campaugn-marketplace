"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay,
        duration: 0.8,
        ease: "power3.out",
      },
    );
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}
