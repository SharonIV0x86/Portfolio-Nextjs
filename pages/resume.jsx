import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Anirudh | Resume</title>
        <meta
          name='description'
          content='I’m a Web Developer and Software Developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center text-[#E2DFD2]'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Anirudh Lakhanpal</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/anirudh-lakhanpal-0a7138284/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/SharonIV0X86'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p className='text-[#E2DFD2]'>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className='text-[#E2DFD2] font-bold'>
          Analytical, innovative, and motivated web developer
          with experience in designing medium scale softwares, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center text-[#E2DFD2] underline text-[18px] py-2'>Skills</h5>
          <p className='py-2 text-[#E2DFD2]'>
            <span className='font-extrabold'>Technical Skills</span>
            <span className='px-2 font-bold'>|</span>Front-End Web Developer
            <span className='px-2 font-bold'>|</span> C/C++
            <span className='px-2 font-bold'>|</span> HTML
            <span className='px-2 font-bold'>|</span>CSS
            <span className='px-2 font-bold'>|</span>Javascript
            <span className='px-2 font-bold'>|</span>React
            <span className='px-2 font-bold'>|</span>Next JS
            <span className='px-2 font-bold'>|</span>SQL
            <span className='px-2 font-bold'>|</span>Redux
            <span className='px-2 font-bold'>|</span>Tailwind
            <span className='px-2 font-bold'>|</span> Firebase
            <span className='px-2 font-bold'>|</span> RESTAPI
            <span className='px-2 font-bold'>|</span> MongoDB
            <span className='px-2 font-bold'>|</span> Supabase
            <span className='px-2 font-bold'>|</span> Radare2
            <span className='px-2 font-bold'>|</span> Linux
            <span className='px-2 font-bold'>|</span> Assembly x64
          </p>
        </div>
        <h5 className='text-center underline text-[18px] py-4 text-[#E2DFD2]'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic text-[#E2DFD2]'>
          <span className='font-bold'>School House Prefect | 2022-2023  </span>
          <br />
          <span className='font-bold'>Indian Institute of Technology | Mandi </span>
            {/* <span className='px-2'>|</span>Sherman, TX */}
          </p>
          <p className='py-1 italic text-[#E2DFD2] font-bold'>PRAYAS 1.0 Summer Camp on Robotics and Artificial Intelligence 2022 </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed text-[#E2DFD2] font-semibold'>
          <li>
              Showed exceptional performance throughout the summer camp and stood #1 among 100 participants.
            </li>
            <li>
              Built a Obstacle detection robot model.
            </li>
            <li>
              Developed a line following prototype.
            </li>
            <li>
              Wrote intensive and Fail safe arduino based code.
            </li>
            <li>
              Learnt about neural networks and regression techniques for training and building of neural network.
            </li>
            <li>
               Learnt a lot about hardware and circuits, and different sensors and interfacing them with arduino.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
