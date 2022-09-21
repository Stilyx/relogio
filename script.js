let hora = document.getElementById('hour');
let minuto = document.getElementById('minutes');
let segundo = document.getElementById('seconds');

function time() {
  let tempo = new Date();
  hour = tempo.getHours();
  mins = tempo.getMinutes();
  seg = tempo.getSeconds();
  hora.textContent = hour < 10 ? `0${hour}` : hour;
  minuto.textContent = mins < 10 ? `0${mins}` : mins;
  segundo.textContent = seg < 10 ? `0${seg}` : seg;
}
setInterval(time, 1000);
