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
        "relative mx-auto min-h-screen max-w-screen-xl overflow-hidden bg-white px-8 font-sans shadow-lg md:px-12"
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
