import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


export const TodoForm = (props) => {
  const [input, SetInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const contentHandler = (event) => {
    SetInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmit({
        id: uuidv4(),
        text: input
    })
    SetInput("");
    
  };

  return (
    <form className="todoform" onSubmit={submitHandler}>
      {props.edit ? (
      <>
        <input
          type="text"
          placeholder="Edit a task"
          value={input}
          name="text"
          className="todoinput edit"
          onChange={contentHandler}
          ref={inputRef}
        />
        <button className="todobtn edit">Update</button>
      </>
      ): 
      (
      <>
        <input
          type="text"
          placeholder="Write a task"
          value={input}
          name="text"
          className="todoinput"
          onChange={contentHandler}
          ref={inputRef}
        />
        <button className="todobtn">Add</button>
      </>
      )
      }
     
    </form>
  );
};
