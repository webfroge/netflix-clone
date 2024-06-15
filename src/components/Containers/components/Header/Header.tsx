import classNames from "classnames";
import classes from "./Header.module.scss";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем положение прокрутки
      if (window.scrollY > 50) {
        setScrolled(true); // Если прокрутка больше 50px, устанавливаем состояние scrolled в true
      } else {
        setScrolled(false); // Иначе устанавливаем в false
      }
    };

    // Добавляем обработчик события прокрутки при монтировании компонента
    window.addEventListener("scroll", handleScroll);

    // Удаляем обработчик при размонтировании компонента, чтобы избежать утечек памяти
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(classes.container, scrolled && classes.active)}
    >
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
