import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Creative Economy | The Artisan Hub",
  description:
    "Regenerative Business Development — a guided self-paced program for individuals and teams pursuing business ownership within The Artisan Hub Ecosystem.",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "var(--font-montserrat), sans-serif",
          background: "#f7f7f7",
          color: "#1a1a1a",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {children}
      </body>
    </html>
  );
}
