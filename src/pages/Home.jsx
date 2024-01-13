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
import {fetchEvent, fetchHomeMedia, fetchServices} from "../backend/server.js"
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Playlist from '../components/Playlist.jsx'
import entVideo from "../assets/4thent_video.mp4"
import about22 from "../assets/emaxee_video.mp4"
import {IoIosArrowDown} from "react-icons/io"
import { useState } from 'react'
import {ThreeDots} from "react-loader-spinner"




export default function Home({setVisible}) {
  const [homeMedia, setHomeMedia] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [services, setServices] = useState([])
  const navigate = useNavigate()
  const homeDiv = useRef()
  const the4thDiv = useRef()
  const servicesRef = useRef(null)


async function getEvent(){
  const response = await fetchEvent()
  // console.log(response)
}

async function getHomeMedia(){
  setIsLoading(true)
  const response = await fetchHomeMedia()
  setHomeMedia(response.data)
  setIsLoading(false)
}

async function getServices(){
  const response = await fetchServices()
  setServices(response.data)
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
    getHomeMedia()
    getServices()
  },[])

  useEffect(() => {
    AOS.init();
    setVisible(true)
  }, [])

  return (
    <>
      <Header  activeLink={"home"}/>
      <div ref={homeDiv} className='homepage'>
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          effect={'fade'}
          autoplay={
            {
              delay : 3000,
              pauseOnMouseEnter : true
            }
          }
        >
          {
            isLoading
            ? <div className='home-media-Loader-container'>
                <ThreeDots
                  visible={true}
                  height="100"
                  width="100"
                  color="#ff4d14"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            :
            homeMedia.map((media)=>{
              return (
                  <SwiperSlide>
                  <video muted autoPlay loop>
                    <source src={media.Media[0].url} type="video/mp4" />
                  </video>
                </SwiperSlide>                  
                )
            })
          }
        </Swiper>
        <IoIosArrowDown onClick={handleClick} />
      </div>
      <div className='home-services' id="services" ref={servicesRef}>
        <h3>WHAT WE DO</h3>
        <div className='services-container'>
          {
            services.map((service,index)=>{
              const {id, Title, Desc} = service
              return (
                <Services
                  key={id} 
                  name={Title}
                  desc={Desc}
                />       
              )
            })
          }
        
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
