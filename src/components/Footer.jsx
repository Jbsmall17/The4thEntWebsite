import React, { useState } from 'react'
import logo from "../assets/61.png"
import { FaInstagram, FaFacebookF,FaSquareXTwitter,FaPinterestP,FaLinkedin, FaArrowRight} from "react-icons/fa6";
import "../styles/footer.css"
import { postSubscriber } from '../backend/server';
import { Oval } from  'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import jsonp from 'jsonp';
import FooterForm from './FooterForm';

const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const endpoint = import.meta.env.VITE_ENDPOINT



export default function Footer() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  async function postEmail(e){
    e.preventDefault()
    setIsLoading(true)
    const toastId = toast.loading('Loading...');
    const validEmail = emailRegexPattern.test(email)
    if(!validEmail) return 
    const response = await postSubscriber(email)
    if(response.message == "Record created successfully"){
      toast.dismiss(toastId);
      toast.success('Successfully subscribed!');
      setIsLoading(false)
    }
    else if(response.message == "Email Already Exist"){
      toast.dismiss(toastId);
      toast.error('Email Already Exist!');
      setIsLoading(false)
    }
    else{
      toast.dismiss(toastId);
      toast.error('This is an error!');
      setIsLoading(false)
    }
    setEmail("")
  }
  return (
    <footer className='footer'>
        <Toaster />
        <div className='footer-container'>
            <div className='footer-container-left'>
                <img className='logo' src={logo} alt='the fouth enternment logo at the footer' />
                <div className='socials-container'>
                    <a
                      href='https://www.instagram.com/the4thent/'
                      target='_blank'
                    >
                      <FaInstagram size={"2em"} style={{color: "#fff"}} />
                    </a>
                    <a
                      href='https://twitter.com/the4thent_'
                      target='_blank'
                    >
                      <FaSquareXTwitter size={"2em"} style={{color: "#fff"}}/>
                    </a>
                    {/* <FaFacebookF size={"2em"} /> */}
                    {/* <FaPinterestP size={"2em"} /> */}
                    <a 
                      href='https://www.linkedin.com/company/the4thmediaandentertainment/'
                      target='_blank'  
                      ><FaLinkedin size={"2em"} style={{color: "#fff"}} />
                    </a>
                </div>
                <p className='coypright'><span>&copy;copyright</span><span>The 4TH ENT</span> </p>
            </div>
            <div className='footer-container-right'>
              <p>subscribe for The 4th Newletter</p>
              <MailchimpSubscribe
                url={endpoint}
                render={({ subscribe, status, message }) => (
                  <>
                  <FooterForm 
                    status = {status}
                    message = {message}
                    onValidated = { formData => subscribe(formData)}
                  />
                  </>
                )}
              />
            </div>
        </div>
    </footer>
  )
}
