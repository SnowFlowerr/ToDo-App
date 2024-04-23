import React, { useState, useEffect } from 'react'
import styles from "./Todo.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { addList, removeList, removeAll, localData, check, unCheck } from "../redux/list/listSlice"

export default function Todo() {
    const [task, setTask] = useState({text:"",check:""});
    const list = useSelector((state) => state.list.value)
    const dispach = useDispatch();

    function handlChange(e) {
        e.preventDefault();
        setTask({text:e.target.value,check:""});
    }
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
    function handleClear(e) {
        e.preventDefault();
        dispach(removeAll())
        setTask({text:"",check:""})
    }
    useEffect(() => {
        if (localStorage.getItem("data") !== null) {
            dispach(localData(localStorage.getItem("data")))
        }
    }, [])
    return (
        <div className={styles.bigbox}>
            <div className={styles.inpSec}>
                <input type="text" className={styles.additem} id='text' onChange={handlChange} value={task.text} />
                <button onClick={handleAdd}>Save</button>
                <button onClick={handleClear}>Clear All</button>
            </div>
            <div className={styles.list}>
                {list.map((ele, ind) => <div key={ind} className={styles.data}>
                    <div className={styles.note}>
                        {ele.text}
                    </div>
                    <div>
                        {ele.check==="on"?<input type="checkbox" id='check' checked className={styles.tick} onChange={()=>dispach(unCheck(ind))}/>:""}
                        {ele.check===""?<input type="checkbox" id='check' className={styles.tick} onChange={()=>dispach(check(ind))}/>:""}
                    </div>
                    <div>
                        <button className={styles.delete} onClick={() => dispach(removeList(ind))}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
