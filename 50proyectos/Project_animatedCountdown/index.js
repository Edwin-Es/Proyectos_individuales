const ps=document.querySelector("p")
const start=document.querySelector(".start")
const countdown=document.querySelector(".countdown")
const play=document.querySelector("#play")

let counter=3;
play.addEventListener("click",()=>{
    start.style.display="none"
    countdown.style.display="block"
    setTimeout(showing,0)
    setTimeout(showing,1000)
    setTimeout(showing,2000)
    setTimeout(showing,3000)
    setTimeout(showing,4000)
    setTimeout(reset,4000)

})

function reset(){
    start.style.display="block"
    countdown.style.display="none"
    counter=3;
    ps.style.animation=""
    play.innerHTML="Replay"
}    
function showing(){
    ps.style.display="block"
    ps.style.animation="count 1000ms cubic-bezier(.56,.21,.76,1.73) infinite"
    ps.innerHTML=counter
    counter--;
    
}
function hide(){
    for(let i=0;i<4;i++){
    ps[i].style.display="none"
    ps[i].style.animation=""
    }

}