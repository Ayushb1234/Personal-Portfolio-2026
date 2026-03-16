export function initOrbitParticles(){

const wrapper=document.querySelector(".snap-wrapper")

if(!wrapper) return

const p=document.createElement("div")

p.className="orbit-particle"

wrapper.appendChild(p)

}