import React, { useState } from "react";
//
//
export default function Todo() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  //
  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false
      };
      setTaskList([...tasklist, taskDetails]);
      //react clear input field after submit
      const inputV = document.querySelectorAll("input");
      inputV.forEach((inputV) => (inputV.value = ""));
      setTask("");
    }
  };
  //
  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
  };
  //
  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = tasklist.findIndex((elem) => elem.id === id);
    const newTaskList = [...tasklist];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true
    };
    setTaskList(newTaskList);
  };
  ///
  ///
  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add items"
      />
      <button id="add-item" onClick={AddTask}>
        Add item
      </button>
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <button onClick={(e) => taskCompleted(e, t.id)} id="completed">
                <p>Completed</p>
              </button>
              <button onClick={(e) => deletetask(e, t.id)} id="delete">
                <p>Delete</p>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <hr />
      <p>local storage</p>
      <p>duplicate items</p>
      <p>ud4 id ???</p>
      <p></p>
    </div>
  );
}
