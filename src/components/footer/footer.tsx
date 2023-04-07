import { PropsWithChildren } from "react";

import { Typography } from "../typography/typography";

export const Footer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <footer className="grid grid-cols-1 gap-6 p-12 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </footer>
  );
};

export const FooterSection = ({ children }: PropsWithChildren<{}>) => {
  return <div className="space-y-4">{children}</div>;
};

export const FooterSectionTitle = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Typography className="font-bold uppercase" size="small">
      {children}
    </Typography>
  );
};
