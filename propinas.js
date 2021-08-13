function resultado(){
    var precio=parseInt(document.getElementById('precio').value);
    var descuento=parseInt(document.getElementById('descuento').value);
    var resultado=(precio*descuento)/100;
    var ahorro=(precio*descuento)/100;
   
    document.getElementById('resultado').innerText = 'Cuenta total con propina: $' + (precio + resultado);  
    document.getElementById('ahorro').innerText = 'La propina es de: $' + (ahorro);
   
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery
