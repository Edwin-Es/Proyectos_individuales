const events=document.querySelector(".events")
const key=document.getElementById("key")
const keycode=document.getElementById("keycode")
const code=document.getElementById("code")
const h3=document.querySelector("h3")


window.addEventListener("keydown",(event)=>{
    h3.style.display="none";
    events.style.display="flex"
    event.code=="Space"?key.textContent="Space":key.textContent=event.key;
    keycode.textContent=event.which;
    code.textContent=event.code;
    
    
})