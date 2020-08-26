import React ,{useEffect,useState}from 'react'
import "./Header.css"
import firebase from "firebase"
import logo from "./logo.png"
import db from "./firebase.js"
import Item from "./Item"

function Header() {
    const [username, setusername] = useState('')
    const [inval, setinval] = useState('')
    const [chat, setchat] = useState([])

    useEffect(()=>{

        db.collection('Chat').orderBy("timestamp","desc").onSnapshot(snap=>{
           setchat(snap.docs.map((doc)=>({id:doc.id,data:doc.data()})))
        })
   }, [])

    useEffect(() => {
        setusername(prompt("Enter your name"))
    }, [])
    return (
        <>
        <div class="header-main pb-5 container-fluid">
             <div class="display-1 py-5 head-text">Discreet</div>
             <img src={logo} class="img-fluid pb-5" width="300"  />
             <div class="display-5 py-5">A simple half anonymous chat app</div>
        </div>
        <div class="container centerer">
            <form>
            <input class="my-5" onChange={(e)=>{setinval(e.target.value)}} />
            <span type="button" class="px-5" onClick={(e)=>{
                e.preventDefault();
                db.collection("Chat").add({
                    username:username,
                    chat:inval,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
            }}>🚩</span>
            </form>
        </div>
        <div class="container  centerer">
            {
                chat.map((cat)=>{
                    return(
                       <Item username={username} nouser={cat.data.username} chat={cat.data.chat} />
                    )
                })
            }
            {console.log(chat)}
        </div>
        </>
    )
}

export default Header
