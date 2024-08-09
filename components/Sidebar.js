import React from 'react'
import Image from 'next/image'
import { FaInstagram,  FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="bg-white sticky top-20  text-gray-800 w-72 pt-16 px-5 text-center flex flex-col rounded-3xl border border-gray-300 justify-center items-center shadow-xl pb-10 ">
      <div className="">
        <div className="bg-gray-100 h-24 w-24 rounded-xl flex justify-center items-center mx-auto my-2">
          <Image src="/images/my-avatar.png" alt="Mohammed Dayyan" width="100" height="100" />
        </div>
        <div className="my-6">
          <h1 className=" text-2xl mb-3" title="Mohammed Dayyan">Mohammed Dayyan</h1>
          <p className="px-2 mx-auto max-w-max rounded-lg bg-gray-100">Web developer</p>
        </div>
        <hr />
      </div>

      <div className='flex flex-col justify-start items-start'>
        <div className='my-5 max-w-48 overflow-ellipsis'>
          <div className='flex justify-center items-center gap-2' >
            <div className='rounded-md min-w-10 h-10 bg-white shadow-md flex justify-center items-center'>
            <FaEnvelope size={17} color="#000000" />
            </div>
            <div className='text-left max-w-32' >
              <p className='text-gray-400 text-sm'>Email</p>
              <p className=' overflow-hidden text-ellipsis'>mdayyanofficial@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='my-5 max-w-48'>
          <div className='flex justify-center items-center gap-2' >
            <div className='rounded-md w-10 h-10 bg-white shadow-md flex justify-center items-center'>
            <FaMobileScreenButton size={20} color="#000000" />
            </div>
            <div className='text-left' >
              <p className='text-gray-400 text-sm'>Phone No.:</p>
              <p>+91 74836 21525</p>
            </div>
          </div>
        </div>

        <div className='my-5 max-w-48'>
          <div className='flex justify-center items-center gap-2' >
            <div className='rounded-md w-10 h-10 bg-white shadow-md flex justify-center items-center'>
            <MdLocationOn size={25} color="#000000" />
            </div>
            <div className='text-left' >
              <p className='text-gray-400 text-sm'>Location</p>
              <p>Basavanagudi,</p>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex gap-4'>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#000000" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#000000" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} color="#000000" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
