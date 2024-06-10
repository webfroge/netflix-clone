import classes from "./FilmGenres.module.scss";
import { FilmGenresProps } from "./FilmGenres.interface";
import classNames from "classnames";

export const FilmGenres = ({ genres, ...containerProps }: FilmGenresProps) => {
  return (
    <div
      {...containerProps}
      className={classNames(containerProps, classes.container)}
    >
      {genres.map((genre, genreIndex) => (
        <div key={genre} className={classes.genre_item_container}>
          {genreIndex !== 0 && <div className={classes.divider} />}
          <span className={classes.genre_name}>{genre}</span>
        </div>
      ))}
    </div>
  );
};
