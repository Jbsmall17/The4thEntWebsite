import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogPost({title,desc}) {
  const [fulldesc,setFullDesc] = useState(false)
  useEffect(()=>{
    AOS.init()
  },[])

  // 
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
        <p>{title}</p>
        {
          !fulldesc
          ?
          <p>{`${desc.substring(0,100)}...`}<button onClick={()=> setFullDesc(true)}>Readmore</button></p>
          : <p>{desc} <button onClick={()=> setFullDesc(false)}>Showless</button></p>
        }
    </div>
  )
}
