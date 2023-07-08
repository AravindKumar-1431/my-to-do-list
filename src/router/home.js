import React from 'react'
import Navbar from '../components/navBar/naavbar';
import Todo from '../components/to_do_list/Todolist';
const home = () => {
  return (
    <div>
    <Navbar/>
   
   <Todo/>
    </div>
  )
}

export default home
