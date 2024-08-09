import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='text-gray-800'>
      <div className=''>
        <div className='h-44 w-52 bg-eeriewhite my-3 rounded-lg'>
          <Image src="/images/project-1"></Image>
        </div>
        <h4 className='text-lg'>Farm To Table</h4>
        <p className='text-gray-600 text-sm'>Web Development</p>
      </div>
    </div>
  )
}

export default Projects
