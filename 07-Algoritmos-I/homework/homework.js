'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
var arr = [1];
for (var i = 2; i < (num+1); i++) {
if ((num % i) === 0) {
  arr.push(i);
  num = Math.floor(num/i);
  i--;
}}
return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var flag = true;
  while(flag){
    flag = false;
    for(var i = 0; i < array.length - 1; i++){
     if(array[i] > array[i+1]){
      var aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
      flag = true;
     }
    }
  }
 return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 1; i < array.length; i++) {
    var pos = array[i];
    for (var j = i - 1; j >= 0 && array[j] > pos; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = pos;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 0; i < array.length; i++){
    var min = i; 
     for(var j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j;
      }
     }
     if(min != i){
       let almacen = array[i];
       array[i] = array[min];
       array[min] = almacen;
     }
   } return array;
} 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
