import classNames from "classnames";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classNames("page_container", classes.content_container)}>
        <a className={classes.logo}>netflix clone</a>
        <nav className={classes.navigation}>
          <span className={classes.active}>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
        </nav>
      </div>
    </header>
  );
};
