import { clsx } from "clsx";
import { PropsWithChildren } from "react";

interface HeaderProps {
  className?: string;
}

export const Header = ({
  className,
  children,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <header className={clsx(className, "py-8 text-lg font-sansBold")}>
      {children}
    </header>
  );
};
