import { Privacy } from "~/src/components/privacy/privacy";

export const metadata = {
  title:
    "Datenschutzerklärung - Minifeuerwehr | Stadtjugendfeuerwehr Taunusstein",
};

export default function Datenschutz() {
  return <Privacy className="prose-h1:text-mini" />;
}
