import React, { useState } from 'react'
import '../styles/login.css'
import { Link, Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { server } from '../src/main.jsx'


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
    const { data } = await axios.post(`${server}/login`, {
        email, password
      }, {
        headers: {
          "Content-Type": "application/json"
        },
      }
        )
      
      // const { data } = await fetch(`${server}/login`, {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     email: email,
      //     password : password
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",

      //   }
      // })

      toast.success(data.message)


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
            <button type="submit">Log in</button>
          </div>
          <h4>
            Or
          </h4>
          <div className="link">
            <Link className='signup' to={'/register'}>Sign Up</Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login