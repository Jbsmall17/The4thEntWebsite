import {
    playlistFormat,
    eventFormat,
    blogFormat,
    subscribersFormat,
    songListFormat,
    execsPicturesFormat
} from "./helper"
import axios from "axios"
// import dotenv from "dotenv"
// dotenv.config()

// const Playlist = base(import.meta.env.PLAYLIST_ID);
// const Event = base(import.meta.env.EVENT_ID);
// const Blog = base(import.meta.env.BLOG_ID)

const BASE_ID = import.meta.env.VITE_BASE_ID
const  EVENT_ID = import.meta.env.VITE_EVENT_ID 
const PLAYLIST_ID = import.meta.env.VITE_PLAYLIST_ID 
const BLOG_ID = import.meta.env.VITE_BLOG_ID 
const SUBSCRIBERS_ID = import.meta.env.VITE_SUBSCRIBERS_ID 
const SONG_ID = import.meta.env.VITE_SONG_ID
const EXECS_PICTURE_ID = import.meta.env.VITE_EXECS_PICTURE_ID
const TOKEN = import.meta.env.VITE_BASE_TOKEN 


const ENDPOINT = `https://api.airtable.com/v0/${BASE_ID}`



async function fetchPlaylist(){
    try {
        let playlists = await axios.get(`${ENDPOINT}/${PLAYLIST_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            }
        })
        let thisWeekPlaylist = playlists.data.records
        .map(playlistFormat)
        .filter((playlist)=>{
            return playlist.url !== undefined
        });
        return { status: 200, message: 'Playlist fetched successfully', data : thisWeekPlaylist };
    } catch (error) {
        return { status: 500, message: 'Internal Server Error', error };
    }
}

async function fetchSonglist(){
    try {
        let songList = await axios.get(`${ENDPOINT}/${SONG_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            },
            params: {
                sort: [{ field: 'S/N', direction: 'asc' }],
            }
        })
        let thisWeekSongList = songList.data.records.map(songListFormat)
       
        return { status: 200, message: 'Playlist fetched successfully', data : thisWeekSongList };
    } catch (error) {
        return { status: 500, message: 'Internal Server Error', error };
    }
}

async function fetchEvent(){
    try{
        const Events = await axios.get(`${ENDPOINT}/${EVENT_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            },
            params: {
                sort: [{ field: 'S/N', direction: 'asc' }],
            }
        })
        const formattedEvent = Events.data.records
        .map(eventFormat)
        .filter((event)=>{
            return event.name !== undefined
        });
        return { status: 200, message: "event fetched successfuly ", data : formattedEvent}
    }catch(error){
        return { status: 500, message : "Internal Server Error", error }
    }
}

async function fetchBlog(){
    try{
        const Blogs = await axios.get(`${ENDPOINT}/${BLOG_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            },
            params: {
                sort: [{ field: 'S/N', direction: 'asc' }],
            }
        })
        const formattedBlog = Blogs.data.records
        .map(blogFormat)
        .filter((blog)=> blog.title !== undefined);
        return { status: 200, message : "Blogs fetched successfully", data: formattedBlog}
    }
    catch(error){
        return { status : 404, message: "An error occured", error}
    }
}

async function fetchExecsPictures(){
    try{
        const ExecsPictures = await axios.get(`${ENDPOINT}/${EXECS_PICTURE_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            },
            params: {
                sort: [{ field: 'S/N', direction: 'asc' }],
            }
        })
        const formattedExecsPictures = ExecsPictures.data.records
        .map(execsPicturesFormat)
        return { status: 200, message : "Event Pictures fetched successfully", data: formattedExecsPictures}
    }catch(error){
        return { status: 500, message : "Internal Server Error", error }
    }
}

async function postSubscriber(email){
    const endpoint = `${ENDPOINT}/${SUBSCRIBERS_ID}`

    const headers = {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
    }

    const postData = {
        fields: {
          email: email.trim(),
        },
      };

    try{
        const response = await axios.get(`https://api.airtable.com/v0/${BASE_ID}/subscribers?filterByFormula={email}='${email}'`,
        {headers})

        const emailExist = response.data.records.length > 0
        // console.log(emailExist)
        if(!emailExist){
            const response = await axios.post(endpoint,postData,{headers})
            // console.log('Record created successfully:', response.data);
            return {status: 200, message: "Record created successfully", data : response.data}
        }
        else{
            return {status : 400, message: "Email Already Exist", data : email}
        }
    } catch(error){
        // console.error('Error creating record:', error);
        return {status : 500, message : "Internal server error", error}
    }
}


export {
    fetchPlaylist,
    fetchBlog,
    fetchEvent,
    postSubscriber,
    fetchSonglist,
    fetchExecsPictures
}