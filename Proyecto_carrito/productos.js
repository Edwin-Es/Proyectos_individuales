var productos=[
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
    html=html+`<div class="producto"> <img src="${product.img}"/><div class="precio"><p>${product.nombre} </p><p id="precio" name="otra">${product.precio}</p></div><p>${product.descripcion}</p><div class="radio"><input type="radio"  name="talla${product.id}"><label>S</label><input type="radio" name="talla${product.id}"><label>M</label><input type="radio"  name="talla${product.id}" ><label>L</label> </div><button "type="button" id="id${product.id}">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
});

let con=document.getElementById("container");
con.insertAdjacentHTML("afterbegin",html);
let count=0;
let carrito=[];
let cart="";
document.getElementById("cart1").innerHTML=count;
document.getElementById("id1").onclick = function(){addcart(0)}
document.getElementById("id2").onclick = function(){addcart(1)}
document.getElementById("id3").onclick = function(){addcart(2)}
document.getElementById("id4").onclick = function(){addcart(3)}
document.getElementById("id5").onclick = function(){addcart(4)}
document.getElementById("id6").onclick = function(){addcart(5)}
document.getElementById("id7").onclick = function(){addcart(6)}
document.getElementById("id8").onclick = function(){addcart(7)}


function addcart(num){
    carrito.push(productos[num]);
    cart=cart+`<div class="producto2"> <img src="${carrito[num].img}"/><div class="precio"><p>${carrito[num].nombre} </p><p id="precio" name="otra">${carrito[num].precio}</p></div><button type="button"><i class="bi bi-cart-x-fill"></i></button></div>`;
    document.getElementById("carrito").innerHTML=cart;
    count+=1;
    document.getElementById("cart1").innerHTML=count;
}

document.getElementById("cart2").onclick=function(){ver()}

function ver(){
    let visible= document.getElementById("carrito").className
    if(visible=="no-visible"){
        document.getElementById("carrito").setAttribute("class","visible")
    }
    if(visible=="visible"){
        document.getElementById("carrito").setAttribute("class","no-visible")
    }
}

