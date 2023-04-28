const steps=document.querySelectorAll(".steps")
const prev=document.querySelector("#prev")
const next=document.querySelector("#next")
const currentwidth=document.querySelector("#progress")
const progressbar=document.querySelector("#progressBar")
const placeholder=document.querySelector(".progressBarholder")

next.addEventListener("click", nextstep)
prev.addEventListener("click", prevstep)

let counter=1;
let current=((currentwidth.offsetWidth-steps[0].offsetWidth*4)/(steps.length+1))
let width=0;

placeholder.style.width=(currentwidth.offsetWidth-current*2)+"px";
function nextstep(){
    progressbar.style.left=current+"px";
    if(counter<steps.length){
        if(counter==1){
            prev.disabled = false;
            
        }
        if(counter>=1 && counter<steps.length){
            width+=current+steps[0].offsetWidth;
            progressbar.style.width=width+"px";
        }
        steps[counter].className="steps active";
        counter++;
        if(counter==steps.length) next.disabled = true;
    }
}

function prevstep(){
    counter--;
    steps[counter].className="steps";
    if(counter==1){
        prev.disabled = true;
    }
    if(counter>=1 && counter<steps.length){
        width-=current+steps[0].offsetWidth;
        progressbar.style.width=width+"px";
    }
    if(counter==(steps.length-1)) next.disabled = false;
}