import {COMMENTS_ENDPOINT} from "../config";
import List from "./List";
import React from "react";

const POST_ID_TABLE_HEADER = 'postId';
const ID_TABLE_HEADER = 'id';
const NAME_TABLE_HEADER = 'name';
const EMAIL_TABLE_HEADER = 'email';
const BODY_TABLE_HEADER = 'body';
const POST_ID_TABLE_HEADER_NAME = 'Post ID';
const ID_TABLE_HEADER_NAME = 'ID';
const NAME_TABLE_HEADER_NAME = 'Name';
const EMAIL_TABLE_HEADER_NAME = 'Email';
const BODY_TABLE_HEADER_NAME = 'Body';

const Comments = () => {
  const tableHeaders = [
    POST_ID_TABLE_HEADER, ID_TABLE_HEADER, NAME_TABLE_HEADER, EMAIL_TABLE_HEADER, BODY_TABLE_HEADER
  ];
  const tableHeadersNames = {
    [POST_ID_TABLE_HEADER_NAME]: true,
    [ID_TABLE_HEADER_NAME]: true,
    [NAME_TABLE_HEADER_NAME]: false,
    [EMAIL_TABLE_HEADER_NAME]: false,
    [BODY_TABLE_HEADER_NAME]: false
  };
  return (
    <List endpoint={COMMENTS_ENDPOINT} tableHeaders={tableHeaders} tableHeadersNames={tableHeadersNames}/>
  );
};

export default Comments;