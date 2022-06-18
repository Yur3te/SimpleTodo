import React, {useState, useEffect} from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'



export const TodoList = () => {
    const [todos, setTodos] = useState([])

     useEffect(() => {
      getLocalTodos()
    }, [])
  
    useEffect(() => {
      saveLocalTodos()
    }, [todos])



    const addTodo = todo => {
        setTodos([todo, ...todos])

    }

    const completeTodo = (id) => {
      let uptatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(uptatedTodos)
    }

    const removeTodo = (id) => {
      const filteredList = [...todos].filter((todo) => todo.id !== id)
      setTodos(filteredList)
    }

    const updateTodo = (todoId, newValue) => {
      setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)))
    }

    const getLocalTodos = () => {
      const oldtodos = JSON.parse(localStorage.getItem("todos"))
      setTodos(oldtodos)
      
    }

    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }


  return (
    <div>
        <h1>Your plans</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

