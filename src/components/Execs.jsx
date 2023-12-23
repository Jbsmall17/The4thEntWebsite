import React, { useEffect } from 'react'
import execs from "../assets/execs.jpeg"
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Execs({Name,Position,Picture}) {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div data-aos="zoom-in" data-aos-duration="2000"> 
      <div>
        <img src={Picture} alt='pictures of Execs' />
      </div>
      <p>{Name}</p>
      <p>{Position}</p>
    </div>
  )
}
