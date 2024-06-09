import { faPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./Icon.module.scss";
import { IconProps } from "./Icon.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export const PlusIcon = ({
  size = "m",
  className,
  ...restProps
}: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={faPlus}
      {...restProps}
      className={classNames(classes[size], className)}
    />
  );
};
