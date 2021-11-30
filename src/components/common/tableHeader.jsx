import React from "react";

//columns
//onSort
//sortColumn

class TableHeader extends React.Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      // console.log(sortColumn);
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
      // console.log(sortColumn);
    }
    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              scope="col"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;