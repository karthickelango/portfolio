import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="container-fluid footer border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40s mt-20">
            <ul>
                <NavLink to="/" className="footer-item">
                    <span className="footer-link">Home</span>
                </NavLink>
                <NavLink to="/about" className="footer-item">
                    <span className="footer-link">About</span>
                </NavLink>
                <NavLink to="/qualification" className="footer-item">
                    <span className="footer-link">Qualification</span>
                </NavLink>
                <NavLink to="/skills" className="footer-item">
                    <span className="footer-link">Skills</span>
                </NavLink>
                <NavLink to="/projects" className="footer-item">
                    <span className="footer-link">Projects</span>
                </NavLink>
            </ul>
            <p className="footer-brand text-sm text-zinc-400 dark:text-zinc-500">
                © {year} Karthick Elango. All rights reserved.
            </p>
        </div>
    )
}

export default Footer