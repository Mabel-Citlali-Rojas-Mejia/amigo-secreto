// Crear un arry para almacenar los nombres
    let amigos =[];
// función para la lista de amigos
function agregarAmigo(){
    // Capturar el valor del campo de entrada
    let  input = document.getElementById('amigo');
    let nombre = input.value.trim();
    console.log(nombre);
    // Validar la entrada
    if (nombre == ""){
        alert('Por favor, inserte un nombre.');
    }else{
        //Actualizar el array de amigos
          amigos.push(nombre);
          console.log(amigos);
        // Limpiar el campo de entrada
          limpiarCaja();
           mostrarLista(); 
    }
} 