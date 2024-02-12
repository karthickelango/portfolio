import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const HireMe = () => {

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <>
            <button onClick={() => setOpen(!open)}>Hire me</button>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3  sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-start font-semibold leading-6 text-gray-900">
                                                    Welcome,
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        A computer science majored individual with practical hands-on-approach in MERN stcak. Self taught in Full Stack Develoment technologies.
                                                        A dedicated, organized person and also an excellent team worker. Keen and very willing to learn and develop new skills.
                                                        My passion is all about creating real elegant looking Applications.
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-3">
                                                        If you are searching for a reputable web developer with proven hands-on skills.
                                                        Then, you're in the right place.<b>Get in touch to discuss your needs now!</b>
                                                    </p>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li className='pt-8 '>
                                                            <a className='align-item-center group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500' href='mailto:karthik5ive@gmial.com'>
                                                                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                                                                <span className='ml-4'>karthik5ive@gmial.com</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='align-item-center group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500' href='https://www.linkedin.com/in/karthick-elango-2033a9100/' target='_blank'>
                                                                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
                                                                <span className='ml-4'>+91-9994401009</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="bg-success inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Okay
                                        </button>
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

export default HireMe