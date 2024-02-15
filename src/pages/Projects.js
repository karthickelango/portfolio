import React from 'react'
import { TabTitle } from '../utils/GeneralFunction'
import logo from '../images/profile.png'
import REACT from '../images/svg/reactjs.svg'


const Projects = () => {
    TabTitle('Projects')
    return (
        <>
            <div className='container-item'>
                <h1 className='text-48 mt-30 wow fadeInDown primary-color'>
                    Things I’ve made trying to put my dent in the universe.
                </h1>
                <div className="mt-16 sm:mt-20">
                    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                        <li className="group relative flex flex-col items-start">
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <img alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="h-8 w-8" src={REACT} style={{ color: "transparent" }} />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                <a href="https://tweetxapp.netlify.app/" target='_blank'><span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span className="relative z-10">Tweet app (MERN)</span></a>
                            </h2>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">A Collaborative Tweeting Experience</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Projects