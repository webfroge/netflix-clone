import classes from "./Icon.module.scss";
import { IconProps } from "./Icon.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export const ThumbsUpIcon = ({
  size = "m",
  className,
  ...restProps
}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={faThumbsUp}
      {...restProps}
      className={classNames(classes[size], className)}
    />
  );
};
