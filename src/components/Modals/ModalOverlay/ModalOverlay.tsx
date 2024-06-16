import { ComponentPropsWithoutRef } from "react";
import { createPortal } from "react-dom";
import classes from "./ModalOverlay.module.scss";
import classNames from "classnames";

export const ModalOverlay = (props: ComponentPropsWithoutRef<"div">) => {
  const modalRootElement = document.getElementById("modal-root");

  if (modalRootElement) {
    return createPortal(
      <div
        {...props}
        className={classNames(classes.container, props.className)}
      />,
      modalRootElement
    );
  }

  return null;
};
