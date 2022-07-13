const $dias1 = document.getElementById('dias1'),
$dias2 = document.getElementById('dias2'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$hours2 = document.getElementById('hours2'),
$minutes2 = document.getElementById('minutes2'),
$seconds2 = document.getElementById('seconds2');

//Fecha a futuro
const celebracion = new Date('5 17, 2023 00:00:00').getTime();
const sancion = new Date('7 10, 2010 00:00:00').getTime();

let interval = setInterval(function(){
    const now = new Date().getTime();

    let distancia1 = celebracion - now;
    let distancia2 = sancion - now;

    let dias1 = Math.floor(distancia1 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distancia1 % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distancia1 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distancia1 % (1000 * 60 )) / (1000));

    let dias2 = Math.floor(distancia2 / (-1000 * 60 * 60 * 24));
    let hours2 = Math.floor((distancia2 % (-1000 * 60 * 60 * 24 )) / (-1000 * 60 * 60));
    let minutes2 = Math.floor((distancia2 % (-1000 * 60 * 60)) / (-1000 * 60));
    let seconds2 = Math.floor((distancia2 % (-1000 * 60 )) / (-1000));

    $dias1.innerHTML = dias1;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
    $dias2.innerHTML = dias2;
    $hours2.innerHTML = hours2;
    $minutes2.innerHTML = minutes2;
    $seconds2.innerHTML = ('0' + seconds2).slice(-2);

}, 1000);