import React,{useRef, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import artiste from "../assets/artiste.jpeg"
import grizz from "../assets/grizz.jpeg"
import tiger from "../assets/itztiger.jpeg"
import "../styles/artiste.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Playlist from '../components/Playlist'

export default function Artiste({setVisible}) {
  useEffect(() => {
    AOS.init();
    setVisible(true)
  }, [])
  return (
    <div className='artistepage'>
        <Header activeLink={"artiste"} />
        <div className='artistepage-container'>
            <p>Our Talents</p>
            <div className='container'>
              <div className='artiste-container'>
                <div>
                  <img alt='artiste picture' src={artiste} data-aos="flip-left" data-aos-duration="2000" />
                </div>
                <p className='artiste-name'>Emaxee</p>
                <a href='https://linktr.ee/emaxee' target='_blank'><p className='artiste-link'>Listen </p></a>
              </div>
              <div className='artiste-container'>
                <div>
                  <img alt='artiste picture' src={grizz} data-aos="flip-left" data-aos-duration="2000" />
                </div>
                <p className='artiste-name'>Dj Grizz</p>
                <a href='https://linktr.ee/grizzthedj' target='_blank'><p className='artiste-link'>Listen </p></a>
              </div>
              <div className='artiste-container'>
                <div>
                  <img alt='artiste picture' src={tiger} data-aos="flip-left" data-aos-duration="2000" />
                </div>
                <p className='artiste-name'>Tiger</p>
                <a href='https://linktr.ee/izytiger25' target='_blank'><p className='artiste-link'>Listen </p></a>
              </div>
            </div>
        </div>
        <Playlist />
        <Footer />
    </div>
  )
}
