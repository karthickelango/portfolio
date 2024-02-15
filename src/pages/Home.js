import React from 'react'
import image from '../images/profile_pic.jpeg'
import { TabTitle } from '../utils/GeneralFunction'
import DOM1 from '../images/svg/dom-1.svg'
import DOM2 from '../images/svg/dom-2.svg'
import HireMe from '../component/HireMe'
import COMPARE from '../images/svg/compare.svg'
import BROWSER from '../images/svg/browser.svg'
import ARROW from '../images/svg/arrow.svg'



const Home = () => {
    TabTitle('Home')
    return (
        <div className='container-item home'>
            <div className="container mt-30">
                <div className="row pb-5">
                    <div className="col">
                        <h1 className='text-48 wow fadeInDown primary-color'>
                            I’m Karthick Elango, <span className='role'>frontend developer in React & full stack in MERN.</span>
                        </h1>
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
                    <div className="col">
                        <img src={image} className='main-image' />
                        <div className='lg:pl-20'>
                            <ul>
                                <li className='pt-8 '>
                                    <a className='align-item-center group flex text-sm font-medium text-zinc-800 transition hover dark:text-zinc-200 dark' href='https://www.linkedin.com/in/karthick-elango-2033a9100/' target='_blank'>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition "><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
                                        <span className='ml-4'>Follow on LinkedIn</span>
                                    </a>
                                </li>
                                <li className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex'>
                                    <a className='align-item-center group flex text-sm font-medium text-zinc-800 transition hover dark:text-zinc-200 dark' href='mailto:karthik5ive@gmial.com'>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition "><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                        <span className='ml-4'>karthik5ive@gmial.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <p className='text-center'>
                    <HireMe />
                </p> */}
                <div className='py-5'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='primary-color react-title pb-3'>What is React?</h2>
                            <p className='secondary-color'>
                                React is an open-source, front end, JavaScript library for building user interfaces or UI components.
                                It is maintained by Facebook and a community of individual developers and companies.
                                React can be used as a base in the development of single-page or mobile applications.
                            </p>
                        </div>
                        <div className='col'>
                            <pre>
                                <code>
                                    {
                                        <>
                                            <span className='code-import'>import</span> <span className='code-blue'>React</span> <span className='code-import'>from</span> <span className='code-green'>'react'</span>
                                            <div className='mt-2'>
                                                <span className='code-blue'>const</span> <span className='code-yellow'>App</span> = <span className='code-yellow'>()</span> <span className='code-blue'>={'>'}</span> <span className='code-yellow'>{'{'}</span>
                                                <div className='ms-3'>
                                                    <span className='code-import'>return</span> <span className='code-import'>{'('}</span>
                                                    <div>
                                                        <span className='code-blue'>{`<h1>`}</span>Hello<span className='code-blue'>{`</h1>`}</span>
                                                    </div>
                                                    <span className='code-import'>{')'}</span>
                                                    <span className='code-yellow'>{'}'}</span>
                                                </div>
                                                <div className='mt-2'>
                                                    <span className='code-import'>export</span> <span className='code-import'>default</span> <span className='code-yellow'>App</span>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <h2 className='primary-color react-title pb-3 text-center'>Advantages of ReactJs</h2>
                    <ul className='q-list-item'>
                        <li>Easy to Learn, Easy to Use. Being able to do awesome things is great, but only if you don't have to spend the rest of your life becoming proficient in a new technology.</li>
                        <li>Reusable Components.</li>
                        <li>The Virtual DOM</li>
                        <li>Great Developer Tools</li>
                        <li>It's Easier to Write with JSX</li>
                    </ul>
                </div>
                <div className='py-5'>
                    <div className='row'>
                        <div className='col p-3'>
                            <pre>
                                <code>
                                    {
                                        <>
                                            <span className='code-import'>import</span> <span className='code-blue'>React</span> <span className='code-import'>from</span> <span className='code-green'>'react'</span>
                                            <div className='mt-2'>
                                                <span className='code-blue'>const</span> <span className='code-yellow'>App</span> = <span className='code-yellow'>()</span> <span className='code-blue'>={'>'}</span> <span className='code-yellow'>{'{'}</span>
                                                <div className='ms-3'>
                                                    <span className='code-import'>return</span> <span className='code-import'>{'('}</span>
                                                    <div>
                                                        <span className='code-blue'>{`<h1>`}</span>{'{'}'<span className='code-yellow'>Welcome</span> to <span className='code-blue'>React</span> world!'{'}'}<span className='code-blue'>{`</h1>`}</span>
                                                    </div>
                                                    <span className='code-import'>{')'}</span>
                                                    <span className='code-yellow'>{'}'}</span>
                                                </div>
                                                <div className='mt-2'>
                                                    <span className='code-import'>export</span> <span className='code-import'>default</span> <span className='code-yellow'>App</span>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </code>
                            </pre>
                        </div>
                        <div className='col'>
                            <h2 className='primary-color react-title py-3'>What is JSX?</h2>
                            <p className='secondary-color'>
                                JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML).
                                Basically it just provides syntactic sugar for the React.createElement() function,
                                giving us expressiveness of JavaScript along with HTML like template syntax.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <h2 className='primary-color react-title py-3 text-center'>Major features of React</h2>
                    <p className='secondary-color'>
                        <ul className='q-list-item'>
                            <li>It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.</li>
                            <li>Supports server-side rendering.</li>
                            <li>Follows Unidirectional data flow or data binding.</li>
                            <li>Uses reusable/composable UI components to develop the view.</li>
                        </ul>
                    </p>
                </div>
                <div className='py-5'>
                    <h2 className='primary-color react-title py-3 text-center'>How Virtual DOM works</h2>
                    <p className='secondary-color pt-2'>1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.</p>
                    <div className='flex justify-sb'>
                        <div style={{ width: "350px" }} className=' text-center'>
                            <p className='text-dom'>Browser</p>
                            <img src={BROWSER} className='dom-img-1' />
                        </div>
                        <div style={{ width: "100px", marginLeft: '50px', marginTop: '300px' }} className=' text-center'>
                           <img src={ARROW} className='dom-img-1' />
                        </div>
                        <div style={{ width: "400px" }} className=' text-center'>
                            <p className='text-dom'>Real DOM</p>
                            <img src={DOM2} className='dom-img-2' />
                        </div>
                    </div>
                    <p className='secondary-color pt-5'>2. Then the difference between the previous DOM representation and the new one is calculated.</p>
                    <div className='flex justify-sb'>
                        <div style={{ width: "400px" }} className=' text-center'>
                            <p className='text-dom'>Virtual DOM</p>
                            <img src={DOM1} className='dom-img-1' />
                        </div>
                        <div style={{ width: "100px", marginLeft: '50px', marginTop: '100px' }} className=' text-center'>
                            <p className='text-dom'>Compare</p>
                            <img src={COMPARE} className='dom-img-1' />
                        </div>
                        <div style={{ width: "400px" }} className=' text-center'>
                            <p className='text-dom'>Real DOM</p>
                            <img src={DOM2} className='dom-img-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home