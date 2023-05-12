const lefts=document.querySelectorAll(".leftinner")
const rigths=document.querySelectorAll(".rigthinner")
const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")


let images=[
    "https://jooinn.com/images/photography-of-mountain-with-blue-sky-as-backgroundw.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/156c8129423755.55f1fac2daef9.jpg",
    "https://www.allaboutgardening.com/wp-content/uploads/2022/11/pink-roses-1200x667.jpeg",
    "https://cdn.wallpapersafari.com/69/71/2DASzb.jpg"
]
let colors=["#096ca5","#06343a","#c41297","#df8a0a"]

function setBackground(){
    for(let i=0;i<lefts.length;i++){
        lefts[i].style.backgroundColor=`${colors[i]}`
    }

    let j=0;
    for(let i=rigths.length;i>=1;i--){
        rigths[i-1].style.backgroundImage=`url("${images[j]}")`
        j++;
    }
    translate()
    function translate(){
        lefts[0].style.transform=`translateY(-100vh)`;
        lefts[1].style.transform=`translateY(-200vh)`;
        lefts[2].style.transform=`translateY(-300vh)`;
        lefts[3].style.transform=`translateY(-300vh)`;
    }
}
setBackground()

let count=3;

btn1.addEventListener("click",()=>{
   if(count==3){
    reset()
    reset()
    reset()
    count=0;
   }
   else if(count==0){
    lefts[0].style.transform=`translateY(-100vh)`;
    lefts[1].style.transform=`translateY(-100vh)`;
    rigths[3].style.transform="translateY(-200vh)";
    rigths[2].style.transform="translateY(-200vh)";
    count++
   }
   else if(count==1){
    lefts[1].style.transform=`translateY(-200vh)`;
    lefts[2].style.transform=`translateY(-200vh)`;
    rigths[2].style.transform="translateY(-100vh)";
    rigths[1].style.transform="translateY(-100vh)";
    count++
   }
   
   else if(count==2){
    lefts[2].style.transform=`translateY(-300vh)`;
    lefts[3].style.transform=`translateY(-300vh)`;
    rigths[1].style.transform="translateY(0)";
    rigths[0].style.transform="translateY(0)";
    count++
   }
})

btn2.addEventListener("click",()=>{
    if(count==3){
        rigths[0].style.transform="translateY(-100vh)";
        rigths[1].style.transform="translateY(-100vh)";
        lefts[3].style.transform="translateY(-200vh)";
        lefts[2].style.transform="translateY(-200vh)";
        count--
    }
    else if(count==2){
        rigths[1].style.transform="translateY(-200vh)";
        rigths[2].style.transform="translateY(-200vh)";
        lefts[2].style.transform="translateY(-100vh)";
        lefts[1].style.transform="translateY(-100vh)";
        count--
    }
    else if(count==1){
        rigths[2].style.transform="translateY(-300vh)";
        rigths[3].style.transform="translateY(-300vh)";
        lefts[1].style.transform="translateY(0)";
        lefts[0].style.transform="translateY(0)";
        count--;
    }
    else if(count==0){
        reset2()
        reset2()
        reset2()
        count=3
    }
})



function reset(){
    if(lefts[3].style.transform==`translateY(-300vh)`){
        lefts[0].style.transform=`translateY(-100vh)`;
        lefts[1].style.transform=`translateY(-200vh)`;
        lefts[2].style.transform=`translateY(-200vh)`;
        lefts[3].style.transform=`translateY(-200vh)`;
        rigths[0].style.transform=`translateY(-100vh)`;
        rigths[1].style.transform=`translateY(-100vh)`;
    }
    else if( lefts[3].style.transform==`translateY(-200vh)`){
        lefts[0].style.transform=`translateY(-100vh)`;
        lefts[1].style.transform=`translateY(-100vh)`;
        lefts[2].style.transform=`translateY(-100vh)`;
        lefts[3].style.transform=`translateY(-100vh)`;
        rigths[1].style.transform=`translateY(-200vh)`;
        rigths[2].style.transform=`translateY(-200vh)`;
    }
    else if( lefts[3].style.transform==`translateY(-100vh)`){
        lefts[0].style.transform=`translateY(0)`;
        lefts[1].style.transform=`translateY(0)`;
        lefts[2].style.transform=`translateY(0)`;
        lefts[3].style.transform=`translateY(0)`;
        rigths[2].style.transform=`translateY(-300vh)`;
        rigths[3].style.transform=`translateY(-300vh)`;
    }
}


function reset2(){
    if(rigths[3].style.transform=="translateY(-300vh)"){
        rigths[3].style.transform="translateY(-200vh)";
        rigths[2].style.transform="translateY(-200vh)";
        lefts[0].style.transform="translateY(-100vh)";
        lefts[1].style.transform="translateY(-100vh)";
    }
    else if(rigths[2].style.transform=="translateY(-200vh)"){
        rigths[2].style.transform="translateY(-100vh)";
        rigths[1].style.transform="translateY(-100vh)";
        lefts[1].style.transform="translateY(-200vh)";
        lefts[2].style.transform="translateY(-200vh)";
    }
    else if(rigths[2].style.transform=="translateY(-100vh)"){
        rigths[1].style.transform="translateY(0px)";
        rigths[0].style.transform="translateY(0px)";
        lefts[2].style.transform="translateY(-300vh)";
        lefts[3].style.transform="translateY(-300vh)";
    }

}
