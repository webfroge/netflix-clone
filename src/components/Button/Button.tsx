import classNames from "classnames";
import { ButtonProps } from "./Button.interface";
import classes from "./Button.module.scss";
import { cloneElement } from "react";

export const Button = ({
  className,
  variant = "solid",
  component,
  children,
  leftComponent,
  rightComponent,
  ...restProps
}: ButtonProps) => {
  const buttonClassName = classNames(
    classes.button,
    classes[variant],
    component && classes[component],
    className
  );

  return (
    <button className={buttonClassName} {...restProps}>
      {leftComponent &&
        cloneElement(leftComponent, {
          className: classNames(leftComponent.props.className, "mr_10"),
        })}
      {children}
      {rightComponent &&
        cloneElement(rightComponent, {
          className: classNames(rightComponent.props.className, "mr_10"),
        })}
    </button>
  );
};
