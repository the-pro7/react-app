/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useRef } from "react";

const Form = ({ item, handleChange, handleSubmit }) => {
  const inputRef = useRef()
  return (
    <form className="input-field" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a task..."
        onChange={(e) => handleChange(e)}
        value={item}
        autoFocus
      />
      <button className="add" onClick={() => inputRef.current.focus()}>Add Task</button>
    </form>
  );
};

Form.propTypes = {
  item: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
