import { React, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import image from '../images/profile_pic.jpeg'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <Link to='/' className='profile-link'>
                        <img src={image} className='profile-pic'/>
                    </Link>
                    <ul className="nav justify-content-center nav-center">
                        <NavLink to="/" className="nav-item">
                            <span className="nav-link">About</span>
                        </NavLink>
                        <NavLink to="/qualification" className="nav-item">
                            <span className="nav-link">Qualification</span>
                        </NavLink>
                        <NavLink to="/skills" className="nav-item">
                            <span className="nav-link">Skills</span>
                        </NavLink>
                        <NavLink to="/projects" className="nav-item">
                            <span className="nav-link">Projects</span>
                        </NavLink>
                    </ul>
                    <span className="navbar-brand mb-0 h1"></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar