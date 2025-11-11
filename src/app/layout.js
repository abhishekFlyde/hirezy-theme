

import { Geist, Geist_Mono, Lato, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import ClientLayout from "./ClientLayout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const jakarata = Plus_Jakarta_Sans({
  variable: "--font-jakarata",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Hirezy | Smart Recruitment Platform to Hire Top Talent Faster",
  description:
    "Hirezy simplifies hiring with AI-driven tools, real-time dashboards, and seamless integrations, making it easy to find and manage top candidates efficiently.",
  openGraph: {
    title: "Hirezy | Smart Recruitment Platform to Hire Top Talent Faster",
    description:
      "Hirezy simplifies hiring with AI-driven tools, real-time dashboards, and seamless integrations, making it easy to find and manage top candidates efficiently.",
    url: "https://www.hirezy.com/",
    siteName: "Hirezy",
    images: [
      {
        url: "https://ik.imagekit.io/a9uxeuyhx/Favicon.png?updatedAt=1762177502579",
        width: 1200,
        height: 630,
        alt: "Hirezy Platform Overview",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://www.hirezy.com"),
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${jakarata.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
