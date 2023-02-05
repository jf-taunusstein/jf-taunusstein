import { Raleway } from "@next/font/google";
import { clsx } from "clsx";
import type { AppProps } from "next/app";

import "../global.css";

const raleway = Raleway({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-raleway",
});

const ralewayBold = Raleway({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-raleway-bold",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={clsx(
        raleway.variable,
        ralewayBold.variable,
        "bg-white font-sans min-h-screen mx-auto max-w-screen-xl shadow-lg overflow-hidden relative px-8 md:px-12"
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
