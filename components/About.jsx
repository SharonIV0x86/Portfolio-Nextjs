import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase font-bold text-xl tracking-widest text-[#5651e5] rounded-r-3xl bg-white inline px-5 py-4'>
            About
          </p>
          <br />
          <h2 className='py-4 px-5 inline-block bg-white rounded-r-3xl'> Who I Am </h2>
          <p className='py-2 font-bold text-white text-3xl backdrop-blur-xl rounded-sm'>
            Deeply immersed in Machine Learning and Deep Learning,
            with a strong passion for coding in Python. My journey involves
            delving into Reverse Engineering, specializing in Windows and Linux binaries.
            I thrive on the intricacies of Low-Level Learning using C and C++.
            Excited to contribute my skills to innovative projects and collaborate with like-minded individuals.

            {/* <p className='py-2 text-white text-lg backdrop-blur-xl rounded-sm'> */}
            My initial interest was in Cyber Security and Penetration Testing.
            I started my journey by learning programming in 2020. Since then
            i started working on expanding my knowledge in different fields.
          </p>
          <Link href='https://www.github.com/SharonIV0X86'>
            <a target='_blank' >
              <p className='py-2 text-white text-lg underline cursor-pointer'>
                Check out some of my projects on Github.
              </p>
            </a>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
