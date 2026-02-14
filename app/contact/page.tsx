import { Section } from "../../components/ui/Section";
import { Heading } from "../../components/ui/Heading";
import { createPageMetadata } from "../../lib/seo";

const CONTACT_EMAIL = "contact@xtremon.studio";

export const metadata = createPageMetadata({
  title: "Contact Xtremon — Product studio inquiries",
  description: "Reach Xtremon to discuss multi-app product work, engineering partnerships, or reviews."
});

export default function ContactPage() {
  return (
    <Section>
      <div className="mx-auto max-w-xl space-y-8">
        <header className="space-y-3 text-center">
          <Heading level={1} className="text-3xl md:text-4xl">
            Contact Xtremon
          </Heading>
          <p className="text-neutral-300">
            Share enough context for a serious product conversation. We&apos;ll respond with clear
            next steps, not a generic sales script.
          </p>
        </header>

        <form
          className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6"
          method="post"
          aria-label="Contact Xtremon"
        >
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-neutral-100">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-primary/40 placeholder:text-neutral-500 focus:border-primary/60 focus:ring-2"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-neutral-100">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-primary/40 placeholder:text-neutral-500 focus:border-primary/60 focus:ring-2"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium text-neutral-100">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-primary/40 placeholder:text-neutral-500 focus:border-primary/60 focus:ring-2"
            />
            <p className="text-xs text-neutral-500">
              Structured for future email integration. Submissions can be wired to SendGrid or your
              preferred provider.
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Send message
          </button>
        </form>

        <p className="text-center text-sm text-neutral-400">
          Prefer direct email? Reach us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:text-sky-300">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
