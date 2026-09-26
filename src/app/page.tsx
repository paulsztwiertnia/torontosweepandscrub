import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { QuoteButton } from "@/components/quote-button";
import Link from "next/link";

const benefits = [
  {
    title: "Consistent Pricing",
    text: "We are able to provide competitive lump sum or hourly rates for your projects.",
    icon: <MoneyIcon />,
  },
  {
    title: "Easy Booking",
    text: "Book online with our easy online booking system at a time convenient for you.",
    icon: <CalendarIcon />,
  },
  {
    title: "Carbon Neutral",
    text: "Toronto Sweep and Scrub prioritizes sustainability by offsetting its operational carbon footprint.",
    icon: <HandshakeIcon />,
  },
];

const services = [
  {
    title: "Commercial Carpet Cleaning",
    text: "Keep offices, retail spaces, medical facilities, and commercial buildings looking professional with deep carpet extraction that removes dirt, allergens, stains, and high-traffic wear.",
    image: "/assets/Steam-vs-Deep-Clean-Carpet-Cleaning-Cost-in-Toronto.png.webp",
    alt: "Technician extracting dirt from a commercial carpet",
  },
  {
    title: "Residential Carpet Cleaning",
    text: "Restore freshness to your home's carpets by removing embedded dirt, pet hair, stains, allergens, and odours with our professional hot water extraction process.",
    image: "/assets/carpet_extraction.png",
    alt: "Hot water carpet extraction in a living room",
  },
  {
    title: "Stain Restoration",
    text: "From hallways and entrances to heavily used rooms, we target stubborn stains and deeply embedded dirt to restore the appearance of worn carpeted areas.",
    image: "/assets/carpet-scaled.jpg",
    alt: "Freshly cleaned carpet in a bright living room",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[100svh] items-center justify-center bg-black">
        <img
          src="/assets/carpet-scaled.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-white">
          <h1 className="text-4xl text-white md:text-5xl">Transform Your Space Today!</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white md:text-xl">
            Get a FREE Quote for Professional Carpet Extraction Services. Deep Clean. Fresh Results. Fast Drying.
          </p>
          <Link
            href="/request-a-quote"
            className="mt-8 inline-block border-2 border-white px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-white hover:text-black"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <h2 className="text-center">Benefits of Choosing Toronto Sweep and Scrub</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-4 flex justify-center text-[#61B6CE]">{item.icon}</div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mx-auto max-w-xs">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-1 text-lg font-semibold text-[#61B6CE]">About</p>
              <h2>Toronto Sweep and Scrub</h2>
              <p>
                We are a family-owned and operated company specializing in professional hot water carpet extraction
                services for commercial and residential properties throughout the Greater Toronto Area. From offices and
                apartment buildings to retail spaces and homes, we deliver deep cleaning solutions that remove dirt,
                stains, allergens, and odours while extending the life of your carpets.
              </p>
              <p>
                We take pride in providing dependable carpet cleaning services delivered by experienced technicians who
                genuinely care about the quality of their work.
              </p>
              <p>
                We’ll always recommend the right cleaning solution for your carpets and strive to exceed your
                expectations with every visit.
              </p>
              <QuoteButton className="mt-4" />
            </div>
            <img
              src="/assets/carpet_extraxt.gif"
              alt="Carpet extraction wand cleaning a grey carpet"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="px-5 py-14 text-center">
        <h3 className="mx-auto max-w-4xl text-3xl font-medium text-[#5c6570] md:text-4xl">
          Extended Hours for Special Projects – We’re Here When You Need Us!
        </h3>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="text-center">Our Services</h2>
          <p className="mx-auto max-w-4xl text-center text-black">
            Whether you need routine maintenance for your office carpets, stain removal in your home, or deep extraction
            for a commercial property, our professional equipment delivers a cleaner, healthier environment every time.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="flex flex-col bg-[#f4f4f4] text-center">
                <img src={service.image} alt={service.alt} className="aspect-[16/10] w-full object-cover" />
                <div className="flex flex-1 flex-col px-5 py-8">
                  <h3 className="text-2xl leading-tight text-[#4e555c]">{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/assets/carpet-23.webp"
              alt="Close view of a cleaned carpet"
              className="w-full rounded-2xl object-cover"
            />
            <div>
              <p className="mb-1 text-lg font-semibold text-[#61B6CE]">How It Works</p>
              <h2>Quick, Easy and Effective</h2>
              <p>
                We understand how important clean carpets are for creating a healthy, professional, and welcoming space.
                That’s why our carpet extraction services are designed to be efficient, minimally disruptive, and highly
                effective.
              </p>
              <p>
                Using powerful commercial-grade hot water extraction equipment and experienced technicians, we remove
                deep-seated dirt, bacteria, allergens, and stains while helping your carpets dry quickly so you can get
                back to normal as soon as possible.
              </p>
              <p>
                Whether it’s a home, office, apartment building, retail store, or commercial facility, we deliver results
                you can see and cleanliness you can feel.
              </p>
              <QuoteButton className="mt-4" />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 text-center">
        <Container>
          <h2>Where We Operate</h2>
          <p className="mx-auto max-w-4xl">
            Wherever you are in Toronto or the surrounding communities, we’re nearby. We proudly serve the Greater
            Toronto Area, including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville,
            Burlington, and nearby cities. In many cases, we can schedule your carpet cleaning service within 24 hours
            of your booking.
          </p>
          <QuoteButton className="mt-4" />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <p className="mb-1 text-center text-2xl font-medium text-[#61B6CE]">Frequently Asked Questions</p>
          <h2 className="mb-8 text-center">Whatever your requirements, we&apos;re here to help.</h2>
          <FaqList />
        </Container>
      </section>
    </main>
  );
}

function MoneyIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-12" aria-hidden="true">
      <rect x="6" y="12" width="36" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M24 18v12M21 21.5c.6-1.2 1.6-1.8 3-1.8 1.8 0 3 1 3 2.4s-1.1 2.2-3.2 2.6c-2 .4-3.3 1.1-3.3 2.7 0 1.5 1.3 2.5 3.3 2.5 1.5 0 2.6-.6 3.2-1.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-12" aria-hidden="true">
      <rect x="8" y="12" width="32" height="26" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20h32M16 8v8M32 8v8M16 28h4M24 28h4M32 28h4M16 34h4M24 34h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-12" aria-hidden="true">
      <path d="M8 22l8-6 6 5 4-3 8 6 6 4-8 8-6-2-6 3-8-5-4-4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 24l6 5 8-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
