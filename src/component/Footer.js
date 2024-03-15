import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div className=' border-t border-zinc-100 pt-10 dark:border-zinc-700/40s mt-20'>
                <div className="container-fluid footer">
                    <ul>
                        <a className='d-inline-block px-4 pt-2 group text-sm font-medium text-zinc-800 transition hover dark:text-zinc-200 dark' href='https://www.linkedin.com/in/karthick-elango-2033a9100/' target='_blank'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition "><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
                        </a>
                        <a className='d-inline-block pt-2 group text-sm font-medium text-zinc-800 transition hoverdark:text-zinc-200 dark' href='https://mail.google.com/mail/?view=cm&fs=1&to=karthik5ive@gmial.com' target='_blank'>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition "><path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                        </a>
                    </ul>
                    <p className="footer-brand text-sm text-zinc-400 dark:text-zinc-500 text-center pt-10 pb-5">
                        © {year} Karthick Elango. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
