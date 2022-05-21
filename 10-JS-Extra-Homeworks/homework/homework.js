// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  
  return Object.entries(objeto);
}
/*
var obj = {
  D: 1,
  B: 2,
  C: 3
}
console.log(Object.keys(obj)[0]);
console.log(Object.keys(obj).length);
console.log(obj.D);
console.log(Object.entries(obj))

*/


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var arrayString = [];
  for(var i=0; i<string.length ; i++){
    arrayString.push(string[i]);
  }
  
  var obj = {};
  arrayString.map(function(ele, indice){
   obj[ele] ? obj[ele]++ : (obj[ele] = 1)
  })
  return obj;


}
/*
 var n = 'adsjfdsfsfjsdjfhacabcsbajda';
 console.log(n[0]);
 console.log(n.length);

 var arrayString = [];
 for(var i=0; i<n.length ; i++){
   arrayString.push(n[i])
 }
 console.log(arrayString);
 var obj = {};
 arrayString.map(function(ele, indice){
  obj[ele] ? obj[ele]++ : (obj[ele] = 1)
 })
 console.log(obj);

*/


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var min = [];
  var mayus = [];
  for(var i=0; i<s.length ; i++){
    if (s[i] == s[i].toUpperCase()) mayus = mayus + s[i]; 
    if (s[i] == s[i].toLowerCase()) min = min + s[i]; 
  }
  return mayus + min;
}

/*
var character = 'h'; 
if (character == character.toUpperCase()) { 
  console.log('upper case true'); 
} 
if (character == character.toLowerCase()){ 
  console.log('lower case true'); 
}

var s = 'soyHENRY';
var min = '';
var mayus = [];
  for(var i=0; i<s.length ; i++){
    if (s[i] == s[i].toUpperCase()) { 
      mayus = mayus + s[i]; 
    } 
    if (s[i] == s[i].toLowerCase()) { 
      min = min + s[i]; 
    } 
  }
console.log(min);
console.log(mayus)


*/





function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var y = '';
  for(var i=str.length - 1; i>=0; i--){
    y += str[i];
  }
  
  return y.split(' ').reverse().join(' ');

} 


/*
const x = 'Hola Juan! Bienvenido';
var y = '';
for(var i=x.length - 1; i>=0; i--){
  y += x[i];
}
console.log(y)
console.log(y.split(' ').reverse().join(' '))
console.log(x)

//..........................................................

var palabras = str.split(' ');
  var nuevaCadena = "";
  for(var j = 0; j<palabras.length; j++){
    var cad = palabras[j];
    for (var i = cad.length - 1; i >= 0; i--) {
        nuevaCadena = nuevaCadena + cad[i];
    }
    if(j<palabras.length - 1){
      nuevaCadena = nuevaCadena + ' '
    } 
  
  }
 return nuevaCadena;
*/

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var str = numero.toString();
  var salida = "Es capicua";
  
    for(var i=0; i <= Math.floor(str.length/2 - 1); i++){
      if(str[i] !== str[(str.length - (i+1))]){
        salida = "No es capicua";
      }
    }
    return salida;
}

/*
var numero = 1101011;
var str = numero.toString();
var salida = "Es capicua";
console.log(typeof(str));
  for(var i=0; i <= Math.floor(str.length/2 - 1); i++){
    if(str[i] !== str[(str.length - (i+1))]){
      salida = "No es capicua";
    }
  }

console.log(salida)

*/


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replaceAll( /[abc]/g, '');
  
  
}
 
/*
var cadena = 'rrrtttyu fer';
var fil = cadena.replaceAll( /[abc]/g, '');

console.log(fil)

*/


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var palabras = arr;
  palabras.sort(function(a,b){
  
    if(a.length > b.length){
      return 1;
    }
    if(a.length < b.length){
      return -1;
    }
    if(a.length == b.length){ 
    return 0;
    }
  });
  
  return palabras;

}
/*

var palabras = ["You", "are", "beautiful", "looking", 'apple'];

palabras.sort(function(a,b){
  
  if(a.length > b.length){
    return 1;
  }
  if(a.length < b.length){
    return -1;
  }
  if(a.length == b.length){ 
  return 0;
  }
});

console.log(palabras)
*/


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var inter = arreglo1.filter((p) => arreglo2.includes(p));
  return inter;
}

/*
const arreglo1 = [14, 2, 0, 5, 3];
const arreglo2 = [2, 0, 3];

var inter = arreglo1.filter((p) => arreglo2.includes(p));



console.log(inter)


//...........................................................
for(var i=0; i<arreglo1.length; i++){
  for(var k=0; k<arreglo2.length; i++){
    
    arreglo1[i] == arreglo2[k] ? inter.push(arreglo1[i]) : inter.push();
    
   if(arreglo1[i] == arreglo2[k]){
     inter.push(arreglo1);
   }
  };
};

arreglo1

*/


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

