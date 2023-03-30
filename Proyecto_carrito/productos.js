let cart=5;
document.getElementById("cart1").innerHTML=cart;


let productos=[
    { 
        id:1,
        img:"img/camisa1.jpg",
        nombre:"Camisa Playera",
        precio: "$15.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:2,
        img:"img/camisa2.jpg",
        nombre:"Camisa Polo",
        precio: "$45.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:3,
        img:"img/camisa3.jpg",
        nombre:"Camisa formal",
        precio: "$45.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    {
        id:4,
        img:"img/camisa1.jpg",
        nombre:"Camisa formal",
        precio: "$25.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },

]

let html="";

productos.forEach(product=>{
    html=html+`<div class="producto"> <img src="${product.img}"/><div class="precio"><p>Camisa Playera </p><p id=>${product.precio}</p></div><p>${product.descripcion}</p><div class="radio"><input type="radio" name="talla1"><label>S</label><input type="radio" name="talla${product.id}"><label>M</label><input type="radio" name="talla1"><label>L</label> </div><button type="button" id="producto1">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
});

document.getElementById("container").innerHTML=html;

/*`<div class="producto"> <img src="${productos.camisa1.img}"/><div class="precio"><p>Camisa Playera </p><p id=>${productos.camisa1.precio}</p></div><p>${productos.camisa1.descripcion}</p><div class="radio"><input type="radio" name="talla1"><label>S</label><input type="radio" name="talla1"><label>M</label><input type="radio" name="talla1"><label>L</label> </div><button type="button" id="producto1">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;*/
