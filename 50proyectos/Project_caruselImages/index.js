const images=[
    "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsJPFj2qnnUa-3-gLZHKfc1IBs44uJ84fow&usqp=CAU",
    "https://photoscissors.com/images/samples/3-before.jpg",
    "https://cdn.pixabay.com/photo/2015/02/24/15/41/wolf-647528_1280.jpg",
    "https://ik.imagekit.io/ikmedia/backlit.jpg"
]
const spanImages=document.querySelectorAll(".img")
const prev=document.getElementById("prev")
const next=document.getElementById("next")
const carrussel=document.querySelector(".images")

let counter=0;
settingBackgrounds()

let interval = setInterval(run, 2000)

function run() {
    counter++
    changeImage()
}

function changeImage() {
    if(counter > spanImages.length - 1) {
        counter = 0
    } else if(counter < 0) {
        counter = spanImages.length - 1
    }

    carrussel.style.transform = `translateX(${-counter * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

next.addEventListener('click', () => {
    counter++
    changeImage()
    resetInterval()
})

prev.addEventListener('click', () => {
    counter--
    changeImage()
    resetInterval()
})




function settingBackgrounds(){
    for(let i=0;i<spanImages.length;i++){
        spanImages[i].style.backgroundImage=`url("${images[i]}")`
        
    }
}