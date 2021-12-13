import React, { useContext } from "react";
import { UserContext } from "./userContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  return <div>Movie {userContext.currentUser.name}</div>;
}

export default MovieRow;
