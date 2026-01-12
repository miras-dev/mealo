import "./globals.css";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema } from "@/lib/seo";

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
        {children}
      </body>
    </html>
  );
}
