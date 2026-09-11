import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col items-center justify-center gap-2 font-sans">
        <h1 className="font-heading text-2xl font-semibold">404</h1>
        <p className="text-muted-foreground">This page could not be found.</p>
      </body>
    </html>
  );
}
