"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";
import { fadeInUp, defaultTransition } from "../../lib/motion";

export function FinalCTASection() {
  return (
    <Section>
      <motion.div
        className="rounded-3xl border border-primary/40 bg-primary/10 px-8 py-12 md:px-12 md:py-16"
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, amount: 0.4 }}
        transition={defaultTransition}
      >
        <div className="space-y-6 md:flex md:items-center md:justify-between md:space-y-0 md:gap-8">
          <div className="max-w-2xl">
            <Heading level={2} className="text-3xl md:text-4xl">
              Ready to add a product-grade engineering arm to your studio.
            </Heading>
            <p className="mt-4 text-neutral-100">
              If you&apos;re planning multiple apps, heavy traffic, or long-term product bets,
              Xtremon is built to be your engineering counterpart—not another vendor to manage.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <Button type="button">Start a product conversation</Button>
            <Button type="button" variant="ghost">
              Request a technical review
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

