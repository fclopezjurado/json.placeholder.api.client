import {USERS_ENDPOINT} from "../config";
import List from "./List";
import React from "react";

const ID_TABLE_HEADER = 'id';
const NAME_TABLE_HEADER = 'name';
const USERNAME_TABLE_HEADER = 'username';
const EMAIL_TABLE_HEADER = 'email';
const PHONE_TABLE_HEADER = 'phone';
const WEBSITE_TABLE_HEADER = 'website';
const ID_TABLE_HEADER_NAME = 'ID';
const NAME_TABLE_HEADER_NAME = 'Name';
const USERNAME_TABLE_HEADER_NAME = 'User name';
const EMAIL_TABLE_HEADER_NAME = 'Email';
const PHONE_TABLE_HEADER_NAME = 'Phone';
const WEBSITE_TABLE_HEADER_NAME = 'Website';

const Users = () => {
  const tableHeaders = [
    ID_TABLE_HEADER, NAME_TABLE_HEADER, USERNAME_TABLE_HEADER, EMAIL_TABLE_HEADER, PHONE_TABLE_HEADER,
    WEBSITE_TABLE_HEADER
  ];
  const tableHeadersNames = {
    [ID_TABLE_HEADER_NAME]: true,
    [NAME_TABLE_HEADER_NAME]: false,
    [USERNAME_TABLE_HEADER_NAME]: false,
    [EMAIL_TABLE_HEADER_NAME]: false,
    [PHONE_TABLE_HEADER_NAME]: false,
    [WEBSITE_TABLE_HEADER_NAME]: false
  };
  return (
    <List endpoint={USERS_ENDPOINT} tableHeaders={tableHeaders} tableHeadersNames={tableHeadersNames}/>
  );
};

export default Users;