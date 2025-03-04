/*Por eso, hoy te voy a enseñar a desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:
- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando?
  
A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.
Al final, el sistema mostrará el mensaje:
"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"  
Observa que cada información entre [ ] es una de las respuestas dadas por la persona.*/

let nombre = prompt("¿Cúal es tu nombre?");
let edad = parseInt(prompt('¿Cúantos años tenés?'));
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

/* EJERCICIO OPCIONAL
Si deseas profundizar en el tema de hoy, tengo otro ejercicio para ti.
Pero es 100% opcional.
Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:

¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
  
  Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes? */

let gustar = prompt(`¿Te gusta estudiar ${lenguaje} ? Responde con el número 1 para SÍ o 2 para NO.`);

if (gustar == 1){
  console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else {
  console.log(" Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}

/*CONSEJO 
Puedes agregar tantas preguntas como desees y aprovechar las respuestas de los usuarios en el mensaje que se mostrará.
Para imprimir y recibir valores, puedes usar tanto console.log, prompt y alert, como también HTML y CSS si ya tienes conocimiento en estas dos tecnologías.

Puedes usar la estructura condicional if para resolver el Ejercicio Opcional. Algo como: 
if (respuesta == 1) {
    // da la respuesta positiva
}
if (respuesta == 2) {
    // da la respuesta negativa
}

  EXTRA 
Tanto alert() como prompt() se utilizan para crear cuadros de diálogo e interactuar con el usuario, pero son diferentes entre sí.
El alert() se utiliza para mostrar un mensaje simple al usuario.

Ejemplo:
alert("¡Hola, todos!");
El prompt() requiere que el usuario ingrese algún valor, que podrás manipular.

  Ejemplo:
const ciudad = prompt("Escribe tu ciudad:");
const msg = `¡Eres de ${ciudad}!`;
alert(msg);

Prueba los códigos anteriores e intenta adaptarlos a tu programa.*/
