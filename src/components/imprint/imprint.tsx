import { cn } from "~/src/lib/utils";

interface ImprintProps {
  className?: string;
}

export const Imprint = ({ className }: ImprintProps) => {
  return (
    <div className={cn(className, "prose max-w-none")}>
      <h1>Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Stadtjugendfeuerwehrwart <br />
        Tim Sobek <br />
        Lessingstra&szlig;e 46 <br />
        65232 Taunusstein
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 (0) 152 52838514
        <br />
        E-Mail: stjfw@jf-taunusstein.de
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        Tim Sobek <br />
        Lessingstra&szlig;e 46 <br />
        65232 Taunusstein
      </p>

      <p>
        Quelle:{" "}
        <a href="https://www.e-recht24.de/impressum-generator.html">
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </div>
  );
};
