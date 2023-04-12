export const metadata = {
  title: "Impressum - Jugendfeuerwehr | Stadtjugendfeuerwehr Taunusstein",
};

export default function Impressum() {
  return (
    <>
      <div className="prose max-w-none prose-h1:text-jugend">
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Stadtjugendfeuerwehrwart <br />
          Moritz Fentz <br />
          Philipp-Reis-Stra&szlig;e 3b <br />
          65232 Taunusstein
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 152 56103366
          <br />
          E-Mail: stjfw@jf-taunusstein.de
        </p>

        <h2>Redaktionell verantwortlich</h2>
        <p>
          Beate Beispielhaft
          <br />
          Musterstra&szlig;e 110
          <br />
          90210 Musterstadt
        </p>

        <p>
          Quelle:{" "}
          <a href="https://www.e-recht24.de/impressum-generator.html">
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </p>
      </div>
    </>
  );
}
