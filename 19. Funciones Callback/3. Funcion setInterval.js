let reloj = () => {
    let fecha = new Date();
    // Imprimir HH:MM:SS
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};

// Imprimiendo la hora cada segundo...
setInterval(reloj, 1000);