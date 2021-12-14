import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";

// handleSave = () => {
// Navigate to /products
//   console.log("handleSave");
// };

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Details - </h1>
      <h4>{params.productId}</h4>
      <button
        onClick={() => {
          navigate("/savedProduct", { state: params });
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ProductDetails;
