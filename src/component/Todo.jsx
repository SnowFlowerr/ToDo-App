import React, { useState, useEffect } from 'react'
import styles from "./Todo.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { addList, removeList, removeAll, localData, check, unCheck } from "../redux/list/listSlice"

export default function Todo() {

    // task is an Object which contains the text data and checked status.
    const [task, setTask] = useState({text:"",check:""});

    // useSelector hook is used to access the list value from the Redux store state. We know that list is an array of objects with text and check properties.
    const list = useSelector((state) => state.list.value)
    
    // useDispatch hook is used to get the dispatch function from the Redux store. You can then use this dispatch function to dispatch actions defined in your slice file.
    const dispach = useDispatch();

    // to change the update the task object value.
    function handlChange(e) {
        e.preventDefault();
        setTask({text:e.target.value,check:""});
    }

    // to add the object in the array.
    function handleAdd(e) {
        e.preventDefault();
        if (task.text.trim() !== "") {
            dispach(addList(task))
            setTask({text:"",check:""})
        }
        else {
            alert("Write Something to add")
        }
    }
    // to remove all the element from the array.
    function handleClear(e) {
        e.preventDefault();
        dispach(removeAll())
        setTask({text:"",check:""})
    }

    // To prevent data loss when refreshed by updating the value of store from local storage.
    useEffect(() => {
        if (localStorage.getItem("data") !== null) {
            dispach(localData(localStorage.getItem("data")))
        }
    }, [])
    return (
        <div className={styles.bigbox}>
            <form className={styles.inpSec} onSubmit={handleAdd}>
                <input type="text" className={styles.additem} id='text' onChange={handlChange} value={task.text} placeholder='Please enter your task here'/>
                <button onClick={handleAdd}>Save</button>
                <button onClick={handleClear}>Clear All</button>
            </form>
            <div className={styles.list}>
                {list.map((ele, ind) => <div key={ind} className={styles.data}>
                    <div className={styles.note}>
                        {ele.text}
                    </div>
                    <div>
                        {/* To check the current index checkbox */}
                        {ele.check==="on"?<input type="checkbox" id='check' checked className={styles.tick} onChange={()=>dispach(unCheck(ind))}/>:""}

                        {/* To uncheck the current index checkbox */}
                        {ele.check===""?<input type="checkbox" id='check' className={styles.tick} onChange={()=>dispach(check(ind))}/>:""}
                    </div>
                    <div>
                        {/* To remove the particular index from the array */}
                        <button className={styles.delete} onClick={() => dispach(removeList(ind))}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
