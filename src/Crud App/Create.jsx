import React, {useState}from 'react'
import axios from 'axios'

import { Link,  useNavigate } from 'react-router-dom'

  

const Create = () => {
  let [data,setData]=useState({
    name:"",
    place:"",
    age:"",
    dob:""
    
})
  
  let navigate = useNavigate()
  let {name,place,age,dob}=data;


  let handleChange=(e)=>{
  let{name,value}=e.target;
  setData({...data,[name]:value})
  }

  let handleSubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:3000/Users",data)
  .then((val)=>{
    console.log("Success");
    navigate("/")
  })
  console.log(name,place,age,dob)
}

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name"> Name:</label>
    <input type="text" name="name"  id="name" value={name} onChange={handleChange}/> <br/><br/>

    <label htmlFor="place"> Place :</label>
    <input type="text" name="place"  id="place" value={place} onChange={handleChange}/> <br/><br/>
    
    <label htmlFor="age"> Age :</label>
    <input type="number" name="age"  id="age" value={age} onChange={handleChange}/> <br/><br/>
    
    <label htmlFor="dob">Dob :</label>
    <input type="Date" name="dob"  id="dob" value={dob} onChange={handleChange}/> <br/><br/>

    <input type="submit" value="Register " />
    <button> <Link  to="/"> Go Back</Link></button>
    </form>
  )
}

export default Create