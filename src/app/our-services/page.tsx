import type { Metadata } from "next";
import { Container } from "@/components/container";
import { QuoteButton } from "@/components/quote-button";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Commercial, residential, and apartment carpet extraction across the Greater Toronto Area.",
};

const services = [
  {
    title: "Commercial Carpet Cleaning",
    image: "/assets/Steam-vs-Deep-Clean-Carpet-Cleaning-Cost-in-Toronto.png.webp",
    alt: "Commercial carpet extraction",
    text: "Clean carpets make a lasting impression on clients while creating a healthier environment for employees and visitors. Over time, high foot traffic causes dirt, allergens, stains, and debris to become trapped deep within carpet fibres. Our professional hot water extraction process removes embedded contaminants, restores the appearance of your carpets, and helps extend their lifespan. Whether you manage an office, retail store, medical facility, hotel, or commercial building, our experienced technicians deliver thorough cleaning with flexible scheduling to minimize disruption to your business.",
  },
  {
    title: "Residential Carpet Cleaning",
    image: "/assets/carpet_extraxt.gif",
    alt: "Residential carpet extraction",
    text: "Your home’s carpets collect dust, allergens, pet hair, stains, and everyday dirt that regular vacuuming simply can’t remove. Our deep carpet extraction process penetrates below the surface to lift stubborn contaminants while refreshing and revitalizing your carpets. From single rooms to entire homes, we provide safe, eco-friendly cleaning solutions that leave your carpets looking cleaner, smelling fresher, and drying quickly so you can get back to enjoying your space.",
  },
  {
    title: "Apartment & Condo Carpet Cleaning",
    image: "/assets/carpet-23.webp",
    alt: "Carpet cleaning for apartments and condos",
    text: "Apartment buildings and condominiums experience constant foot traffic that can quickly wear down carpeted hallways, suites, and common areas. Our professional carpet extraction service removes built-up dirt, stains, and odours while restoring the appearance of heavily used carpets. Whether you’re a property manager preparing units for new tenants or a homeowner looking to refresh your living space, we provide efficient, reliable service with flexible scheduling to minimize inconvenience and keep your property looking its best.",
  },
];

export default function OurServicesPage() {
  return (
    <main className="py-14 md:py-16">
      <Container>
        <h2 className="text-center text-4xl md:text-5xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-lg text-black">
          Whether it’s restoring carpets in your home, maintaining clean office spaces, or deep cleaning high-traffic
          commercial facilities, our professional carpet extraction services deliver cleaner, healthier, and fresher
          carpets you can count on.
        </p>
        <div className="mt-8 flex justify-center">
          <QuoteButton />
        </div>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <article key={service.title} className="grid items-center gap-8 lg:grid-cols-2">
              <img
                src={service.image}
                alt={service.alt}
                className={`w-full rounded-2xl object-cover ${index % 2 === 1 ? "lg:order-first" : "lg:order-last"}`}
              />
              <div>
                <h2>{service.title}</h2>
                <p className="text-lg">{service.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <QuoteButton />
        </div>
      </Container>
    </main>
  );
}
