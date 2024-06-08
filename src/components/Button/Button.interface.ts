import { ComponentPropsWithoutRef, ReactElement } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "transparent" | "icon";
  leftComponent?: ReactElement;
  rightComponent?: ReactElement;
}
