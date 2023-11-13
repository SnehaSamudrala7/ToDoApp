import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


import{ IoMdAddCircle} from 'react-icons/io'

const Home = () => {
let[users,setUsers]=useState([])
console.log(users);



useEffect(()=>{
  axios.get(" http://localhost:3000/user ")
  .then((result)=>setUsers(result.data))
  .catch((error)=>console.log(error))
},[])

let handleDelete=(id)=>{
  axios.delete("http://localhost:3000/user/"+id)
  .then(()=>{
    console.log("Deleted Successfully");
    window.location.reload()
  }
  )
}



  return (
    <>
    <button><Link to="/create">  ADD <IoMdAddCircle/> </Link></button>
    <table>
      <thead>
        <tr>
          <th>Id  </th>
          <th> Name </th>
          <th>Place  </th>
          <th>Age  </th>
          <th> DOB </th>
        </tr>
      </thead>

      <tbody>
        {
          users.map((val)=>{
            return(

              <React.Fragment key={val.id}>
              <tr>
                 <td>{val.id}  </td>
                 <td>{val.name}  </td>
                 <td>{val.place}</td>
                 <td>{val.age}</td>
                 <td>{val.dob}</td>
                  <td> <button> <Link to={`/read/${val.id}`}>Read</Link> </button></td>


                  <td> <button> <Link to={`/update/${val.id}`}> Edit </Link> </button></td>
                  <td> <button onClick={()=>handleDelete(val.id)}>Delete  </button></td>
              </tr>

              </React.Fragment>
            )
          })

       }
        </tbody>
    </table>
    </>
  )
}

export default Home