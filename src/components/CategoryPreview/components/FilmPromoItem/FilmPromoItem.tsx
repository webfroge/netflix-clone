import { useMemo, useRef, useState } from "react";
import classes from "./FilmPromoItem.module.scss";
import classNames from "classnames";
import { debounce } from "lodash";
import { Button } from "../../../Button/Button";
import { PlayIcon } from "../../../../Icons/PlayIcon";
import { PlusIcon } from "../../../../Icons/PlusIcon";
import { ThumbsUpIcon } from "../../../../Icons/ThumbsUpIcon";
import { AngleUpIcon } from "../../../../Icons/AngleUpIcon";
import { FilmGenres } from "../../../FilmGenres/FilmGenres";

export const CategoryPreviewFilmPromoItem = () => {
  const [isHovered, setIsHovered] = useState(false);
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
          onMouseLeave={() => setIsHovered(false)}
          className={getPromoPreviewClassName(
            classes.film_promo_preview_content
          )}
        >
          <div className={classes.preview_img} />

          <div className={classes.preview_content}>
            <div className={classes.preview_buttons_container}>
              <div className={classes.preview_buttons_left_side}>
                <Button componentVariant="icon">
                  <PlayIcon className={classes.play_icon} />
                </Button>
                <Button
                  componentVariant="icon"
                  colorVariant="transparent"
                  overlayContainer={{ className: classes.plus_icon }}
                  overlayVariant={{
                    variant: "tooltip",
                    text: "Add to My List",
                  }}
                >
                  <PlusIcon />
                </Button>
                <Button componentVariant="icon" colorVariant="transparent">
                  <ThumbsUpIcon />
                </Button>
              </div>

              <Button
                componentVariant="icon"
                colorVariant="transparent"
                overlayVariant={{
                  variant: "tooltip",
                  text: "Episode & info",
                }}
              >
                <AngleUpIcon className="rotate_bottom" />
              </Button>
            </div>

            <div className={classes.film_brief_info}>
              <span className={classes.match_percent}>93% Match</span>
              <span className="age_limiter">13+</span>
              <span>1h 42m</span>
              <span className="video_quality">hd</span>
            </div>

            <FilmGenres genres={["SlapStick", "Feel-Good", "Comedy"]} />
          </div>
        </div>
      </div>
    </div>
  );
};
