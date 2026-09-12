import type { Metadata } from "next";
import {
  Oswald,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Saira_Stencil_One,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});
const stencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stencil",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://road-shield.com"),
  title: {
    default: "RoadShield — Anticipate. Adapt. Arrive.",
    template: "%s · RoadShield",
  },
  description:
    "RoadShield is a road-safety campaign and services partner — defensive driving training, vehicle assessments, fleet data, accident management and women-safety programs for two- and four-wheelers. A Division of CVS Motors.",
  keywords: [
    "road safety",
    "defensive driving",
    "fleet safety",
    "two wheeler safety",
    "accident management",
    "RoadShield",
    "CVS Motors",
  ],
  openGraph: {
    title: "RoadShield — Anticipate. Adapt. Arrive.",
    description:
      "One road to safety. Two ways to get there — Ride Smart for two-wheelers, Drive Smart for four-wheelers.",
    url: "https://road-shield.com",
    siteName: "RoadShield",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${plex.variable} ${plexMono.variable} ${stencil.variable}`}
    >
      <body className="font-sans antialiased">
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
