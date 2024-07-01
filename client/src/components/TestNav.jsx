


export default function TestNav() {
    return(
        <header className="absolute top-0 w-full lg:px-10 shadow-xl z-30">
            <div className="lg:flex items-center justify-between mt-3">
                <div className="flex justify-center pb-2 lg:justify-normal space-x-4">
                <a className="flex items-center gap-2" href="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 lg:size-4 fill-white">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <span className="text-sm lg:text-[16px] font-[playfair] text-[#f6f6f6]">info@glider.com.na</span>
                    </a>
                    <a className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 lg:size-4 fill-white">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm lg:text-[16px] font-[playfair] text-[#f6f6f6]">+264 000 000</span>
                    </a>
                </div>
                <div>
                    <div className="flex justify-center gap-6 lg:justify-normal items-center">
                        {/* <!-- Twitter --> */}
                        <a href="" className="LINK">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 sm:h-4 w-4 fill-[#f6f6f6] transition-all ease-in-out hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                            </a>
                            {/* <!-- Facebook --> */}
                            <a href="" className="LINK">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 sm:h-4 w-4 fill-[#f6f6f6] transition-all ease-in-out hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                            </a>
                            {/* <!-- Linkedin --> */}
                            <a href="" className="LINK">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 sm:h-4 w-4 fill-[#f6f6f6] transition-all ease-in-out hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                            </a>
                            {/* <!-- Instagram --> */}
                            <a href="" className="LINK">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 sm:h-4 w-4 fill-[#f6f6f6] transition-all ease-in-out hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <hr
                className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-25 dark:opacity-100"/>
            <div className="sm:flex w-full items-center lg:justify-between">
                <div className="">
                    <a href="/home" className="flex items-center justify-center gap-2 lg:justify-normal">
                        <img src="/img/logo.png" className="size-11" alt="Logo" />
                        <span className="font-[roboto slap] font-bold text-2xl text-[#f6f6f6]">GLIDER</span>
                    </a>
                </div>
                <div>
                    <ul className="hidden sm:flex text-[#f6f6f6] text-[15px]">
                        <li><a href="/home" className="hover:text-[#c0c0c0] pr-4 uppercase" >Home</a></li>
                        <li><a href="/about" className="hover:text-[#c0c0c0] pr-4 uppercase">About</a></li>
                        <li><a href="/services" className="hover:text-[#c0c0c0] pr-4 uppercase">Services</a></li>
                        <li><a href="/btools" className="hover:text-[#c0c0c0] pr-4 uppercase">Business Tools</a></li>
                        <li><a href="/faq" className="hover:text-[#c0c0c0] pr-4 uppercase">FAQ</a></li>
                        <li><a href="/contact" className="hover:text-[#c0c0c0] uppercase">Contact</a></li>
                    </ul>
                </div>
                {/* Mobile Nav Section */}
                <nav className="mnav bg-primary fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20">
                    <div className="mnav__close-btn bg-primbtn w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mnav__close-btn-icon size-4 fill-[#f6f6f6]">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="px-12 flex flex-col gap-y-12 h-full">
                        <a className="flex items-center gap-2 justify-center" href="/home">
                            <img src="/img/logo.png" className="size-11" alt="Logo" />
                            <span className="font-[playfair] font-bold text-2xl text-[#f6f6f6]">GLIDER</span>
                        </a>
                        <ul className="flex flex-col gap-y-5">
                            <li>
                                <a href="/home" className="text-[#f6f6f6] hover:text-[#c0c0c0] transition-all duration-300">HOME</a>
                            </li>
                            <li>
                                <a href="/about" className="text-[#f6f6f6] hover:text-[#c0c0c0] transition-all duration-300">ABOUT</a>
                            </li>
                            <li>
                                <a href="/services" className="text-[#f6f6f6] hover:text-[#c0c0c0] transition-all duration-300">SERVICES</a>
                            </li>
                            <li>
                                <a href="/btools" className="text-[#f6f6f6] hover:text-[#c0c0c0] transition-all duration-300">BUSINESS TOOLS</a>
                            </li>
                            <li>
                                <a href="/faq" className="text-[#f6f6f6] hover:text-[#c0c0c0] transition-all duration-300">FAQ</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-[#f6f6f6] hover:text-[#c0c0c0] transition-all duration-300">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}