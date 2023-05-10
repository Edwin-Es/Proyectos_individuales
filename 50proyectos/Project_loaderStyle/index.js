const triangle=document.querySelector(".triangle")
const triangle2=document.querySelector(".triangle2")

let rotate1=0;
let rotate2=0;

function rotate(){
    function rotatetriangle1(){
        if(rotate1==720)rotate1=0
        triangle.style.transform=`rotate(${rotate1}deg)`
        rotate1+=10;
    }
    
    function rotatetriangle2(){
        if(rotate2==720)rotate2=0
        triangle2.style.transform=`rotate(${rotate2}deg)`
        rotate2+=10;
        

    }
    
    rotatetriangle1()
    rotatetriangle2()
}

setInterval(rotate,75)