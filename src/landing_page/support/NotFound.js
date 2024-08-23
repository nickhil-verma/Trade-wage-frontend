import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='mt-5'>404 Page Not FOund!</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/"><button className='btn btn-primary'>Return to home</button></Link>
        </div>
    </div>
  )
}

export default NotFound