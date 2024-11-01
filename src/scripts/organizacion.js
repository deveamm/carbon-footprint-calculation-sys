function calcularTotal(formulario = {}) {
    let calculoTotal = 0;
    let consumoCombustible = 0, consumoEnergetico = 0;
  
    /*CONSUMO DE COMBUSTIBLES FÓSILES*/
    consumoCombustible = consumoCombustible + (Number(formulario.gasNatural) * 2.15);
    consumoCombustible = consumoCombustible + (Number(formulario.gasButano) * 2.96);
    consumoCombustible = consumoCombustible + (Number(formulario.gasPropano) * 2.94);
    consumoCombustible = consumoCombustible + (Number(formulario.gasoil) * 2.79);
    consumoCombustible = consumoCombustible + (Number(formulario.fuel) * 3.05);
    consumoCombustible = consumoCombustible + (Number(formulario.glpGenerico) * 2.96);
    consumoCombustible = consumoCombustible + (Number(formulario.carbonNacional) * 2.30);
    consumoCombustible = consumoCombustible + (Number(formulario.carbonImportacion) * 2.58);
    consumoCombustible = consumoCombustible + (Number(formulario.coquePetroleo) * 3.19);

    /*CONSUMO ENERGÉTICO*/
    consumoEnergetico = Number(formulario.electricidad) * 9.03;
  
    /*TOTAL*/
    calculoTotal = consumoCombustible + consumoEnergetico;
  
    console.log(calculoTotal);
  
    localStorage.setItem('myCarbonFootPrint', calculoTotal);
    localStorage.setItem('flagResult', 'O');
  
    return calculoTotal;
  }

document.addEventListener('DOMContentLoaded', function() {
    const btnResult = document.getElementById('enviar');

    btnResult.addEventListener('click', function() {
        window.location.href = '../views/resultados.html';
    });
});

document.getElementById('formulario').addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        gasNatural: document.getElementById('gas-natural').value,
        gasButano: document.getElementById('gas-butano').value,
        gasPropano: document.getElementById('gas-propano').value,
        gasoil: document.getElementById('gasoil').value,
        fuel: document.getElementById('fuel').value,
        glpGenerico: document.getElementById('glp-generico').value,
        carbonNacional: document.getElementById('carbon-nacional').value,
        carbonImportacion: document.getElementById('carbon-importacion').value,
        coquePetroleo: document.getElementById('coque-petroleo').value,
        electricidad: document.getElementById('electricidad').value
    };

    console.log(formData.gasNatural);
    console.log(formData.gasButano);
    console.log(formData.gasPropano);
    console.log(formData.gasoil);
    console.log(formData.fuel);
    console.log(formData.glpGenerico);
    console.log(formData.carbonNacional);
    console.log(formData.carbonImportacion);
    console.log(formData.coquePetroleo);
    console.log(formData.electricidad);

    console.log(calcularTotal(formData));
});