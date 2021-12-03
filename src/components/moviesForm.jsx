import { useParams } from "react-router";

const MoviesForm = () => {
  const { id } = useParams();
  return (
    <div className="d-flex justify-content-center">
      <h1>Movie:{id} </h1>
    </div>
  );
};

export default MoviesForm;
