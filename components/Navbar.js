import React from 'react'

const Navbar = ({setActiveSection, current}) => {
  return (
    <div>
      <nav className="flex w-full justify-between pl-10 h-20">
          <div className="self-end">
          <h2 className="text-3xl font-bold">{current}</h2>
          <div className="h-2 w-20 bg-jetblack rounded-md"></div>
          </div>
          <ul className="list-none flex text-lg px-10 h-16 gap-16 items-center rounded-bl-2xl rounded-tr-2xl shadow-md">
            <li className={`${current === "About"?"font-bold text-xl" : ""} relative p-2 hover:text-gray-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]`} onClick={() => setActiveSection('About')}>About</li>
            <li className={`${current === "Resume"?"font-bold text-xl" : ""} relative p-2 hover:text-gray-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]`} onClick={() => setActiveSection('Resume')}>Resume</li>
            <li className={`${current === "Projects"?"font-bold text-xl" : ""} relative p-2 hover:text-gray-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]`} onClick={() => setActiveSection('Projects')}>Projects</li>
            <li className={`${current === "Contact"?"font-bold text-xl" : ""} relative p-2 hover:text-gray-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]`} onClick={() => setActiveSection('Contact')}>Contact</li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
