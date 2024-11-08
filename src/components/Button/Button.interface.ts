import { ComponentPropsWithoutRef, ReactElement } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  colorVariant?: "solid" | "transparent" | "keyAction";
  componentVariant?: "icon";
  overlayVariant?: { variant: "tooltip"; text: string };
  leftComponent?: ReactElement;
  rightComponent?: ReactElement;
  overlayContainer?: ComponentPropsWithoutRef<"div">;
}
