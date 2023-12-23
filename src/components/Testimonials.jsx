import React from 'react'
import "../styles/testimonials.css"
import Customer from './Customer'
import image from "../assets/execs.jpeg"



export default function Testimonials() {
  return (
    <>
        <div className='testimonials'  id='testimonials'>
            <h3>What people are saying</h3>
            <div className='testimonials-main'>
                <Customer 
                    img={image}
                    name={"Olayinka Salis"}
                    position={"CEO THE4THENT"}
                    desc={"Sunt adipisicing elit labore qui voluptate anim laboris deserunt laboris elit eu elit. Tempor est fugiat nostrud eu. Dolor consequat occaecat tempor deserunt fugiat enim velit Lorem dolor cupidatat veniam nulla. Cupidatat adipisicing mollit pariatur proident occaecat reprehenderit. Et aute sint duis pariatur consequat."}
                />
                <Customer
                    img={image}
                    name={"Olayinka Salis"} 
                    position={"CEO THE4THENT"}
                    desc={"Sunt adipisicing elit labore qui voluptate anim laboris deserunt laboris elit eu elit. Tempor est fugiat nostrud eu. Dolor consequat occaecat tempor deserunt fugiat enim velit Lorem dolor cupidatat veniam nulla. Cupidatat adipisicing mollit pariatur proident occaecat reprehenderit. Et aute sint duis pariatur consequat."}    
                />
                <Customer 
                    img={image}
                    name={"Olayinka Salis"}
                    position={"CEO THE4THENT"}
                    desc={"Sunt adipisicing elit labore qui voluptate anim laboris deserunt laboris elit eu elit. Tempor est fugiat nostrud eu. Dolor consequat occaecat tempor deserunt fugiat enim velit Lorem dolor cupidatat veniam nulla. Cupidatat adipisicing mollit pariatur proident occaecat reprehenderit. Et aute sint duis pariatur consequat."}
                />
            </div>
        </div>
    </>
  )
}
