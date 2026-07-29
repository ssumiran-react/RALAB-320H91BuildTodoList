import { useState, useRef } from "react";

export default function TodoItem(t) {
    const [isCompleted, setIsCompleted]= useState(t.completed);
    const [title, setTitle]= useState(t.title);
    const titleRef = useRef(null);
    const [isEdit, setIsEdit]= useState(true);

    const onChangeCheckbox = () => {
      setIsCompleted(!isCompleted);
    };

    function onChangeTitle (e) {  //console.log ("title2 ",title);
      e.preventDefault();
      setTitle(titleRef.current.value);
      onEdit(true)
    };

    function onEdit (val) {  
      setIsEdit(val); //console.log ("isEdit ",isEdit);
    };

    return (
        <div style={{ paddingTop: "10px", paddingBottom: "10px" }} >
            <div hidden={!isEdit} >
                <input type="checkbox" checked={isCompleted ? true : false } 
                  onChange={onChangeCheckbox}></input>
                <label> {title} </label>
                <button onClick={()=>onEdit(false) }>Edit</button>
                <button id="delTodo" disabled={!isCompleted ? true : false}>Delete</button>
            </div>
            <div hidden={isEdit}>
                <input ref={titleRef} type="text" defaultValue={title} ></input>
                <button disabled={false} onClick={onChangeTitle} >Save</button>
            </div>
            <hr></hr>
        </div>
    )
}