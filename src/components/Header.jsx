import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='Header'>
            <div className='btn-container'>
                <Link to="/"> <button>Home</button></Link>
                <Link to="/users"> <button>Users</button></Link>
                
                <Link to="/transactions"> <button>Transactions</button></Link>

            </div>
        </div>
    )
}

export default Header