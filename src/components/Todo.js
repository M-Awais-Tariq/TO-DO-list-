import React from 'react'

export default function Todo(props) {
  return (
    <div className='container'>
      <p>{props.todo.title}</p>
      <p>{props.todo.desc}</p>
      <button className="btn btn-sm btn-danger " onClick={()=>{
        return props.ondelete(props.todo)}}>Delete</button>
    </div>
  )
}
