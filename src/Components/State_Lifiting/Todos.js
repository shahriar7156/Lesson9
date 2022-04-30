import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
    console.log(props.todos);
  return (
    <div>
    {props.todos.map((todoarryantechi,index)=>( 
        <Todo key={index} todoarryantechi ={todoarryantechi}/>
    ))}
    </div>
  )
}

export default Todos