import React from 'react'

const Card = ({ data }) => {
  return (
    <div className='flex flex-col justify-center items-center max-w-[400px] min-w-[250px] w-[20%] h-[400px] bg-[#dcdcdc] rounded-[10px]'>
        <div className='w-full h-[60%]'>
            <img className='w-full h-full' src={data.image}/>
        </div>
        <div className='w-full h-[30%] overflow-hidden'>
            <h1 className='text-[30px] font-bold'>{data.title}</h1>
            <p>{data.description}</p>
        </div>
        <button className='underline'>READ MORE</button>
    </div>
  )
}

export default Card