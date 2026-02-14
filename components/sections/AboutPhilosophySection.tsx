"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { fadeInUp, defaultTransition } from "../../lib/motion";

type PhilosophyItem = {
  title: string;
  description: string;
};

const PHILOSOPHY: PhilosophyItem[] = [
  {
    title: "Long-term thinking",
    description:
      "We make decisions that still make sense when there are ten products, not just one launch."
  },
  {
    title: "Performance as a baseline",
    description:
      "Fast is the default, not a phase. We treat performance budgets like any other product constraint."
  },
  {
    title: "Engineering depth",
    description:
      "We invest in architecture, observability, and tooling so new ideas can ship without breaking the foundation."
  },
  {
    title: "Product discipline",
    description:
      "Every feature is traceable to a real outcome. Complexity is earned, not introduced by habit."
  }
];

export function AboutPhilosophySection() {
  return (
    <Section>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <Heading level={2} className="text-3xl md:text-4xl">
            A studio built for serious digital products.
          </Heading>
          <p className="mt-4 text-neutral-300">
            Xtremon operates like a permanent engineering arm, not a project shop. Our principles
            keep portfolios coherent as they expand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PHILOSOPHY.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ ...defaultTransition, delay: 0.04 * index }}
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

