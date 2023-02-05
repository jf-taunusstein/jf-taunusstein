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
        "relative flex flex-col md:flex-row space-y-8 md:space-y-0",
        {
          "md:flex-row-reverse text-right": direction === "rtl",
        }
      )}
    >
      <div className={clsx(gridItemClasses)}>{children}</div>
      <div
        className={clsx(gridItemClasses, {
          "items-end -right-8 md:-right-12": direction === "ltr",
          "items-start -left-8 md:-left-12": direction === "rtl",
        })}
      >
        {image}
      </div>
    </div>
  );
};
