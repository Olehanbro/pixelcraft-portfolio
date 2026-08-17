import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brandConfig } from "@/lib/data";

export const metadata = {
  metadataBase: new URL("https://pixelcraft-portfolio-gilt.vercel.app"),
  title: {
    default: `${brandConfig.name} | Портфоліо веброзробника`,
    template: `%s | ${brandConfig.name}`
  },
  description:
    "Myshchyshyn - портфоліо веброзробника з живими сайтами, великими прев'ю, окремими кейсами та production-посиланнями.",
  authors: [{ name: brandConfig.name }],
  creator: brandConfig.name,
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: brandConfig.name,
    title: `${brandConfig.name} | Портфоліо веброзробника`,
    description: "Myshchyshyn: живі сайти, портфоліо, команда, журнал і прямий контакт для нового проєкту.",
    images: ["/og.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.name} Portfolio`,
    description: "Selected websites, screenshots, and live project links.",
    images: ["/og.png"]
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
