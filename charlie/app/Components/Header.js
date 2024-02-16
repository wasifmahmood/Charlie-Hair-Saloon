"use client"
import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { HeaderDrawer } from './HeaderDrawer';
import icon from '../../assests/image/icon.jpg';
import Login from './Login';
import BookNow from './Booknow';



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
            <div className='middle place-content-evenly text-white pt-2 d-flex'>
                <h6>CHARLIE HAIR SALOON</h6>
                <img src='icon'
                    style={{
                        backgroundImage: `url(${icon})`,
                        backgroundSize:"cover",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        // height: '500px',
                    }}
                />
            </div>
            <div className='right space-x-4 text-white '>
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


