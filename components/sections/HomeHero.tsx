"use client";

import { motion } from "framer-motion";
import { fadeInUp, defaultTransition, staggerChildren } from "../../lib/motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";

export function HomeHero() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/0 to-white/5 p-[1px]">
        <motion.div
          className="absolute inset-0 -z-10 opacity-40"
          aria-hidden="true"
          initial={{ opacity: 0.6, y: 0 }}
          animate={{ opacity: 0.9, y: -4 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%)]" />
        </motion.div>

        <motion.div
          className="relative z-10 flex flex-col gap-8 px-8 py-12 md:px-12 md:py-16"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...defaultTransition, ...staggerChildren(0.08).animate.transition }}
        >
          <motion.div className="max-w-3xl space-y-4" initial={fadeInUp.initial} animate={fadeInUp.animate}>
            <Heading level={1}>
              Engineered digital products for the next decade.
            </Heading>
            <p className="text-lg text-neutral-300">
              Xtremon is a multi-app product studio building durable, high-performance software.
              We design systems that can survive scale, pivots, and the realities of long-term
              product work.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
          >
            <Button type="button">Talk with engineering</Button>
            <Button type="button" variant="ghost">
              View product work
            </Button>
          </motion.div>

          <motion.div
            className="mt-4 flex flex-wrap gap-6 text-sm text-neutral-400"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
          >
            <div>
              <span className="text-neutral-200">Performance-first</span>
              <span className="mx-2 text-neutral-600">/</span>
              <span>Built for Lighthouse 90+ from day one.</span>
            </div>
            <div>
              <span className="text-neutral-200">Long-term stewardship</span>
              <span className="mx-2 text-neutral-600">/</span>
              <span>Architecture that doesn&apos;t collapse at 10+ products.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

