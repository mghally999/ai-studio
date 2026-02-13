import "./globals.css";
import Providers from "./providers";

import {
  Inter,
  Space_Grotesk,
  Sora,
  Plus_Jakarta_Sans,
  IBM_Plex_Sans,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const plex = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex" });

export const metadata = {
  title: "AI Studio Admin",
  description: "Agnostic AI Studio Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable} ${sora.variable} ${jakarta.variable} ${plex.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
