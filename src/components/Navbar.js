import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='bg-black text-white w-full'>
        <div className='w-full flex flex-row justify-between items-center px-[40px] py-[20px]'>
            <div className='text-[30px] font-bold cursor-pointer'>
              <span>LOGO</span>
            </div>
            <div>
              <ul className='flex flex-row gap-4 justify-center'>
                  <li className='cursor-pointer'>facebook</li>
                  <li className='cursor-pointer'>twitter</li>
                  <li className='cursor-pointer'>instagram</li>
                  <li className='cursor-pointer'>youtube</li>
              </ul>
            </div>
            <div>
                <Link to='/'>
                   <button className='bg-blue-900 px-[30px] py-[10px] rounded-[5px]'>Logout</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar