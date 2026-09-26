import type { Metadata } from "next";
import { ContactForm, quoteFields } from "@/components/contact-form";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Request A Quote",
  description: "Request a written quote for carpet extraction in the Greater Toronto Area.",
};

export default function RequestQuotePage() {
  return (
    <main className="py-12 md:py-16">
      <Container>
        <h1>Get A Quote</h1>
        <h2 className="mt-3">Get Your Quote Today!</h2>
        <p className="max-w-4xl text-lg">
          At Toronto Sweep and Scrub, we understand that every space has unique cleaning needs. To provide you with an
          accurate and personalized quote, please fill out the form below. Our team will review your request and get
          back to you promptly with a detailed estimate tailored to your requirements.
        </p>

        <div className="mt-8 max-w-4xl">
          <ContactForm fields={quoteFields} source="Quote request" submitLabel="Send" />
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/assets/carpet_extraxt.gif"
            alt="Carpet extraction in progress"
            className="w-full rounded-md object-cover"
          />
          <div>
            <h3>What Happens Next?</h3>
            <p>
              After you submit your request, our team will review the information provided and prepare a customized
              quote. We may reach out to you for additional details to ensure we fully understand your needs. You can
              expect a response within 24-48 hours.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl">
            Thanks for Choosing <span className="underline decoration-[#61B6CE] decoration-2 underline-offset-4">Toronto Sweep and Scrub</span>
          </h3>
          <p className="mx-auto mt-4 max-w-3xl">
            Our commitment to quality and customer satisfaction ensures that you receive the best cleaning services
            tailored to your specific requirements. With our expertise and family-owned values, you can trust us to
            deliver exceptional results every time.
          </p>
        </div>
      </Container>
    </main>
  );
}
