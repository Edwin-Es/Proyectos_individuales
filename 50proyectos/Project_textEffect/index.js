const innerText=document.getElementById("innerText")

let text="we love programming!!!";
let count=0;
let currentShowing="";
function showing(){
    if(count==0){
        currentShowing=""
        innerText.textContent=currentShowing+text[count]
        count++
    }
    else if(count<text.length){
        currentShowing=""
        for(let i=0;i<=count;i++){
            currentShowing+=text[i]
        }
    innerText.textContent=currentShowing
    count++
    }
    else{
    count=0
    }
}

setInterval(showing,200)