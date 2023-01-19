import React,{useState} from 'react'
 import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const[nav, setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className="w-full h-[90px] bg-black">
       <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'> 
          <div><h1 className='text-[#00d8ff]'>DEFI</h1> </div>
          <div className='hidden md:flex'>
             <ul className='flex items-center text-white'>
               <li>platform</li>
               <li>Developers</li>
               <li>community</li>
               <li>About</li>
               <button className='ml-4'>use defi</button>
             </ul>
          </div>
          {/*humberger menu*/}
          <div onClick={handleNav} className='block md:hidden'>
             {nav? <AiOutlineMenu size={30} className='text-white' />: <AiOutlineClose size={30} className='text-white' />}
          </div>
          {/*mopile menu */}
          <div className={nav ? 'w-full text-white bg-black absolute top-[90px] left-0 flex justify-center text-center ': 'absolute left-[-100%]'}>
            <ul className=''>
                <li className='text-2xl'>platform</li>
                <li className='text-2xl'>Developers</li>
                <li className='text-2xl'>community</li>
                <li className='text-2xl'>About</li>
               <button className='m-8'>use defi</button>
            </ul>
       </div>
      </div> 
    </div>
  )
}

export default Navbar;
 