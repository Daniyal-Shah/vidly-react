import _ from "lodash";
import React from "react";
import Like from "./like";

class TableBody extends React.Component {
  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;
    // console.log("Data");
    // console.log(data);
    // console.log("Columns", columns);
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
