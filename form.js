document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('Name').value;
  if(Name.length == 0) {
    alert('No has escrito nada en el First name');
    return;
  }
  var clave = document.getElementById('Lastname').value;
  if (Lastname.length == 0) {
    alert('No has escrito nada en el Last name');
    return;
  }
  email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se espera una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  this.submit();
    //el formulario se envia
   	alert("Muchas gracias por enviar el formulario");
   	document.fvalida.submit();
