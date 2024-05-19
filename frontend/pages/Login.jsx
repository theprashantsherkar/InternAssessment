import React, { useState } from 'react'
import '../styles/login.css'
import { Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { server } from '../src/main.jsx'


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)

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
      

      toast.success(data.message)
      setSuccess(true)


    } catch (error) {
      toast.error("something went wrong")
      console.log(error)
      setSuccess(false)

    }

    if(success) return navigate('/profile')
    

    

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