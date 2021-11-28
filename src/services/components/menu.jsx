import React, { Component } from "react";

const Menu = (props) => {
  return (
    <div class="btn-group-vertical btn-group-lg" role="group">
      <button type="button" class=" active btn btn-outline-primary ">
        All genres
      </button>
      <button type="button" class="btn btn-outline-primary ">
        Action
      </button>
      <button type="button" class="btn btn-outline-primary ">
        Thriller
      </button>
      <button type="button" class="btn btn-outline-primary ">
        Comedy
      </button>
    </div>
  );
};

export default Menu;
