import {TODOS_ENDPOINT} from "../config";
import List from "./List";
import React from "react";

const USER_ID_TABLE_HEADER = 'userId';
const ID_TABLE_HEADER = 'id';
const TITLE_TABLE_HEADER = 'title';
const COMPLETED_TABLE_HEADER = 'completed';
const USER_ID_TABLE_HEADER_NAME = 'User ID';
const ID_TABLE_HEADER_NAME = 'ID';
const TITLE_TABLE_HEADER_NAME = 'Title';
const COMPLETED_TABLE_HEADER_NAME = 'Completed';

const Todos = () => {
  const tableHeaders = [
    USER_ID_TABLE_HEADER, ID_TABLE_HEADER, TITLE_TABLE_HEADER, COMPLETED_TABLE_HEADER
  ];
  const tableHeadersNames = {
    [USER_ID_TABLE_HEADER_NAME]: true,
    [ID_TABLE_HEADER_NAME]: true,
    [TITLE_TABLE_HEADER_NAME]: false,
    [COMPLETED_TABLE_HEADER_NAME]: false
  };
  return (
    <List endpoint={TODOS_ENDPOINT} tableHeaders={tableHeaders} tableHeadersNames={tableHeadersNames}/>
  );
};

export default Todos;