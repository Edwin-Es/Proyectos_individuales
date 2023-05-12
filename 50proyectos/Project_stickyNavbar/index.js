const content=document.querySelector(".title")
const nav=document.querySelector("nav")

document.addEventListener("scroll",()=>{
if(window.scrollY>content.clientHeight/2){
        nav.classList.add("content")
    }
else if(window.scrollY<content.clientHeight/2){
        nav.classList.remove("content")
    }
})

