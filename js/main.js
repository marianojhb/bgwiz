

// $(function(){    
//     var sector = new Array ();
//     sector[0] = $('#detalle').html();
//     var detalle = new Array ();
//     var nuevodetalle = '<div class="boxed">' + detalle + '</div>';

// var nombre = $('name').val();
// console.log(nombre);


// var cantidadDetalles = 1;

// agregarDetalle = function (){
//         cantidadDetalles++;
//         console.log(cantidadDetalles);
//         for (let i=0;i<cantidadDetalles;i++){
//             console.log('el numero es ' + i);
//         }
//         // $('#detalle').after(nuevodetalle);
//         // alert(nuevodetalle);
//     }
    
//     // });

// var detalle = new Array();


// detalle[0] = new Array("12.4 mts","1.5 mts","3-4 cm");
// detalle[1] = new Array("41.3 mts","2 mts","4-5 cm");

// console.log(detalle[1][0]);

// for (d in detalle) {
//     for (campos in d) {
//         console.log(campos(d));
//     }
// }



// detalle.forEach(d => {console.log(d)})
// let products = [
//     {
//       name: "chair",
//       inventory: 5,
//       unit_price: 45.99
//     },
//     {   
//       name: "table",
//       inventory: 10,
//       unit_price: 123.75
//     },
//     {
//       name: "sofa",
//       inventory: 2,
//       unit_price: 399.50
//     }
//   ];
//   function listProducts(prods) {
//     let product_names = [];
//     for (let i=0; i<prods.length; i+=1) {
//      product_names.push(prods[i].name);
//     }
//     return product_names;
//   }
//   console.log(listProducts(products));
//   function totalValue(prods) {
//     let inventory_value = 0;
//     for (let i=0; i<prods.length; i+=1) {
//       inventory_value += prods[i].inventory * prods[i].unit_price;
//     }
//     return inventory_value;
//   }
//   console.log(totalValue(products));


// nombre.oninput = () => {
//     var nombre = document.getElementById('nombre').value;
//     console.log(nombre);
// }


var linealength = 1; // cantidad de lineas

var linea = []; // array con cada linea

// logueo cada tecla solo en la linea 0
// linea0.oninput = () => {
//     var tnombre = [];
//     var tapellido = [];
//         tnombre[0] = document.getElementsByName("tnombre")[0].value;
//         tapellido[0] = document.getElementsByName("tapellido")[0].value;
//         console.log(tnombre[0] + ' ' + tapellido[0]);
//     }




var tnombre = [];
var tapellido = [];




// boton agregar  para nuevas lineas. ver que linealenght se incrementa
function agregarLinea() {
    var linea= $('.linea').clone();
    linea.last().appendTo('body');
    linea.last().attr('id','linea' + (linealength));
    linealength+=1;
    console.log(linealength); // confirmo el tamaño del array se corresponda con la cantidad de secciones visibles
}   

// boton remover linea 
function removerLinea() {
    $(".linea").click(function(e) {
        $(this).remove();
    });
    linealength-=1;
    console.log(linealength); // confirmo el tamaño del array se corresponda con la cantidad de lineas visibles
}


detalle.oninput = () => {
    $("input[name='tnombre']").each(function() {
        console.log(this.value);
    });
    $("input[name='tapellido']").each(function() {
        console.log(this.value);
    });
    }
