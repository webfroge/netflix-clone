import classes from "./CategoryPreview.module.scss";
import { CategoryPreviewFilmPromoItem } from "./components/FilmPromoItem/FilmPromoItem";

export const CategoryPreview = () => {
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>Matched to You</h4>
      <div className={classes.film_promo_img_container}>
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
        <CategoryPreviewFilmPromoItem />
      </div>
    </div>
  );
};
