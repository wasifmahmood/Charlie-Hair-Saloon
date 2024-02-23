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
                <div className='footerleft w-full h-full'>
                    <Image src={footer} />
                </div>
                <div className='footerright px-24 pt-16 '>
                    <p className='footertext'>Stay in touch</p>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='inputfield d-flex gap-16 pt-2'>
                            <TextField id="First-Name" label="First Name" variant="standard" />
                            <TextField id="Last-Name" label="Last Name" variant="standard" />
                        </div>
                        <div className='inputfield d-flex gap-16 pt-4 pb-4'>
                            <TextField id="Your-Email" label="Your Email *" variant="standard" />
                            <TextField id="Location" label="Favorite Location *" variant="standard" />
                        </div>
                        <button className='btn btn-danger  pt-2 text-white w-9/12'>Submit</button>
                        <div className='p-8 d-flex gap-16 text-center text-red-600'>
                            <div>
                                <p className='text-black'>Time for a Haircut?</p>
                                <p>Our Services</p>
                                <p>Location</p>
                            </div>
                            <div>
                                <p className='text-black'>Looking for More?</p>
                                <p>About Us</p>
                                <p>Contact Us</p>
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