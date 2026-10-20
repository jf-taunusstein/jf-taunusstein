import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import logo from "~/public/images/jugendfeuerwehr/logo.png";
import {
  Footer,
  FooterSection,
  FooterSectionTitle,
} from "~/src/components/footer/footer";
import { Header } from "~/src/components/header/header";
import { Facebook, Instagram } from "~/src/components/icons";
import { SkewBackground } from "~/src/components/skew-background/skew-background";

export const metadata: Metadata = {
  title: "Jugendfeuerwehr Taunusstein",
  description: `
  Die Jugendfeuerwehr Taunusstein ist der Zusammenschluss der neun selbstständig arbeitenden 
  Jugendfeuerwehren innerhalb der Stadt Taunusstein. Hier werden auf überörtlicher Ebene 
  gemeinsame Veranstaltungen wie ein alljährlich stattfindender Stadtwettbewerb, ein Zeltlager, 
  Tagesausflüge, usw. geplant und durchgeführt.
  `,
  keywords: ["Feuerwehr", "Jugendfeuerwehr", "Taunusstein"],
};

export default async function JugendfeuerwehrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="text-jugend">
        <Link href="/">
          <Image
            src={logo}
            alt="jugendfeuerwehr-logo"
            className="h-10 w-auto md:h-14"
          />
        </Link>
      </Header>
      <div>{children}</div>
      <div className="mt-auto" />
      <SkewBackground className="bg-jugend after:bg-jugend mt-24 text-white">
        <Footer>
          <FooterSection>
            <FooterSectionTitle>Kontakt</FooterSectionTitle>
            <p>
              Stadtjugendfeuerwehrwart <br />
              Tim Sobek <br />
              Lessingstraße 46 <br />
              65232 Taunusstein <br />
              Tel:{" "}
              <a
                href="tel:015252838514"
                className="hover:underline focus:underline focus:outline-hidden"
              >
                0152/52838514
              </a>{" "}
              <br />
              E-Mail:{" "}
              <a
                href="mailto:stjfw@jf-taunusstein.de"
                className="hover:underline focus:underline focus:outline-hidden"
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
                className="-mt-2 rounded-sm p-2 transition hover:bg-black/10 focus:bg-black/10 focus:outline-hidden"
              >
                <Facebook className="h-6 w-6" />
                {/* <Facebook className="h-6 w-6" /> */}
              </a>
              <a
                href="https://www.instagram.com/jugendfeuerwehrtaunusstein/"
                target="_blank"
                rel="noreferrer"
                className="-mt-2 rounded-sm p-2 transition hover:bg-black/10 focus:bg-black/10 focus:outline-hidden"
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
                  href="/impressum"
                  className="hover:underline focus:underline focus:outline-hidden"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:underline focus:underline focus:outline-hidden"
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
