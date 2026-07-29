import{useContext} from "react";
import {ToDoContext} from '../context/TodoContext';
import TodoItem from "./TodoItem";

export default function TodoList(t){
  const {todoList, setTodoList}= useContext(ToDoContext);  //console.log("lits ",todoList);

  if (todoList.length === 0) {
    return <p>There is no Todo item left.</p>;
  }

  const deleteTodo = (id) => {  
    if (todoList.length > 0){
      //console.log (todoList," deleteTodo ",id);
      setTodoList((todoList)=>todoList.filter(i => i.id != id))
    }
  };

  return(
    <div style={{paddingTop:"10px", paddingBottom:"10px"}} key={t.id}>
      {todoList.map( t =>
        <TodoItem userId={t.userId} id={t.id} title={t.title} completed={t.completed} key={t.id}
        deleteTodo={deleteTodo}/>
      )}
    </div>
  )
}