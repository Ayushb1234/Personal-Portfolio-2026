import { useEffect } from "react"

export default function useReadMore(){

useEffect(()=>{

function setup(btnId,cls){

const btn=document.getElementById(btnId)

if(!btn || btn.hasAttribute("data-state-init")) return

btn.setAttribute("data-state-init", "true")

btn.addEventListener("click",e=>{

e.preventDefault()

const el=document.querySelector(cls)
if(!el) return;

const open=el.style.display==="block"

el.style.display=open?"none":"block"

btn.textContent=open?"Read More":"Read Less"

})

}

setup("readMoreBtn1",".more-content")
setup("readMoreBtn2",".more-content2")
setup("readMoreBtn3",".more-content3")
setup("readMoreBtn4",".more-content4")

},[])

}