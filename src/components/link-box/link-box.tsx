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
      className="bg-gray-100 group flex flex-col items-center justify-center p-4 space-y-4"
    >
      {children}
    </a>
  );
};
