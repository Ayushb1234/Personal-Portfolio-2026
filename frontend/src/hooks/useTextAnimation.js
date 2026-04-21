import { useEffect } from "react"

export default function useTextAnimation(){

useEffect(()=>{

let words=document.querySelectorAll(".word")
if(words.length === 0) return;

if(words[0].querySelector('.letter')) return;

words.forEach(word=>{

const letters=word.textContent.split("")

word.textContent=""

letters.forEach(letter=>{

const span=document.createElement("span")

span.textContent=letter

span.className="letter"

word.append(span)

})

})

let currentWordIndex=0

function changeText(){

const current=words[currentWordIndex]

const next=currentWordIndex===words.length-1
?words[0]
:words[currentWordIndex+1]

if (!current || !next) return;

Array.from(current.children).forEach((l,i)=>{

setTimeout(()=>{l.className="letter out"},i*80)

})

next.style.opacity="1"

Array.from(next.children).forEach((l,i)=>{

l.className="letter behind"

setTimeout(()=>{

l.className="letter in"

},340+i*80)

})

currentWordIndex=
currentWordIndex===words.length-1?0:currentWordIndex+1

}

changeText()

const intervalId = setInterval(changeText,3000)

return () => clearInterval(intervalId)

},[])

}