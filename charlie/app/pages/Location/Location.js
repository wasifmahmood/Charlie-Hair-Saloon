import React from 'react'
import './Location.css'



const Location = () => {
    return (
        <div>
            <div className='location d-flex p-5'>
                <div className='Text w-1/2 p-10 text-wrap'>
                    <p>Your Neighborhood Barbershop</p>
                    <span>Locations</span>
                    <p>You’d drive for days for the Hair Saloon experience, but you probably don’t have to.</p>
                    <p>Find your nearest Saloon below!</p>
                </div>
                <div className='Image object-cover w-1/2 relative'>
                </div>
            </div>
            <div className='details d-flex  p-5'>
                <div className='img p-10'>
                    image
                </div>
                <div>
                    <h3>Faisalabad</h3>
                    <h4>address</h4>
                    <h5>Number</h5>
                </div>
            </div>
        </div>
    )
}

export default Location