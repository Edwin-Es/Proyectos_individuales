const content=document.querySelectorAll(".content");
const container=document.querySelector(".container")
moverinicio()

function moverinicio(){
    for(let i=2;i<content.length;i++){
        if(i%2==0){
            content[i].style.transform="translateX(1000px)"
        }
        else content[i].style.transform="translateX(-1000px)"
    }
}

window.addEventListener("scroll",mover)

let avance=(container.clientHeight-window.innerHeight)/content.length;
let currentContent=1;


function mover(){
    if(window.scrollY>avance && window.scrollY<avance*(content.length+4)){
        let coord=content[currentContent].getBoundingClientRect()
        if(currentContent<content.length){
            if(coord.top<=180&&currentContent<=(content.length-3)){
            currentContent++
            coord=content[currentContent].getBoundingClientRect()
            content[currentContent].className="content show";
            content[currentContent].style.transform="translateX(0px)";
            }
            if(coord.top>=300){
            content[currentContent].className="content";
            if(currentContent%2==0)
            content[currentContent].style.transform="translateX(1000px)";
            else content[currentContent].style.transform="translateX(-1000px)";
            currentContent--;
            coord=content[currentContent].getBoundingClientRect();
            }

    }
}
}
