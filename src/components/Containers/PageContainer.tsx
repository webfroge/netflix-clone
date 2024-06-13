import classes from "./PageContainer.module.scss";
import { Header } from "./components/Header/Header";
import { PageContainerProps } from "./PageContainer.interface";
import { Footer } from "./components/Footer/Footer";

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className={classes.container}>
      <Header />
      <div className="page_container">{children}</div>
      <Footer />
    </div>
  );
};
