import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom';
import Carousel from './Carousel';

const NavMenu = () => {
    const loc = useLocation();
    // useEffect(() => {
    //     // console.log(loc);
    // }, [loc])

    return (
        <>
            <NavLink className={` hover:text-orange-400 text-xl ${loc.pathname == "/" ? "text-orange-400 md:underline  underline-offset-[10px] xsm:no-underline" : ""} `} to="/">Home</NavLink>
            <NavLink className={` hover:text-orange-400 text-xl ${loc.pathname == "/about" ? "text-orange-400 md:underline  underline-offset-[10px] xsm:no-underline" : ""} `} to="/about">About</NavLink>
            <NavLink className={` hover:text-orange-400 text-xl ${loc.pathname == "/contact" ? "text-orange-400 md:underline  underline-offset-[10px] xsm:no-underline" : ""} `} to="/contact">Contact</NavLink>


        </>
    )
}


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className='w-full /12 h-12 bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center fixed top-0 z-10'>
            <nav className='w-10/12 h-12 flex items-center justify-between'>
                <p className='text-white font-sans text-2xl font-semibold'>Gynoveda</p>
                <ul className='hidden md:flex text-xl space-x-5 text-white'>
                    <NavMenu />
                </ul>
                <div className='md:hidden lg:hidden'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex w-full absolute items-center flex-col space-y-4 md:hidden xsm:no-underline bg-black text-white pb-5 top-12 opacity-60  z-20 pt-5">
                    <NavMenu />
                </div>
            )}
        </div>
        
        </>
    )
}

export default Navbar
