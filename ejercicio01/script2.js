var d = new Date();
var hora = d.getHours();
var minutos = d.getMinutes()+1;
var segundos = d.getSeconds();

var opts = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney', 'America/Los_Angeles'];

var num = Math.floor(Math.random() * 5);

var x = d.toLocaleString('es-ES', { timeZone: opts[num]});
var result = new Date(x);

var hora2 = result.getHours();
var minutos2 = result.getMinutes();
var segundos2 = result.getSeconds();

var horaF = hora2 - hora;
var minF = minutos2 - minutos;
var secF = segundos2 - segundos;

console.log("hora en mex: "+ hora+" min: "+minutos+" seg: "+segundos);
console.log("hora en "+opts[num]+": "+ hora2+" min: "+minutos2+" seg: "+segundos2);
console.log("diferencia de hora: "+horaF);
console.log("diferencia de min: "+minF);
console.log("diferencia de seg: "+secF);
