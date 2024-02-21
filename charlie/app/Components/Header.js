"use client"
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HeaderDrawer } from './HeaderDrawer';
import Login from './Login';
import BookNow from './Booknow';
import charlie from '../../assests/image/charlie.jpg'
import Image from 'next/image';


const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='headermain d-flex justify-between p-3 px-4 bg-black '>
            <div className='headerleft d-flex justify-space-between text-white pt-2 '>
                <HiOutlineMenu size={25} onClick={toggleDrawer} />
            </div>
            <div className='headermiddle text-white pt-2 d-flex'>
                <h6>CHARLIE HAIR SALOON</h6>
                <Image
                    src={charlie}
                    alt="wasif"
                    objectfit="cover"
                    style={{ width: '30px', height: '30px' }}
                />
            </div>
            <div className='headerright space-x-4 text-white '>
                <button>
                    <Login />
                </button>
                <button>
                    <BookNow />
                </button>
            </div>
            <HeaderDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </div>
    )
}

export default Header
