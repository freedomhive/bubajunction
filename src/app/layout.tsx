import type { Metadata } from "next";
import "@fontsource/baloo-2/500.css";
import "@fontsource/baloo-2/600.css";
import "@fontsource/baloo-2/700.css";
import "@fontsource/baloo-2/devanagari-500.css";
import "@fontsource/baloo-2/devanagari-600.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "./globals.css";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Boba Tea in Nashik`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "boba tea Nashik",
    "bubble tea Nashik",
    "Buba Junction",
    "milk tea Nashik",
    "tapioca pearls Nashik",
  ],
  openGraph: {
    title: `${SITE.name} | Boba Tea in Nashik`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: ["/images/logo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | Boba Tea in Nashik`,
    description: SITE.description,
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
