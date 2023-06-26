/* eslint-disable react/prop-types */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import {faTrashAlt} from 'react-icons'
import PropTypes from "prop-types";
import Form from "./Form";
import ItemList from "./ItemList";

const Grocery = ({
  handleChange,
  handleDelete,
  handleSubmit,
  handleCheck,
  list,
  item,
}) => {
  return (
    <main>
      <h1 style={{ marginBottom: ".3em", textAlign: "center" }} className="appTitle">
        Taskify <span className="version">1.1.0</span>
      </h1>
      <Form
        item={item}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ItemList
        list={list}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </main>
  );
};

// Prop Validation
Grocery.propTypes = {
  list: PropTypes.array.isRequired,
  item: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Grocery;
