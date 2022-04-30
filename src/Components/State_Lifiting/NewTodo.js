import React, {useState} from 'react'

const NewTodo = (props) => {

const [todo, setTodo] = useState("");

const handleInputChange = (event) =>{
    setTodo(event.target.value)
}

const handleSUbmit=(event) =>{
    event.preventDefault();
    console.log(todo);
}

  return (
    <form onSubmit={handleSUbmit}>
         <label htmlFor='todo'>NewTodo: </label>
         <input 
         type="text" 
         id="todo" 
         name="todo" 
         value ={todo} 
         onChange={handleInputChange} />
         <button> Add Todo</button>
    </form>
  )
}

export default NewTodo