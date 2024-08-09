import React, { useState } from 'react';
import Image from 'next/image';
import { FaEye, FaGithub } from 'react-icons/fa';
import { MdClose, MdVisibility } from 'react-icons/md';

const Projects = () => {
  const [modalVisible, setModalVisible] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
  });

  const handleIconClick = (project) => {
    setModalVisible({ ...modalVisible, [project]: true });
  };

  const closeModal = (project) => {
    setModalVisible({ ...modalVisible, [project]: false });
  };

  const ProjectCard = ({ projectName, projectImage, modalId, projectDesc, repoUrl, projectUrl }) => (
    <div className=''>
      <div className='relative h-44 w-60 bg-eeriewhite my-3 rounded-lg overflow-hidden group'>
        <div className='relative h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-125'>
          <Image src={projectImage} layout='fill' objectFit='cover' className='border-4 border-gray-500 rounded-lg' />
        </div>
        <div
          className='cursor-pointer absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          onClick={() => handleIconClick(modalId)}
        >
          <FaEye size={25} color="#fff" />
        </div>
      </div>
      <h4 className='text-lg'>{projectName}</h4>
      <p className='text-gray-600 text-sm'>Web Development</p>

      {modalVisible[modalId] && (
        <div className='fixed inset-0 z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-semibold leading-6 text-gray-900' id='modal-title'>{projectName}</h3>
                        <MdClose
                          size={25}
                          onClick={() => closeModal(modalId)}
                          className='cursor-pointer text-gray-600 hover:text-gray-800 transition-colors duration-200'
                        />
                      </div>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>{projectDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-100 px-4 py-3 flex justify-center gap-3 '>
                  {projectUrl && (
                    <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    <MdVisibility className="mr-2" />
                    View Project
                  </a>
                  )}
                  
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className='text-gray-800 flex flex-wrap gap-4'>
      <ProjectCard projectName='Farm To Table' projectImage='/images/project-1.jpg' modalId='project1' repoUrl="https://github.com/MDAYYAN-007/FARM-TO-TABLE" projectUrl="https://farm-to-table-two.vercel.app/" projectDesc="The Farm To Table project connects local farmers with consumers by showcasing fresh produce. Built with Next.js and styled using Tailwind CSS, it features user authentication, product management, and a shopping cart for a seamless buying experience." />
      <ProjectCard projectName='Password Saver' projectImage='/images/project-1.jpg' modalId='project2' repoUrl="https://github.com/MDAYYAN-007/PASSWORD-SAVER" projectUrl="https://password-saver-mu.vercel.app/" projectDesc="The Password Saver project helps users securely manage their passwords. Built with React, it features form validation, state management, local storage, and toast notifications for user feedback."/>
      <ProjectCard projectName='Flip Book' projectImage='/images/project-1.jpg' modalId='project3' repoUrl="https://github.com/MDAYYAN-007/VIRTUAL-BOOK" projectUrl="https://mdayyan-007.github.io/VIRTUAL-BOOK/" projectDesc="The Interactive Flip Book project simulates the experience of flipping through a book with smooth animations and responsive design using HTML, CSS, and JavaScript. It features intuitive navigation buttons and keyboard shortcuts for seamless user interaction.(Only for desktop view)"/>
      <ProjectCard projectName='Portfolio' projectImage='/images/project-1.jpg' modalId='project4' repoUrl="https://github.com/MDAYYAN-007/MY-PORTFOLIO" projectUrl="" projectDesc="The portfolio project, built with React, highlights your work and skills through a clean, modern design. It includes sections for projects, skills, and contact information, offering a professional showcase of your accomplishments."/>
    </div>
  );
}

export default Projects;
