import { ArrowRight, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import feuerBlob from "~/public/images/feuer-blob.png";
import onFireBlob from "~/public/images/on-fire-blob.png";
import teamBlob from "~/public/images/team-blob.png";
import { Header } from "~/src/components/header/header";
import { Split } from "~/src/components/split/split";
import { Typography } from "~/src/components/typography/typography";

import {
  Footer,
  FooterSection,
  FooterSectionTitle,
} from "../components/footer/footer";
import { LinkBox } from "../components/link-box/link-box";
import { SkewBackground } from "../components/skew-background/skew-background";
import { TeamMember } from "../components/team-member/team-member";
import { jugendwarte } from "../data/jugendwarte";
import { team } from "../data/team";
import { uebungszeiten } from "../data/uebungszeiten";

export const metadata = {
  title: "Jugendfeuerwehr | Stadtjugendfeuerwehr Taunusstein",
};

export default function JugendfeuerwehrIndex() {
  return (
    <>
      <Header className="text-jugend">Jugendfeuerwehr Taunusstein</Header>
      <div className="space-y-8">
        <Split
          image={<Image src={teamBlob} alt="Unser Team" priority={true} />}
        >
          <Typography component="h1" size="h1">
            Willkommen bei der{" "}
            <span className="text-jugend">Jugendfeuerwehr Taunusstein!</span>
          </Typography>

          <Typography>
            Jugendfeuerwehr - das ist Spiel, Spaß, Freundschaft und eine gute
            Sache. Die Jungen und Mädchen in der Feuerwehr haben Spaß bei
            Übungen, Spieleabenden und Ausflügen. Sie zeigen aber auch, dass sie
            in jungen Jahren bereit sind gesellschaftliche Verantwortung zu
            übernehmen. Genau das unterstützt die Jugendfeuerwehr Taunusstein in
            acht Stadtteilen – selbstverständlich kostenlos!
          </Typography>
        </Split>

        <Split
          image={
            <Image src={onFireBlob} alt="Feuer und FLamme bei der Ausbildung" />
          }
          direction="rtl"
        >
          <Typography component="h2" size="h1">
            <span className="text-jugend">Feuer und Flamme</span> bei der
            feuerwehrtechnischen Ausbildung
          </Typography>
          <Typography>
            Egal ob Gebäudebrand oder Katze auf dem Baum. Bei wöchentlichen
            Übungen lernen Jugendfeuerwehrkinder jedes Einsatzszenario zu
            bewältigen. Natürlich mit den selben Geräten und Fahrzeugen die auch
            „in Echt“ zum Einsatz kommen. Bei den Wettbewerben kommt es auf
            Teamwork an und am Ende der Jugendfeuerwehrkarriere steht die
            Leistungsspange – das höchste Abzeichen der deutschen
            Jugendfeuerwehr!
          </Typography>
        </Split>

        <Split image={<Image src={feuerBlob} alt="Zeltlager" />}>
          <Typography component="h1" size="h1">
            <span className="text-jugend">Marshmallows</span> über dem Feuer
            grillen
          </Typography>

          <Typography>
            So viel Einsatz muss sich lohnen. Deswegen veranstaltet die
            Jugendfeuerwehr Taunusstein regelmäßig Ausflüge in Freizeitparks.
            Das Highlight bleibt aber das einwöchige Zeltlager in den
            Sommerferien mit Übernachtungen, Tagesausflügen und allabendlichem
            Lagerfeuer.
          </Typography>
        </Split>

        <Split
          image={
            <Image src={onFireBlob} alt="Feuer und FLamme bei der Ausbildung" />
          }
          direction="rtl"
        >
          <Typography component="h2" size="h1">
            Hat es zwischen uns <span className="text-jugend">gefunkt</span>?
          </Typography>
          <Typography>
            Von <strong>10 bis 17</strong> Jahren ist die Jugendfeuerwehr genau
            das richtige für dich. Komm doch einfach mal bei uns vorbei! Unsere
            Übungszeiten und Ansprechpartner findest du gleich hier unten.
          </Typography>
          <Typography>
            Du würdest gerne mitmachen bist aber noch zu jung oder schon zu alt?
          </Typography>

          {/* TODO: Add link to minifeuerwehr */}
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:justify-end">
            <LinkBox href="#">
              <p>
                Du bist zwischen <strong>6 und 9</strong> Jahre alt?
              </p>

              <p className="inline-flex items-center space-x-2 font-bold text-jugend">
                <ArrowRight className="h-4 w-4 transition-colors group-hover:text-red-500" />
                <span>Zur Minifeuerwehr</span>
              </p>
            </LinkBox>

            <LinkBox href="https://www.feuerwehr-taunusstein.de/">
              <p>
                Du bist schon <strong>über 17</strong> Jahre alt?
              </p>

              <p className="inline-flex items-center space-x-2 font-bold text-jugend">
                <ArrowRight className="h-4 w-4 transition-colors group-hover:text-red-500" />
                <span>Zur Einsatzabteilung</span>
              </p>
            </LinkBox>
          </div>
        </Split>
      </div>

      <SkewBackground
        direction="left"
        className="my-20 space-y-16 bg-jugend pb-16 pt-6 text-white after:bg-jugend"
      >
        <div className="space-y-2">
          <Typography component="h2" size="h1">
            Übungszeiten
          </Typography>
          <Typography component="h3" size="h3">
            Eure Übungszeiten in den jeweiligen Stadtteilen
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-y-14 lg:grid-cols-4">
          {uebungszeiten.map((uebung) => (
            <div key={uebung.city}>
              <Typography className="font-bold">{uebung.city}</Typography>
              <Typography size="small">{uebung.time}</Typography>
            </div>
          ))}
        </div>
      </SkewBackground>

      <div className="space-y-20">
        <div className="space-y-2">
          <Typography component="h2" size="h1" className="text-jugend">
            Das Team
          </Typography>
          <Typography component="h3" size="h3">
            Unsere Stadtjugendfeuerwehr
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              image={member.image}
            >
              {member.position}
            </TeamMember>
          ))}
        </div>

        <div className="space-y-2">
          <Typography component="h2" size="h2" className="text-jugend">
            Die Jugendwarte
          </Typography>
          <Typography component="h3" size="h3">
            Eure Ansprechpartner in den jeweiligen Stadtteilen
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {jugendwarte.map((wart) => (
            <TeamMember key={wart.name} name={wart.name} image={wart.image}>
              {wart.city} <br />
              {wart.phoneNumber}
            </TeamMember>
          ))}
        </div>
      </div>

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
                <Link href="#">Impressum</Link>
              </li>
              <li>
                <Link href="#">Datenschutz</Link>
              </li>
            </ul>
          </FooterSection>
        </Footer>
      </SkewBackground>
    </>
  );
}
