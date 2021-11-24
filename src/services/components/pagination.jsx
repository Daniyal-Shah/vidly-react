import React, { Component } from "react";

class Pagination extends React.Component {
  render() {
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item active">
              <a class="page-link " href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
