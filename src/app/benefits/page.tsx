import type { Metadata } from "next";
import { Container } from "@/components/container";
import { QuoteButton } from "@/components/quote-button";

export const metadata: Metadata = {
  title: "Benefits",
  description: "Why properties across Toronto choose Toronto Sweep and Scrub for carpet extraction.",
};

const benefits = [
  {
    title: "1. Enhanced Safety and Hygiene",
    text: "Our advanced sweeping and scrubbing machines effectively remove dust, dirt, and debris, creating a cleaner environment. This not only reduces slip and fall hazards but also helps maintain high hygiene standards in public spaces, warehouses, and parking garages.",
  },
  {
    title: "2. Increased Longevity of Surfaces",
    text: "Regular cleaning and maintenance extend the life of your carpets and surfaces. By removing harmful substances such as oil and grime, you prevent premature wear and tear, saving you money on costly repairs and replacements in the long run.",
  },
  {
    title: "3. Improved Aesthetic Appeal",
    text: "A clean and well-maintained facility enhances the overall appearance of your property. First impressions matter, and a spotless environment attracts customers, boosts employee morale, and reflects positively on your brand.",
  },
  {
    title: "4. Eco-Friendly Practices",
    text: "We prioritize sustainability by utilizing eco-friendly cleaning solutions and practices. Our operations are designed to minimize environmental impact, allowing you to promote a green image while benefiting from our thorough cleaning services.",
  },
  {
    title: "5. Time and Cost Efficiency",
    text: "Our efficient cleaning processes save you time and money. With our skilled team handling your cleaning needs, you can focus on your core business activities while we ensure your spaces remain clean and safe.",
  },
  {
    title: "6. Flexible Scheduling",
    text: "We understand that different facilities have different cleaning needs. That’s why we offer flexible scheduling options, including extended hours for special jobs. We work around your schedule to provide uninterrupted service, ensuring your operations run smoothly.",
  },
];

export default function BenefitsPage() {
  return (
    <main className="py-14 md:py-16">
      <Container>
        <h2 className="text-center text-4xl md:text-5xl">Our Benefits</h2>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[280px_1fr]">
          <img
            src="/assets/carpet-professional-cleaner.avif"
            alt="Technician cleaning a living room carpet"
            className="w-full rounded-md object-cover"
          />
          <div>
            <h2 className="text-3xl md:text-4xl">Benefits of Our Cleaning Services</h2>
            <div className="mt-4 divide-y divide-neutral-300">
              {benefits.slice(0, 3).map((item) => (
                <div key={item.title} className="py-4 first:pt-0">
                  <h3>{item.title}</h3>
                  <p className="mb-0 text-black">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_320px]">
          <div className="divide-y divide-neutral-300">
            {benefits.slice(3).map((item) => (
              <div key={item.title} className="py-4 first:pt-0">
                <h3>{item.title}</h3>
                <p className="mb-0 text-black">{item.text}</p>
              </div>
            ))}
          </div>
          <img
            src="/assets/residential-and-commercial-carpet-cleaning-in-ottawa.avif"
            alt="Carpet cleaning in an office"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl">Discover the Benefits Today!</h3>
          <p className="mx-auto max-w-3xl">
            Experience the difference of professional cleaning services that prioritize safety, efficiency, and
            sustainability. Contact us for a free quote and let us help you maintain a pristine environment.
          </p>
          <QuoteButton className="mt-2" />
        </div>
      </Container>
    </main>
  );
}
