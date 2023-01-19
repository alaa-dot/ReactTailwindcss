import React from 'react'
import heroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top[90px]'>
      <video className='absolute object-cover w-full h-full -z-10' src={heroVid} autoPlay loop muted />
       
            <div className='w-full h-[90%] flex flex-col items-center justify-center text-white px-4 text-center'>
                    <h1>Decentralized</h1>
                    <h1 className='py-2'>
                        <span className='blue'>Trading</span> Protocol
                    </h1>
                    <p className='py-4 text-xl'>
                        Guaranteed liquidity trading for millions of users and top Ethereum
                        applications.
                    </p>
                    <div>
                        <button className='m-2'>Use Defi</button>
                        <button className='m-2'>FAQ</button>
                    </div>
            </div>
            <div>
            <p className='text-2xl font-bold text-center text-white '>Total Volume Secured: $42,104,783,662.47</p>
            </div>
      </div>

  )
}

export default Hero
