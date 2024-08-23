import React from 'react'
import homeHero from "../../media/images/homeHero.png";
const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img className="mb-5"src={homeHero} alt='Hero Image'></img>
        <h1 className='mt-5'>
          Invest in everything
        </h1>
        <p>Online Platform to invest in stocks,derivatives, mutual funds</p>
        <button className='p-2 btn fs-5 btn-primary' style={{width:"30%",margin:" 0 auto"}}>Signup Now</button>
      </div>

    </div>
  )
}

export default Hero