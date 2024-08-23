import React from 'react'

const Pricing = () => {
  return (
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-4'>
          <h1 className='mb-3 fs-2'>Unbeataable Pricing</h1>
          <p>
            We pioneeredd the concept of the discount broking and price transparency in india. Flat fees and no hidden charges.
          </p>
          <a href='' style={{textDecoration:"none"}}>See pricing</a>
        </div>
        <div className='col-2'></div>
          <div className='col-6'>
            <div className='row text-center mb-3'>
              <div className='col p-2 border'>
                <h1 className='mb-3'>0</h1>
                <p>Free equity delivery and<br></br> direct mutual funds</p>
              </div>
              <div className='col border p-2'>
                <h1 className='mb-3'>20</h1>
                <p>Free equity delivery and<br></br> direct and direct mutual funds</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing