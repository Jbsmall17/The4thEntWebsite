import React, {useState, useEffect, useRef} from 'react'
import Logo from "../assets/61.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faNewspaper,faCircleXmark,faHouse, faScrewdriverWrench, faBriefcase,faXmark } from '@fortawesome/free-solid-svg-icons'
import "../styles/header.css";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
// import { fetchPlaylist } from '../backend/server';
import { Oval } from  'react-loader-spinner'




export default function Header({activeLink}) {
    const [isMobileOpen, setMobileOpen] = useState(false);
    const [isScreenBig, setScreenBig] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [page, setPage] = useState(activeLink);
    const [cancel, setCancel] = useState(false)
    const headerRef = useRef()
    const headerMobileRef = useRef()
    const lineRef = useRef()
    const lineRef2 = useRef()
    const navigate = useNavigate()

    function homeClick(){
        setPage("home")
        navigate("/")
        setMobileOpen(false)
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    
    function artisteClick(){
        setPage("artiste")
        navigate("/talent")
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function execsClick(){
        setPage("execs")
        navigate("/execs")
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function blogClick(){
        setPage("bloggg")
        navigate("/blog")
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function playlistClick(){
        navigate("/playlist")
        window.scrollTo({ 
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function handleClick(section){
        navigate("/")
        setMobileOpen(false)
        setTimeout(()=>{
            const servicesDiv = document.querySelector(section)
            servicesDiv.scrollIntoView({
             behavior: 'smooth',
             block: 'start',  // Align the top of the element with the top of the viewport
             inline: 'start',
            //  offsetTop : -navbarHeight
            })
        },50)
    }
    useEffect(()=>{
        const headerRefnode =  headerRef.current
        const navOffset = headerRefnode.getBoundingClientRect().height
        setNavbarHeight(navOffset)
    },[isScreenBig])

  return (
    <>
    <header className='header' ref={headerRef}>
        <img onClick={homeClick} style={{cursor : "pointer"}} src={Logo} className='logo' alt='4th entertainment website' />
      <nav className='navbar-desktop'>
        <ul className='navbar-list'>
            <li onClick={homeClick} className={page === "home" ? "active" : null}>
                <FontAwesomeIcon icon={faHouse} size="xl" style={{color: page === "home"? "#ff4d14" :"#ffffff"}} />
                <span className='hover-text'>Home</span>
                <ul className='dropdown'>
                    <li onClick={()=>handleClick("#services")}>Services</li>
                </ul>
            </li>
            <li onClick={artisteClick} className={page === "artiste" ? "active" : null} >
                <FontAwesomeIcon icon={faMusic} size="xl" style={{color: page === "artiste"? "#ff4d14" :"#ffffff"}} />
                <span className='hover-text' >Talents</span>
            </li>
            {/* <li  onClick={handleClick}>
                <FontAwesomeIcon icon={faScrewdriverWrench} size="xl" style={{color: "#ffffff",}} />
                <span className='hover-text' >Services</span>
            </li> */}
            <li onClick={execsClick} className={page === "execs" ? "active" : null}>
                <FontAwesomeIcon icon={faBriefcase} size="xl" style={{color: page === "execs"? "#ff4d14" :"#ffffff" }} />
                <span className='hover-text' >Execs</span>
            </li>
            <li onClick={blogClick} className={page === "bloggg" ? "active" : null} >
                <FontAwesomeIcon icon={faNewspaper} size="xl" style={{ color: page === "bloggg"? "#ff4d14" :"#ffffff"}} />
                <span className='hover-text' >Blog</span>
            </li>
        </ul>
      </nav>
        <button onClick={playlistClick}>
            <p>Playlist</p>
            <span className='hover-text'>playlist</span>
        </button>
        {/* <div className='prompt' style={{display: cancel ? "none" : "block"}}>
            <div>
                <a href='javascript:void(0)'>Click here to tune in to this week's playlist.</a>
                <a href='javascript:void(0)'>Click here to tune in to this week's playlist.</a>
                <a href='javascript:void(0)'>Click here to tune in to this week's playlist.</a>
                <a href='javascript:void(0)'>Click here to tune in to this week's playlist.</a>
            </div>
            <FontAwesomeIcon 
                className='cancel' 
                size='xl' 
                icon={faXmark} style={{color: "#000000"}} 
                onClick={()=> setCancel(true)}      
            />
        </div> */}
    </header>
    <header className='mobile-header' ref={headerMobileRef} >
        <div className='line' ref={lineRef2}></div>
        <div className='mobile-header-container' >
            <HiBars3BottomLeft onClick={()=>{setMobileOpen(true)}} style={{color:'#ff4d14'}} size="3.5em"/>
            <img onClick={homeClick} style={{cursor: "pointer"}} src={Logo} className='mobile-logo' alt='The 4th Ent logo' />
        </div>
        <div className={ isMobileOpen ? 'mobile-navbar open' : 'mobile-navbar'}>
            <div onClick={homeClick} className='mobile-navbar-links'>
                <FontAwesomeIcon icon={faHouse} style={{color: "#ff4d14", fontSize: "40px"}} />
                <span>Home</span>
            </div>
            <div  onClick={handleClick} className='mobile-navbar-links'>
                <FontAwesomeIcon icon={faScrewdriverWrench}  style={{color: "#000", fontSize: "40px"}} />
                <span>Services</span>
            </div>
            <div onClick={artisteClick} className={'mobile-navbar-links' }>
                <FontAwesomeIcon icon={faMusic} style={{color: "#000", fontSize: "40px"}} />
                <span>Talents</span>
            </div>
            <div onClick={execsClick} className={'mobile-navbar-links' }>
                <FontAwesomeIcon icon={faBriefcase} style={{color: "#ff4d14", fontSize: "40px" }} />
                <span>Execs</span>
            </div>
            <div onClick={blogClick} className={'mobile-navbar-links' }>
                <FontAwesomeIcon icon={faNewspaper} style={{color: "#ff4d14", fontSize: "40px"}} />
                <span>Blog</span>
            </div>
            <div className='mobile-navbar-links'>
                <div onClick={playlistClick}>
                    Playlist
                </div>
            </div>
            <div className='mobile-navbar-links'>
                <FontAwesomeIcon  onClick={()=>{setMobileOpen(false)}} icon={faCircleXmark}  style={{color: "#e00f0f", }}  />
            </div>
        </div>
        {/* <div className='prompt' style={{display: cancel ? "none" : "block"}}>
            <div>
                <a href='javascript:void(0)'>Click here to tune in to this week's playlist.</a>
                <a href='javascript:void(0)'>Click here to tune in to this week's playlist.</a>
            </div>
            <FontAwesomeIcon 
                className='cancel' 
                size='xl' 
                icon={faXmark} style={{color: "#000000"}} 
                onClick={()=> setCancel(true)}      
            />
        </div> */}
    </header>
    
    </>
  )
}
