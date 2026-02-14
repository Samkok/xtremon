import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={`section-shell ${className ?? ""}`.trim()}>
      <Container className="section-inner">{children}</Container>
    </section>
  );
}

