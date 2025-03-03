/*1_Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
    
    2_Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, 
    podrá aprender C# o aprender Java.*/

let elegir = prompt("elige una opción para continuar aprendiendo: ¿frontend o backend? ");
elegir = elegir.toLowerCase();

/*plantearlo como ternario*/

if (elegir == "frontend") {
    alert(`Elegiste la ruta ${elegir} para continuar`);
    let elegirFront = prompt("Ahora elige un Framework: ¿React o Vue?");
    elegirFront = elegirFront.toLowerCase();

    if (elegirFront == "react") {
        alert(`Elegiste ${elegirFront} para seguir aprendiendo`);
    } else if (elegirFront == "vue") {
        alert(`Elegiste ${elegirFront} para seguir aprendiendo`);
    } else {
        alert("Elección no válida");
    }
} else if (elegir == "backend") {
    alert(`Elegiste la ruta ${elegir} para continuar`);
    let elegirBack = prompt("Ahora elige un lenguaje: ¿C# o Java?");
    elegirBack = elegirBack.toLowerCase();

    if (elegirBack == "c#") {
        alert(`Elegiste ${elegirBack} para seguir aprendiendo`);
    } else if (elegirBack == "java") {
        alert(`Elegiste ${elegirBack} para seguir aprendiendo`);
    } else {
        alert("Elección no válida");
    }
} else {
    alert("Elección no válida");
}

/*  3_Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose 
    en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico 
    para cada elección.*/
let seguirAprendiendo = prompt("¿Quieres seguir especializándote en Frontend, Backend o quieres convertirte en Fullstack?");
seguirAprendiendo = seguirAprendiendo.toLowerCase();

if (seguirAprendiendo == "frontend") {
    alert(`¡¡Felicitaciones elegiste continuar en el área de ${seguirAprendiendo}!!`);
} else if (seguirAprendiendo == "backend") {
    alert(`¡¡Felicitaciones elegiste continuar en el área de ${seguirAprendiendo}!!`);
} else if (seguirAprendiendo == "fullstack") {
    alert(`¡¡Felicitaciones elegiste convertirte en ${seguirAprendiendo}!!`);
} else {
    alert("Elección no válida");
}

/* 4_Por último, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede
    responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo "ok" a la pregunta: "¿Hay alguna otra
    tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en 
    cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.*/

let preguntar = prompt("¿Le gustaría especializarse o conocer otras tecnologías? Elija si para continuar");
preguntar = preguntar.toLowerCase();

while (preguntar === "si") {
    let lenguaje = prompt("¿Cúal?");
    alert(`¡¡ ${lenguaje} es muy interesante!!`);
    preguntar = prompt("¿le gustaría especializarse o conocer en otro? Elija si para continuar");
    preguntar = preguntar.toLowerCase();
}

/*
    Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender y desarrollarse 
    en el área de programación.
    Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.*/
