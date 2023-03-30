let productos=[
    { 
        id:1,
        img:"img/camisa1.png",
        nombre:"Camisa Playera",
        precio: "$15.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:2,
        img:"img/camisa2.png",
        nombre:"Camisa Polo",
        precio: "$45.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:3,
        img:"img/camisa3.png",
        nombre:"Camisa Deportiva",
        precio: "$25.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:4,
        img:"img/camisa4.png",
        nombre:"Camisa Demim",
        precio: "$29.99",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:5,
        img:"img/camisa5.png",
        nombre:"Camisa Cuadros",
        precio: "$39.99",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:6,
        img:"img/camisa6.png",
        nombre:"Camisa Formal Roja",
        precio: "$49.99",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:7,
        img:"img/camisa7.png",
        nombre:"Camisa Bicolor",
        precio: "$59.99",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:8,
        img:"img/camisa8.png",
        nombre:"Camisa Formal",
        precio: "$69.99",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
]
let html="";

productos.forEach(product=>{
    html=html+`<div class="producto"> <img src="${product.img}"/><div class="precio"><p>${product.nombre} </p><p id="precio" name="otra">${product.precio}</p></div><p>${product.descripcion}</p><div class="radio"><input type="radio"  name="talla${product.id}"><label>S</label><input type="radio" name="talla${product.id}"><label>M</label><input type="radio"  name="talla${product.id}" ><label>L</label> </div><button class="${product.id}"type="button" id="id" onclick="add()">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
});

document.getElementById("container").innerHTML=html;
var carrito=[];
document.querySelector("#id").addEventListener("click", add);
document.getElementById("id").addEventListener("click", add);
function add(){
    let car;
    car=productos.filter(product=>product.id==evento.className);
    carrito.push(car);

}

document.getElementById("cart1").innerHTML=carrito.length;




