import React, {Component} from 'react';
import TableCell from "@material-ui/core/TableCell/TableCell";

class TableHeaders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHeadersNames: props.tableHeadersNames
    }
  }

  render() {
    const {tableHeadersNames} = this.state;

    return Object.entries(tableHeadersNames).map((header, index) => {
      const numeric = header.pop();
      const headerName = header.pop();

      if (numeric)
        return <TableCell key={index} numeric>{headerName}</TableCell>;

      return <TableCell key={index}>{headerName}</TableCell>
    });
  }
}

export default TableHeaders;