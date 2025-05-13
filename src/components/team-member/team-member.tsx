import { StaticImageData } from "next/image";
import Image from "next/image";
import { PropsWithChildren } from "react";

import { Typography } from "../typography/typography";

interface TeamMemberProps {
  name: string;
  image?: StaticImageData;
}

export const TeamMember = ({
  name,
  image,
  children,
}: PropsWithChildren<TeamMemberProps>) => {
  return (
    <div
      key={name}
      className="flex items-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-4"
    >
      {image && <Image src={image} alt={name} className="h-32 w-32 rounded-full" />}
      {!image && <div className="h-32 w-32 rounded-full bg-neutral-200 overflow-hidden"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="#c4c4c4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg></div>}
      <div className="sm:text-center">
        <Typography className="font-bold">{name}</Typography>

        <Typography size="small">{children}</Typography>
      </div>
    </div>
  );
};
