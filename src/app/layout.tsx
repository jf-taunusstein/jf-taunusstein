import { Raleway } from "@next/font/google";

import "../global.css";
import { cn } from "../lib/utils";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={cn(
        raleway.variable,
        ralewayBold.variable,
        "bg-gray-50 text-neutral-900 antialiased"
      )}
    >
      <body>
        <div className="relative mx-auto min-h-screen max-w-screen-xl overflow-hidden bg-white px-8 font-sans shadow-lg md:px-12">
          {children}
        </div>
      </body>
    </html>
  );
}
