import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samarjeet & Anuradha | Wedding Celebration",
  description:
    "Join Samarjeet and Anuradha in celebrating their sacred Hindu wedding. RSVP, view events, gallery, and venue details.",
  keywords: ["wedding", "Samarjeet", "Anuradha", "Hindu wedding", "Jaipur", "RSVP"],
  openGraph: {
    title: "Samarjeet & Anuradha | Wedding Celebration",
    description: "You're invited to celebrate the wedding of Samarjeet & Anuradha",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Samarjeet & Anuradha Wedding",
              startDate: "2026-11-28T10:00:00+05:30",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: "The Royal Heritage Banquet",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Jaipur",
                  addressRegion: "Rajasthan",
                  addressCountry: "IN",
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
