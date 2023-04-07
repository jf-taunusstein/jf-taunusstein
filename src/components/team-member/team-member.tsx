import { StaticImageData } from "next/image";
import Image from "next/image";
import { PropsWithChildren } from "react";

import { Typography } from "../typography/typography";

interface TeamMemberProps {
  name: string;
  image: StaticImageData;
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
      <Image src={image} alt={name} className="h-32 w-32 rounded-full" />
      <div className="sm:text-center">
        <Typography className="font-bold">{name}</Typography>

        <Typography size="small">{children}</Typography>
      </div>
    </div>
  );
};
