"use client";

import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { Heading } from "../ui/Heading";
import { fadeInUp, defaultTransition } from "../../lib/motion";

type AppStatus = "live" | "in-development";

type AppMeta = {
  name: string;
  description: string;
  status: AppStatus;
};

const APPS: AppMeta[] = [
  {
    name: "Signalframe",
    description: "Operational analytics surface for multi-app portfolios with real-time insight.",
    status: "live"
  },
  {
    name: "RelayOS",
    description: "Background job and workflow runtime tuned for product teams, not infra teams.",
    status: "in-development"
  },
  {
    name: "Northline",
    description: "Opinionated starter for durable consumer apps with built-in observability.",
    status: "in-development"
  }
];

type AppCardProps = AppMeta;

function AppCard({ name, description, status }: AppCardProps) {
  const isLive = status === "live";
  const label = isLive ? "Live" : "In development";
  const badgeClasses = isLive
    ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/40"
    : "bg-amber-500/10 text-amber-300 border-amber-500/40";

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6">
      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeClasses}`}
          >
            {label}
          </span>
        </div>
        <p className="mt-3 text-sm text-neutral-300">{description}</p>
      </div>
      <p className="mt-4 text-xs text-neutral-500">
        Structured to support environment-specific configs, observability hooks, and future case
        studies without backing us into a rewrite.
      </p>
    </article>
  );
}

export function ProductPortfolioSection() {
  return (
    <Section>
      <div className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Heading level={2} className="text-3xl md:text-4xl">
              Portfolio designed to scale with the studio.
            </Heading>
            <p className="mt-4 text-neutral-300">
              Each product is treated as part of an ecosystem: shared primitives, consistent
              telemetry, and deployment strategies that don&apos;t explode when you add the tenth
              app.
            </p>
          </div>
          <p className="max-w-xs text-sm text-neutral-400">
            We bias for reusable infra and patterns so every new app is faster to ship and cheaper
            to maintain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {APPS.map((app, index) => (
            <motion.div
              key={app.name}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...defaultTransition, delay: 0.05 * index }}
            >
              <AppCard {...app} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

