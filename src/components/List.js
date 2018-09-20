import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import {BASE_URI} from "../config";
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableHeaders from "./TableHeaders";
import TableRows from './TableRows';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      endpoint: props.endpoint,
      rowsPerPage: 5,
      page: 0,
      tableHeaders: props.tableHeaders,
      tableHeadersNames: props.tableHeadersNames
    };
  }

  handleChangePage = (event, page) => {
    this.setState({page: page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  componentDidMount() {
    fetch(BASE_URI + this.state.endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({records: data});
        this.deleteInvalidHeaderValues()
      });
  }

  /**
   * This function has been implemented to delete record attributes which data type is an object.
   * Deletes attribute like "address: {...}"
   */
  deleteInvalidHeaderValues() {
    const {records, tableHeaders} = this.state;

    const filteredRecords = records.map(row => {
      return Object.entries(row).filter(cell => {
        const header = cell.shift();
        return tableHeaders.includes(header);
      });
    });

    this.setState({records: filteredRecords})
  }

  render() {
    const {records, page, rowsPerPage, tableHeadersNames} = this.state;
    return (
      <Paper>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaders tableHeadersNames={tableHeadersNames}/>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRows records={records} page={page} rowsPerPage={rowsPerPage}/>
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={records.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default List;