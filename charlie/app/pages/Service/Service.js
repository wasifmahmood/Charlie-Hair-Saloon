import React from 'react'
import './Service.css'
import icon from "../../../assests/image/icon.png";
import Image from 'next/image';

const Service = () => {
    return (
        <div>
            <div className='service d-flex bg-right-top p-16 '>
                <div className='service-left w-1/2  text-wrap'>
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
                <div className='service-right object-cover w-1/2 '>
                    
                </div>
                
            </div>
            <div className='service-menu text-center'>
                <h1 className='menu-main-heading'>SERVICES MENU</h1>
            </div>
            <div className='service-menu-cutting d-flex p-16 space-x-4 text-center'>
                <div className='menu-left'>
                    <p className='menu-heading'>CLASSIC</p>
                    <p className='menu-detail'>Includes on-the-house amenities and a perfect haircut</p>
                    <p className='menu-heading pt-4'>PREMIUM</p>
                    <p className='menu-detail'>The Classic plus a therapeutic scalp massage</p>
                    <p className='menu-heading pt-4'>EXECUTIVE</p>
                    <p className='menu-detail'>The Premium plus a neck shave, an extended therapeutic scalp massage, and an extended stress-relieving neck and shoulder massage</p>
                </div>
                <div className='menu-middle'></div>
                <div className='menu-right '>
                    <p className='menu-heading'>JR. MEN'S</p>
                    <p className='menu-detail'>Includes on-the-house amenities (minus the shampoo) and a perfect haircut for the young men 18 and under</p>
                    <p className='menu-heading pt-4'>STRESS RELIEF</p>
                    <p className='menu-detail'>Includes on-the-house amenities, tighten the edges, neck shave, therapeutic scalp massage, relaxing shampoo and conditioner, stress-relieving neck and shoulder massage</p>
                </div>
            </div>
            <div className='service-menu-Shave d-flex p-16 space-x-4 text-center'>
                <div className='menu-left'>
                    <p className='menu-heading'>FACE or HEAD SHAVE</p>
                    <p className='menu-detail'>Includes on-the-house amenities, consultation, hot towel treatment, pre-shave oil application, Saloon shave cream application, razor shave and after-shave balm ﬁnish</p>
                </div>
                <div className='menu-middle-Shave'></div>
                <div className='menu-right'>
                    <p className='menu-heading'>STRAIGHT RAZOR BEARD LINING</p>
                    <p className='menu-detail'>Includes on-the-house amenities, consultation, hot towel treatment, pre-shave oil application, Saloon shave cream application, razor shave and after-shave balm finish</p>

                </div>
            </div>
            <div className='service-menu-Trim d-flex p-16 space-x-4 text-center'>
                <div className='menu-left'>
                    <p className='menu-heading'>NECK SHAVE</p>
                    <p className='menu-detail'>with Classic or Premium service</p>
                    <p className='menu-heading pt-5'>GOATEE TRIM</p>
                    <p className='menu-heading pt-5'>BEARD TRIM</p>
                </div>
                <div className='menu-middle-Trim'></div>
                <div className='menu-right'>
                    <p className='menu-heading'>CAMO</p>
                    <p className='menu-detail'>Camouﬂage the gray by Redken®</p>
                    <p className='menu-heading pt-5'>SCALP RENEW</p>
                    <p className='menu-detail'>by Ahsan®</p>
                </div>
            </div>
            <div className='Specical p-16 text-center'>
                <div className='menu-main-heading'>EVERYDAY SPECIALS</div>
            </div>
            <div className='specical-menu pl-96'>
                <p className='menu-heading'>EARLY MORNING</p>
                <p className='menu-detail'>Premium for Classic price before 10am weekdays</p>
                <p className='menu-heading'>SENIORS</p>
                <p className='menu-detail'>For gentlemen 65 and over, receive the Classic Service with a $5 discount all day long, every day of the week.</p>
                <p className='menu-heading'>FATHER & SON</p>
                <p className='menu-detail'>Premium service for the Classic price for dad & Jr. Men’s Haircut for the young man</p>
                <p className='menu-heading'>EVERYDAY HEROES</p>
                <p className='menu-detail'>25% discount on services all day and every day for veterans, active duty military, and first responders</p>
            </div>
            <div className='text-center p-2'>
                <button className='bg-red-600 p-2 text-white'>Book your Appointment</button>
            </div>
            <div className='appointment'>123</div>
        </div>
    )
}

export default Service