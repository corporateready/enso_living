import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GoogleTagManager from "./components/GoogleTagManager";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Unicul penthouse triplex premium în Brașov | ENSŌ LIVING",
  description: "Lansare proiect imobiliar premium în Brașov, cu localizare strategică și priveliști spre munți. Doar 24 de apartamente, 4 duplexuri, business centru, showroom comercial și parcare subterană.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-5ZS2J3NB";
  return (
    <html lang="en" className={inter.className} data-scroll-behavior="smooth">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_io/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_io/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        {/* <GoogleTagManager gtmId={GTM_ID} />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                    height="0" 
                    width="0" 
                    style="display:none;visibility:hidden">
            </iframe>
            `,
          }}
        /> */}
      </head>
      <body className={`antialiased`}>
        {children}
        <Script
          id="to-top"
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </body>
    </html>
  );
}
