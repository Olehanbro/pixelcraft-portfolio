import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brandConfig } from "@/lib/data";

export const metadata = {
  metadataBase: new URL("https://pixelcraft-portfolio-gilt.vercel.app"),
  applicationName: brandConfig.name,
  title: {
    default: `${brandConfig.name} | Живі сайти та портфоліо`,
    template: `%s | ${brandConfig.name}`
  },
  description:
    "Myshchyshyn - портфоліо живих сайтів з великими прев'ю, окремими кейсами та production-посиланнями.",
  authors: [{ name: brandConfig.name }],
  creator: brandConfig.name,
  appleWebApp: {
    title: brandConfig.name
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName: brandConfig.name,
    title: `${brandConfig.name} | Живі сайти та портфоліо`,
    description: "Добірка живих сайтів, кейсів і production-посилань для швидкої перевірки робіт.",
    images: [
      {
        url: "/og-myshchyshyn.png",
        width: 1200,
        height: 630,
        alt: "Myshchyshyn portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.name} | Живі сайти та портфоліо`,
    description: "Добірка живих сайтів, кейсів і production-посилань.",
    images: ["/og-myshchyshyn.png"]
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#180821"
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
