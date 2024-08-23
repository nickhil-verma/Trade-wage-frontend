import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/images/education.svg' style={{width:"90%"}}/>
        </div>
        <div className='col-6'>
          <h1 className='mb-3 fs-2'>Free and Open market Education</h1>
          <p> Varsity, the largest online stock market education book in the world covering everything from the basics to advance trading</p>
          <a href='' style={{textDecoration:"none"}}>Cersity</a>
          <p className='mt-5'> Trading Q&A , the most active trading and investment community in the world</p>
          <a href='' style={{textDecoration:"none"}}>Trading Q&A</a>
        </div>
      </div>
    </div>
  )
}

export default Education