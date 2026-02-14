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
    title: "Engineering as a product force",
    description:
      "Architecture, developer experience, and performance are treated as core product levers, not afterthoughts."
  },
  {
    title: "Performance as a constraint",
    description:
      "We design for sub-second interactions, aggressive Lighthouse budgets, and predictable scalability."
  },
  {
    title: "Long-term product ownership",
    description:
      "Systems are shaped for multi-year roadmaps, not launch-week metrics. Every decision has a maintenance story."
  },
  {
    title: "Calm, legible interfaces",
    description:
      "We avoid visual noise and cleverness that obscures structure. Clarity is the default, not a theme toggle."
  }
];

export function StudioPhilosophySection() {
  return (
    <Section>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <Heading level={2} className="text-3xl md:text-4xl">
            A studio built around engineering discipline.
          </Heading>
          <p className="mt-4 text-neutral-300">
            Xtremon specializes in multi-app ecosystems. That demands predictable performance,
            composable architectures, and product decisions that respect the next six quarters—not
            just the next release.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PHILOSOPHY.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...defaultTransition, delay: 0.05 * index }}
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

