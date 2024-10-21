/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Espera a que la página se cargue par ejecutar el codigo
  //Declaración de arrays
  let who = ["Un alien", "Mi suegra", "Un mono ninja", "Mi robot aspiradora"];
  let action = ["se robó", "quemó", "teletransportó", "hipnotizó"];
  let what = ["mi tarea", "mi cepillo de dientes", "mi dignidad", "el Wi-Fi"];
  let when = [
    "antes de que empezara el apocalipsis zombie",
    "mientras me duchaba con traje de astronauta",
    "justo cuando estaba a punto de convertirme en superhéroe",
    "mientras luchaba contra una piña mutante",
    "cuando estaba hablando con mi espejo mágico",
  ];

  function generateExcuse() {
    //Formula para la selección del elemento del array
    //Math.floor se usa para redondear al número más bajo
    //Math.random da un número flotante del 0 al 1
    //.length devuelve la longitud del array.
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    //devuelve el elemento aleatorio asignado a cada variable
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  //Pasamos los elementos al archivo html usando getElementById
  document.getElementById("excuse").innerText = generateExcuse();
};
