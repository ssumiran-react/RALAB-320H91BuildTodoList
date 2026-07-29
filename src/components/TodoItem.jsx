import { useState, useRef } from "react";

export default function TodoItem(t) {
    const [isCompleted, setIsCompleted]= useState(t.completed);
    const [title, setTitle]= useState(t.title);
    const titleRef = useRef(null);

    const onChangeCheckbox = () => {
      setIsCompleted(!isCompleted);
    };

    const onChangeTitle = () => {
      setTitle(title);
    };

    return (
        <div style={{ paddingTop: "10px", paddingBottom: "10px" }} >
            <div >
                <input type="checkbox" checked={isCompleted ? true : false } 
                  onChange={onChangeCheckbox}></input>
                <label> {title} </label>
                <button>Edit</button>
                <button id="delTodo" disabled={!isCompleted ? true : false}>Delete</button>
            </div>
            <div>
                <input ref={titleRef} type="text" defaultValue={title} ></input>
                <button disabled={true}>Save</button>
            </div>
            <hr></hr>
        </div>
    )
}