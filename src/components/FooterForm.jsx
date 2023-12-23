import React,{useState} from 'react'
import toast from 'react-hot-toast';


const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function FooterForm({status, message, onValidated}) {
    const [email, setEmail] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        // const validEmail = emailRegexPattern.test(email)
        if(!email) return
        
        const isFormValidated = await onValidated({EMAIL : email})
        setEmail("")
        if(message == "You're already subscribed, your profile has been updated. Thank you!"){
            toast.error('Email Already Exist!');
        }
        else if( message == "Thank you for subscribing!"){
            toast.success("Thank you for subscribing!")
        }
        else{
            toast.error("provide us with an email")
        }
      }
  
    return (
    <form onSubmit={handleSubmit} className='subscribe-form'>
    <div>
      <input 
        type='text'  
        value={email}
        name='email'
        onChange={(e)=>{setEmail(e.target.value)}}
        required
      />
      <label className='label'>Email Address</label>
      <p className='form-icon-container'>
        <button type='submit'  className='subscribe'> 
        sign up
        </button>
        <p className='form-icon-container2'>
          <button type='submit'  className='subscribe2'>sign up</button>
        </p>
      </p>
    </div>
  </form>
  )
}
