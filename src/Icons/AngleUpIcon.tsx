import classes from "./Icon.module.scss";
import { IconProps } from "./Icon.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const AngleUpIcon = ({
  size = "m",
  className,
  ...restProps
}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={faAngleUp}
      {...restProps}
      className={classNames(classes[size], className)}
    />
  );
};
