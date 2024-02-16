import React from 'react'
import './Service.css'
import service from '../../../assests/image/service.jpeg'

const Service = () => {
    return (
        <div>
            <div className='service d-flex p-16'>
                <div className='w-1/2  text-wrap'>
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
                <div className='sev-Image object-cover w-1/2 relative'>
            
                </div>
            </div>
            <div className='service-menu text-center'>
                <h1 className='menu-heading'>SERVICES MENU</h1>
            </div>
        </div>
    )
}

export default Service