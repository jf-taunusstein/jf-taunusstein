import { clsx } from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface SplitProps {
  image: ReactNode;
  direction?: "ltr" | "rtl";
}

export const Split = ({
  image,
  direction = "ltr",
  children,
}: PropsWithChildren<SplitProps>) => {
  const gridItemClasses =
    "w-full flex flex-col space-y-8 justify-center relative";

  return (
    <div
      className={clsx(
        "relative flex flex-col space-y-8 md:flex-row md:space-y-0",
        {
          "text-right md:flex-row-reverse": direction === "rtl",
        }
      )}
    >
      <div className={clsx(gridItemClasses)}>{children}</div>
      <div
        className={clsx(gridItemClasses, {
          "-right-8 items-end md:-right-12": direction === "ltr",
          "-left-8 items-start md:-left-12": direction === "rtl",
        })}
      >
        {image}
      </div>
    </div>
  );
};
