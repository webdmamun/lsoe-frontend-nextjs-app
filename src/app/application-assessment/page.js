import AssessmentPageClient from "@/components/ServicePages/AssessmentPageClient";

export const metadata = {
  title: "Application Assessment — Personal Statement & Document Review",
  description:
    "LSOE reviews your UK university application, personal statement, academic transcripts, and supporting documents to maximise your offer chances. Expert profiling for Home and international students.",
  openGraph: {
    title: "Application Assessment — London School of Excellence",
    description:
      "Get expert feedback on your personal statement, academic profile, and application documents. LSOE maximises your chances of a UK university offer.",
    url: "/application-assessment",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Application Assessment — LSOE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Assessment — London School of Excellence",
    description:
      "Expert personal statement review and application document audit to maximise your UK university offer. Free assessment from LSOE.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <AssessmentPageClient />;
}
