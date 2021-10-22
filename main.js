let cantVegano = 0;
let cantNormal = 0;
let precioVegano = 3500;
let precioNormal = 3000;
let pagar = 0;

function Pedido(nombreHelado, base){
    this.nombreHelado = nombreHelado;
    this.base = base;
    this.tipoBase = function(){
        if(base == "vegano"){
            cantVegano = cantVegano + 1;
        }else{
            cantNormal = cantNormal + 1;
        }
    } 
}


let pedir = prompt("Desea hacer un pedido de helado: si/no");
while(pedir != "no"){
    
    let helado = prompt("ingrese el tipo de helado: h1, h2, h3, h4, h5, h6");
    let base = prompt("Ingrese el tipo de base: vegano o normal");
    let nuevoPedido = new Pedido(helado, base);
    nuevoPedido.tipoBase();
    pedir = prompt("Desea agregar otro helado: si/no");
    
}    
pagar = (cantVegano * precioVegano) + (cantNormal * precioNormal);
alert("hola el monto a pagar sera: " + pagar + " pesos.");

    