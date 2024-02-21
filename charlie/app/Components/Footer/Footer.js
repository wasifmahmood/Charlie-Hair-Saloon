import React from 'react'
import './Footer.css'
import Image from 'next/image';
import footer from "../../../assests/image/footer.jpg"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='footer d-flex '>
                <div className='footerleft'>
                    <Image src={footer} />
                </div>
                <div className='footerright px-24 pt-16'>
                    <p className='footertext'>Stay in touch</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='inputfield d-flex gap-8 pt-2'>
                            <TextField id="standard-basic" label="First Name" variant="standard" />
                            <TextField id="standard-basic" label="Last Name" variant="standard" />
                        </div>
                        <div className='inputfield d-flex gap-8 pt-4'>
                            <TextField id="standard-basic" label="Your Email *" variant="standard" />
                            <TextField id="standard-basic" label="Favorite Location *" variant="standard" />
                            <button className='btn btn-danger btn-lg bg-red-600 p-2 text-white '>Submit</button>
                        </div>
                        <div className='p-12 d-flex gap-16 text-center'>
                            <div>
                                <p>Time for a Haircut?</p>
                                <p className='text-red-600'>Our Services</p>
                                <p className='text-red-600'>Location</p>
                            </div>
                            <div>
                                <p>Looking for More?</p>
                                <p className='text-red-600'>About Us</p>
                                <p className='text-red-600'>Contact Us</p>
                                <p></p>
                            </div>
                        </div>
                        <div className='d-flex gap-4 justify-content-center text-red-600'>
                            <FaFacebookF size={25} />
                            <FaInstagram size={25} />
                            <FaSquareWhatsapp size={25} />
                        </div>
                    </Box>
                </div>
            </div>
            <div className='p-2 bg-slate-600 text-white px-2 d-flex justify-content-between'>
                <p >© 2024 Hair Saloon</p>
                <p >Our services are available to all members of the public regardless of race, gender or sexual orientation.</p>
                <p >Website By Wasif Mahmood</p>
            </div>
        </div>
    )
}

export default Footer