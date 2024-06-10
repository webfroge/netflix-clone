import { ComponentPropsWithoutRef } from "react";

export interface TooltipProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
}
