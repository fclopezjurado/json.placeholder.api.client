import {PHOTOS_ENDPOINT} from "../config";
import List from "./List";
import React from "react";

const ALBUM_ID_TABLE_HEADER = 'albumId';
const ID_TABLE_HEADER = 'id';
const TITLE_TABLE_HEADER = 'title';
const URL_TABLE_HEADER = 'url';
const THUMBNAIL_URL_TABLE_HEADER = 'thumbnailUrl';
const ALBUM_ID_TABLE_HEADER_NAME = 'Album ID';
const ID_TABLE_HEADER_NAME = 'ID';
const TITLE_TABLE_HEADER_NAME = 'Title';
const URL_TABLE_HEADER_NAME = 'URL';
const THUMBNAIL_URL_TABLE_HEADER_NAME = 'Thumbnail URL';

const Photos = () => {
  const tableHeaders = [
    ALBUM_ID_TABLE_HEADER, ID_TABLE_HEADER, TITLE_TABLE_HEADER, URL_TABLE_HEADER, THUMBNAIL_URL_TABLE_HEADER
  ];
  const tableHeadersNames = {
    [ALBUM_ID_TABLE_HEADER_NAME]: true,
    [ID_TABLE_HEADER_NAME]: true,
    [TITLE_TABLE_HEADER_NAME]: false,
    [URL_TABLE_HEADER_NAME]: false,
    [THUMBNAIL_URL_TABLE_HEADER_NAME]: false
  };
  return (
    <List endpoint={PHOTOS_ENDPOINT} tableHeaders={tableHeaders} tableHeadersNames={tableHeadersNames}/>
  );
};

export default Photos;