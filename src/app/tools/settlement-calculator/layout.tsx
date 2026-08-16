import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settlement Calculator — How Much Is Your Case Worth?",
  description:
    "Free settlement calculator. Estimate what your dispute is worth in 60 seconds. Covers security deposits, car accidents, wage theft, medical bills, and more.",
  openGraph: {
    title: "Settlement Calculator — How Much Is Your Case Worth?",
    description:
      "Free settlement calculator. Estimate what your dispute is worth in 60 seconds.",
  },
};

export default function SettlementCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
