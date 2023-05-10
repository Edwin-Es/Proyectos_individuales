const contents=document.querySelectorAll(".content")
load()



function load(){
    contents.forEach(content=>{
        let children=content.children
        for(let i=0;i<children.length;i++){
            children[i].classList.add("loading")
        }
        var p = document.createElement("span");
        p.classList.add("load")
        content.appendChild(p);
        let loading=setInterval(loadcontent,30)
        setTimeout(()=>{
            
            content.removeChild(p);
            for(let i=0;i<children.length;i++){
            children[i].classList.remove("loading")
            }
        },2000)
    })
}
let move=0;
function loadcontent(){
    const spans=document.querySelectorAll(".load");
    spans.forEach(span=>{
        span.style.left=`${move}%`
        move+=1;
        if(move==100)move=0;
})
}
