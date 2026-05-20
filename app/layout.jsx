import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GoogleTagManager from "./components/GoogleTagManager";
import ConsentManager from "./components/cookie/ConsentManager";
import PostHogProvider from "./components/analytics/PostHogProvider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://enso.ro';
const OG_TITLE = "Unicul penthouse triplex premium în Brașov | ENSŌ LIVING";
const OG_DESC = "Lansare proiect imobiliar premium în Brașov, cu localizare strategică și priveliști spre munți. Doar 24 de apartamente, 4 duplexuri, business centru, showroom comercial și parcare subterană.";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: OG_TITLE,
  description: OG_DESC,
  alternates: {
    canonical: '/living',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESC,
    url: '/living',
    siteName: 'ENSŌ LIVING',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/building-6.webp',
        width: 1200,
        height: 630,
        alt: 'ENSŌ LIVING — proiect imobiliar premium în Brașov',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESC,
    images: ['/building-6.webp'],
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-5ZS2J3NB";
  return (
    <html lang="ro" className={inter.className} data-scroll-behavior="smooth">
      <head>
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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}

              gtag('consent', 'default', {
                'ad_storage':            'denied',
                'analytics_storage':     'denied',
                'ad_user_data':          'denied',
                'ad_personalization':    'denied',
                'personalization_storage': 'denied',
                'functionality_storage': 'granted',
                'security_storage':      'granted',
                'wait_for_update':       500
              });

              try {
                var _cp = '; ' + document.cookie;
                var _pp = _cp.split('; enso_consent=');
                if (_pp.length === 2) {
                  var _s = JSON.parse(decodeURIComponent(_pp.pop().split(';').shift()));
                  if (_s && _s.version === 1) {
                    gtag('consent', 'update', {
                      'analytics_storage':     _s.analytics ? 'granted' : 'denied',
                      'ad_storage':            _s.marketing ? 'granted' : 'denied',
                      'ad_user_data':          _s.marketing ? 'granted' : 'denied',
                      'ad_personalization':    _s.marketing ? 'granted' : 'denied',
                      'personalization_storage': _s.analytics ? 'granted' : 'denied'
                    });
                  }
                }
              } catch(e) {}
            `,
          }}
        />

        <GoogleTagManager gtmId={GTM_ID} />
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
        />
      </head>
      <body className={`antialiased`}>
        {children}
        <ConsentManager />
        <PostHogProvider />
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
// Roistat old function
// var customParamTimer = setInterval(function() {
//     window.roistat.setRoistatParams({
//       roistat_param_2: '{{FBP Cookie}}',
//       'roistat_param2': '{{FBP Cookie}}',
          
//       roistat_param_3: '{{Pageview Event ID from storage}}',
//       'roistat_param3': '{{Pageview Event ID from storage}}',
          
//       roistat_param_4: '{{External ID from storage}}',
//       'roistat_param4': '{{External ID from storage}}'
//       });
// }, 2200);
