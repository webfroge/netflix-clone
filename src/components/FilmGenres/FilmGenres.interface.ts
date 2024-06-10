import { ComponentPropsWithoutRef } from "react";

export interface FilmGenresProps extends ComponentPropsWithoutRef<"div"> {
  genres: string[];
}
