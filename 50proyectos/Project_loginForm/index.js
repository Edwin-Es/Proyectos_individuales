const inputs=document.querySelectorAll("input")
const labels=document.querySelectorAll("label")
const spans=document.querySelectorAll("span")

//nombrar();
function nombrar(){
    inputs.forEach(element=>{
        labels.forEach(label=>{
        if(label.getAttribute("for")==element.getAttribute("id"))
        {
            label.textContent=label.getAttribute("for")
        }
    })})
}

inputs.forEach(element=>{
    
    element.addEventListener("focus",()=>{
        labels.forEach((label,key,arreglo)=>{
            if(label.getAttribute("for")==element.getAttribute("id"))
            {
                spans.forEach(span=>{
                    if(span.parentElement.getAttribute("for")==label.getAttribute("for")){
                        span.style.transform="translateY(-35px)"
                        span.style.transitionTimingFunction="cubic-bezier(.8,.58,.72,1.73)"
                        span.style.color="#add8e6"
                    }
                })
            }
        })
    })
    
       
    element.addEventListener("blur",()=>{
        labels.forEach(label=>{
            if(element.value.length==0){
            if(label.getAttribute("for")==element.getAttribute("id"))
            {
                spans.forEach(span=>{
                    if(span.parentElement.getAttribute("for")==label.getAttribute("for")){
                        span.style.transform="translateY(0px)"
                        span.style.transitionTimingFunction="cubic-bezier(.8,.58,.72,1.73)"
                        span.style.color="#ffffff"
                    }
                })
            
            }
        }
        })
    })
    
})
