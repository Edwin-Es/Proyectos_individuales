var productos=[
    { 
        id:1,
        img:"img/camisa1.png",
        nombre:"Camisa Playera",
        precio: 15.50,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:2,
        img:"img/camisa2.png",
        nombre:"Camisa Polo",
        precio: 45.50,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:3,
        img:"img/camisa3.png",
        nombre:"Camisa Deportiva",
        precio: 25.50,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:4,
        img:"img/camisa4.png",
        nombre:"Camisa Demim",
        precio: 29.99,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:5,
        img:"img/camisa5.png",
        nombre:"Camisa Cuadros",
        precio: 39.99,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:6,
        img:"img/camisa6.png",
        nombre:"Camisa Formal Roja",
        precio: 49.99,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:7,
        img:"img/camisa7.png",
        nombre:"Camisa Bicolor",
        precio: 59.99,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:8,
        img:"img/camisa8.png",
        nombre:"Camisa Formal",
        precio: 69.99,
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
]
let html="";

productos.forEach(product=>{
    html=html+`<div class="producto"> <img src="${product.img}"/><div class="precio"><p>${product.nombre} </p><p id="precio" name="otra">$${product.precio}</p></div><p>${product.descripcion}</p><div class="radio"><input type="radio"  name="talla${product.id}"><label>S</label><input type="radio" name="talla${product.id}"><label>M</label><input type="radio"  name="talla${product.id}" ><label>L</label> </div><button "type="button" id="id${product.id}">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
});
let price=0.00;
let con=document.getElementById("container");
con.insertAdjacentHTML("afterbegin",html);
let count=0;
let carrito=[];
let cart="";
document.getElementById("cart1").innerHTML=count;
document.getElementById("id1").onclick = function(){addcart(0); borrar()}
document.getElementById("id2").onclick = function(){addcart(1); borrar()}
document.getElementById("id3").onclick = function(){addcart(2); borrar()}
document.getElementById("id4").onclick = function(){addcart(3); borrar()}
document.getElementById("id5").onclick = function(){addcart(4); borrar()}
document.getElementById("id6").onclick = function(){addcart(5); borrar()}
document.getElementById("id7").onclick = function(){addcart(6); borrar()}
document.getElementById("id8").onclick = function(){addcart(7); borrar()}
let i=0;

function addcart(num){
    price=0.00;
    cart="";
    i=0;
    carrito.push(productos[num]);
    carrito.forEach(carro=>{
        cart=cart +`<div class="producto2"> <img src="${carro.img}"/><div class="precio"><p>${carro.nombre} </p><p id="precio" name="otra">$${carro.precio}</p></div><button type="button" id="${i}"><i class="bi bi-cart-x-fill"></i></button></div>`;
        i++;   
        price+=carro.precio;
        
    })
    cart=cart+`<p id="total"></p>`;
    document.getElementById("carrito").innerHTML=cart;
    document.getElementById("total").innerHTML=" Total: $"+price.toFixed(2);
    count+=1;
    document.getElementById("cart1").innerHTML=count;
    
}

    
function borrar(){
    let ids=carrito.length;
    carrito.forEach(comprobar=>{
    for(let j=0;j<ids;j++){
    document.getElementById(`${j}`).onclick=function(){
        var indice = j; // obtenemos el indice
        carrito.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
        cart="";
        i=0;
        price=0.00;
        carrito.forEach(carro=>{
            cart=cart +`<div class="producto2"> <img src="${carro.img}"/><div class="precio"><p>${carro.nombre} </p><p id="precio" name="otra">${carro.precio}</p></div><button type="button" id="${i}"><i class="bi bi-cart-x-fill"></i></button></div>`;
            i++;
            price+=carro.precio;
        })
        cart=cart+`<p id="total"></p>`;
    
        document.getElementById("carrito").innerHTML=cart;
        document.getElementById("total").innerHTML=" Total: $"+price.toFixed(2);
        count-=1;
        document.getElementById("cart1").innerHTML=count;
        borrar();
    }
}  })}


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


