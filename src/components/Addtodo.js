import React from 'react'
import { useState } from 'react'
import Todos from './Todos';
export default function Addtodo(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
       e.preventDefault();
       if(!title || !desc)
       {
        alert("Title and decription cannot be blank")
       }
       else{
       props.addtodo(title,desc)
      setTitle("")
      setDesc("")
      }
    }
   
  return (
 <div className='container my-3'>
    <h3>Add a todo</h3>
    <form onSubmit={submit}>
     <div className="mb-3">
     <label htmlFor="todotitle" className="form-label">Todo Title</label>
     <input type="text" value={title} className="form-control" id="todotitle" onChange={(e)=>setTitle(e.target.value)}aria-describedby="emailHelp"/>
     </div>

     <div className="mb-3">
     <label htmlFor="tododesc" className="form-label">Todo Description</label>
     <input type="text"value={desc} className="form-control" onChange={(e)=>setDesc(e.target.value)}id="tododesc"/>
     </div>
  
     <button type="submit" className="btn btn-sm btn-success">Submit</button>
 </form>
</div>
  )
}

