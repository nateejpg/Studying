
import React, {useState, useEffect} from 'react'

function Todo() {

const [flag, setFlag] = useState(false);

// Item States
const [newItem,setNewItem] = useState("");
const [items, setItems] = useState([]);

// Working States
const [text, setText] = useState("Start");
const [icon, setIcon] = useState("🧸");

// Quote States


function change(){

    setFlag(flag ? false : true);
    setIcon(flag ? "🟢" : "🔴")
    setText(flag ? "Chilling" : "Working");

}

function add(){

    const item = {
        id: Math.floor(Math.random() * 10000),
        value: newItem,
    }

    setItems(oldarray => [
        ...oldarray,
        item,
    ])

    if(!newItem){
        alert("Insert an Item")
    }else{
        return
    }
}

function remove(id){

    const newArray = items.filter(item => item.id !== id)

    setItems(newArray)
}


  return (
    <div>
        <div>
            <h1>My ToDo List</h1>
            <input
            placeholder='Insert Your ToDo'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            />
            <button onClick={add}>Add</button>
        </div>
        <button onClick={change}>{text}</button>
        <h1>{icon}</h1>
        <ul>
            {items.map(item => {
                return(
                    <li key={item.id}>{item.value}<button onClick={() => remove(item.id)}>❌</button></li>
                )
            })}
        </ul>
    </div>
  )
}

export default Todo
