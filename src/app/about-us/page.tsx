import type { Metadata } from "next";
import { Container } from "@/components/container";
import { QuoteButton } from "@/components/quote-button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Family-owned carpet cleaning serving the Greater Toronto Area for 10 years.",
};

const values = [
  {
    title: "Integrity",
    text: "We believe in honest and transparent practices. Our clients can trust that we deliver what we promise without hidden fees or unexpected costs.",
  },
  {
    title: "Quality",
    text: "Our team is dedicated to providing the highest quality of service. We use advanced cleaning technology and eco-friendly products to ensure effective results.",
  },
  {
    title: "Customer Satisfaction",
    text: "Your satisfaction is our priority. We listen to your needs and work diligently to exceed your expectations, building lasting relationships based on trust and reliability.",
  },
];

const reasons = [
  {
    title: "Experience",
    text: "Our team comprises trained professionals with extensive experience in the cleaning industry. We understand the unique requirements of various environments and tailor our services accordingly.",
  },
  {
    title: "Community Focus",
    text: "As a local business, we are committed to giving back to our community. We believe in building strong relationships and supporting local initiatives.",
  },
  {
    title: "Sustainability",
    text: "We prioritize environmentally friendly practices, ensuring that our cleaning solutions are safe for both people and the planet. Our operations are designed to minimize waste and reduce our carbon footprint.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-14 md:py-16">
      <Container>
        <h1 className="text-center">About Us</h1>
        <p className="mx-auto mt-4 max-w-4xl text-center text-lg text-black">
          At Toronto Sweep And Scrub, we are proud to be a family-owned and operated business dedicated to providing
          top-notch carpet cleaning services. With a passion for cleanliness and a commitment to excellence, we have
          been serving our community for 10 years, ensuring that commercial spaces such as car parks, warehouses,
          shopping malls, and public areas remain pristine and safe.
        </p>

        <h2 className="mt-14">Our Mission</h2>
        <p className="text-lg text-black">
          Our mission is simple: to deliver reliable, efficient, and eco-friendly cleaning solutions that enhance the
          safety and aesthetics of every environment we service. We believe that a clean space is a happy space, and we
          strive to create healthier working and public areas for everyone.
        </p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h3>Our Values</h3>
            <p>As a family-run business, we take pride in our core values:</p>
            <ul className="mt-2 space-y-3 text-black">
              {values.map((item) => (
                <li key={item.title}>
                  <strong className="text-black">{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/assets/carpet-professional-cleaner.avif"
            alt="Technician cleaning a living room carpet"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/assets/carpet-23.webp"
            alt="Cleaned carpet after extraction"
            className="w-full rounded-2xl object-cover"
          />
          <div>
            <h3>Why Choose Us?</h3>
            <ul className="mt-3 space-y-3 text-black">
              {reasons.map((item) => (
                <li key={item.title}>
                  <strong className="text-black">{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-14">Get to Know Us</h3>
        <p className="text-black">
          At Toronto Sweep and Scrub, we treat every client like family. Our hands-on approach ensures that we are
          involved in every project, from the initial consultation to the completion of the job. We value open
          communication and are always available to address your questions and concerns.
        </p>
        <p className="text-black">
          Join the growing list of satisfied clients who trust us to keep their spaces clean, safe, and inviting.
        </p>
        <QuoteButton className="mt-2" />
      </Container>
    </main>
  );
}
