const imgs=document.querySelectorAll(".img");
const h3=document.querySelectorAll("h3");

h3hidden();


imgs.forEach(img=>{
    img.addEventListener("click", (event)=>{
        imgs.forEach(all=>{
            all.className="img"
        })
        event.target.className="img seleccion";
        h3hidden();
    })
})

function h3hidden(){
    h3.forEach(element=>{
        if(element.parentElement.className=="img seleccion"){
            element.style.visibility="visible";
            element.style.transitionDelay="700ms";
        
        }
        else {
            element.style.visibility="hidden";
            element.style.transitionDelay="0ms"};
    })
}

