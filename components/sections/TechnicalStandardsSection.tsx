"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { fadeIn, defaultTransition } from "../../lib/motion";

export function TechnicalStandardsSection() {
  return (
    <Section>
      <motion.div
        className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8"
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        viewport={{ once: true, amount: 0.4 }}
        transition={defaultTransition}
      >
        <Heading level={2} className="text-3xl md:text-4xl">
          Technical standards that don&apos;t compromise.
        </Heading>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Scalability & clean architecture</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Layered architectures, predictable boundaries, and incremental rollout strategies that
              keep new apps from destabilizing the portfolio—or forcing rewrites at product five.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Security</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Principle-of-least-privilege, clear data flows, and a bias for mature, well-audited
              components over bespoke security inventions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Performance discipline</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Tight budgets on payload size, render cost, and background work. Performance work is
              scheduled, measured, and maintained—not &quot;fixed later.&quot;
            </p>
          </div>
        </div>

        <p className="text-sm text-neutral-400">
          The result is software that feels engineered rather than assembled: understandable,
          inspectable, and resilient when real traffic and real teams show up.
        </p>
      </motion.div>
    </Section>
  );
}

