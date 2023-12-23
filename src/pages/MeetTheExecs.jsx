import React, { useEffect } from 'react'
import Header from '../components/Header'
import Execs from '../components/Execs'
import Footer from '../components/Footer'
import "../styles/meettheexecs.css"
import { fetchExecsPictures } from '../backend/server'
import Playlist from '../components/Playlist'
import { TailSpin  } from  'react-loader-spinner'
import { useQuery } from 'react-query'

async function getExecsPictures(){
    const response = await fetchExecsPictures();
    return response.data;
}

export default function MeetTheExecs({setVisible}) {
  const { data, isLoading, isError } = useQuery('myData', getExecsPictures); 
  useEffect(()=>{
    setVisible(true)
  })
  return (
    <div className='meet-the-execs'>
        <Header activeLink={"execs"}/>
        <div className='meet-the-execs-container'>
            <p>Meet The Execs</p>
            <div className='execs-container'>
              {
                !isLoading
                ?
                data?.map((picture,index)=>{
                    return (
                      <Execs key={picture.id} {...picture}/>  
                    )

                })
                : 
                (
                  <TailSpin
                      height="150"
                      width="150"
                      color="#ff4d14"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{display: "flex", justifyContent: "center"}}
                      wrapperClass=""
                  />                            
              )
              }
                {/* <Execs name={"Olayinka Salis"} position={"C.E.O, Head Of Talent Management"}/>
                <Execs name={"Dennis 'Sage' Ekundayo"} position={"COO, Head of A&R"} />
                <Execs name={"Oyedeji 'oyehdayg' Komolafe"} position={"Head of Digitial Media and Operations"} />
                <Execs name={"Derek Okorosobo"} position={"Head of Social Operations"} />
                <Execs name={"Akanbi Okikiola"} position={"Head of Videography"} />
                <Execs name={"Ismail Adenopo"} position={"Head of Photography"} />
                <Execs name={"Ayomide Olamide"} position={"Head of Visual Production"} />
                <Execs name={"Ahmed Adebayo"} position={"Creative Writer"} />
                <Execs name={"Yusuf 'Grizzthedj' Obituga"} position={"A&R, DJ and Executive Producer"} /> */}
            </div>
        </div>
        <Playlist />
        <Footer />
    </div>
  )
}
