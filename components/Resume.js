import React from 'react'
import { FaInstagram, FaGithub, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';


const Resume = () => {
  return (
    <div>

      <h3 className='text-2xl font-semibold'>Education</h3>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">

        <li class="mb-15 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2020</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">SSLC</h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Completed Secondary School Leaving Certificate from The PTA School, Bangalore.</p>
        </li>
        <li class="mb-5 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">PUC</h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Completed Pre-University Course from St. Joseph&apos;s Boys Pre-University College, Bangalore, with a focus on Science stream.</p>
        </li>
        <li class="ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ongoing</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Engineering in AI & ML</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Pursuing a degree in Engineering with a specialization in Artificial Intelligence and Machine Learning from Visvesvaraya Technological University (VTU), Bangalore.</p>
        </li>
      </ol>
      <h2 class="text-2xl font-bold mt-10">Skills Overview</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {/* <!-- Languages --> */}
        <div class="bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Languages</h3>
          <div class="flex flex-wrap gap-2">
            <span class="inline-block px-3 py-1 font-semibold bg-blue-100 rounded shadow text-center">C Language</span>
            <span class="inline-block px-3 py-1 font-semibold bg-blue-100 rounded shadow text-center">C++</span>
            <span class="inline-block px-3 py-1 font-semibold bg-blue-100 rounded shadow text-center">Python</span>
            <span class="inline-block px-3 py-1 font-semibold bg-blue-100 rounded shadow text-center">Java</span>
            <span class="inline-block px-3 py-1 font-semibold bg-blue-100 rounded shadow text-center">JavaScript</span>
          </div>
        </div>

        {/* <!-- Frameworks/Libraries --> */}
        <div class="bg-green-50 p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3 overflow-hidden text-ellipsis">Frameworks/Libraries</h3>
          <div class="flex flex-wrap gap-2">
            <span class="inline-block px-3 py-1 font-semibold bg-green-100 rounded shadow text-center">React</span>
            <span class="inline-block px-3 py-1 font-semibold bg-green-100 rounded shadow text-center">Tailwind CSS</span>
            <span class="inline-block px-3 py-1 font-semibold bg-green-100 rounded shadow text-center">Bootstrap</span>
            <span class="inline-block px-3 py-1 font-semibold bg-green-100 rounded shadow text-center">Next.js</span>
          </div>
        </div>

        {/* <!-- Tools --> */}
        <div class="bg-yellow-50 p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Tools</h3>
          <div class="flex flex-wrap gap-2">
            <span class="inline-block px-3 py-1 font-semibold bg-yellow-100 rounded shadow text-center">Node.js</span>
            <span class="inline-block px-3 py-1 font-semibold bg-yellow-100 rounded shadow text-center">Express.js</span>
            <span class="inline-block px-3 py-1 font-semibold bg-yellow-100 rounded shadow text-center">MySQL</span>
            <span class="inline-block px-3 py-1 font-semibold bg-yellow-100 rounded shadow text-center">MongoDB</span>
          </div>
        </div>

        {/* <!-- Stylesheets --> */}
        <div class="bg-purple-50 p-4 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Stylesheets</h3>
          <div class="flex flex-wrap gap-2">
            <span class="inline-block px-3 py-1 font-semibold bg-purple-100 rounded shadow text-center">CSS</span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Resume
