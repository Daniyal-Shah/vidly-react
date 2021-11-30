import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
import React from "react";

const Table = (columns, data, onSort, sortColumn) => {
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
