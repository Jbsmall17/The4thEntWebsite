import React, { useEffect } from 'react'
import "../styles/services.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Services({name,desc}) {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='fouth-service' data-aos="fade-up" data-aos-duration="2000">
      <p className='fouth-service-name'>{name}</p>
      <p className='fouth-service-desc'>{desc}</p>
    </div>
  )
}
