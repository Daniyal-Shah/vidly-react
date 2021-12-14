import { useLocation } from "react-router";

const SavedProduct = () => {
  const location = useLocation();
  return (
    <div className="">
      <h1>So you selected the product: {location}</h1>
    </div>
  );
};

export default SavedProduct;
