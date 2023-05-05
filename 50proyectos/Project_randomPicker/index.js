const textarea=document.querySelector("#elecciones")
const opciones=document.querySelector(".opciones")

window.addEventListener("keydown",(event)=>{
    if(event.code=="Comma"){
            let text=" "+textarea.value;
            let elecciones=separation(text)
            opciones.innerHTML="";
            elecciones.forEach(element=>{
                let elecciontemplate=`<p>${element}</p>`
                opciones.insertAdjacentHTML("beforeend",elecciontemplate)
            })
    }
    else if(event.code=="Enter"){
        let text=" "+textarea.value;
        let elecciones=separation(text)
        opciones.innerHTML="";
            elecciones.forEach(element=>{
                if(element!=""){
                let elecciontemplate=`<p id="id">${element}</p>`
                opciones.insertAdjacentHTML("beforeend",elecciontemplate);
                }
            })
        let counter=0;
        function randomselection(){
            let ids=document.querySelectorAll("#id")
            if(counter<ids.length){
                if(ids[counter].previousSibling==null){
                    ids[counter].style.backgroundColor="green"
                }

                else if(ids[counter].previousSibling!=null){
                    ids[counter].previousSibling.style.backgroundColor="#e4e1e1b0"
                    ids[counter].style.backgroundColor="green"
                }
                else if(ids[counter].nextSibling==null){
                    ids[counter].style.backgroundColor="#e4e1e1b0"
                }
                counter++
            }
            else {
                ids[counter-1].style.backgroundColor="#e4e1e1b0"
                counter=0;
            }
        }
        
        let intervalo=setInterval(randomselection,65)
        function reiniciar(){
            clearInterval(intervalo)
            let ids=document.querySelectorAll("#id")
            let id=Math.floor(Math.random()*ids.length)
            ids.forEach(element=>{
                element.style.backgroundColor="#e4e1e1b0"
            })
            if(ids[id].style.backgroundColor!="green"){
            ids[id].style.backgroundColor="green"
            }
            textarea.value=""

        }
        setTimeout(reiniciar,3000)

        
        
    }
 })


function separation(string){
    let strings=[]
    let textos=string.substring(1)
    for(let i=0;i<string.length;i++)
    {
        if(textos.indexOf(",")!=-1){
            strings.push(textos.substring(0,textos.indexOf(",")))
            textos=textos.substring(textos.indexOf(",")+1,textos.length)  
        }
        
    }
    strings.push(textos)
    return strings
}


