import { Section } from "../../components/ui/Section";
import { Heading } from "../../components/ui/Heading";
import { createPageMetadata } from "../../lib/seo";

const CONTACT_EMAIL = "privacy@xtremon.studio";

export const metadata = createPageMetadata({
  title: "Xtremon Privacy Policy",
  description:
    "How Xtremon collects, uses, and protects information across our products, described in clear and practical terms."
});

export default function PrivacyPage() {
  return (
    <Section>
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <Heading level={1} className="text-3xl md:text-4xl">
            Privacy at Xtremon
          </Heading>
          <p className="text-neutral-300">
            This page describes how we handle information across Xtremon properties. The intent is
            clarity, not fine print.
          </p>
        </header>

        <section aria-labelledby="privacy-collect" className="space-y-2">
          <h2 id="privacy-collect" className="text-lg font-semibold text-white">
            Information we collect
          </h2>
          <p className="text-sm text-neutral-300">
            We may collect information you provide directly, such as contact details and messages
            you send us, as well as limited technical data such as browser type, approximate
            location, and usage patterns from our sites and products.
          </p>
        </section>

        <section aria-labelledby="privacy-use" className="space-y-2">
          <h2 id="privacy-use" className="text-lg font-semibold text-white">
            How we use information
          </h2>
          <p className="text-sm text-neutral-300">
            We use the information we collect to operate and improve our products, respond to
            inquiries, and understand how our software is used. We do not sell your personal data.
          </p>
        </section>

        <section aria-labelledby="privacy-security" className="space-y-2">
          <h2 id="privacy-security" className="text-lg font-semibold text-white">
            Data security
          </h2>
          <p className="text-sm text-neutral-300">
            We apply security practices consistent with modern engineering standards, including
            access controls, encryption in transit, and restricted production access. No system is
            perfectly secure, but we treat security as an ongoing discipline, not a checkbox.
          </p>
        </section>

        <section aria-labelledby="privacy-third-parties" className="space-y-2">
          <h2 id="privacy-third-parties" className="text-lg font-semibold text-white">
            Third-party services
          </h2>
          <p className="text-sm text-neutral-300">
            Xtremon may rely on third-party providers for infrastructure, analytics, or
            communication. Where we do, those services are selected for their security posture and
            alignment with our privacy approach.
          </p>
        </section>

        <section aria-labelledby="privacy-contact" className="space-y-2">
          <h2 id="privacy-contact" className="text-lg font-semibold text-white">
            Contact
          </h2>
          <p className="text-sm text-neutral-300">
            If you have questions about this policy or how we handle data, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:text-sky-300">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </article>
    </Section>
  );
}
