const left=document.querySelector(".left")
const right=document.querySelector(".right")

left.addEventListener("mouseover",()=>{
    left.style.width="75%";
    right.style.width="25%"
})
right.addEventListener("mouseover",()=>{
    left.style.width="25%";
    right.style.width="75%"
})
left.addEventListener("mouseout",()=>{
    left.style.width="50%";
    right.style.width="50%"
})
right.addEventListener("mouseout",()=>{
    left.style.width="50%";
    right.style.width="50%"
})