import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Customer({img,name, position, desc}) {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='customer' data-aos="zoom-in-up" data-aos-duration="2000">
        <div>
            <img src={img} width={100} height={100} alt='customer-image'/>
            <p className='customer-name'>{name}</p>
            <p className='customer-position'>{position}</p>
        </div>
        <div>
            <p className='description'>
                {desc}
            </p>
        </div>
    </div>
  )
}
