import React,{useRef, useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import artiste from "../assets/artiste.jpeg"
import emaxee from "../assets/execs.jpeg"
import grizz from "../assets/grizz.jpeg"
import tiger from "../assets/itztiger.jpeg"
import "../styles/artiste.css"
import { fetchTalents } from '../backend/server'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Playlist from '../components/Playlist'

export default function Artiste({setVisible}) {
  const [talents, setTalents] = useState([])

  async function getTalents(){
    const response = await fetchTalents()
    setTalents(response.data)
  }
  useEffect(() => {
    getTalents()
    AOS.init();
    setVisible(true)
  }, [])
  return (
    <div className='artistepage'>
        <Header activeLink={"artiste"} />
        <div className='artistepage-container'>
            <p>Our Talents</p>
            <div className='container'>
              {
                talents.map((talent,index)=>{
                  const {Image, id, Link, Name} = talent
                  return (
                    <div className='artiste-container' key={id}>
                      <div  data-aos="flip-left" data-aos-duration="2000">
                        <img alt='artiste picture' src={Image[0].url} />
                      </div>
                      <p className='artiste-name'>{Name}</p>
                      <a href={Link} target='_blank'><p className='artiste-link'>Listen </p></a>
                    </div>
                  )
                })
            }
            </div>
        </div>
        <Playlist />
        <Footer />
    </div>
  )
}
