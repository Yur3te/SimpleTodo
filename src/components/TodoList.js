import React, {useState} from 'react'
import { TodoForm } from './TodoForm'



export const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([todo, ...todos])
        console.log(...todos)
    }

  return (
    <div>
        <h1>Your plans</h1>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}
