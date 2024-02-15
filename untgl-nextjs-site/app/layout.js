import { Italiana, Mate } from "next/font/google";
import "./globals.css";

const headingFont = Italiana({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-italiana',
});

const bodyFont = Mate({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-mate',
});

export const metadata = {
  title: "UNTGL | Official Site",
  description: "Official Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
