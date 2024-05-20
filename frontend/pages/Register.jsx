import React, { useState } from 'react'
import '../styles/register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { server } from '../src/main.jsx'


function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      
      const { data } = await axios.post(`${server}/register`, {
        name, email, password
      },
        {
          
          headers: {
            "Content-Type": 'application/json',                       
          },
         
          
        })
            
      toast.success(data.message)
      navigate('/profile', {state:{id:data.message}})

      

    } catch (error) {
      toast.error("something went wrong")
      console.log(error)
    
      
    }
   
   
  }

 
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>


          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required />

          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email' />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password' />
          <br />
          <div className="btns">
            <button type="submit">Register</button>
          </div>
          <h4>
            Or
          </h4>
          <div className="link">
            <Link className='signup' to={'/login'}>Login</Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register