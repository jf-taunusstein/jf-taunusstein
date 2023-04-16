import Image from "next/image";

import onFireBlob from "~/public/images/jugendfeuerwehr/on-fire-blob.png";
import teamBlob from "~/public/images/jugendfeuerwehr/team-blob.png";
import { Arrow } from "~/src/components/arrow/arrow";
import { Split } from "~/src/components/split/split";
import { Typography } from "~/src/components/typography/typography";

import { SkewBackground } from "../../components/skew-background/skew-background";
import { TeamMember } from "../../components/team-member/team-member";
import { team } from "../../data/minifeuerwehr/team";
import { uebungszeiten } from "../../data/minifeuerwehr/uebungszeiten";

export const metadata = {
  title: "Minifeuerwehr | Stadtjugendfeuerwehr Taunusstein",
};

export default function MinifeuerwehrIndex() {
  return (
    <>
      <div className="space-y-8 lg:-space-y-8 xl:-space-y-12 2xl:-space-y-16">
        <Split
          image={<Image src={teamBlob} alt="Unser Team" priority={true} />}
        >
          <Typography component="h1" size="h1">
            Willkommen bei der{" "}
            <span className="text-mini">Minifeuerwehr Taunusstein!</span>
          </Typography>

          <Typography>
            Wir sind die Minifeuerwehrgruppen der Taunussteiner Feuerwehren. Bei
            uns wird gespielt, gebastelt und natürlich auch einmal ein Ausflug
            gemacht. Und das tollste daran: bei uns dreht sich (fast) alles um
            die Feuerwehr.
          </Typography>
          <Typography>
            Zurzeit gibt es sechs Gruppen die sich jeweils einmal im Monat für 1
            ½ Stunden treffen. In Bleidenstadt (2 Gruppen) finden diese Treffen
            dienstags um 16:30 Uhr statt. In Hahn trifft sich Gruppe 1 samstags
            um 9 Uhr und Gruppe 2 um 11 Uhr. In Neuhof und Wehen treffen wir uns
            samstags um 10 Uhr. Hierbei ist es völlig egal, in welchem Stadtteil
            von Taunusstein Du wohnst. Noch ein Hinweis für Deine Eltern: die
            Mitgliedschaft bei uns ist{" "}
            <span className="text-mini">kostenlos</span>!
          </Typography>
        </Split>

        <Split
          image={
            <Image src={onFireBlob} alt="Feuer und Flamme bei der Ausbildung" />
          }
          direction="rtl"
        >
          <Typography component="h2" size="h1">
            Hat es zwischen uns <span className="text-mini">gefunkt</span>?
          </Typography>
          <Typography>
            Dann komm doch einfach mal bei uns vorbei! Unsere Ansprechpartner
            findest du gleich hier unten.
          </Typography>
          <Arrow className="text-mini" />
        </Split>
      </div>

      <SkewBackground
        direction="left"
        className="my-20 space-y-16 bg-mini pb-16 pt-6 text-on-mini after:bg-mini"
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
              {uebung.groups.map((group) => (
                <Typography size="small" className="mb-4" key={group.name}>
                  {group.name && (
                    <>
                      {group.name}
                      <br />
                    </>
                  )}
                  {group.time}
                </Typography>
              ))}
            </div>
          ))}
        </div>
      </SkewBackground>

      <div className="space-y-20">
        <div className="space-y-2">
          <Typography component="h2" size="h2" className="text-mini">
            Das Team
          </Typography>
          <Typography component="h3" size="h3">
            Eure Ansprechpartner in den jeweiligen Stadtteilen
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              image={member.image}
            >
              {member.city} <br />
              <a
                className="text-mini hover:underline focus:underline focus:outline-none"
                href={"tel:" + member.phoneNumber.replace("/", "")}
              >
                {member.phoneNumber}
              </a>
            </TeamMember>
          ))}
        </div>
      </div>
    </>
  );
}
