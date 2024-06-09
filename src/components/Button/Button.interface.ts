import { ComponentPropsWithoutRef, ReactElement } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "transparent";
  component?: "icon";
  leftComponent?: ReactElement;
  rightComponent?: ReactElement;
}
