const container=document.querySelector(".container")
const loading=document.querySelector("#loading")
loading.style.opacity="1";
container.style.filter="blur(10px)"
let i=0, opa=0.9, bluri=10;
let counter=setInterval(reload,20)
function reload(){
    loading.textContent=i+"%"
    if(i>15  && i<98){
    bluri-=0.15;
    opa-=0.01;
    loading.style.opacity=opa.toString()
    container.style.filter="blur("+bluri+"px)"
    }
    console.log(bluri)
    i++;
    if(i==101){clearInterval(counter);
    loading.style.opacity="0"
    container.style.filter="blur(0px)"
    }
}