import React from 'react'
import { TabTitle } from '../utils/GeneralFunction'
import screen1 from '../images/screen-1.png'
import screen2 from '../images/screen-2.png'
import screen3 from '../images/screen-3.png'
import screen4 from '../images/screen-4.png'
import screen5 from '../images/screen-5.png'


const Projects = () => {
    TabTitle('Projects')
    return (
        <>
            <div className='container-item'>
                <h1 className='text-48 mt-30 wow fadeInDown primary-color'>
                    Things I've made trying to put my skills out there.
                </h1>
                <div className="row mt-16 sm:mt-20">
                    <div className='col-md-6 col-sm-12 projec-page'>
                        <div className='content-bg'>
                            <a href='https://tweetxapp.netlify.app/' target='_blank'>
                                <p className="relative z-10 relative z-10 role-title">Tweet app (MERN)</p>
                                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 role-sub-title">A Collaborative Tweeting Experience</p>
                                <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 group-hover:scale-100 group-hover:opacity-100">
                                    <div>
                                        <img src={screen3} alt="" loading="lazy" />
                                    </div>
                                    <div>
                                        <img src={screen5} alt="" loading="lazy" />
                                    </div>
                                    <div>
                                        <img src={screen4} alt="" loading="lazy" />
                                    </div>
                                    <div>
                                        <img src={screen2} alt="" loading="lazy" />
                                    </div>
                                    <div>
                                        <img src={screen1} alt="" loading="lazy" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects