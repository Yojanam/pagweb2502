const botonesdiv = document.getElementById('botones') ;
const resultadodiv = document.getElementById('resultado');


botonesdiv.innerHTML += `
    <botton class="btn btn-primary" onclick="suma()">sumar</botton>
    <botton class="btn btn-primary" onclick="division()">dividir</botton>
    <botton class="btn btn-primary" onclick="letraRepetida()">letra repetida</botton>
    

    `;


// funciones

/*
Crear una función llamada "suma", que reciba como parámetros dos números enteros y devuelva como resultado
otro número entero que sea la suma de ambos. 

*/

function suma(){
    let num1 = parseInt(prompt("ingrese el número 1: "));
    let num2 = parseInt(prompt("ingrese el número 2: "))
    let suma = num1 + num2;
      
    resultadodiv.innerHTML = `el resultado de sumar ${num1} + ${num2} = ${suma}`;
}

/*
3.2. Crear una función llamada "division", que reciba como parámetros dos números enteros y devuelva como
resultado un número real, que sea el resultado de dividir el primer número entre el segundo (con decimales).
*/
function division(){
    let n1 = parseInt(prompt("ingrese un número: "));
    let n2 = parseInt(prompt("ingrese otro número: "));
    let division = n1 / n2;

    resultadodiv.innerHTML = `el resultado de dividir ${n1} + ${n2} = ${division} `;
   
}
    
/*
3.3. Crear una función llamada "letraRepetida", que reciba como parámetros una letra y un número, y escriba en
pantalla esa letra repetida en pantalla varias veces (tantas como indique el número), sin devolver ningún valor. 
*/
function letraRepetida(){
    let letra = prompt("ingrese una letra: ");
    let veces = parseInt(prompt("ingrese un número: "));
    for ( let i= 1; i <= veces; i++){
    
    resultadodiv.innerHTML += letra    

    }

    
 }

