import { useEffect } from "react"

export default function useHeaderScroll(){

useEffect(()=>{

function onScroll(){

document
.querySelector("header")
.classList.toggle("scrolled",window.scrollY>50)

}

window.addEventListener("scroll",onScroll)

},[])

}