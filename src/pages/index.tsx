import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import feuerBlob from "~/public/images/feuer-blob.png";
import onFireBlob from "~/public/images/on-fire-blob.png";
import teamBlob from "~/public/images/team-blob.png";
import { Header } from "~/src/components/header/header";
import { Split } from "~/src/components/split/split";
import { Typography } from "~/src/components/typography/typography";

import { LinkBox } from "../components/link-box/link-box";
import { jugendwarte } from "../data/jugendwarte";
import { team } from "../data/team";
import { uebungszeiten } from "../data/uebungszeiten";

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
          <Typography size="small">
            Du würdest gerne mitmachen bist aber noch zu jung oder schon zu alt?
          </Typography>

          {/* TODO: Add link to minifeuerwehr */}
          <div className="gap-4 flex flex-col sm:flex-row sm:justify-end text-center">
            <LinkBox href="#">
              <p>
                Du bist zwischen <strong>6 und 9</strong> Jahre alt?
              </p>

              <p className="text-jugend font-bold inline-flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                <span>Zur Minifeuerwehr</span>
              </p>
            </LinkBox>

            <LinkBox href="https://www.feuerwehr-taunusstein.de/">
              <p>
                Du bist schon <strong>über 17</strong> Jahre alt?
              </p>

              <p className="text-jugend font-bold inline-flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                <span>Zur Einsatzabteilung</span>
              </p>
            </LinkBox>
          </div>
        </Split>
      </div>

      <div className="bg-jugend my-14 text-white z-[1] -mx-12 p-12 pt-4 space-y-8 relative after:-z-[1] after:h-full after:w-[110%] after:bg-jugend after:absolute after:-inset-1 after:-top-4 after:skew-y-[1.5deg]">
        <div className="space-y-4">
          <Typography component="h2" size="h1">
            Übungszeiten
          </Typography>
          <Typography>
            Eure Übungszeiten in den jeweiligen Stadtteilen
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {uebungszeiten.map((uebung) => (
            <div key={uebung.city}>
              <Typography size="small" className="font-bold">
                {uebung.city}
              </Typography>
              <Typography size="small">{uebung.time}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <Typography component="h2" size="h1" className="text-jugend">
              Das Team
            </Typography>
            <Typography>Unsere Stadtjugendfeuerwehr</Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {team.map((member, index) => (
              <div key={member.name + index} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-36 h-36 mx-auto mb-2"
                />
                <Typography size="small" className="font-bold">
                  {member.name}
                </Typography>
                <Typography size="small">{member.position}</Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <Typography component="h2" size="h2" className="text-jugend">
              Die Jugendwarte
            </Typography>
            <Typography>
              Eure Ansprechpartner in den jeweiligen Stadtteilen
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {jugendwarte.map((wart, index) => (
              <div key={wart.name + index} className="text-center">
                <Image
                  src={wart.image}
                  alt={wart.name}
                  className="rounded-full w-36 h-36 mx-auto mb-2"
                />
                <Typography size="small" className="font-bold">
                  {wart.name}
                </Typography>
                <Typography size="small">{wart.city}</Typography>
                <Typography size="small">{wart.phoneNumber}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-jugend mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 text-white z-[1] -mx-12 p-12 relative after:-z-[1] after:h-full after:w-[110%] after:bg-jugend after:absolute after:-inset-1 after:-top-5 after:-skew-y-[1.5deg]">
        <div className="space-y-4">
          <Typography className="uppercase font-bold" size="small">
            Kontakt
          </Typography>
          <p>
            Stadtjugendfeuerwehrwart <br />
            Name Nachname <br />
            Straße Hausnummer <br />
            Postleitzahl Stadt <br />
            Tel: Telefonnummer
          </p>
        </div>

        <div className="space-y-4">
          <Typography className="uppercase font-bold" size="small">
            Folge uns
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography className="uppercase font-bold" size="small">
            Informationen
          </Typography>
          <ul className="space-y-2">
            <li>
              <Link href="#">Impressum</Link>
            </li>
            <li>
              <Link href="#">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
