import { Imprint } from "~/src/components/imprint/imprint";

export const metadata = {
  title: "Impressum | Jugendfeuerwehr Taunusstein",
};

export default function Impressum() {
  return <Imprint className="prose-h1:text-jugend" />;
}
