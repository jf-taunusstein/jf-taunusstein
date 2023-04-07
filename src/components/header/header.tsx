import { PropsWithChildren } from "react";

import { cn } from "~/src/lib/utils";

interface HeaderProps {
  className?: string;
}

export const Header = ({
  className,
  children,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <header className={cn(className, "py-8 font-sansBold text-lg")}>
      {children}
    </header>
  );
};
