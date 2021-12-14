import React, { Component } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>Products</h1>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      <ul>
        {products
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((product) => (
            <li key={product.id}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "blue",
                  };
                }}
                to={`/products/${product.id}`}
              >
                {product.name}
              </NavLink>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Products;
// <div>
//   <h1>Products</h1>
//   <ul>
//     {this.state.products.map((product) => (
//       <li key={product.id}>
//         <NavLink
//           style={({ isActive }) => {
//             return {
//               color: isActive ? "red" : "blue",
//             };
//           }}
//           to={`/products/${product.id}`}
//         >
//           {product.name}
//         </NavLink>
//       </li>
//     ))}
//   </ul>
//   <Outlet />
// </div>
