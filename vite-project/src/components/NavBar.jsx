import React from 'react'
import { Link } from 'react-router-dom'
import { LuListTodo } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-green-500'>
        <div className='flex gap-x-4'>
            <LuListTodo className='text-3xl'/>
            <p className='font-bold text-lg'>LOCK IN.</p>
            
        </div>
        <div className='flex'>
        <Link className='mr-2 font-semibold text-lg' to="/login">Login</Link>
        <p className='mr-2'>|</p>
        <Link className='font-semibold text-lg' to="/register">Register</Link>
        </div>
    </nav>
  )
}

export default NavBar
