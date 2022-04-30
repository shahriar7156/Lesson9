import React,{useState} from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummytodos =["todo1","todo2"];

const Home = () => {

    const [todos, setTodos]= useState(dummytodos);

const handleNewTodo=(NewTodo)=>{
    setTodos([...todos,NewTodo]);
};
  return (
    <div>
    <NewTodo  onTodo ={handleNewTodo}/>
    <Todos todos ={todos} />

    </div>
  );
};

export default Home
