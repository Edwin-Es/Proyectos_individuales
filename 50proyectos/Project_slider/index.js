const images=[
    "https://www.tuexperto.com/wp-content/uploads/2022/01/paginas-descargar-fondos-de-pantalla-1200x640.jpg",
    "https://fondosmil.com/fondo/49835.jpg",
    "https://news.microsoft.com/wp-content/uploads/prod/sites/61/2018/01/forza-horizon3-4k.jpg",
    "https://www.todofondos.net/wp-content/uploads/68-fondos-de-pantalla-coloridos-del-leon.-wallpaper-4k-ultra-hd-de-colores-scaled.jpg",
    "https://images.hdqwalls.com/download/spongebob-and-gary-cute-4k-6x-2560x1440.jpg",
    "https://images4.alphacoders.com/936/936378.jpg"
]

const body=document.querySelector("body");
const previous=document.querySelector(".btn2")
const next=document.querySelector(".btn")

let counter=0;
imageselector();
function imageselector(){
    if(counter<images.length && counter>=0){
    body.style.backgroundImage=`url("${images[counter]}")`}
    else if(counter<0){
        counter=images.length-1;
        body.style.backgroundImage=`url("${images[counter]}")`
    }
    else {
        counter=0;
        body.style.backgroundImage=`url("${images[counter]}")`
    }
    
}

previous.addEventListener("click",()=>{
    counter--;
    imageselector()
})

next.addEventListener("click",()=>{
    counter++;
    imageselector()
})