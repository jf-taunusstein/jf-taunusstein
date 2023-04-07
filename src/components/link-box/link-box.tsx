import { PropsWithChildren } from "react";

interface LinkBoxProps {
  href: string;
}

export const LinkBox = ({
  href,
  children,
}: PropsWithChildren<LinkBoxProps>) => {
  return (
    <a
      href={href}
      className="group flex flex-col items-center justify-center space-y-4 bg-gray-100 p-4"
    >
      {children}
    </a>
  );
};
