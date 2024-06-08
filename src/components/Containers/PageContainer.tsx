import classes from "./PageContainer.module.scss";
import { Header } from "../Header/Header";
import { PageContainerProps } from "./PageContainer.interface";

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className={classes.container}>
      <Header />
      <div className="page_container">{children}</div>
    </div>
  );
};
