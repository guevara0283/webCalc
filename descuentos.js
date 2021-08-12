function resultado(){
    var precio=parseInt(document.getElementById('precio').value);
    var descuento=parseInt(document.getElementById('descuento').value);
    var resultado=(precio*descuento)/100;
    var ahorro=(precio*descuento)/100;
   
   document.getElementById('ahorro').innerText = 'Su ahorro es de: $' + (ahorro);
   document.getElementById('resultado').innerText = 'El precio total a pagar con descuento es: $' + (precio - resultado);
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery
