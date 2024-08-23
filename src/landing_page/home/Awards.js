import React from 'react'
 
const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-5'>
           <img src='media/images/largestBroker.svg' alt='awrds'/>
        </div>
        <div className='col-6 p-5 mt-5'>
          <h1>Largest Broker in India</h1>
          <p>2+ Million zerodha clients contibute to over to 15% of all volumes in india daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-6'>
            <ul>
            <li>
              <p>Futures and Options</p>
            </li>
            <li>
              <p>Commodity derivatives</p>
            </li>
            <li>
              <p> CUrrency derivativess</p>
            </li>
          </ul>
            </div>
            <div className='col-6'>
            <ul>
            <li>
              <p>Stocks and IPO's</p>
            </li>
            <li>
              <p>Direct Mutual Fund</p>
            </li>
            <li>
              <p> Bonds and Govt. securities</p>
            </li>
          </ul>
            </div>
          </div>
          <img src='media\images\pressLogos.png' style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Awards