import { Facebook, Instagram } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import logo from "~/public/images/minifeuerwehr/logo.png";
import {
  Footer,
  FooterSection,
  FooterSectionTitle,
} from "~/src/components/footer/footer";
import { Header } from "~/src/components/header/header";
import { SkewBackground } from "~/src/components/skew-background/skew-background";

export const metadata: Metadata = {
  title: "Minifeuerwehr Taunusstein",
  description: `
  Du bist schon sechs Jahre alt und wohnst irgendwo in Taunusstein? Dann bist Du bei uns richtig. 
  Wir sind die Minifeuerwehrgruppen der Taunussteiner Feuerwehren. Bei uns wird gespielt, gebastelt 
  und natürlich auch einmal ein Ausflug gemacht. Und das tollste daran: bei uns dreht sich (fast) 
  alles um die Feuerwehr. Zurzeit gibt es sechs Gruppen die sich jeweils einmal im Monat 
  für 1 ½ Stunden treffen.
  `,
  keywords: ["Feuerwehr", "Minifeuerwehr", "Taunusstein"],
};

export default async function JugendfeuerwehrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="text-mini">
        <Link href="/minifeuerwehr">
          <Image
            src={logo}
            alt="minifeuerwehr-logo"
            className="h-10 w-auto md:h-14"
          />
        </Link>
      </Header>
      <div>{children}</div>
      <div className="mt-auto" />
      <SkewBackground className="mt-24 bg-mini text-on-mini after:bg-mini">
        <Footer>
          <FooterSection>
            <FooterSectionTitle>Kontakt</FooterSectionTitle>
            <p>
              Stadtjugendfeuerwehrwart <br />
              Moritz Fentz <br />
              Philipp-Reis-Straße 3b <br />
              65232 Taunusstein <br />
              Tel:{" "}
              <a
                href="tel:015256103366"
                className="hover:underline focus:underline focus:outline-none"
              >
                0152/56103366
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:stjfw@jf-taunusstein.de"
                className="hover:underline focus:underline focus:outline-none"
              >
                stjfw@jf-taunusstein.de
              </a>
            </p>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Folge uns</FooterSectionTitle>
            <ul className="flex space-x-4">
              <a
                href="https://www.facebook.com/jftaunusstein"
                target="_blank"
                rel="noreferrer"
                className="-mt-2 rounded p-2 transition hover:bg-black/10 focus:bg-black/10 focus:outline-none"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/jugendfeuerwehrtaunusstein/"
                target="_blank"
                rel="noreferrer"
                className="-mt-2 rounded p-2 transition hover:bg-black/10 focus:bg-black/10 focus:outline-none"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </ul>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Informationen</FooterSectionTitle>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/minifeuerwehr/impressum"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/minifeuerwehr/datenschutz"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </FooterSection>
        </Footer>
      </SkewBackground>
    </div>
  );
}
