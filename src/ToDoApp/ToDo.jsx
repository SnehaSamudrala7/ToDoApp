import React, { useState } from 'react'

const Todo = () => {
    let[inputValue,setinputValue]=useState("");
    let[listitems,setlistitems]=useState([])
    let handleChange=(e)=>{
        setinputValue(e.target.value)
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputValue);
    }
    let handleAdd=()=>{
        setlistitems([...listitems,inputValue])
        setinputValue("")
    }
  return (
    <>
    <h1>TO-DO-APP</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name='inputValue' id="inputValue" value={inputValue} onChange={handleChange}/>
        <button onClick={handleAdd}>add items</button>
    </form>
    <section>
        <h3>Apple</h3>
        <button>Edit</button>
        <button>delete</button>supriya is a good girl sneha is a girl wish u happy happy birthday happy happy birtday to u 
        

    </section>
    <button>clear all</button>
    </>
  )
}

export default Todo