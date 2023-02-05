import Image from "next/image";

import feuerBlob from "~/public/images/feuer-blob.png";
import onFireBlob from "~/public/images/on-fire-blob.png";
import teamBlob from "~/public/images/team-blob.png";
import { Header } from "~/src/components/header/header";
import { Split } from "~/src/components/split/split";
import { Typography } from "~/src/components/typography/typography";

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
        </Split>
      </div>
    </>
  );
}
