import React from 'react'
import './Service.css'
import Link from 'next/link';
import Location from "../Location/Location";
import Image from 'next/image';
import services from "../../../assests/image/services.jpg";
import brush from "../../../assests/image/brush.png"
import Razor from "../../../assests/image/Razor.png";
import brushBW from "../../../assests/image/brushBW.png";
import specical from "../../../assests/image/specical.jpg"
import appoint from "../../../assests/image/appoint.jpg"
import { TiTickOutline } from "react-icons/ti";

const Service = () => {
    return (
        <div>
            <div className='service-home'>
                <div className='service d-flex bg-right-top  text-white'>
                    <div className='service-left w-1/2  text-wrap p-16'>
                        <p className='sev-Text'>The Extras Are <br /> On The House</p>
                        <span className='sev-heading'>Services</span>
                        <p className='sev-para'>Hair Salon believes MEN DESERVE BETTER® and that’s why our experience includes:</p>
                        <span className='sev-point'>
                            <ul>
                                <li>- Complimentary beverage</li>
                                <li>- Perfect haircut</li>
                                <li>- Relaxing shampoo</li>
                                <li>- Hot towel and mint</li>
                                <li>- Complimentary shoeshine</li>
                            </ul>
                        </span>
                    </div>
                    <div className='service-right w-1/2 '>
                        <Image
                            src={services}
                            // layout="fill" 
                            objectFit="cover"
                            alt="Services Image"
                        />
                    </div>
                </div>
            </div>
            <div className='service-menu text-center bg-white pt-4'>
                <h1 className='menu-main-heading'>SERVICES MENU</h1>
                <div className='service-menu-cutting d-flex p-20 space-x-4 text-center'>
                    <div className='menu-left'>
                        <p className='menu-heading'>CLASSIC</p>
                        <p className='menu-detail'>Includes on-the-house amenities and a perfect haircut</p>
                        <p className='menu-heading pt-4'>PREMIUM</p>
                        <p className='menu-detail'>The Classic plus a therapeutic scalp massage</p>
                        <p className='menu-heading pt-4'>EXECUTIVE</p>
                        <p className='menu-detail'>The Premium plus a neck shave, an extended therapeutic scalp massage, and an extended stress-relieving neck and shoulder massage</p>
                    </div>
                    <div className='menu-middle pt-8'>
                        <Image
                            src={brush}
                        />
                    </div>
                    <div className='menu-right '>
                        <p className='menu-heading'>JR. MEN'S</p>
                        <p className='menu-detail'>Includes on-the-house amenities (minus the shampoo) and a perfect haircut for the young men 18 and under</p>
                        <p className='menu-heading pt-4'>STRESS RELIEF</p>
                        <p className='menu-detail'>Includes on-the-house amenities, tighten the edges, neck shave, therapeutic scalp massage, relaxing shampoo and conditioner, stress-relieving neck and shoulder massage</p>
                    </div>
                </div>
                <div className='service-menu-Shave d-flex p-20  text-center'>
                    <div className='menu-left-shave '>
                        <p className='menu-heading '>FACE or HEAD SHAVE</p>
                        <p className='menu-detail'>Includes on-the-house amenities, consultation, hot towel treatment, pre-shave oil application, Saloon shave cream application, razor shave and after-shave balm ﬁnish</p>
                    </div>
                    <div className='menu-middle-Shave p-4'>
                        <Image
                            src={Razor}
                            style={{ height: "30vh" }}
                        />
                    </div>
                    <div className='menu-right-shave'>
                        <p className='menu-heading'>STRAIGHT RAZOR BEARD LINING</p>
                        <p className='menu-detail'>Includes on-the-house amenities, consultation, hot towel treatment, pre-shave oil application, Saloon shave cream application, razor shave and after-shave balm finish</p>
                    </div>
                </div>
                <div className='service-menu-Trim d-flex p-16  '>
                    <div className='menu-left-Trim'>
                        <p className='menu-heading'>NECK SHAVE</p>
                        <p className='menu-detail'>with Classic or Premium service</p>
                        <p className='menu-heading pt-4'>GOATEE TRIM</p>
                        <p className='menu-heading pt-2'>BEARD TRIM</p>
                    </div>
                    <div className='menu-middle-Trim p-10'>
                        <Image src={brushBW} />
                    </div>
                    <div className='menu-right-Trim'>
                        <p className='menu-heading'>CAMO</p>
                        <p className='menu-detail'>Camouﬂage the gray by Redken®</p>
                        <p className='menu-heading pt-5'>SCALP RENEW</p>
                        <p className='menu-detail'>by Ahsan®</p>
                    </div>
                </div>
            </div>

            <div className='Specical d-flex bg-gray-200'>
                <div className='specical-menu-left'>
                    <Image
                        src={specical}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className='specical-menu-right p-16'>
                    <h1 className='specical-heading text-center'>EVERYDAY SPECIALS</h1>
                    <div className='specical-detail pt-24'>
                        <p className='menu-heading d-flex'>
                            <span><TiTickOutline /></span>
                            <span> EARLY MORNING </span>
                        </p>
                        <p className='menu-detail pl-8'>Premium for Classic price before 10am weekdays</p>
                        <p className='menu-heading d-flex'>
                            <span><TiTickOutline /></span>
                            <span> SENIORS </span>
                        </p>
                        <p className='menu-detail pl-8'>For gentlemen 65 and over, receive the Classic Service with a 5% discount all day long, every day of the week.</p>

                        <p className='menu-heading d-flex'>
                            <span><TiTickOutline /></span>
                            <span> FATHER & SON </span>
                        </p>
                        <p className='menu-detail pl-8'>Premium service for the Classic price for dad & Jr. Men’s Haircut for the young man</p>

                        <p className='menu-heading d-flex'>
                            <span><TiTickOutline /></span>
                            <span> EVERYDAY HEROES </span>
                        </p>
                        <p className='menu-detail pl-8'>25% discount on services all day and every day for veterans, active duty military, and first responders</p>
                        <div className='text-center p-4'>
                            <button className='bg-red-600 p-2 text-white'>Book your Appointment</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='appointment px-32' style={{ position: "relative", display: "flex", alignItems: "center", height: "70vh" }}>
                <div className='left-content text-center text-white pt-16' >
                    <h3 className='saloonheading'>Ready to make your appointment?</h3>
                    <p className='saloontext'>Our chair is waiting for you! Schedule your next Hair Salon Experience today.</p>
                </div>
                <div className='right-content text-center' >
                    
                </div>
                <div className='background-image-container ' >
                    <Image src={appoint} layout="fill" objectFit="cover" alt="Appointment Image" />
                </div>
            </div>
        </div>
    )
}

export default Service