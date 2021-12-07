import { useParams } from "react-router";
import { getGenres } from "../services/fakeGenreService";
import MovieForm from "./movieForm";

const MoviesForm = () => {
  const { id } = useParams();
  const genres = getGenres();
  return <MovieForm paramId={id} />;
};

export default MoviesForm;
