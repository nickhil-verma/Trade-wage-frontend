import React from 'react'

const Stats = () => {
  return (
    <div className='container p-3'>
      <div className='row'>
        <div className='col-6 p-5'>
          <h1 className='f2-2 mb-5'>
            Trust with Confidence
          </h1>
          <h2 className='fs-4'>
            customer-first always
          </h2>
          <p  className='text-muted'>That's Why 1.3+ cr customers trust zerodha with 3.5+ lakh crores worrth of equity investment 
          </p>
          <h2 className='fs-4'>
            No spams Gimmicks
          </h2><p className='text-muted'>
            No gimmicks,spam,"gamification" or annoying push notifications . High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className='fs-4'>Zerodha Universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem . our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
          <h2 className='fs-4'>
            Do better eith money 
          </h2>
          <p className='text-muted'>
            With initiatives like nudge and kill Switch, We don't just facilates transactions, but activerly help you do bettr with your money.
          </p>
        </div>
        <div className='col-6 p-5'>
          <img src='media/images/ecosystem.png' style={{width:"95%"}}/>
          <div className='text-center'>
            <a className='mx-5' href='' style={{textDecoration:"None"}}>Explore Our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className='mx-5' href='' style={{textDecoration:"None"}}> Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats