import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



export const server = 'http://localhost:5000/users'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App /> 
    
   
  </React.StrictMode>,
)
