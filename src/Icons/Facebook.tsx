import classes from "./Icon.module.scss";
import { IconProps } from "./Icon.props";
import classNames from "classnames";

export const FacebookIcon = ({
  size = "m",
  className,
  ...restProps
}: IconProps) => {
  return (
    <svg
      {...restProps}
      className={classNames(classes[size], className)}
      width="13"
      height="24"
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9214 13.398L12.5825 9.08737H8.44659V6.29002C8.44659 5.11069 9.02433 3.96117 10.8768 3.96117H12.7573V0.291281C12.7573 0.291281 11.0507 0 9.41916 0C6.01275 0 3.78642 2.06447 3.78642 5.80195V9.08737H0V13.398H3.78642V23.8188C4.54566 23.938 5.32383 24 6.11653 24C6.90924 24 7.68741 23.938 8.44659 23.8188V13.398H11.9214Z"
        fill="white"
      />
    </svg>
  );
};
