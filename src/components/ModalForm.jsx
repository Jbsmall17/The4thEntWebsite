import React,{useState} from 'react'
import { Oval } from  'react-loader-spinner'


export default function ModalForm({message,status,onValidated}) {
    const [isLoading,setIsLoading] = useState(false)
    const [email, setEmail] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const isFormValidated = await onValidated({EMAIL : email})
            if(message === "Thank you for subscribing!"){
              setEmail("")
            }
        }catch(error){
            // console.log(error)
        }
    }
  return (
    <form  onSubmit={handleSubmit}>
    <input 
      type="text" 
      placeholder="email" 
      value={email}
      name="email"
      onChange={(e)=>{setEmail(e.target.value)}}
      required
      />
    <button type="submit">{
    !("sending" === status)
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
  </form>
  )
}
