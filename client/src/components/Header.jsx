import { useState } from 'react';
import {FaBars} from 'react-icons/fa'



export default function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return(
        <header className='w-full flex justify-between items-center absolute max-auto px-10 sm:px-20 text-white'>
            {/* Main Menu */}
            <div className="flex items-center gap-2">
                <img src="/logo.png" className="size-11" alt="Logo" />
                <a href="" className="Link">
                    <span className="text-2xl font-bold font-lato">GLIDER</span>
                </a>
            </div>
            <div>
                <ul className="hidden sm:flex">
                    <li><a href="/" className="hover:text-gray-300 pr-4" >Home</a></li>
                    <li><a href="#" className="hover:text-gray-300 pr-4">About</a></li>
                    <li><a href="#" className="hover:text-gray-300 pr-4">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300 pr-4">Graduate Hub</a></li>
                    <li><a href="#" className="hover:text-gray-300 pr-4">FAQ</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
            {/* Hamburger Menu */}
            <div onClick={handleNav} className='sm:hidden z-10'>
                <FaBars size={20} className='mr-4 cursor-pointer' />
            </div>
            {/* Mobile Menu */}
            <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                <ul className="h-full w-full text-center pt-12">
                    <li className='text-2xl py-4'><a href="#" className="hover:text-gray-300" >Home</a></li>
                    <li className='text-2xl py-4'><a href="#" className="hover:text-gray-300">About</a></li>
                    <li className='text-2xl py-4'><a href="#" className="hover:text-gray-300">Services</a></li>
                    <li className='text-2xl py-4'><a href="#" className="hover:text-gray-300">Graduate Hub</a></li>
                    <li className='text-2xl py-4'><a href="#" className="hover:text-gray-300">FAQ</a></li>
                    <li className='text-2xl py-4'><a href="#" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}