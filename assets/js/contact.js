let boton = document.querySelector("#cambioDeEstilo");
undefined
// boton.addEventListener('click', function () {
//     let colorActual = boton.getAttribute('style');
//     if (colorActual === 'background-color:red;') {
//         boton.setAttribute('style', 'background-color:blue;');    
//     }
//     else {
//         boton.setAttribute('style', 'background-color:green;');
//     }
// });
// undefined
boton.addEventListener('click', function () {
  let colorActual = boton.getAttribute('style');
  switch (colorActual){
    case 'background-color:red;':
    boton.setAttribute('style', 'background-color:blue;');
    break;
    case 'background-color:red;':
    boton.setAttribute('style', 'background-color:yellow;');
    break;
    default:
    boton.setAttribute('style', 'background-color:green;');
  }
});
undefined