import AccommodationPageClient from "@/components/ServicePages/AccommodationPageClient";

export const metadata = {
  alternates: { canonical: '/secure-accommodation' },
  title: "Student Accommodation Support — UK University Housing",
  description:
    "LSOE helps students secure safe, affordable accommodation near UK universities. Support with university halls, purpose-built student accommodation (PBSA), and private housing across London, Birmingham, Leeds, and beyond.",
  openGraph: {
    title: "Student Accommodation Support — London School of Excellence",
    description:
      "Find safe, affordable student housing near your UK university. LSOE supports Home and international students with halls, PBSA, and private rentals.",
    url: "/secure-accommodation",
    images: [{ url: "/og-image.png", width: 1024, height: 1024, alt: "Student Accommodation Support — LSOE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Accommodation Support — London School of Excellence",
    description:
      "LSOE helps you find safe, affordable UK student housing — university halls, PBSA, and private rentals across London, Birmingham, and Leeds.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <AccommodationPageClient />;
}
