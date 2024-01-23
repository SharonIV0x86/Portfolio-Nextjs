import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  let disabled = false;
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl font-bold tracking-widest uppercase text-[#5651e5] py-4 px-5 inline-block bg-white rounded-r-3xl'>
          Contact
        </p>
        <br />
        <h2 className='py-4 px-5 inline-block bg-white rounded-r-3xl'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='font-bold py-4 px-5 inline-block bg-white rounded-r-3xl'>Anirudh Lakhanpal</h2>
                <p className='px-2 py-1 inline-block text-[#5651e5] bg-white rounded-r-3xl'>Web Developer <span className='font-extrabold'>|</span> Software Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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
                  <a 
                  href=""
                  target='_blank'
                  rel='noreferrer'>
                  <div className='bg-white rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#DA70D6]'>
                    <AiFillInstagram />
                  </div>
                  </a>
                  <Link href='/resume'>
                    <a>
                    <div className='bg-white rounded-full shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-[#DA70D6]'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action=''
                method='POST'
                encType='multipart/form-data'
              >
                {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'> commented out because phone field is also disabled*/} 
                {/* <div className='grid md:grid-cols-2 w-full py-2'> */}
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-white font-bold'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      placeholder='Enter Your Name'
                      name='name'
                    />
                  </div>
                  {/* <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div> */}
                {/* </div> */}
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-white font-bold'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    placeholder='Enter your email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-white font-bold'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    placeholder='Specify a subject'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-white font-bold'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    placeholder='Enter your message'
                    name='message'
                  ></textarea>
                </div>
                <button className={`w-full p-4 text-white-100 mt-4 hover:bg-blue-800 focus:ring-2 ring-white hover:border-white hover:border-bold ${disabled ? 'cursor-not-allowed' : ''}`}
                disabled={disabled}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white hover:bg-[#DA70D6]'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
