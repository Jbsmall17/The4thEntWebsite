import React, { useEffect, useState,  CSSProperties } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../styles/blog.css"
import BlogPost from '../components/BlogPost'
import {fetchBlog} from "../backend/server"
import { TailSpin  } from  'react-loader-spinner'
import Playlist from '../components/Playlist'
// import ClipLoader from "react-spinners/ClipLoader"; 


export default function Blog({setVisible}) {
    const [isLoading, setIsLoading] = useState(true)
    const [blogs, setBlogs] = useState([])
    async function getBlog(){
        setIsLoading(true)
        const response = await fetchBlog()
        setIsLoading(false)
        setBlogs(response.data)
    }

    useEffect(()=>{
        getBlog()
    },[])

    useEffect(()=>{
        setVisible(true)
    },[])
  return (
    <div className='blog-page'>
        <Header activeLink={"bloggg"} />
            <div className='blog-page-container'>
                <p>Blog</p>
                <div className={isLoading ? 'blog-container' :  'blog-container loaded'}>
                    { 
                        !isLoading
                        ?
                        blogs.map((blog)=>{
                            const {title, description} = blog
                            return <BlogPost 
                                        title={title} 
                                        desc={description} 
                                    />
                        })
                        : (
                            <TailSpin
                                height="150"
                                width="150"
                                color="#ff4d14"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />                            
                        )
                    }
                    {/* <BlogPost 
                        title={"Velit id adipisicing excepteur id ex aute Lorem sit in Lorem."}
                        desc={"Dolor commodo officia labore cillum quis consequat id occaecat Lorem non labore eu ea incididunt. Adipisicing aliqua irure adipisicing sunt sit. Ad adipisicing non excepteur est duis eiusmod laboris ea incididunt est enim ipsum elit magna."}
                    />
                    <BlogPost
                        title={"Eu duis dolor magna ad."}
                        desc={"Eu eiusmod ad ipsum non in pariatur ut ea ut dolor esse dolor ipsum. Aliqua in minim sunt est quis excepteur aliqua est veniam qui. Fugiat ea ad proident sint enim aliquip elit. Commodo sit occaecat id minim consequat esse."}
                    />
                    <BlogPost
                        title={"Incididunt pariatur ut labore ad anim esse non."}
                        desc={"Qui esse esse amet qui amet. Tempor proident excepteur exercitation aliquip dolore et aliquip exercitation labore irure aliqua. Magna ad amet fugiat irure ullamco deserunt."}
                    />
                    <BlogPost 
                        title={"Velit id adipisicing excepteur id ex aute Lorem sit in Lorem."}
                        desc={"Dolor commodo officia labore cillum quis consequat id occaecat Lorem non labore eu ea incididunt. Adipisicing aliqua irure adipisicing sunt sit. Ad adipisicing non excepteur est duis eiusmod laboris ea incididunt est enim ipsum elit magna."}
                    />
                    <BlogPost
                        title={"Eu duis dolor magna ad."}
                        desc={"Eu eiusmod ad ipsum non in pariatur ut ea ut dolor esse dolor ipsum. Aliqua in minim sunt est quis excepteur aliqua est veniam qui. Fugiat ea ad proident sint enim aliquip elit. Commodo sit occaecat id minim consequat esse."}
                    />
                    <BlogPost
                        title={"Incididunt pariatur ut labore ad anim esse non."}
                        desc={"Qui esse esse amet qui amet. Tempor proident excepteur exercitation aliquip dolore et aliquip exercitation labore irure aliqua. Magna ad amet fugiat irure ullamco deserunt."}
                    /> */}
                </div>
            </div>
            <Playlist />
        <Footer />
    </div>
  )
}
