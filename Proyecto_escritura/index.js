const p=document.getElementById("texto");
const input=document.getElementById("input");
const color=document.getElementById("color");
const active=document.getElementById("span");

input.onfocus=()=>{
    if(input.value.length!=0){
    input.style.outlineColor="black";}
    else input.style.outlineColor="red";}

input.oninput= function(){
    p.textContent=input.value 
    
}
color.oninput=function(){
    p.style.color=color.value;
    active.style.borderColor=color.value;
}

function actualizar(){
    if(active.className==="tick")
    document.getElementById("span").setAttribute("class","")
    else document.getElementById("span").setAttribute("class","tick")
}

setInterval(actualizar,600);
