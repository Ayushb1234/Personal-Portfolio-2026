import { useEffect } from "react"

export default function useSkillCircles(){

useEffect(()=>{

document.querySelectorAll(".circle").forEach(elem=>{

const dots=+elem.getAttribute("data-dots")

const percent=Math.floor(
dots*+elem.getAttribute("data-percent")/100
)

const rotate=360/dots

elem.innerHTML=Array.from({length:dots},(_,i)=>`

<div class="points" style="--i:${i};--rot:${rotate}deg"></div>

`).join("")

elem.querySelectorAll(".points").forEach((p,i)=>{

if(i<percent) p.classList.add("marked")

})

})

},[])

}