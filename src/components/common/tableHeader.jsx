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

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) {
      return null;
    }
    if (sortColumn.order === "asc")
      return <i className="fa fa-sort-asc ps-3 "></i>;
    return <i className="fa fa-sort-desc ps-3"></i>;
  };

  render() {
    // console.log("columns");
    // console.log(this.props.columns);
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className=" clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              scope="col"
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
