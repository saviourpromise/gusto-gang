import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Stand-in for the paid "Di Grotesk" display font used in the Figma design (no license
// available). Bricolage Grotesque was chosen as the closest free match for its rounded,
// chunky grotesque character. To swap in real Di Grotesk later: replace this block with
// `next/font/local` pointing at the Di Grotesk files and keep the same `variable` name
// ("--font-bricolage-grotesque" -> rename is optional) — the rest of the app only ever
// reads the themed `--font-display` / `font-display` utility defined in styles/tokens.css.
const fontDisplay = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Gusto Gang",
  description: "Hot food. Fast delivery. No nonsense.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
