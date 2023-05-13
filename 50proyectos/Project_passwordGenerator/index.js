const generate=document.getElementById("generate")
const copy=document.getElementById("copy")
const password=document.getElementById("password")
const passwordLength=document.getElementById("length")
const uppercase=document.getElementById("uppercase")
const lowercase=document.getElementById("lowercase")
const numbers=document.getElementById("numbers")
const simbols=document.getElementById("simbols")

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(password.value)
    password.value="Copied!"
    setTimeout(reset,1000)
    function reset(){
        password.value=""
    }
})

let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower="abcdefghijklmnopqrstuvwxyz"
let num="1234567890"
let sim="#*%$&";
let newPassword="";
let choice;
let select=[];

function generation(){
    if(lowercase.checked){
        select.push(...lower)
    }
    if(uppercase.checked){
        select.push(...upper)
    }
    if(numbers.checked){
        select.push(...num)
    }
    if(simbols.checked){
        select.push(...sim)
    }
    if(!lowercase.checked&&!uppercase.checked&&!numbers.checked&&!simbols.checked){
        password.style.color="red"
        return "Please select an option"
    }
    password.style.color="#fff"
    return selection(select)
}
generate.addEventListener("click",()=>{   
    newPassword=""
    select=[]
    password.value=generation(passwordLength.value)
})


function selection(array){
    for(let i=0;i<passwordLength.value;i++){
        newPassword+=array[Math.floor(Math.random()*array.length)]
    }
    return newPassword
}