import { useCallback, useMemo, useState } from "react";
import classes from "./FilmPromoItem.module.scss";
import classNames from "classnames";
import { debounce } from "lodash";

export const CategoryPreviewFilmPromoItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  const setIsHoveredDebounced = useMemo(() => debounce(setIsHovered, 1000), []);

  const getPromoPreviewClassName = (className: string) => {
    return classNames(
      className,
      isHovered && classes.open,
      !isHovered && classes.close
    );
  };

  return (
    <div style={{ position: "relative", marginRight: "1rem" }}>
      <div
        className={classes.film_promo_img}
        onMouseEnter={() => setIsHoveredDebounced(true)}
      />

      <div className={getPromoPreviewClassName(classes.film_promo_preview)}>
        <div
          onMouseLeave={() => setIsHovered(false)}
          className={getPromoPreviewClassName(
            classes.film_promo_preview_content
          )}
        />
      </div>
    </div>
  );
};
