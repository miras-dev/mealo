import "./globals.css";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo";
import { GoogleAnalytics } from "@/lib/analytics";
import { Navbar5 } from "@/components/shared/Navbar5";
import { Footer1 } from "@/components/shared/Footer1";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";


export const metadata = generateSEOMetadata({
  title: "Authentic Kerala meals, balanced for your life",
  description: "Real Kerala flavours prepared fresh each morning. Calorie-aligned portions matched to your goals, not guesswork. Reliable delivery at the same time, every day.",
  url: "/",
});

export default function RootLayout({ children }) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Navbar5 />
        <main>{children}</main>
        <Link href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="fixed bottom-5 right-5 text-9xl bg-green-500 text-white rounded-full p-2 z-50" />
        </Link>
        <Footer1 />
      </body>
    </html>
  );
}
