import classes from "./Icon.module.scss";
import { IconProps } from "./Icon.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons/faRotateRight";

export const RightRotateIcon = ({
  size = "m",
  className,
  ...restProps
}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={faRotateRight}
      {...restProps}
      className={classNames(classes[size], className)}
    />
  );
};
