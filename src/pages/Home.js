import React from 'react'
import image from '../images/profile_pic.jpeg'
import { TabTitle } from '../utils/GeneralFunction'
import socialIcon from '../images/linkedin.svg'
import HireMe from '../component/HireMe'



const Home = () => {
  TabTitle('Home')
  return (
    <div className='container-item home'>
      <div class="container mt-30">
        <div class="row">
          <div class="col">
            <h1 className='text-48 wow fadeInDown primary-color'>
              I’m Karthick Elango, <span className='role'>frontend developer in React & full stack in MERN.</span>
            </h1>
            <HireMe />
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p className='secondary-color'>
                As a seasoned frontend engineer, I bring a robust skill set in web development,
                specializing in Angular, React, JavaScript, MERN stack (MongoDB, Express.js, React.js, Node.js), Bootstrap,
                and Tailwind CSS. With extensive experience in crafting dynamic and responsive user interfaces,
                I thrive on translating design concepts into seamless and intuitive digital experiences.
              </p>
              <p className='secondary-color'>
                My proficiency in Angular and React enables me to architect scalable and maintainable frontend solutions,
                while my expertise in JavaScript empowers me to implement complex functionalities with efficiency and precision.
              </p>
              <p className='secondary-color'>
                Moreover, my adeptness in utilizing Bootstrap and Tailwind CSS ensures that my designs are not only visually appealing
                but also optimized for performance across various devices and screen sizes. Combining these skills,
                I am equipped to tackle diverse frontend challenges and deliver high-quality solutions that exceed expectations.
              </p>
            </div>
          </div>
          <div class="col">
            <img src={image} className='main-image' />
            <div className='lg:pl-20'>
              <ul>
                <li className='pt-8 '>
                  <a className='align-item-center group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500' href='https://www.linkedin.com/in/karthick-elango-2033a9100/' target='_blank'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
                    <span className='ml-4'>Follow on LinkedIn</span>
                  </a>
                </li>
                <li className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex'>
                  <a className='align-item-center group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500' href='mailto:karthik5ive@gmial.com'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                    <span className='ml-4'>karthik5ive@gmial.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home