import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

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
    <>
      <Header className="text-jugend">
        <Link href="/">Jugendfeuerwehr Taunusstein</Link>
      </Header>
      <div>{children}</div>
      <SkewBackground className="mt-24 bg-jugend text-white after:bg-jugend">
        <Footer>
          <FooterSection>
            <FooterSectionTitle>Kontakt</FooterSectionTitle>
            <p>
              Stadtjugendfeuerwehrwart <br />
              Moritz Fentz <br />
              Philipp-Reis-Straße 3b <br />
              65232 Taunusstein <br />
              Tel: 015256103366
            </p>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Folge uns</FooterSectionTitle>
            <ul className="flex space-x-4">
              <a
                href="https://www.facebook.com/jftaunusstein"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/jugendfeuerwehrtaunusstein/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </ul>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Informationen</FooterSectionTitle>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz">Datenschutz</Link>
              </li>
            </ul>
          </FooterSection>
        </Footer>
      </SkewBackground>
    </>
  );
}
