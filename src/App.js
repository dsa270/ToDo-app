import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import ToDolist from './ToDolist';

function App() {
const [inputList,setinputList] = useState("");
const [items,setitems] = useState([]);

const itenEvent=(event) =>{
  setinputList(event.target.value);
};

const listOfItems=() =>{
setitems((oldItems) =>{
  return [...oldItems, inputList];
});
setinputList("");
};

const DeleteItem=(id) =>{
  console.log('deleted');

setitems((oldItems)=>{
    return oldItems.filter((arrElem, index)=>{
         return index !==id;      
    });
  });
};

 return <>
<div className="main_div">
<div className="center_div">
<br/>
<h1>ToDo list</h1>
<br/>
<input type="text" placeholder="add an item"
value={inputList}
 onChange={itenEvent}></input>
<button onClick={listOfItems}> + </button>
<ol>
  
{items.map((itemval, index) => {
 return <ToDolist key={index} 
 id={index}
 text= {itemval}
   onSelect={DeleteItem}
 />;
})}

</ol>
</div>
</div>
</>;
}

export default App;
