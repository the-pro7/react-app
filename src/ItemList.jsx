/* eslint-disable react/prop-types */
// import React from 'react'
// import { ReactPropTypes } from "react";
import PropTypes from 'prop-types'
import List from "./List";

const ItemList = ({ list, handleCheck, handleDelete }) => {
  return (
    <ul className="list">
      {list.length == 0 && <span className="empty">No items yet</span>}
      {list.length <= 1 ? (
        <span>{list.length} task added</span>
      ) : (
        <span>{list.length} tasks added</span>
      )}
      {list.map((item) => (
        <List
          handleCheck={handleCheck}
          item={item}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
    list: PropTypes.array.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }

export default ItemList;
