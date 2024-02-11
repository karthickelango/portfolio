import React from 'react'
import image from '../images/profile_pic.jpeg'
import { TabTitle } from '../utils/GeneralFunctionn'


const Home = () => {
  TabTitle('Home')
  return (
    <div className='container-item home'>
      <div class="container mt-30">
        <div class="row">
          <div class="col">
            <h1 className='text-48'>
              I’m Karthick Elango. I am frontend developer in React & full stack in MERN.
            </h1>
            <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
                As a seasoned frontend engineer, I bring a robust skill set in web development,
                specializing in Angular, React, JavaScript, MERN stack (MongoDB, Express.js, React.js, Node.js), Bootstrap,
                and Tailwind CSS. With extensive experience in crafting dynamic and responsive user interfaces,
                I thrive on translating design concepts into seamless and intuitive digital experiences.
              </p>
              <p>
                My proficiency in Angular and React enables me to architect scalable and maintainable frontend solutions,
                while my expertise in JavaScript empowers me to implement complex functionalities with efficiency and precision.
              </p>
              <p>
                Moreover, my adeptness in utilizing Bootstrap and Tailwind CSS ensures that my designs are not only visually appealing
                but also optimized for performance across various devices and screen sizes. Combining these skills,
                I am equipped to tackle diverse frontend challenges and deliver high-quality solutions that exceed expectations.
              </p>
            </div>
          </div>
          <div class="col">
            <img src={image} className='main-image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home