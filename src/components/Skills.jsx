import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactjs from '../assets/react.png'
import nodejs from '../assets/node.png'
import mongo from '../assets/mongo.png'
import firebaseDB from '../assets/firebase.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
        <p className='py-4'>// These are the technologies I've worked with</p>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt="html icon" />
                <p className='my-4'>html</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt="css icon" />
                <p className='my-4'>css</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt="javascript icon" />
                <p className='my-4'>javascript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt="tailwind icon" />
                <p className='my-4'>tailwind</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mongo} alt="mongo icon" />
                <p className='my-4'>mongo</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={firebaseDB} alt="firebaseDB icon" />
                <p className='my-4'>firebaseDB</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt="github icon" />
                <p className='my-4'>github</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={reactjs} alt="reactjs icon" />
                <p className='my-4'>reactjs</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={nodejs} alt="nodejs icon" />
                <p className='my-4'>nodejs</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
