import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "transparent";
  leftComponent?: ReactElement
  rightComponent?: ReactElement
}
