import classes from "./Tooltip.module.scss";
import { TooltipProps } from "./Tooltip.interface";
import classNames from "classnames";

export const Tooltip = ({
  children,
  title,
  className,
  ...containerProps
}: TooltipProps) => {
  return (
    <div
      {...containerProps}
      className={classNames(className, classes.container)}
    >
      <div className={classes.tooltip_text}>
        {title}
        <div className={classes.tooltip_triangle_container}>
          <div className={classes.triangle} />
        </div>
      </div>

      {children}
    </div>
  );
};
