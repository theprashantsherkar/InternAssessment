import React, { useEffect, useState } from 'react'
import { server } from '../src/main'
import axios from 'axios'


function Profile() {
  const [name, setName] = useState("")
  useEffect(() => {
    fetch(`${server}/profile`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",

      }
    })
      .then((response) => {
      response = response.json
      })
      .then((data) => {
      console.log(data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      welcome back {name}

    </>
  )
}

export default Profile