let cart=5;
let precio="$15.00";
document.getElementById("cart1").innerHTML=cart;


let productos={
    camisa1:{ 
        img:"img/camisa1.jpg",
        nombre:"Camisa Playera",
        precio: "$15.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    },
    camisa2:{
        img:"img/camisa2.jpg",
        nombre:"Camisa Polo",
        precio: "$45.50",
        descripcion: "Camisa de algodon, resistentes a lavadas y climas humedos",
        talla:"",
    }

};

document.getElementById("container").innerHTML=`<div class="producto"> <img src="${productos.camisa1.img}"/><div class="precio"><p>Camisa Playera </p><p id=>${productos.camisa1.precio}</p></div><p>${productos.camisa1.descripcion}</p><div class="radio"><input type="radio" name="talla1"><label>S</label><input type="radio" name="talla1"><label>M</label><input type="radio" name="talla1"><label>L</label> </div><button type="button" id="producto1">Agregar al carrito <i class="bi bi-cart4"></i></button> </div>`;
