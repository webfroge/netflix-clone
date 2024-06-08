import { ComponentPropsWithoutRef } from "react";
import classes from "./Bookmark.module.scss";
import classNames from "classnames";

export const Bookmark = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div {...restProps} className={classNames(className, classes.container)} />
  );
};
