"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { fadeInUp, defaultTransition } from "../../lib/motion";

type BuildCategory = {
  title: string;
  description: string;
};

const CATEGORIES: BuildCategory[] = [
  {
    title: "Consumer apps",
    description:
      "Polished front-ends with infrastructure that can handle spikes, experiments, and growth without drama."
  },
  {
    title: "Utility tools",
    description:
      "Focused utilities and internal tools that reduce operational drag and keep teams shipping faster."
  },
  {
    title: "SaaS platforms",
    description:
      "Multi-tenant, security-conscious systems with clear data boundaries and observability baked in."
  },
  {
    title: "Experimental products",
    description:
      "Deliberately constrained experiments that can graduate into durable products without throwing work away."
  }
];

export function WhatWeBuildSection() {
  return (
    <Section>
      <div className="space-y-8">
        <div className="max-w-3xl">
          <Heading level={2} className="text-3xl md:text-4xl">
            What we build at Xtremon.
          </Heading>
          <p className="mt-4 text-neutral-300">
            From first prototype to production, we design systems, not one-off projects. Every
            engagement is structured to leave behind a healthier product surface.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((category, index) => (
            <motion.article
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-glow"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...defaultTransition, delay: 0.04 * index }}
            >
              <h3 className="text-base font-semibold text-white">{category.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{category.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

