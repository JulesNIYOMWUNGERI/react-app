import React, { useState } from 'react';


const Upload = () => {
    const [formData,setFormData] = useState({ title: '', image: '', description: '' })

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData)
    }

  return (
    <div className='w-full p-[20px] text-white '>
        <div className='bg-black flex flex-col justify-center items-center gap-3 py-[40px]'>
            <h1 className='text-[30px] font-bold'>Post A Blog</h1>
            <form className='flex flex-col justify-center items-center gap-5 py-3 w-[80%]'>
                <input className='w-full p-[10px] rounded-[3px] bg-[#ffffff70] outline-none' value={formData.title} type='text' placeholder='Title' onChange={(e) => setFormData({ ...formData, title: e.target.value })}/>
                <input className='w-full p-[10px] rounded-[3px] bg-[#ffffff70] outline-none' value={formData.image} type='text' placeholder='Image' onChange={(e) => setFormData({ ...formData, image: e.target.value })}/>
                <input className='w-full p-[10px] rounded-[3px] bg-[#ffffff70] outline-none' value={formData.description} type='text' placeholder='Description' onChange={(e) => setFormData({ ...formData, description: e.target.value })}/>
                <button className='bg-red-500 w-full p-[10px] rounded-[5px] font-bold' onClick={submitForm}>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Upload