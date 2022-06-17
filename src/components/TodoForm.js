import React, { useState } from "react";

export const TodoForm = () => {
  const [input, SetInput] = useState("");

  const contentHandler = (event) => {
    SetInput(event.target.value);
  };
  
  //preventDefault by się nie refreshowała strona gdy dodajemy taska
  const handleSubmit = (event) => {
    event.preventDefault();
    SetInput("");
  };

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a task"
        value={input}
        name="text"
        className="todoinput"
        onChange={contentHandler}
      />
      <button className="todobtn">Add</button>
    </form>
  );
};
