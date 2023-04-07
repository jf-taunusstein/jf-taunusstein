import { PropsWithChildren } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const classes = tv({
  variants: {
    size: {
      h1: ["text-3xl font-sansBold", "md:text-4xl", "lg:text-5xl"],
      h2: ["text-2xl font-sansBold", "md:text-3xl", "lg:text-4xl"],
      h3: ["text-xl", "lg:text-2xl"],
      base: ["leading-relaxed text-base", "lg:text-lg"],
      small: ["leading-relaxed text-md", "lg:text-base"],
    },
  },
  defaultVariants: {
    size: "base",
  },
});

interface TypographyProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  className?: string;
}

export const Typography = ({
  component = "p",
  size,
  className,
  children,
}: PropsWithChildren<TypographyProps> & VariantProps<typeof classes>) => {
  const Component = component;

  return (
    <Component className={classes({ size, className })}>{children}</Component>
  );
};
