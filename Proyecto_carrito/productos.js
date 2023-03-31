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
let contador=1;
productos.forEach(product=>{
    html=html+`<div class="producto"> <img src="${product.img}"/><div class="precio"><p>${product.nombre} </p><p id="precio" name="otra">${product.precio}</p></div><p>${product.descripcion}</p><div class="radio"><input type="radio"  name="talla${product.id}"><label>S</label><input type="radio" name="talla${product.id}"><label>M</label><input type="radio"  name="talla${product.id}" ><label>L</label> </div><button "type="button" id="id${product.id}">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
    contador++;
});

let con=document.getElementById("container");
con.insertAdjacentHTML("afterbegin",html)

let carrito=[];
let cart="";
document.getElementById("id1").onclick = function(){
    carrito.push(productos[0]);
    cart=cart+`<div class="producto"> <img src="${carrito[0].img}"/><div class="precio"><p>${carrito[0].nombre} </p><p id="precio" name="otra">${carrito[0].precio}</p></div><p>${carrito[0].descripcion}</p><div class="radio"><input type="radio"  name="talla${carrito[0].id}"><label>S</label><input type="radio" name="talla${carrito[0].id}"><label>M</label><input type="radio"  name="talla${carrito[0].id}" ><label>L</label> </div><button "type="button" id="id${carrito[0].id}">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
    document.getElementById("carrito").innerHTML=cart;
}
document.getElementById("id2").onclick = function(){
    carrito.push(productos[1]);
    document.getElementById("cart1").innerHTML=carrito[1].id;
    cart=cart+`<div class="producto"> <img src="${carrito[1].img}"/><div class="precio"><p>${carrito[1].nombre} </p><p id="precio" name="otra">${carrito[1].precio}</p></div><p>${carrito[1].descripcion}</p><div class="radio"><input type="radio"  name="talla${carrito[1].id}"><label>S</label><input type="radio" name="talla${carrito[1].id}"><label>M</label><input type="radio"  name="talla${carrito[1].id}" ><label>L</label> </div><button "type="button" id="id${carrito[1].id}">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
    document.getElementById("carrito").innerHTML=cart;
}

/*carrito.forEach(ver=>{
    cart=cart+`<div class="producto"> <img src="${ver.img}"/><div class="precio"><p>${ver.nombre} </p><p id="precio" name="otra">${ver.precio}</p></div><p>${ver.descripcion}</p><div class="radio"><input type="radio"  name="talla${ver.id}"><label>S</label><input type="radio" name="talla${ver.id}"><label>M</label><input type="radio"  name="talla${ver.id}" ><label>L</label> </div><button "type="button" id="id${product.id}">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
});

let carri=document.getElementById("carrito");
carri.insertAdjacentHTML("afterbegin",cart)
*/