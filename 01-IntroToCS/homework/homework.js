'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
return parseInt(num, 2);
}

function DecimalABinario(num) {
  // tu codigo aca  
return num.toString(2);
}

//otra forma de resolverlo:
// function DecimalABinario(num){
//                  let almacenador = []
//                     while (num !== 0){
//                         var division = Math.floor(num / 2)
//                         var modulo = num % 2
//                         num = division;
//                         almacenador.unshift(modulo);
//  [1,1,1] === "111"
//                                      }
//            return almacenador.join("");


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}