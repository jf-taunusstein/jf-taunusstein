import { Imprint } from "~/src/components/imprint/imprint";

export const metadata = {
  title: "Impressum | Minifeuerwehr Taunusstein",
};

export default function Impressum() {
  return <Imprint className="prose-h1:text-mini" />;
}
