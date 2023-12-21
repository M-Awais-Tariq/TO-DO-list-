import React from 'react'
 import Todo from './Todo.js'
export default function Todos(props) {
  return (
   <div className='container'>
   <h3 className='my-4'>List of todos</h3>

      {props.todos.length===0?"No todos to display":
      props.todos.map((todo)=>{
        return(
            <Todo todo={todo} key={todo.Srno} ondelete={props.ondelete}/>
        );
        //map() calls calls this function for every index of todos array
        //in this scenario map() calling Todo component for every index of todo array 
      })}
    {/* <Todo todos={props.todos}/>  */}
   </div>
  )
}
