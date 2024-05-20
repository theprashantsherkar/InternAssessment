import React, { useEffect, useState } from 'react'
import { server } from '../src/main'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/profile.css'

function Profile() {
  const location = useLocation()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const logoutFunc = async() => {
    try {
      const { data } = await axios.get(`${server}/logout`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      toast.success(data.message)
      navigate('/login')

      
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }


  return (
    <>
      <div className="container">

        <div className="content">
          <h1>
            {location.state.id}
          </h1>
    
        </div>
        <div className="btns">
          <button onClick={logoutFunc} className='buttons'>logout</button>
        </div>
      </div>

      

    </>
  )
}

export default Profile