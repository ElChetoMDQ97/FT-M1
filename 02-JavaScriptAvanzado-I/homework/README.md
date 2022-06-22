
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10); // 10 8 8 9
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // Error
foo(); // No se ejecuta por el error en la linea anterior
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); // "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // "Franco"
   }
})();
console.log(instructor); // "Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; 
    let pm = "Reverse Flash";
    console.log(instructor); // "The Flash"
    console.log(pm); // "Reverse Flash"
}
console.log(instructor); // "The Flash"
console.log(pm); // "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // inf
{}[0] // No tiene porque
parseInt("09") // 9
5 && 2 // Todo numero es true excepto el 0, y si ambos son true devuelve el ultimo true // 2
2 && 5 // 5
5 || 0 // Todo numero es true excepto el 0 // como uno es false, devuelve solo el true // 5
0 || 5 // 5
[3]+[3]-[10] // al ser 2 array sumando, los concatena, y luego al ser resta y son array, los transforma en numero y los resta // 23
3>2>1
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
} 
// Undefine     Porque solo alza la declaracion sin valor
// 2                Porque alza los valores de la funcion

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // Undefine // porque se devuelve var snack pero esta no tiene valor asignado dentro de la funcion getFood
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // "Aurelio De Rosa" // el this apunta al fullname del prop dentro del obj

var test = obj.prop.getFullname;
// var test = function() {
//         return this.fullname; // el this apunta al global

console.log(test()); // "Juan Perez"
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1 // 4 // 3 // 2
```
