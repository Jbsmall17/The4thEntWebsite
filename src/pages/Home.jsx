import React, { useEffect,useRef } from 'react'
import "../styles/home.css"
import Services from "../components/Services"
import Footer from '../components/Footer'
import Header from "../components/Header"
import Testimonials from "../components/Testimonials.jsx"
import picture1 from "../assets/picture1.jpeg"
import picture2 from "../assets/picture2.jpeg"
import picture3 from "../assets/picture3.jpeg"
import picture4 from "../assets/picture4.jpeg"
import picture5 from "../assets/picture5.jpeg"
import picture6 from "../assets/picture6.jpeg"
import picture7 from "../assets/picture7.jpeg"
import picture8 from "../assets/picture8.jpeg"
import picture9 from "../assets/picture9.jpeg"
import picture10 from "../assets/picture10.jpeg"
import picture11 from "../assets/picture11.jpeg"
import picture12 from "../assets/picture12.jpeg"
import picture13 from "../assets/picture13.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard, EffectFade } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/effect-fade';
import {fetchEvent} from "../backend/server.js"
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Playlist from '../components/Playlist.jsx'
import entVideo from "../assets/4thent_video.mp4"
import about22 from "../assets/emaxee_video.mp4"
import {IoIosArrowDown} from "react-icons/io"




export default function Home({setVisible}) {
  const navigate = useNavigate()
  const homeDiv = useRef()
  const the4thDiv = useRef()
  const servicesRef = useRef(null)


async function getEvent(){
  const response = await fetchEvent()
  // console.log(response)
}

function handleClick(){
      const serviceRefNode = servicesRef.current
      if(serviceRefNode){
        serviceRefNode.scrollIntoView({
          behavior: 'smooth',
          block: 'start',  // Align the top of the element with the top of the viewport
          inline: 'start',
       })
      }

}
  useEffect(()=>{
    getEvent()
  },[])

  useEffect(() => {
    AOS.init();
    setVisible(true)
  }, [])

  return (
    <>
      <Header  activeLink={"home"}/>
      <div ref={homeDiv} className='homepage'>
        <video muted autoPlay loop>
          <source src={about22} type="video/mp4" />
        </video>
        <IoIosArrowDown onClick={handleClick} />
      </div>
      <div className='home-services' id="services" ref={servicesRef}>
        <h3>WHAT WE DO</h3>
        <div className='services-container'>
          <Services 
            name={"Music Distribution"}
            desc={"Immerse your music in our Music Distribution service, ensuring wide-reaching presence and unprecedented accessibility. We provide artists and content creators with a seamless gateway to a global audience hungry for exceptional tunes."}
          />
          <Services 
            name={"Playlisting"}
            desc={"Step into the world of Playlisting, where we meticulously curate and passionately promote playlists. These playlists are designed not just to captivate but to elevate your music, strategically increasing exposure and engagement for an enduring impact on your audience."}
          />
          <Services 
            name={"Talent Management"}
            desc={"Embark on a transformative journey with our comprehensive Talent Management expertise. We go beyond representation to guide and sculpt artists' careers with an unwavering commitment to success, fostering growth and unlocking their full potential."}
          />
          <Services 
            name={"Events Management"}
            desc={"Experience the magic of Events Management as we bring your music and entertainment dreams to life. We meticulously organize and flawlessly execute unforgettable events that resonate with your audience long after the last note fades."}
          />
          <Services 
            name={"Visual Content Management"}
            desc={"Elevate your visual storytelling with our Visual and Creative Content Management service. In this realm, captivating visuals for artists and brands are expertly crafted to leave an indelible imprint on the hearts and minds of your audience."}
          />
          <Services 
            name={"A&R Services"}
            desc={"Delve into the future of music with our A&R Services, skillfully identifying and nurturing emerging talent. We shape the industry's next wave of groundbreaking artists, ensuring a continuous evolution of musical excellence."}
          />
          <Services 
            name={"Marketing and Branding"}
            desc={"Let your brand resonate with authenticity and power through our Marketing and Branding expertise. We tailor effective strategies and construct robust brand identities that not only stand out in the competitive landscape but also ensure your music and entertainment endeavors are not just seen but remembered."}
          />
        </div>
      </div>
      {/* <div className='event-container' id='event'>
        <h3>Our Event</h3>
          <div className='event' data-aos="fade-left" data-aos-duration="2000">
            <div className='event-date'>11/05/23</div>
            <div className='event-main'>
              <p className='event-name'>Event</p>
              <p className='event-desc'>
                Magna officia sint deserunt quis exercitation cupidatat. 
                Quis nulla anim dolore sint cupidatat ipsum ullamco ad. 
                Proident fugiat deserunt ullamco ipsum culpa.
              </p>
              <a href='javascript:void(0)'>see more</a>
              <FontAwesomeIcon icon={faArrowRight} rotation={45} />
            </div>
          </div>
          <div className='event' data-aos="fade-right" data-aos-duration="2000">
            <div className='event-date'>11/05/23</div>
            <div className='event-main'>
              <p className='event-name'>Event</p>
              <p className='event-desc'>
                Magna officia sint deserunt quis exercitation cupidatat. 
                Quis nulla anim dolore sint cupidatat ipsum ullamco ad. 
                Proident fugiat deserunt ullamco ipsum culpa.
              </p>
              <a href='javascript:void(0)'>see more</a>
              <FontAwesomeIcon icon={faArrowRight} rotation={45} />
            </div>
          </div>
          <div className='event' data-aos="fade-left" data-aos-duration="2000">
            <div className='event-date'>11/05/23</div>
            <div className='event-main'>
              <p className='event-name'>Event</p>
              <p className='event-desc'>
                Magna officia sint deserunt quis exercitation cupidatat. 
                Quis nulla anim dolore sint cupidatat ipsum ullamco ad. 
                Proident fugiat deserunt ullamco ipsum culpa.
              </p>
              <a href='javascript:void(0)'>see more</a>
              <FontAwesomeIcon icon={faArrowRight} rotation={45} />
            </div>
          </div>
      </div> */}
      {/* <Testimonials /> */}
      <Playlist />
      <Footer />
    </>
  )
}
