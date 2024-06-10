import classNames from "classnames";
import { ButtonProps } from "./Button.interface";
import classes from "./Button.module.scss";
import { cloneElement } from "react";
import { Tooltip } from "../Tooltip/Tooltip";

export const Button = ({
  className,
  colorVariant = "solid",
  componentVariant,
  overlayVariant,
  overlayContainer,
  children,
  leftComponent,
  rightComponent,
  ...restProps
}: ButtonProps) => {
  const buttonClassName = classNames(
    classes.button,
    classes[colorVariant],
    componentVariant && classes[componentVariant],
    className
  );

  const getButtonElement = () => {
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

  switch (overlayVariant?.variant) {
    case "tooltip":
      return (
        <Tooltip {...overlayContainer} title={overlayVariant.text}>
          {getButtonElement()}
        </Tooltip>
      );
    default:
      return getButtonElement();
  }
};
