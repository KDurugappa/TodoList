import { useEffect, useRef, useState } from 'react'
import '../css/Todo.css'
import Todo_items from './Todo_items';
let count=0;
const Todo = () => {

  const [todos,setTods] = useState([]);
  const inputRef = useRef(null);

  const add = ()=>{
    setTods([...todos,{no:count++,text:inputRef.current.value,display:""}])
    inputRef.current.value="";
    localStorage.setItem("todos_count",count);

  }

  useEffect(()=>{
    setTods(JSON.parse(localStorage.getItem("todos")))
    localStorage.getItem("todos_count");
  },[])

  useEffect(()=>{
  

  setTimeout(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, 100);


  },[todos])

  
  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input type="text" ref={inputRef} placeholder='Add Your Task' className='todo-input' />
      <div onClick={add}  className="todo-add-btn">Add</div>
      </div>
      <div className="todo-list">
        {todos.map((item,index)=>{
          return<Todo_items key={index} setTods={setTods} no={item.no} display={item.display} text={item.text}/>
        })}
      </div>
    </div>
  )
}

export default Todo
