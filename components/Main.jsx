import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-lg tracking-widest text-white font-medium'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-white opacity-0 animate-fade-in'>
            Hi, I'm <span className='text-[#DA70D6]'>Anirudh</span>
          </h1>
          <h1 className='py-2 text-white'>A Web Developer and Software Developer</h1>
          <p className='py-4 text-white sm:max-w-[70%] m-auto text-xl font-semibold'>
          I'm a passionate Web and Software Developer dedicated to crafting innovative solutions. My expertise lies in developing robust software and backend web applications. Let's build something extraordinary together!          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/anirudh-lakhanpal-0a7138284/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-white rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#DA70D6]'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/SharonIV0X86'
              target='_blank'
              rel='noreferrer'
            >
              <div className='bg-white rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#DA70D6]'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='bg-white rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#DA70D6]'>
                <FaInstagram />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='bg-white rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#DA70D6]'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
