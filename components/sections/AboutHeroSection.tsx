"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { fadeInUp, defaultTransition } from "../../lib/motion";

export function AboutHeroSection() {
  return (
    <Section>
      <motion.div
        className="space-y-6 rounded-3xl border border-white/10 bg-white/5 px-8 py-12 md:px-12 md:py-16"
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, amount: 0.4 }}
        transition={defaultTransition}
      >
        <Heading level={1}>We build software that survives success.</Heading>
        <p className="max-w-3xl text-lg text-neutral-300">
          Xtremon is a long-term product studio. We design and engineer digital systems for teams
          who expect their products to handle real traffic, real constraints, and real longevity.
        </p>
      </motion.div>
    </Section>
  );
}

