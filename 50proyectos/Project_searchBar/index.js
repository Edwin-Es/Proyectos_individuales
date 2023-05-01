document.body
const search=document.querySelector(".search")
const btn=document.querySelector(".btn")
const buscar=document.querySelector(".buscar")


btn.addEventListener("click",()=>{
    if(search.style.visibility=="hidden"){
        console.log("aca")
    search.style.visibility="visible";
    search.style.width="300px";
    buscar.style.borderRadius="15px";
    }
    else{
        console.log("aca2")
        search.style.visibility="hidden";
        search.style.width="0px";
        buscar.style.borderRadius="5px";
    }
})