import VisaPageClient from "@/components/ServicePages/VisaPageClient";

export const metadata = {
  title: "Student Route Visa Advice — UKVI Guidance & CAS Support",
  description:
    "Expert UK Student Route visa guidance from London School of Excellence. Support with CAS letters, IHS payments, biometric enrolment, document audits, and Graduate Route planning. 99% visa success rate.",
  openGraph: {
    title: "Student Route Visa Advice — London School of Excellence",
    description:
      "Navigate your UK Student Route visa confidently with LSOE. Expert UKVI compliance, CAS support, and end-to-end document guidance with a 99% success rate.",
    url: "/student-visa-advice",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Student Route Visa Advice — LSOE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Route Visa Advice — London School of Excellence",
    description:
      "Expert UK Student Route visa guidance: CAS, IHS payments, document checks, and Graduate Route support. 99% success rate from LSOE.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <VisaPageClient />;
}
