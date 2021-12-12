import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import React from "react";

const Table = (props) => {
  const { columns, data, onSort, sortColumn } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        columns={columns}
        data={data}
        // onLike={onLike}
        // onDelete={onDelete}
      />
    </table>
  );
};

export default Table;
