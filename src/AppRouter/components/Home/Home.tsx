import classes from "./Home.module.scss";

export const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className="page_cotainer">
        <div className={classes.film_info}>
          <h1 className={classes.title}>House of Ninjas</h1>
          <p className={classes.description}>
            Years after retiring from their formidable ninja lives, a
            dysfunctional family must return to shadowy missions to counteract a
            string of looming threats.
          </p>
        </div>
      </div>
    </div>
  );
};
