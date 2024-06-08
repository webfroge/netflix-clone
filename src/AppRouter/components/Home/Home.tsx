import { Button } from "../../../components/Button/Button";
import { CircleExclamationIcon } from "../../../Icons/CircleExplanationMark";
import { PlayIcon } from "../../../Icons/PlayIcon";
import classes from "./Home.module.scss";

export const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className="page_container">
        <div className={classes.film_info}>
          <h1 className={classes.title}>House of Ninjas</h1>
          <p className={classes.description}>
            Years after retiring from their formidable ninja lives, a
            dysfunctional family must return to shadowy missions to counteract a
            string of looming threats.
          </p>
        </div>

        <div className={classes.info_button_container}>
          <Button leftComponent={<PlayIcon />}>Play</Button>
          <Button
            variant="transparent"
            leftComponent={<CircleExclamationIcon />}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};
