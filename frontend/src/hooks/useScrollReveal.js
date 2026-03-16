import { useEffect } from "react"

export default function useScrollReveal(){

useEffect(()=>{

const observer=new IntersectionObserver(entries=>{

entries.forEach(e=>{

if(e.isIntersecting)

e.target.classList.add("active")

})

},{threshold:0.15})

document
.querySelectorAll(".scroll-scale,.scroll-bottom")
.forEach(el=>observer.observe(el))

},[])

}