import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import classes from "./Icon.module.scss";
import { IconProps } from "./Icon.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export const CircleExclamationIcon = ({
  size = "m",
  className,
  ...restProps
}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={faCircleExclamation}
      {...restProps}
      className={classNames(classes[size], className)}
    />
  );
};
