import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signIn, signUp } from '../redux/apiCalls';
import '../index.css'

// import { signup,signin } from '../actions/auth';

const Form = () => {
  const history = useNavigate();
  const [authData,setAuthData] = useState({ firstname: '', lastname: '', email: '', password: '' })
  const [change, setChange] = useState(true);
  const { successCondition, userInfo, error, pending }= useSelector((state) => state.user)


  const dispatch = useDispatch();

  const submitAuthForm = (e) => {
    e.preventDefault();
    

    if(change){
      signUp(authData, dispatch, setChange)
    } else {
      signIn(authData, dispatch, history)
    }

    // setChange(false)

}


  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-center items-center w-[400px] p-[20px] bg-black text-white'>
            <h1 className='w-full flex justify-center items-center mb-[20px] text-[20px] font-bold'>{change ? 'SignUp' : 'SignIn'}</h1>
            {successCondition && <span className='text-green-500 mb-3'>{userInfo.message}</span>}
            <form className='flex flex-col justify-center items-center w-full gap-2'>
                {change && <>
                  <input className='w-full p-[10px] bg-[#ffffff3e] outline-none' value={authData.firstname} type='text' placeholder='FirstName' onChange={(e) => setAuthData({ ...authData, firstname: e.target.value })}/>
                  <input className='w-full p-[10px] bg-[#ffffff3e] outline-none' value={authData.lastname} type='text' placeholder='LastName' onChange={(e) => setAuthData({ ...authData, lastname: e.target.value })}/>
                </>}
                <input className='w-full p-[10px] bg-[#ffffff3e] outline-none' value={authData.email} type='text' placeholder='Email' onChange={(e) => setAuthData({ ...authData, email: e.target.value })}/>
                <input className='w-full p-[10px] bg-[#ffffff3e] outline-none' value={authData.password} type='password' placeholder='Password' onChange={(e) => setAuthData({ ...authData, password: e.target.value })}/>
                <Link to={`/home`}>
                   <button disabled={pending} className='bg-green-700 p-2 rounded-[5px]' onClick={submitAuthForm}>{change ? 'SignUp' : 'SignIn'}</button>
                </Link>
                <span className='text-green-500'>{pending ? 'loading...' : null}</span>
                {error.condition && <span className='text-red-500'>{error.message}</span>}
                <span className='underline cursor-pointer' onClick={() => setChange(!change)}>{change ? 'allready have an account? SignIn' : "dont't have an accout? SignUp"}</span>
            </form>
        </div>
    </div>
  )
}

export default Form