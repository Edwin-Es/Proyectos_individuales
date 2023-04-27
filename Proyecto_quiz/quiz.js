//Preguntas
const preguntas=[
    {
        pregunta:"Que dia es hoy?",
        opc_correcta:"ahora es martes",
        opc_mal1:"ahora es abril",
        opc_mal2:"ahora es 2023",
    },
    {
        pregunta:"Que mes es ahora?",
        opc_correcta:"ahora es abril",
        opc_mal1:"ahora es lunes",
        opc_mal2:"ahora es 2023",
    },
    {
        pregunta:"Cuanto es 1+1",
        opc_correcta:"es 2",
        opc_mal1:"es 45",
        opc_mal2:"es 11",
    },
    {
        pregunta:"Cuanto es 2+2",
        opc_correcta:"es 4",
        opc_mal1:"es 22",
        opc_mal2:"es 44",
    },
    {
        pregunta:"Cuanto es 3+3",
        opc_correcta:"es 6",
        opc_mal1:"es 66",
        opc_mal2:"es 33",
    },
    {
        pregunta:"Cuanto es 4+4",
        opc_correcta:"es 8",
        opc_mal1:"es 44",
        opc_mal2:"es 400",
    },
    {
        pregunta:"Cuanto es 5+5",
        opc_correcta:"es 10",
        opc_mal1:"es 55",
        opc_mal2:"es 60",
    },
    {
        pregunta:"Cuanto es 6+6",
        opc_correcta:"es 12",
        opc_mal1:"es 90",
        opc_mal2:"es 66",
    },
    {
        pregunta:"Cuanto es 7+7",
        opc_correcta:"es 14",
        opc_mal1:"es 77",
        opc_mal2:"es 17",
    },
    {
        pregunta:"Cuanto es 8+8",
        opc_correcta:"es 16",
        opc_mal1:"es 160",
        opc_mal2:"es 81",
    },

]
//ordenramdom
function orden(){
    let nuevoorden=[];
    for(let i=0;i<preguntas.length;i++){
        let nuevo=Math.round(Math.random()*9)
        if(!nuevoorden.includes(nuevo)){
            nuevoorden.push(nuevo)
        }
        else i--;
    }
    return nuevoorden;
}
//ordenrespuestas
function orden2(){
    let nuevoorden=[];
    for(let i=0;i<3;i++){
        let nuevo=Math.round(Math.random()*2)
        if(!nuevoorden.includes(nuevo)){
            nuevoorden.push(nuevo)
        }
        else i--;
    }
    return nuevoorden;
}

let displaypreguntas="";

//html con formato ramdom
function ordenar(){
    let ordenamiento=[];
    let nuevo=orden();
    for(let j=0;j<nuevo.length;j++){
        ordenamiento.push(preguntas[nuevo[j]])
    }
    let displaypreguntas2="";
    let counter=1;
    ordenamiento.forEach(ordenare =>{
    displaypreguntas2+=`<div id="p${counter}">
        <h3>${counter} - ${ordenare.pregunta}</h3>
        <div>`
    let otroorden=orden2();
    otroorden.forEach(element=>{
        if(element==0) displaypreguntas2+=`<p id="seleccion" class="none">${ordenare.opc_correcta}</p>`;
        else if (element==1) displaypreguntas2+=`<p id="seleccion" class="none">${ordenare.opc_mal1}</p>`;
        else if (element==2) displaypreguntas2+=`<p id="seleccion" class="none">${ordenare.opc_mal2}</p>`;
    })    
    displaypreguntas2+=`</div>
    </div>`
        
    counter++;
    }
)
return displaypreguntas2
}

//constantes
const comenzar=document.querySelector("#comenzar");
const reiniciar=document.querySelector("#reiniciar");
const salir=document.querySelector("#salir");
const resultado=document.querySelector("#mensajeresultado");
const buenasomalas=document.querySelector("#buenasomalas");
const promedio=document.querySelector("#promedio");
const seccionpreguntas=document.querySelector(".preguntas");
const seccioninicio=document.querySelector(".inicio");
const seccionfinal=document.querySelector(".final");

//remover html insertado para poder agregar otro ramdom
function removehtml(child){
    b=document.getElementById(child)
    seccionpreguntas.removeChild(b)
}

comenzar.addEventListener("click",()=>{ 
    
    seccioninicio.style.display="none";
    seccionpreguntas.style.display="flex";
    //agregar html
    displaypreguntas+="";
    displaypreguntas+=ordenar();
    displaypreguntas+=`<button id="enviar" class="enviar">Resultado</button>`;
    seccionpreguntas.insertAdjacentHTML("afterbegin",displaypreguntas)
    //agregar variables para el html
    const enviar=document.querySelector("#enviar");
    const seleccion=document.querySelectorAll("#seleccion")
    //scroll top
    seccionpreguntas.scrollTo(x=0,y=0);
    //resultado
    enviar.addEventListener("click",()=>{
        seccionpreguntas.style.display="none";
        seccionfinal.style.display="flex";
        seccionpreguntas.scrollTo(x=0,y=0);
         //verificacion
        let buenas=0;
       seleccion.forEach(element=>{
            if(element.className=="seleccion"){
            for(let i=0;i<preguntas.length;i++)
            {
                if(element.textContent==preguntas[i].opc_correcta){
                    buenas++;
                }
            }
            }
        })
        
        if(buenas>=7) {resultado.textContent="Felicidades!"; resultado.style.color="#12ED19";}
        else {resultado.textContent="Opps! Vuelve a intentar"; resultado.style.color="red"}
        buenasomalas.textContent=`${buenas}/${preguntas.length}`
        promedio.textContent="Su promedio es:" + ((buenas/preguntas.length).toFixed(2))*10;
    })

    seleccion.forEach(element=>element.addEventListener("click",(event)=>{
        let eventtarget=event.target;
        
        //Seleccion de respuesta
            if(!eventtarget.className==""||!eventtarget.className=="noseleccion"||eventtarget.className=="none"){
            eventtarget.className="seleccion";
            }
            if(eventtarget.previousSibling==null){
            let final=eventtarget.nextSibling;
            final.className="noseleccion";
            final.nextSibling.className="noseleccion";
            }
            else if(eventtarget.nextSibling==null){
            let final=eventtarget.previousSibling;
            final.className="noseleccion";
            final.previousSibling.className="noseleccion";
            }
            else{
            eventtarget.nextSibling.className="noseleccion";
            eventtarget.previousSibling.className="noseleccion";
            }
    }))
    
})

reiniciar.addEventListener("click",()=>{
    seccionpreguntas.style.display="flex";
    seccionfinal.style.display="none";
    //borrado de preguntas anteriores
    for(let i=1; i<=preguntas.length;i++)
    {
        removehtml("p"+i)
    }
    //nuevas preguntas ramdom
    displaypreguntas="";
    displaypreguntas+=ordenar();
    seccionpreguntas.insertAdjacentHTML("afterbegin",displaypreguntas);
    seccionpreguntas.scrollTo(x=0,y=0);

        //agregar variables para el html
        const enviar=document.querySelector("#enviar");
        const seleccion=document.querySelectorAll("#seleccion")

    enviar.addEventListener("click",()=>{
        seccionpreguntas.style.display="none";
        seccionfinal.style.display="flex";
        seccionpreguntas.scrollTo(x=0,y=0);
         //verificacion
        let buenas=0;
       seleccion.forEach(element=>{
            if(element.className=="seleccion"){
            for(let i=0;i<preguntas.length;i++)
            {
                if(element.textContent==preguntas[i].opc_correcta){
                    buenas++;
                }
            }
            }
        })
        
        if(buenas>=7) {resultado.textContent="Felicidades!"; resultado.style.color="#12ED19";}
        else {resultado.textContent="Opps! Vuelve a intentar"; resultado.style.color="red"}
        buenasomalas.textContent=`${buenas}/${preguntas.length}`
        promedio.textContent="Su promedio es:" + ((buenas/preguntas.length).toFixed(2))*10;
    })

    seleccion.forEach(element=>element.addEventListener("click",(event)=>{
        let eventtarget=event.target;
        
        //Seleccion de respuesta
            if(!eventtarget.className==""||!eventtarget.className=="noseleccion"||eventtarget.className=="none"){
            eventtarget.className="seleccion";
            }
            if(eventtarget.previousSibling==null){
            let final=eventtarget.nextSibling;
            final.className="noseleccion";
            final.nextSibling.className="noseleccion";
            }
            else if(eventtarget.nextSibling==null){
            let final=eventtarget.previousSibling;
            final.className="noseleccion";
            final.previousSibling.className="noseleccion";
            }
            else{
            eventtarget.nextSibling.className="noseleccion";
            eventtarget.previousSibling.className="noseleccion";
            }
    }))
})

salir.addEventListener("click",()=>{
    seccioninicio.style.display="flex";
    seccionfinal.style.display="none";
    //borrado de preguntas
    for(let i=1; i<=preguntas.length;i++)
    {
        removehtml("p"+i)
    }
    displaypreguntas="";
    removehtml("enviar");
    
})



