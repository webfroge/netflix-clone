import { useMemo, useRef, useState } from "react";
import classes from "./FilmPromoItem.module.scss";
import classNames from "classnames";
import { debounce } from "lodash";
import { Button } from "../../../Button/Button";
import { PlayIcon } from "../../../../Icons/PlayIcon";
import { PlusIcon } from "../../../../Icons/PlusIcon";
import { ThumbsUpIcon } from "../../../../Icons/ThumbsUpIcon";
import { AngleUpIcon } from "../../../../Icons/AngleUpIcon";

export const CategoryPreviewFilmPromoItem = () => {
  const [isHovered, setIsHovered] = useState(true);
  const isMouseEnterRef = useRef(false);

  const setIsHoveredDebounced = useMemo(
    () =>
      debounce(() => {
        isMouseEnterRef.current && setIsHovered(true);
      }, 500),
    []
  );

  const getPromoPreviewClassName = (className: string) => {
    return classNames(
      className,
      isHovered && classes.open,
      !isHovered && classes.close
    );
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.film_promo_img}
        onMouseEnter={() => {
          isMouseEnterRef.current = true;
          setIsHoveredDebounced();
        }}
        onMouseLeave={() => (isMouseEnterRef.current = false)}
      />

      <div className={getPromoPreviewClassName(classes.film_promo_preview)}>
        <div
          //   onMouseLeave={() => setIsHovered(false)}
          className={getPromoPreviewClassName(
            classes.film_promo_preview_content
          )}
        >
          <div className={classes.preview_img} />

          <div className={classes.preview_content}>
            <div className={classes.preview_buttons_container}>
              <div className={classes.preview_buttons_left_side}>
                <Button component="icon">
                  <PlayIcon className={classes.play_icon} />
                </Button>
                <Button component="icon" variant="transparent">
                  <PlusIcon />
                </Button>
                <Button component="icon" variant="transparent">
                  <ThumbsUpIcon />
                </Button>
              </div>

              <Button component="icon" variant="transparent">
                <AngleUpIcon className="rotate_bottom" />
              </Button>
            </div>

            <div className={classes.film_brief_info}>
              <span className={classes.match_percent}>93% Match</span>
              <span className="age_limiter">13+</span>
              <span>1h 42m</span>
              <span className="video_quality">hd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
