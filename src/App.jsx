import { useState, useContext, useEffect } from 'react';
import './App.css';

import { initialState } from './data/initialState';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import {ToDoContext} from './context/TodoContext';

function App() {
  const [todoList, setTodoList] = useState(initialState);
  
  return (
    <>
      <h1>Create Todo List</h1>
      <ToDoContext.Provider value={{todoList, setTodoList}}>
        <AddTodo />
        <br></br>
        <TodoList />
      </ToDoContext.Provider>
    </>
  )
}

export default App
