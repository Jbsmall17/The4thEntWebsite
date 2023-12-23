import React, {useEffect, useState} from 'react'
import "../styles/playlist.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchPlaylist } from '../backend/server';

export default function Playlist() {
    const [playlistUrl, setPlaylistUrl] = useState("")
    useEffect(() => {
        AOS.init();
    }, [])     
    
  async function getPlaylist(){
      const response = await fetchPlaylist()
      // console.log(response)
      setPlaylistUrl(response.data[0].url)
  }
  useEffect(()=>{
      getPlaylist()
  },[])
  return (
    <div className='playlist' data-aos="zoom-in-down"  data-aos-duration="2000">
        <div>
            <p>Give a listen to the playlist for this week</p>
            <a href={playlistUrl} target='_blank'>
              <button>Click Me</button>
            </a>
        </div>
    </div>
  )
}
