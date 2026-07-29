import{useContext} from "react";
import {ToDoContext} from '../context/TodoContext';
import TodoItem from "./TodoItem";

export default function TodoList(t){
  const {todoList, setTodoList}= useContext(ToDoContext);  //console.log("lits ",todoList);

  return(
    <div style={{paddingTop:"10px", paddingBottom:"10px"}} key={t.id}>
      {todoList.map( t =>
        <TodoItem userId={t.userId} id={t.id} title={t.title} completed={t.completed} key={t.id}/>
      )}
    </div>
  )
}