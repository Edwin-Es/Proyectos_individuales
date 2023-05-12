const images=document.querySelectorAll(".img")
const ps=document.querySelectorAll("#likes")

function inicio(){
    ps.forEach(p=>{
        p.innerHTML=`0`;
    })
}
inicio()

images.forEach((img,key)=>{
    img.addEventListener("dblclick", (e) => {
        const heart = document.createElement('span')
        heart.classList.add('heart')
        heart.innerHTML="&#10084;"
        img.appendChild(heart)
        setTimeout(() => heart.remove(), 800)
        let likes=ps[key].textContent
        likes++
        ps[key].textContent=likes
    })
})

//