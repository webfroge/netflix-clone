import classNames from "classnames";
import { ButtonProps } from "./Button.interface";
import classes from "./Button.module.scss";

export const Button = ({
  className,
  variant = "solid",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(classes.button, classes[variant], className)}
      {...restProps}
    />
  );
};
