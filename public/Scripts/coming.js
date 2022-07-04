//Setam data cand va fi lansata pagina, deci pana cand vom numara invers
var countDownDate = new Date("July 8, 2022 00:00:00").getTime();

//Actualizam numaratoarea inversa la fiecare 1 secunda (1000 de milisecunde)
var countDownFunction = setInterval(function () {
  var now = new Date().getTime();        //Obtinem data si ora de astazi
  var distance = countDownDate - now;   //Calculam distanta dintre data de azi si data lansarii

  //Calculam nr total de milisecunde pentru zile, ore, minute si secunde, eliminand nr de zecimale
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Afisam rezultatul in elemetul cu id-ul launch
  document.getElementById("launch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  //Daca numaratoarea a ajuns la final, afisam un text
  if (distance < 0) {
    clearInterval(countDownFunction);
    document.getElementById("launch").innerHTML = "EXPIRED";
  }
}, 1000);