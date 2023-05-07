import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logo from "~/public/images/jugendfeuerwehr/logo.png";
import {
  Footer,
  FooterSection,
  FooterSectionTitle,
} from "~/src/components/footer/footer";
import { Header } from "~/src/components/header/header";
import { SkewBackground } from "~/src/components/skew-background/skew-background";

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
      <SkewBackground className="mt-24 bg-jugend text-white after:bg-jugend">
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
                  href="/impressum"
                  className="hover:underline focus:underline focus:outline-none"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
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
