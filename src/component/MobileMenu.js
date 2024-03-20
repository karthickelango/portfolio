import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Close from '../images/svg/close.svg'
import { NavLink } from 'react-router-dom'


const MobileMenu = () => {

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <>
            <button onClick={() => setOpen(!open)} className='dis-web-none mobile-menu-btn'>Menu</button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mobile-model">
                                    <div className="bg-white px-4 pb-4">
                                        <button
                                            type="button"
                                            className="bg-success close-btn flex w-full justify-end rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        ><img src={Close} /></button>
                                        <div className="sm:flex sm:items-start mt-5">
                                            <div className="mt-3">
                                                <div className="mt-2">
                                                    <ul className="mobile-menu">
                                                        <NavLink to="/qualification" className="nav-item" onClick={() => setOpen(false)}>
                                                            <span className="nav-link">Qualification</span>
                                                        </NavLink>
                                                        <NavLink to="/skills" className="nav-item" onClick={() => setOpen(false)}>
                                                            <span className="nav-link">Skills</span>
                                                        </NavLink>
                                                        <NavLink to="/projects" className="nav-item" onClick={() => setOpen(false)}>
                                                            <span className="nav-link">Projects</span>
                                                        </NavLink>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default MobileMenu