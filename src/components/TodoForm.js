import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TodoForm = (props) => {
  const [input, SetInput] = useState("");

  const contentHandler = (event) => {
    SetInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmit({
        text: input,
        id: uuidv4()
    })
    SetInput("");
    
  };

  return (
    <form className="todoform" onSubmit={submitHandler}>
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
