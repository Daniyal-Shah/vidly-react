import { useNavigate, useParams } from "react-router";
import MovieForm from "./movieForm";

const MoviesForm = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navigatePage = (page) => {
    navigate(page);
  };

  return <MovieForm paramId={id} naviagte={navigatePage} />;
};

export default MoviesForm;
