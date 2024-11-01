const CFP = Number(localStorage.getItem('myCarbonFootPrint'));
const FLAG = localStorage.getItem('flagResult');
console.log('Mi Huella de Carbono es: ' + CFP);

let resultado = document.getElementById('resultado');
resultado.textContent = String(CFP.toFixed(3)) + ' Kg CO2';

let valor = document.getElementById('valor');
let colorCuadroValor = document.getElementById('cuadro-valor');

if (FLAG == 'P') {
    if (Math.trunc(CFP) > 70) {
        valor.textContent = 'ALTO';
        colorCuadroValor.style.backgroundColor = "#a90000";
    
    }else if(Math.trunc(CFP) > 55) {
        valor.textContent = 'MEDIO';
        colorCuadroValor.style.backgroundColor = "#ebb51f";
    }else {
        valor.textContent = 'BAJO';
        colorCuadroValor.style.backgroundColor = "green";
    }
} else if(FLAG == 'O') {
    if (Math.trunc(CFP) > 6000) {
        valor.textContent = 'ALTO';
        colorCuadroValor.style.backgroundColor = "#a90000";
    
    }else if(Math.trunc(CFP) > 2800) {
        valor.textContent = 'MEDIO';
        colorCuadroValor.style.backgroundColor = "#ebb51f";
    }else {
        valor.textContent = 'BAJO';
        colorCuadroValor.style.backgroundColor = "green";
    }
}

localStorage.removeItem('myCarbonFootPrint');
localStorage.removeItem('flagResult');
localStorage.clear();