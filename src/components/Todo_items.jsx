import '../css/Todo_items.css'

import tick from "../components/assets/not_tick.png"
import not_tick from "../components/assets/tick.png";
import cross from "../components/assets/cross.png";

const Todo_items = ({no,display,text,setTods}) => {

  const deleteTodo =(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data =data.filter((todo)=>todo.no!==no);
    setTods(data);
  }

  const toggle =(no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display = "line-through";
        }
        else{
          data[i].display = "";
        }
        break;
      }
    }
    setTods(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todocontianer ${display}`} onClick={()=>{toggle(no)}}>

        {display===""?<img src={not_tick} alt="" />:<img src={tick} alt="" />}
        
        <div className="todoitemstext">{text}</div>
      </div>
      <img className='todo_icon_cross' onClick={()=>{deleteTodo(no)}} src={cross} alt="" />
    </div>
  )
}

export default Todo_items
