import { useState } from "react";
import classes from "./OptionSet.module.scss";
import EllipsisWithTooltip from "../../../EllipsisWithTooltip/EllipsisWithTooltip";
import classNames from "classnames";

export const OptionSet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classes.container}>
      <p
        className={classes.select}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        Season 1{" "}
        <div
          className={classNames(
            classes.triangle,
            isOpen && classes.triangle_rotate
          )}
        />
      </p>
      {isOpen && (
        <ul className={classes.option_container}>
          <li>1</li>
          <li>2</li>
          <EllipsisWithTooltip tooltip="3">
            <li>3</li>
          </EllipsisWithTooltip>
          <EllipsisWithTooltip tooltip="sdlfhsdf sdjf dskjfds jkfdsjf dskjf dsjfhs kj ">
            <li>sdlfhsdf sdjf dskjfds jkfdsjf dskjf dsjfhs kj </li>
          </EllipsisWithTooltip>
        </ul>
      )}
    </div>
  );
};
