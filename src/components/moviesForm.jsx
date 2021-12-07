import { useParams } from "react-router";
import MovieForm from "./movieForm";

const MoviesForm = () => {
  const { id } = useParams();

  return <MovieForm paramId={id} />;
};

export default MoviesForm;
