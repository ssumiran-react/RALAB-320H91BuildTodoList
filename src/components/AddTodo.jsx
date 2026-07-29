import { useState, useContext, useRef } from "react";
import { ToDoContext } from '../context/TodoContext';

export default function AddTodo() {
  const addTodoInput = useRef(null);

  const { todoList, setTodoList } = useContext(ToDoContext);

  const [lastId, setLastId] = useState(todoList[todoList.length-1].id + 1);
  // useEffect(() => {
  //   setLastId(prevLastId => prevLastId + 1);
  // }, []);

  function addTodo(e) { 
    e.preventDefault();
    if (addTodoInput.current.value != "") {
      //const lastId = todoList[todoList.length - 1].id + 1;
       console.log ("lastId ",lastId);
      setLastId(prevLastId => prevLastId + 1);
       console.log ("after ",lastId);
      let addData = {
        "userId": 1,
        "id": lastId,
        "title": addTodoInput.current.value,
        "completed": false
      };
      
      setTodoList((prevTodoList) => [addData, ...todoList]);
      addTodoInput.current.value = "";
       console.log("addTodo", addData);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Add task" ref={addTodoInput}></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
