import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'


function Header() {
    return (
        <>
            <nav>
                <div className="heading">
                    <Link className='mainlink' to='/'>
                        <h2>
                            Assessment
                        </h2>
                    </Link>
                </div>
                <div className="navs">
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='login'>Login</Link>
                    <Link className='links' to='/register'>Sign up</Link>
                </div>
                

            </nav>
        </>
    )
}

export default Header