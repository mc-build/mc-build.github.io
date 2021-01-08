import React,{ useEffect } from "react"

export default function Apply(){
    useEffect(()=>{
        window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSf0Q2FLPoEkN4IyvRj0kizOQcfsm4EEvcGUYzDYmZLh-h3Oyw/viewform");
    })
    return <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0Q2FLPoEkN4IyvRj0kizOQcfsm4EEvcGUYzDYmZLh-h3Oyw/viewform">click here to be redirected</a>
}   