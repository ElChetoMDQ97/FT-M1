'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //var array = [5, 1, 4, 2, 8];

if(array.length <= 1){
  return array;
 }
  var pivot = array[0];
  var ConteinerLeft = [];
  var ConteinerRight = [];
   for(var i = 1; i < array.length; i++){
    if(array[i] < pivot){
     ConteinerLeft.push(array[i]);
     } else{
       ConteinerRight.push(array[i]);
     }
   }
 return quickSort(ConteinerLeft).concat(pivot,quickSort(ConteinerRight))
}

function merge(left, right){
  var arr = [];
    while(left.length && right.length){
      if(left[0] < right[0]){
        arr.push(left.shift())
      }else{
    arr.push(right.shift())
      }
 } return arr.concat(left,right);
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 var half = Math.floor(array.length/2);
 if(array.length < 2){return array;}
 var left = array.splice(0, half)
 return merge(mergeSort(left), mergeSort(array))
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
