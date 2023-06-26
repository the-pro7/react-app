/* eslint-disable react/prop-types */
// import React from 'react'
import PropTypes from 'prop-types'

const List = ({item, handleCheck, handleDelete}) => {
  return (
    <li>
        <input
          type="checkbox"
          name="complete"
          id="complete"
          checked={item.completed}
          onChange={() => handleCheck(item.id)}
        />
        <span>{item.title}</span>
        <button className="delete" onClick={() => handleDelete(item.id)}>
          del
        </button>
      </li>
  )
}

List.propTypes = {
    item: PropTypes.string.isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
}

export default List