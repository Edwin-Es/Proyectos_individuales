const password=document.getElementById("password")
const requirements=document.querySelector(".requirements")
const requirementList=document.querySelectorAll(".requirements ul li")
const btnDone=document.getElementById("done")
const loginDisplay=document.querySelector(".login")
const success=document.querySelector(".successful")

let uppercase="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
let numbers="0 1 2 3 4 5 6 7 8 9";
let simbols="# ! $ # % & / = ? ¡ ¿";

password.addEventListener("focus",()=>{
    requirements.style.display="block"
})
password.addEventListener("blur",()=>{
    requirements.style.display="none"
})

password.addEventListener("input",()=>{
    verifyLength(password)
    verifyUpper(password)
    verifyNumbers(password)
    verifySimbols(password)
    complete()
})

btnDone.addEventListener("click", ()=>{
    loginDisplay.style.display="none";
    success.style.display="flex"
})

function verifyLength(password){
    if(password.value.length!=0){
        requirementList.forEach(element=>{
            element.classList.add("incomplete")
        })
    }
    if(password.value.length==0){
        requirementList.forEach(element=>{
                element.removeAttribute("class")  
        })
    }
    if(password.value.length>=8){
        requirementList[0].classList.remove("incomplete")
        requirementList[0].classList.add("complete")
    }
}

function verifyUpper(password){
    for(let i=0;i<password.value.length;i++){
        if(uppercase.includes(password.value[i])){
            requirementList[1].classList.remove("incomplete")
            requirementList[1].classList.add("complete")
            break;
        }
        else{
            requirementList[1].classList.add("incomplete")
        }
    }
}

function verifyNumbers(password){
    for(let i=0;i<password.value.length;i++){
        if(numbers.includes(password.value[i])){
            requirementList[2].classList.remove("incomplete")
            requirementList[2].classList.add("complete")
            break;
        }
        else{
            requirementList[2].classList.add("incomplete")
        }
    }
}

function verifySimbols(password){
    for(let i=0;i<password.value.length;i++){
        if(simbols.includes(password.value[i])){
            requirementList[3].classList.remove("incomplete")
            requirementList[3].classList.add("complete")
            break;
        }
        else{
            requirementList[3].classList.add("incomplete")
        }
    }
}

function complete(){
    if(requirementList[0].classList=="complete"&&requirementList[1].classList=="complete"&&requirementList[2].classList=="complete"&&requirementList[3].classList=="complete")
    {
        requirements.style.display="none"
        btnDone.style.opacity="1";
        btnDone.removeAttribute("disabled")
    } 
    else {
        requirements.style.display="block"
        btnDone.style.opacity="0.8";
        btnDone.setAttribute("disabled","true")
    }
}