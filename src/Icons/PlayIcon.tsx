import { BsPlay } from "react-icons/bs";
import { IconProps } from "./Icon.props";
import { getIconSizeInPixels } from "./utils";

export const PlayIcon = ({ size = "m", ...restProps }: IconProps) => {
  console.log(size, "size");

  return (
    <BsPlay
      {...restProps}
      width={"20px"}
      //   height={getIconSizeInPixels(size)}
    />
  );
};
