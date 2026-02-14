"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { fadeIn, defaultTransition } from "../../lib/motion";

export function AboutVisionSection() {
  return (
    <Section>
      <motion.div
        className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10"
        initial={fadeIn.initial}
        whileInView={fadeIn.animate}
        viewport={{ once: true, amount: 0.4 }}
        transition={defaultTransition}
      >
        <Heading level={2} className="text-3xl md:text-4xl">
          A portfolio, not a single bet.
        </Heading>

        <div className="space-y-4 text-neutral-300">
          <p>
            Xtremon is structured to run multiple products in parallel: shared foundations,
            consistent standards, and a view of the portfolio instead of isolated projects.
          </p>
          <p>
            We design each app to plug into a broader ecosystem—so telemetry, deployment, and
            operations get easier with every new product, not harder.
          </p>
          <p>
            Growth is planned, not improvised. We prefer clear interfaces, predictable costs, and
            code that can survive handoffs, pivots, and new teams.
          </p>
        </div>

        <p className="text-sm text-neutral-200">
          The short version: we&apos;re here to build durable software portfolios, not to chase the
          trend cycle.
        </p>
      </motion.div>
    </Section>
  );
}

