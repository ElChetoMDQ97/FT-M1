'use strict'

// digito * base(2) ** posicion
function BinarioADecimal(num) {
  // tu codigo aca
return parseInt(num, 2);
}

//  var res = 0;
//  var pos = 0;
// for(let i = num.length-1; i >= 0; i--){
//num[i]2**pos
//pos++
//}


function DecimalABinario(num) {
  // tu codigo aca  
return num.toString(2);
}

//otra forma de resolverlo:
// function DecimalABinario(num){
//                  lvar res = "";
//                     while (num !== 0){
//                         res = num % 2 + res;
//                         num = Math.floor(num / 2);
//                                      }
//            return almacenador;


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}