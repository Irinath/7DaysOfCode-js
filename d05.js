// 7th Days Challenge - Day 5
// Create a shopping list

/*¿Sabes cuando vas al supermercado con una lista de compras y terminas yendo y volviendo por los mismos pasillos hasta completar 
la lista?

Necesitas una manzana y vas al área de frutas. El siguiente ítem es una leche y te diriges a los lácteos. Pero luego anotaste una pera, 
y necesitas regresar de nuevo al área de frutas.

¡Después de resolver el desafío de hoy, con certeza no harás más eso!
Al igual que nuestra lista de compras, es muy común que los programas trabajen con listas de string, números y objetos.
Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un 
alimento a tu lista de compras, y debes poder responder con "sí" o "no".
*/

let vegetales = [];
let lacteos = [];
let carnes = [];
let dulces = [];
let limpieza = [];
let libreria = [];
let bebidas = [];
let higienePersonal = [];
let panaderia = [];
let otros = [];
let listaCompras = [vegetales, lacteos, carnes, dulces, limpieza, libreria, bebidas, higienePersonal, panaderia, otros];
let agregarAlimento = '';
let categoria = '';
let alimento = '';

agregarAlimentos();
listarCompras();



function agregarAlimentos(){
    while (agregarAlimento != 'no'){
        
        agregarAlimento = prompt("Deseas agregar un alimento a tu lista de compras? (si/no)").toLocaleLowerCase();
        
        while (agregarAlimento != "si" && agregarAlimento != "no") {  //mientras el texto leído sea diferente de "sí" y de "no", mostrar que no fue reconocido y preguntar nuevamente
            alert("¡Operación no reconocida!");
            agregarAlimento = prompt("Deseas agregar un alimento a tu lista de compras? (si/no)");
            }

        if (agregarAlimento === 'no'){
            console.log("No se agregaron alimentos a la lista de compras");
            break;
        }
        
            alimento = prompt("Que alimento o producto deseas agregar?").toLocaleLowerCase();
            console.log(alimento);
        if (alimento !== null){
        categoria = prompt("Ese producto pertenece a la categoría vegetal, lacteo, carne, dulce, limpieza, libreria, bebida, higiene personal, panaderia u otro?").toLocaleLowerCase();
            if (categoria === 'vegetal'){
                vegetales.push(alimento);
            }else if (categoria === 'lacteo'){
                lacteos.push(alimento);
            } else if (categoria === 'carne'){
                carnes.push(alimento);
            } else if (categoria === 'dulce'){
                dulces.push(alimento);
            } else if (categoria === 'limpieza'){
                limpieza.push(alimento);
            } else if (categoria === 'libreria'){
                libreria.push(alimento);
            } else if (categoria === 'bebida'){
                bebidas.push(alimento);
            } else if (categoria === 'higiene personal'){
                higienePersonal.push(alimento);
            } else if (categoria === 'panaderia'){
                panaderia.push(alimento);
            } else if (categoria === 'otro'){
                otros.push(alimento);
            } else {
                console.log("No es una categoría válida");
            }
        }else{
            console.log("No se agregaron más alimentos a la lista de compras");
            break;
        }
    }
}


function listarCompras(){
    for (let i = 0; i < listaCompras.length; i++){
        if (listaCompras[i].length > 0){
            console.log(`Lista de compras: ${listaCompras[i]}`);
        }
    }
}



/*
A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".
Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, 
congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.
Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una 
lista con todos los ítems agrupados, de la siguiente manera:
Si añades a tu lista:
banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.

El programa debería imprimir, por ejemplo:

Lista de compras:
Frutas: banana, tomate, manzana, uva, aguacate
Lácteos: leche vegetal, leche de vaca, leche en polvo
Congelados: 
Dulces: chicle y gominola

CONSEJO 

Existe un objeto dentro del lenguaje Javascript que se usa justamente para crear listas de elementos, llamado Array. ¡Úsalo y abusa de él!
Recuerda que siempre puedes estilizar tu programa de la manera que desees, incluso utilizando otras tecnologías para ello, como HTML y CSS.
Sin embargo, eso no es obligatorio en nuestra lista de lógica de programación con Javascript. Como mencioné en los días anteriores, 
puedes utilizar recursos como console.log, alert y prompt para desarrollar tu programa.
No olvides compartir tu código en tu GitHub y en tus redes sociales con el hashtag #7DaysOfCode.

 EXTRA 

Para crear un array vacío, puedes usar corchetes. Y luego, para insertar algo en un array, puedes usar la función .push(). Por ejemplo:

let miArray = [];

miArray.push(elemento1);

Después de eso, el array ya no estará vacío, tendrá el elemento 1.
Para aprender más sobre arrays en Javascript, échale un vistazo a este site.*/