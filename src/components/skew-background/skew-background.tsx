import { PropsWithChildren } from "react";

import { cn } from "~/src/lib/utils";

interface SkewBackground {
  className?: string;
  direction?: "left" | "right";
}

export const SkewBackground = ({
  className,
  children,
  direction = "right",
}: PropsWithChildren<SkewBackground>) => {
  return (
    <div
      className={cn(
        "relative z-[1] -mx-12 px-12",
        "after:absolute after:-inset-1 after:-top-5 after:-z-[1] after:h-full after:w-[110%]",
        {
          "after:-skew-y-[1.5deg]": direction === "right",
          "after:skew-y-[1.5deg]": direction === "left",
        },
        className
      )}
    >
      {children}
    </div>
  );
};
