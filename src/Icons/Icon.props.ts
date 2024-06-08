import { ComponentPropsWithoutRef } from "react";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  size?: "s" | "m" | "l";
}
