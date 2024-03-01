import React from 'react'
import { TabTitle } from '../utils/GeneralFunction'
import HTML from '../images/svg/html.svg'
import CSS from '../images/svg/css.svg'
import ANGULAR from '../images/svg/angular.svg'
import REACT from '../images/svg/reactjs.svg'
import REDUX from '../images/svg/redux.svg'
import NODE from '../images/svg/nodejs.svg'
import JAVASCRIPT from '../images/svg/javascript.svg'
import SCSS from '../images/svg/scss.svg'
import VISUAL from '../images/svg/visual.svg'
import PYCHARM from '../images/svg/pycharm.svg'
import POSTMAN from '../images/svg/postman.svg'
import FIGMA from '../images/svg/figma.svg'
import BOOTSTRAP from '../images/svg/bootstrap.svg'
import TAILWIND from '../images/svg/tailwind.svg'
import MUI from '../images/svg/mui.svg'
import MOBD from '../images/svg/mongodb.svg'
import GIT from '../images/svg/github.svg'
import JIRA from '../images/svg/jira.svg'

const Skills = () => {
    TabTitle('Skills')
    const frontend = [
        { id: 1, title: 'HTML', src: HTML },
        { id: 2, title: 'CSS', src: CSS },
        { id: 3, title: 'Javascript', src: JAVASCRIPT },
        { id: 4, title: 'Angular', src: ANGULAR },
        { id: 5, title: 'React', src: REACT },
        { id: 6, title: 'Redux', src: REDUX },
        { id: 7, title: 'Nodejs', src: NODE },
        { id: 8, title: 'SCSS', src: SCSS },

    ]
    const tools = [
        { id: 1, title: 'Visual Studio', src: VISUAL },
        { id: 2, title: 'Pycharm', src: PYCHARM },
        { id: 3, title: 'Postman', src: POSTMAN },
        { id: 4, title: 'Figma', src: FIGMA },
        { id: 5, title: 'Github', src: GIT },
        { id: 6, title: 'Jira', src: JIRA }

    ]
    const DB = [
        { id: 1, title: 'MongoBD', src: MOBD }
    ]
    const Framework = [
        { id: 1, title: 'Bootstrap', src: BOOTSTRAP },
        { id: 2, title: 'Tailwind', src: TAILWIND },
        { id: 3, title: 'Mui', src: MUI },
    ]
    return (
        <>
            <div className='container-item text-center'>
                <div className='p-20 '>
                    <p className='main-title'>
                        Web Technologies
                    </p>
                    <ul className='frontend-icon'>
                        {
                            frontend.map(obj => (
                                <li key={obj.id}>
                                    <img src={obj.src} />
                                    <p className='title'>{obj.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='p-20  border-t border-zinc-100 dark:border-zinc-700/40s'>
                    <p className='main-title'>
                        Tools
                    </p>
                    <ul className='frontend-icon'>
                        {
                            tools.map(obj => (
                                <li key={obj.id}>
                                    <img src={obj.src} />
                                    <p className='title'>{obj.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='p-20 border-t border-zinc-100 dark:border-zinc-700/40s'>
                    <p className='main-title'>
                        FrameWorks
                    </p>
                    <ul className='frontend-icon'>
                        {
                            Framework.map(obj => (
                                <li key={obj.id}>
                                    <img src={obj.src} />
                                    <p className='title'>{obj.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='p-20 border-t border-zinc-100 dark:border-zinc-700/40s'>
                    <p className='main-title'>
                        Database
                    </p>
                    <ul className='frontend-icon'>
                        {
                            DB.map(obj => (
                                <li key={obj.id}>
                                    <img src={obj.src} />
                                    <p className='title'>{obj.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills