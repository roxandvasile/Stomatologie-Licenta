//Functie anonima care verifica daca pagina este pregatita pt a rula codul js
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 50,   //intarzierea in milisecunde 
    time: 1200,  //durata totala a animatiei
  });
});