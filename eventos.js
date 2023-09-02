document.addEventListener('DOMContentLoaded', function() {
    let div = document.getElementById('soydiv');
    let boton = document.getElementById('boton')

    div.addEventListener('click', function(){
        alert("Hola! Soy el div")
    });
});

function saludar(event) {
    alert("Hola!");
    event.stopPropagation();
  }
