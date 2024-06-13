import { ComponentPropsWithoutRef } from "react";
import { FacebookIcon } from "../../../../Icons/Facebook";

export const Footer = (props: ComponentPropsWithoutRef<"div">) => {
  console.log(props);

  return (
    <div className="page_container">
      <FacebookIcon />
      <span style={{ color: "#fff" }}>sdfsd</span>
    </div>
  );
};
