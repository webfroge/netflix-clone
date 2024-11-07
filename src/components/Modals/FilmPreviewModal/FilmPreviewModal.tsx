import classes from "./FilmPreviewModal.module.scss";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { Button } from "../../Button/Button";
import { useState } from "react";
import { CloseIcon } from "../../../Icons/Close";
import { PlusIcon } from "../../../Icons/PlusIcon";
import { ThumbsUpIcon } from "../../../Icons/ThumbsUpIcon";
import classNames from "classnames";
import { PlayIcon } from "../../../Icons/PlayIcon";
import { OptionSet } from "../../Form/components/OptionSet/OptionSet";

export const FilmPreviewModal = () => {
  const [isActive, setIsActive] = useState(true);

  if (!isActive) {
    return null;
  }

  return (
    <ModalOverlay>
      <div className={classes.container}>
        <Button
          onClick={() => setIsActive(false)}
          className={classes.close_modal}
          componentVariant="icon"
          colorVariant="keyAction"
        >
          <CloseIcon size="l" />
        </Button>

        <div className={classes.video}>
          <div
            className={classNames(
              classes.content,
              classes.video_buttons_container
            )}
          >
            <div className={classes.left_side}>
              <Button leftComponent={<PlayIcon />}>Play</Button>
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
          </div>
        </div>

        <div className={classes.content}>
          <section className={classes.film_info}>
            <div className={classes.right_side}>
              <div className={classes.film_brief_characteristics}>
                <span className={classes.film_match}>98% Match</span>
                <span>3 Seasons 2024</span>
                <span className="video_quality">hd</span>
              </div>
              <div className={classes.film_brief_characteristics}>
                <span
                  className={classNames(classes.age_limiter, "age_limiter")}
                >
                  16+
                </span>
                <span className={classes.genres}>smoking, violence</span>
              </div>
              <p className={classes.film_description}>
                Years after retiring from their formidable ninja lives, a
                dysfunctional family must return to shadowy missions to
                counteract a string of looming threats.
              </p>
            </div>

            <div className={classes.left_side}>
              <p className="tag">
                <span className="tag_title">Cast: </span>
                Kento Kaku, Yosuke Eguchi, Tae Kimura, more
              </p>
              <p className="tag">
                <span className="tag_title">Genres: </span>
                TV Dramas, Japanese, TV Thrillers
              </p>
              <p className="tag">
                <span className="tag_title">This show is: </span>
                Dark, Suspenseful, Exiting
              </p>
            </div>
          </section>

          <section className={classes.episode_list}>
            <header className={classes.episode_header}>
              <h2 className={classes.episode_title}>Episodes</h2>
              <OptionSet />
            </header>

            <main>
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className={classes.episode_item}>
                  <p className={classes.episode_count}>1</p>
                  <div className={classes.episode_img} />
                  <div>
                    <div className={classes.episode_name}>
                      <b>The Offer</b>
                      <span>55m</span>
                    </div>
                    <p className={classes.episode_description}>
                      While Haru Tawara develops a crush on a mysterious young
                      woman at work, an unusual opportunity arises at his
                      father's financially struggling brewery.
                    </p>
                  </div>
                </div>
              ))}
            </main>
          </section>
        </div>
      </div>
    </ModalOverlay>
  );
};
