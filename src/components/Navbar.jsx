import React from 'react'
import { Link } from 'react-router-dom'
import CustomNavLink from './CustomNavLink'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
        <Link className='text-red-300 uppercase text-xl'>Fake store app</Link>
        <ul className='flex gap-6'>
            <CustomNavLink to="/">Home</CustomNavLink>
            <CustomNavLink to="/products">Products</CustomNavLink>
        </ul>
    </nav>
  )
}

export default Navbar