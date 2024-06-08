import classes from '''
import { Header } from "../Header/Header";

export const PageContainer = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className="page_container"></div>
    </div>
  );
};
