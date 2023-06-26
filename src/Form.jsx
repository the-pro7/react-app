/* eslint-disable react/prop-types */
// import React from 'react'

const Form = ({item, handleChange, handleSubmit}) => {
  return (
    <form className="input-field" onSubmit={(e) => handleSubmit(e)}>
    <input
      type="text"
      placeholder="Enter an item..."
      onChange={(e) => handleChange(e)}
      value={item}
    />
    <button className="add">Add Task</button>
  </form>
  )
}

export default Form