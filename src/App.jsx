import { Routes, Route } from "react-router-dom"
import { useState, lazy, Suspense, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Oval } from  'react-loader-spinner'
import { postSubscriber } from "./backend/server"
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import toast, { Toaster } from 'react-hot-toast';
import Loader from "./components/Loader"
import ModalForm from "./components/ModalForm"



const Home = lazy(()=> import("./pages/Home"))
const Artiste = lazy(()=> import("./pages/Artiste"))
const MeetTheExecs = lazy(()=> import("./pages/MeetTheExecs"))
const Blog = lazy(()=> import("./pages/Blog"))
const PlaylistPage = lazy(()=>import("./pages/PlaylistPage"))



const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const endpoint = import.meta.env.VITE_ENDPOINT

function App() {
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [visible,setVisible] = useState(false) 


  async function postEmail(e){
    e.preventDefault()
    setIsLoading(true)
    const validEmail = emailRegexPattern.test(email)
    if(!validEmail) return
    const response = await postSubscriber(email)
    if(response.message == "Record created successfully"){
      setIsLoading(false)
      toast.success('Successfully subscribed!');
    }
    else if(response.message == "Email Already Exist"){
      toast.error('Email Already Exist!');
      setIsLoading(false)
    }
    else{
      toast.error('This is an error!');
      setIsLoading(false)
    }
    setEmail("")
  }
  function checkVisibility(){
    const arrowUp = document.querySelector(".arrow-up")
    if(arrowUp){
      if(window.scrollY > 50){
        arrowUp.classList.add("appear")
      }
      else{
        arrowUp.classList.remove("appear")
      }
    }
  }
  function handleClick(){
    window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"
    })
  }

  useEffect(()=>{
    setTimeout(()=>{
      setModal(true)
    },5000)
  },[])

  useEffect(()=>{
    window.addEventListener('scroll', checkVisibility)
    return ()=>{
      window.removeEventListener("scroll", checkVisibility)
    }
  })
  return (
    <>
      {visible &&<a className="contact" href="mailto:the4thmande@gmail.com">Contact us</a>}
      <FontAwesomeIcon 
        icon={faCircleArrowUp} 
        className="arrow-up" size="2xl" 
        onClick={handleClick}
        style={{color: "#3498db"}}
        />
      { modal &&
      <div className="modal-container">
        <div className="modal">
          <FontAwesomeIcon icon={faEnvelope} size="3x" beatFade style={{color : "#ff4d14"}} />
          <p>Signup to Our Newsletter</p>
          <p>be part of a community of Music Enthusiast</p>
          <MailchimpSubscribe
            url={endpoint}
            render={({ subscribe, status, message }) => (
              <>
              <ModalForm
                message={message}
                status={status}
                onValidated={formData => subscribe(formData)}
              />
               { status=== "success" && message === "Thank you for subscribing!" ? <p className="success">subscription succesful</p> 
                : status=== "success" && message === "You're already subscribed, your profile has been updated. Thank you!"
                ? <p className="pending">email already exist</p>
                : status === "error"
                ? <p className="error">An error occurred, try again</p>
                : <></>
              }
              </>
            )}
          />
          {/* <form onSubmit={postEmail}>
            <input 
              type="text" 
              placeholder="email" 
              value={email}
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              />
            <button type="submit">{
            !isLoading
            ? "Join"
            : (
              <Oval
                height={25}
                width={25}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )
            }
            </button>
          </form> */}
          <FontAwesomeIcon 
            icon={faXmark} size="lg" 
            style={{color : "#000"}}className="svg-cancel"
            onClick={()=> setModal(false)}  
          />
        </div>
      </div>
      }
      <Routes>
        <Route 
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home setVisible={setVisible} />
            </Suspense>
          }
        />

      <Route 
        path="/talent"
        element={
          <Suspense fallback={<Loader />}>
            <Artiste setVisible={setVisible} />
          </Suspense>
          }
        />

      <Route 
        path="/execs"
        element={
          <Suspense fallback={<Loader />}>
            <MeetTheExecs setVisible={setVisible} />
          </Suspense>
          }
        />

      <Route 
        path="/blog"
        element={
          <Suspense fallback={<Loader />}>
            <Blog setVisible={setVisible} />
          </Suspense>
        }
      />
       <Route 
        path="/playlist"
        element={
          <Suspense fallback={<Loader />}>
            <PlaylistPage setVisible={setVisible} />
          </Suspense>
        }
      />
      </Routes>

    </>
  )
}

export default App
