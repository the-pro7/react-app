/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

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

Form.propTypes = {
    item: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Form