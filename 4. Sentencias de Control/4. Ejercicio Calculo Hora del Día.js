let horaDia = 23;
let msg;

if(horaDia>=6 && horaDia<=11){
    msg = 'Buenos días';
}else if(horaDia>=12 && horaDia<=18){
    msg = 'Buenas tardes';
}else if(horaDia>=19 && horaDia<=24){
    msg = 'Buenas noches';
}else if(horaDia>=0 && horaDia<=6){
    msg = 'Durmiendo';
}else{
    msg = 'Valor Incorrecto';
}

console.log(msg);