import { ReactNode } from "react";

import "./global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="antialiased bg-white">
      <head />
      <body>{children}</body>
    </html>
  );
}
