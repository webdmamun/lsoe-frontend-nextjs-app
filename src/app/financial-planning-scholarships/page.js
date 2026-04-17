import FinancePageClient from "@/components/ServicePages/FinancePageClient";

export const metadata = {
  title: "UK Student Finance, Scholarships & Funding Guidance",
  description:
    "Guidance on Student Finance England, tuition fee loans, maintenance loans, merit scholarships, and proof-of-funds requirements. Free financial planning support for UK Home and international students from LSOE.",
  openGraph: {
    title: "UK Student Finance & Scholarships — London School of Excellence",
    description:
      "LSOE helps students navigate Student Finance England, scholarships, bursaries, and international proof-of-funds. Free financial planning guidance.",
    url: "/financial-planning-scholarships",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Student Finance & Scholarships — LSOE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Student Finance & Scholarships — London School of Excellence",
    description:
      "Free guidance on Student Finance England, scholarships, and proof-of-funds for UK Home and international students from LSOE.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <FinancePageClient />;
}
