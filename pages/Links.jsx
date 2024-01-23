import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';
import {FaInstagram, FaLinkedin } from 'react-icons/fa';
import kaggleImage from '../public/assets/skills/kaggle.png'
import { useState } from 'react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import tryhackme from '../public/assets/skills/tryHackMe.png'
const Links = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const accordionData = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  return (
    <>
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <div className='max-w-full mx-auto mt-8'>


          <div className='mb-2 bg-white rounded shadow-md overflow-hidden'>
            <div
              className='flex items-center justify-between p-4 cursor-pointer'
              onClick={() => toggleAccordion(0)}
            >
              {/* <FaKaggle /> */}
              <Image src={kaggleImage} width={20} height={20} className='rounded-full'></Image>
              <h2 className='text-lg font-semibold'>Kaggle</h2>
              <span className='text-white-600'>{isOpen === 0 ? '▲' : '▼'}</span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${isOpen === 0 ? 'max-h-40' : 'max-h-0'
                }`}
            >
              <div className='p-4 border-t'>
                <p className='hover:font-extrabold hover:text-gray-600 duration-300 text-black text-center'>
                  <Link href={'https://www.kaggle.com/anirudhlakhanpal/code'} className='p-4 border-t hover:font-extrabold hover:text-gray-600 duration-300'>Kaggle</Link>
                </p>
              </div>
            </div>
          </div>


          <div className='mb-2 bg-white rounded shadow-md overflow-hidden'>
            <div
              className='flex items-center justify-between p-4 cursor-pointer'
              onClick={() => toggleAccordion(1)}
            >
              <Image src={tryhackme} width={25} height={25} className='rounded-full'></Image>
              <h2 className='text-lg font-semibold'>Try Hack Me</h2>
              <span className='text-white-600'>{isOpen === 1 ? '▲' : '▼'}</span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${isOpen === 1 ? 'max-h-40' : 'max-h-0'
                }`}
            >
              <div className='p-4 border-t'>
                <p className='hover:font-extrabold hover:text-gray-600 duration-300 text-black text-center'>
                  <Link href={'https://tryhackme.com/p/SharonIV'}>TryHackMe</Link>
                </p>
              </div>
            </div>
          </div>


          <div className='mb-2 bg-white rounded shadow-md overflow-hidden'>
            <div
              className='flex items-center justify-between p-4 cursor-pointer'
              onClick={() => toggleAccordion(2)}
            >
              <FaGithub />
              <h2 className='text-lg font-semibold'>Github</h2>
              <span className='text-white-600'>{isOpen === 2 ? '▲' : '▼'}</span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${isOpen === 2 ? 'max-h-40' : 'max-h-0'
                }`}
            >
              <div className='p-4 border-t '>
                <p className='hover:font-extrabold hover:text-gray-600 duration-300 text-black text-center'>
                  <Link href='https://www.github.com/SahronIV0X86' >
                    <a>GitHub</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>


          <div className='mb-2 bg-white rounded shadow-md overflow-hidden'>
            <div
              className='flex items-center justify-between p-4 cursor-pointer'
              onClick={() => toggleAccordion(3)}
            >
              <FaDiscord />
              {/* <Image src={tryhackme} width={25} height={25} className='rounded-full'></Image> */}
              <h2 className='text-lg font-semibold'>Discord</h2>
              <span className='text-white-600'>{isOpen === 3 ? '▲' : '▼'}</span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${isOpen === 3 ? 'max-h-40' : 'max-h-0'
                }`}
            >
              <div className='p-4 border-t'>
                <p className='hover:font-extrabold hover:text-gray-600 duration-300 text-black text-center'>
                  <Link href={''}>Username: jasperbrue</Link>
                </p>
              </div>
            </div>
          </div>

              
          <div className='mb-2 bg-white rounded shadow-md overflow-hidden'>
            <div
              className='flex items-center justify-between p-4 cursor-pointer'
              onClick={() => toggleAccordion(4)}
            >
              <FaLinkedin />
              {/* <Image src={tryhackme} width={25} height={25} className='rounded-full'></Image> */}
              <h2 className='text-lg font-semibold'>Linkedin</h2>
              <span className='text-white-600'>{isOpen === 4 ? '▲' : '▼'}</span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ${isOpen === 4 ? 'max-h-40' : 'max-h-0'
                }`}
            >
              <div className='p-4 border-t'>
                <p className='hover:font-extrabold hover:text-gray-600 duration-300 text-black text-center'>
                  <Link href={'https://www.linkedin.com/in/anirudh-lakhanpal-0a7138284/'}>Linkedin</Link>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};
export default Links;
