"use client"
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HeaderDrawer } from './HeaderDrawer';
import Login from './Login';


const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='headermain d-flex justify-between p-3 px-4 bg-black '>
            <div className='left d-flex justify-space-between text-white pt-2 '>
                <HiOutlineMenu size={25} onClick={toggleDrawer} />
            </div>
            <div className='middle place-content-evenly text-white pt-2'>
                <h6>CHARLIE HAIR SALOON</h6>
            </div>
            <div className='right space-x-4 text-white '>
                <button>
                    <Login />
                </button>
                <button>BookNow</button>
            </div>
            <HeaderDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </div>
    )
}

export default Header


