import React from 'react';
import Upload from '../components/Upload';
import Display from '../components/Display';

const Home = () => {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-[3]'>
          <Display/>
        </div>
        <div className='flex flex-[1]'>
          <Upload/>
        </div>
    </div>
  )
}

export default Home