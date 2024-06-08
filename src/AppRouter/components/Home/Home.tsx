import { Bookmark } from "../../../components/Bookmark/Bookmark";
import { Button } from "../../../components/Button/Button";
import { PageContainer } from "../../../components/Containers/PageContainer";
import { CircleExclamationIcon } from "../../../Icons/CircleExplanationMark";
import { PlayIcon } from "../../../Icons/PlayIcon";
import { RightRotateIcon } from "../../../Icons/RightRotate";
import classes from "./Home.module.scss";

export const HomePage = () => {
  return (
    <PageContainer>
      <div className={classes.container}>
        <div className={classes.film_img} />

        <div className={classes.film_banner}>
          <h1 className={classes.title}>House of Ninjas</h1>
          <p className={classes.description}>
            Years after retiring from their formidable ninja lives, a
            dysfunctional family must return to shadowy missions to counteract a
            string of looming threats.
          </p>
        </div>

        <div className={classes.banner_buttons_container}>
          <div className={classes.banner_button_size}>
            <Button leftComponent={<PlayIcon />}>Play</Button>
            <Button
              variant="transparent"
              leftComponent={<CircleExclamationIcon />}
            >
              More Info
            </Button>
          </div>

          <div className={classes.banner_button_size}>
            <Button variant="icon">
              <RightRotateIcon className={classes.right_rotate_icon} />
            </Button>

            <Bookmark className={classes.bookmark}>TV-14</Bookmark>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
