const list=document.querySelector(".list")
const content=document.querySelector(".content")
const cerrar=document.querySelector(".close")
const li=document.querySelectorAll("li")
const opciones=document.querySelector(".opciones")


list.addEventListener("click",()=>{
    content.style.transform="translate(200px, -250px) rotate(-20deg)"
    list.style.transform="translate(150px,-50px) rotate(-50deg)"
    cerrar.style.transform="translate(125px,125px) rotate(0)"
    opciones.style.transform="translate(0px, 450px)"
    li[0].style.transform="translate(50px, 0px)"
    li[1].style.transform="translate(70px, 0px"
    li[2].style.transform="translate(90px, 0px)"

})

cerrar.addEventListener("click",()=>{
    content.style.transform="translate(0px, 0px) rotate(0)"
    cerrar.style.transform="translate(0,200px) rotate(50deg)"
    list.style.transform="translate(125px,125px) rotate(0)"
    opciones.style.transform="translate(-50px, 450px)"
    li[0].style.transform="translate(-25px, 0px)"
    li[1].style.transform="translate(-50px, 0px"
    li[2].style.transform="translate(-75px, 0px)"
})
