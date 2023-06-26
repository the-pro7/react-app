import { useState } from "react";
import "./App.css";
import Grocery from "./Grocery";

function App() {
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
    <Grocery
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleCheck={handleCheck}
      handleSubmit={handleSubmit}
      list={list}
      item={item}
    />
  );
}

export default App;
