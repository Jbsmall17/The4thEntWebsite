import React from 'react'
import { InfinitySpin  } from  'react-loader-spinner'


export default function Loader() {

    const styleContainer = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height: "100vh",
        width: "100vw"
    }
  return (
    <div className='loader' style={styleContainer}>
       <InfinitySpin 
            width = "200"
            color = '#ff4d14'
       />
    </div>
  )
}
