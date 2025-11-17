import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service offering a vast library of series, movies, and more on any device.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A global technology leader specializing in search, ads, and cloud services.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "Building social products that help people connect, find communities, and grow businesses.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A leader in e‑commerce, cloud computing, digital streaming, and AI.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "Creates software, cloud services, and devices that empower people and organizations.",
    link: "https://microsoft.com",
  },
];

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}