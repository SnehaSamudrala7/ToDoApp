/*import React from 'react'
import ToDo from './ToDoApp/ToDo'

const App = () => {
  return (
    <>
      <ToDo/>
    </>
  )
}

export default App*/


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Crud App/Home'
import Update from './Crud App/Update'
import Create from './Crud App/Create'
import Read from './Crud App/Read'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Create" element={<Create/>}/>
          <Route path="/Update/:id" element={<Update/>}/>
          <Route path="/Read/:id" element={<Read/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
