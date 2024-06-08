import { ComponentPropsWithoutRef } from "react";

export interface IconProps extends Omit<ComponentPropsWithoutRef<"svg">, 'mask'> {
  size?: "s" | "m" | "l";
}
