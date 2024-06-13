import { useState } from "react";
import classes from "./ServiceCode.module.scss";

export const ServiceCodeButton = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <button
      style={{ cursor: isButtonClicked ? "default" : "pointer" }}
      className={classes.button}
      onClick={() => setIsButtonClicked(true)}
    >
      {isButtonClicked ? "333-333" : "ServiceCode"}
    </button>
  );
};
