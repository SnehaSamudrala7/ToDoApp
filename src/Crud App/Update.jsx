import React,{useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
  let [data,setData]=useState({
    name:"",
    place:"",
    age:"",
    dob:""  
})


  let[users,setUsers]=useState([])
  console.log(users);
  
  let {id}=useParams()
  let navigate = useNavigate()
  
  
  useEffect(()=>{
    axios.get("http://localhost:3000/user/"+id)
    .then((result)=>setData(result.data))
    .catch((error)=>console.log(error))
  },[])


  let handleChange=(e)=>{
    let{name,value}=e.target;
  setData({...data,[name]:value})
  }

  let handleUpdate=(e)=>{
  e.preventDefault();
  axios.put(" http://localhost:3000/user/"+id,data)
  .then((val)=>{
  console.log("Success");
    navigate("/")
  })
  
  }


  return (
    <>
    <h2>Update</h2>

    <form onSubmit={handleUpdate}>
    <label htmlFor="name"> Name:</label>
    <input type="text" name="name"  id="name" value={data.name} onChange={handleChange}/> <br/><br/>

    <label htmlFor="place"> Place:</label>
    <input type="text" name="place"  id="place" value={data.place} onChange={handleChange}/> <br/><br/>
    
    <label htmlFor="age"> Age:</label>
    <input type="number" name="age"  id="age" value={data.age} onChange={handleChange}/> <br/><br/>
    
    <label htmlFor="dob">Dob:</label>
    <input type="Date" name="dob"  id="dob" value={data.dob} onChange={handleChange}/> <br/><br/>

    <input type="submit" value="Update" />
    <button> <Link  to="/"> Go Back</Link></button>
    
    </form>

    </>
  )
}

export default Update