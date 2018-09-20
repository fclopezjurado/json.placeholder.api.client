import React from 'react';
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from '@material-ui/core/TableCell';

const REG_EXP_FOR_NUMBERS = "/[0-9]+$/g";

function renderTableRows(props) {
  const {records, page, rowsPerPage} = props;
  return records.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, key) => {
    return (<TableRow key={key}>
      {Object.entries(row).map((cell, index) => {
        const value = cell.pop();

        if ((typeof(value) === "number") || ((typeof(value) === "string") && value.match(REG_EXP_FOR_NUMBERS)))
          return (<TableCell key={index} numeric>{value}</TableCell>);

        return (<TableCell key={index}>{value.toString()}</TableCell>);
      })}
    </TableRow>);
  });
}

export default renderTableRows;