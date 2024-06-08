import { PickValue } from "../common/interface";
import { IconProps } from "./Icon.props";

export const getIconSizeInPixels = (size: PickValue<IconProps, "size">) => {
  switch (size) {
    case "s":
      return "12px";
    case "m":
      return "16px";
    case "l":
      return "24px";
  }
};
