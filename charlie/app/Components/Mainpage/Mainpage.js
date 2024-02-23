import Image from 'next/image';
import React from 'react'
import Home from "../../../assests/image/Home.jpg"


export const Mainpage = () => {
  return (
    <div>
      <div className='homeimage bg-cover'>
        <Image src={Home} />
      </div>
    </div>
  )
}
export default Mainpage;
