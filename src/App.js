import React, { useState } from 'react';
import './App.css';



function App() {
  const [ newTodo, setNewTodo ] = useState("");
  const [ todos, setTodos ] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newTodo.length === 0){
      return;
    }

    const todoItem = {
      text:newTodo,
      complete:false
    }
    setTodos([...todos, todoItem])
    setNewTodo("")
  }

  const handleDelete = (indx) => {
    const filteredTodos = todos.filter((todo,i) => {
      return i !== indx;
    });

    setTodos(filteredTodos);
  }

  const handleToggle = (indx) => {
    const updatedTodo = todos.map((todo,i)=>{
      if (indx === i){
        todo.complete = !todo.complete;
      }
      return todo
    });
    setTodos(updatedTodo);
  }


  return (
    <div >
      <div className="position">
        <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo}
          type="text"/>
        <div>
          <button>Add</button>
        </div>
      </form>
      <hr />
      </div >
      <div >
        {todos.map((todo,i) =>{

          const todoClasses =["items"];
          if (todo.complete){
            todoClasses.push("line");
          }
        return <div key={i}>
          <span className={todoClasses.join(" ")}><input onChange={(e) => {
            handleToggle(i);
          }} checked={todo.complete} type="checkbox"/> {todo.text}</span>
          <button onClick={(e) => {
            handleDelete(i);
          }}>Delete</button>
        </div>;
        })}
      </div>
      
    </div>
  );
}

export default App;
