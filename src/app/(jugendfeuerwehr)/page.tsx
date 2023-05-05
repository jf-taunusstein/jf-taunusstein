import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

import feuerBlob from "~/public/images/jugendfeuerwehr/blobs/feuer-blob.png";
import gefunktBlob from "~/public/images/jugendfeuerwehr/blobs/gefunkt-blob.png";
import onFireBlob from "~/public/images/jugendfeuerwehr/blobs/on-fire-blob.png";
import teamBlob from "~/public/images/jugendfeuerwehr/blobs/team-blob.png";
import { Split } from "~/src/components/split/split";
import { Typography } from "~/src/components/typography/typography";

import { LinkBox } from "../../components/link-box/link-box";
import { SkewBackground } from "../../components/skew-background/skew-background";
import { TeamMember } from "../../components/team-member/team-member";
import { jugendwarte } from "../../data/jugendfeuerwehr/jugendwarte";
import { team } from "../../data/jugendfeuerwehr/team";
import { uebungszeiten } from "../../data/jugendfeuerwehr/uebungszeiten";

export const metadata = {
  title: "Jugendfeuerwehr | Stadtjugendfeuerwehr Taunusstein",
};

export default function JugendfeuerwehrIndex() {
  return (
    <>
      <div className="space-y-8 lg:-space-y-8 xl:-space-y-12 2xl:-space-y-16">
        <Split image={<Image src={teamBlob} alt="Ein Team" priority={true} />}>
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
            <Image src={onFireBlob} alt="Feuer und Flamme bei der Ausbildung" />
          }
          direction="rtl"
        >
          <Typography component="h2" size="h1">
            <span className="text-jugend">Feuer und Flamme</span> bei der
            feuerwehr&shy;technischen Ausbildung
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
          <p>
            <a
              href="/downloads/gaudimax.pdf"
              download
              className="group inline-flex items-center space-x-2 border-b-2 border-transparent font-bold text-jugend transition hover:border-jugend focus:border-jugend focus:outline-none"
            >
              <Download className="h-4 w-4 transition-colors group-hover:text-red-500 group-focus:text-red-500" />
              <span>Zeltlagerzeitung 2022 (11 MB)</span>
            </a>
          </p>
        </Split>

        <Split
          image={<Image src={gefunktBlob} alt="Mitmachen" />}
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

          <div className="flex flex-col gap-4 text-center sm:flex-row sm:justify-end">
            <LinkBox href="/minifeuerwehr">
              <p>
                Du bist zwischen <strong>6 und 9</strong> Jahre alt?
              </p>

              <p className="inline-flex items-center space-x-2 font-bold text-jugend">
                <ArrowRight className="h-4 w-4 transition-colors group-hover:text-red-500 group-focus:text-red-500" />
                <span>Zur Minifeuerwehr</span>
              </p>
            </LinkBox>

            <LinkBox href="https://www.feuerwehr-taunusstein.de/">
              <p>
                Du bist schon <strong>über 17</strong> Jahre alt?
              </p>

              <p className="inline-flex items-center space-x-2 font-bold text-jugend">
                <ArrowRight className="h-4 w-4 transition-colors group-hover:text-red-500 group-focus:text-red-500" />
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
              <a
                className="text-jugend hover:underline focus:underline focus:outline-none"
                href={"tel:" + wart.phoneNumber.replace("/", "")}
              >
                {wart.phoneNumber}
              </a>
            </TeamMember>
          ))}
        </div>
      </div>
    </>
  );
}
