/*import React from 'react'

const Read = () => {
  return (
    <div>
      <h1>{users.id}</h1>
      <h1>{users.name}</h1>
      <h1>{users.place}</h1>
      <h1>{users.age}</h1>
      <h1>{users.dob}</h1>
    </div>
  )
}

export default Read*/


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Read = () => {
  let[users,setUsers]=useState([])
  console.log(users);
  
  let {id}=useParams()
  
  useEffect(()=>{
    axios.get(" http://localhost:3000/user/"+id)
    .then((result)=>setUsers(result.data))
    .catch((error)=>console.log(error))
  },[])

  return (
    <>
    <h1>{users.id} </h1>
    <h1>{users.name} </h1>
    <h1>{users.place} </h1>
    <h1>{users.age} </h1>
    <h1>{users.dob} </h1>

    <button> <Link  to={`/`}> Go Back</Link></button>   <br/> <br/>
    <button> <Link  to={`/update/${users.id}`}> Edit</Link></button>
    
    </>
  )
}

export default Read
