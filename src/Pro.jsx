// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import {faTrashAlt} from 'react-icons'
import { useState } from "react";

const Pro = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item !== "") {
      setList((currentList) => {
        return [
          ...currentList,
          {
            id: crypto.randomUUID(),
            title: item,
            completed: false,
          },
        ];
      });
    } else {
      alert("You cannot add an empty task");
    }

    setItem("");
    console.log(list);
  };

  const handleCheck = (id) => {
    const listItems = list.map((item) =>
      item.id == id ? { ...item, completed: !item.completed } : item
    );

    setList(listItems);
  };

  const handleDelete = (id) => {
    const listItems = list.filter((item) => item.id !== id);
    setList(listItems);
  };
  return (
    <main>
      <h1 style={{ marginBottom: "1em", textAlign: "center" }}>Taskify 1.0.0</h1>
      <form className="input-field" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter an item..."
          onChange={(e) => handleChange(e)}
          value={item}
        />
        <button className="add">Add Task</button>
      </form>
      <ul className="list">
        {list.length == 0 && <span className="empty">No items yet</span>}
        {list.length <= 1 ? (
          <span>{list.length} task added</span>
        ) : (
          <span>{list.length} tasks added</span>
        )}
        {list.map((item) => (
          <li key={item.id}>
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
        ))}
      </ul>
    </main>
  );
};

export default Pro;
