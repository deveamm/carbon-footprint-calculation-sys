function calcularTotal(formulario = {}) {
  let calculoTotal = 0, factorEmision = 0;
  let emisionVehiculo = 0, emisionTransportePublico = 0, emisionVuelos = 0, transporte = 0;
  let emisionElectricidad, emisionGas, electricidad;
  let factorEmisionRes= 0, factorEmisionPollo = 0, factorEmisionCerdo = 0, factorEmisionVegetales = 0, alimentos;
  let factorEmisionBasura = 0, factorEmisionReciclaje = 0, factorEmisionCompostaje = 0, residuos;

  /*TRANSPORTE*/
  if (formulario.vehiculo.toString == 'gasolina') {
    factorEmisionVehiculo = 2.5;
  } else if (formulario.vehiculo.toString == 'diesel') {
    factorEmisionVehiculo = 2.9;
  }
  if (formulario.vehiculo.toString == 'electrico') {
    factorEmisionVehiculo = 0;
  }

  emisionVehiculo = Number(formulario.kilometraje) * Number(formulario.consumoCombustible) * factorEmision;

  emisionTransportePublico = Number(formulario.frecuenciaTransportePublico) * (Number(formulario.distanciaTransportePublico) * 0.15);

  emisionVuelos = Number(formulario.vuelos.numero) * (Number(formulario.vuelos.recorrido) * 0.10);

  transporte = emisionVehiculo + emisionTransportePublico + emisionVuelos;

  /*ENERGÍA DOMÉSTICA*/
  emisionElectricidad = Number(formulario.energiaDomestica.electricidad) * 0.233;

  emisionGas = Number(formulario.energiaDomestica.gas) * 1.96;

  electricidad = emisionElectricidad + emisionGas;

  /*ALIMENTACIÓN*/
  if (formulario.alimentacion.includes('res')) {
    factorEmisionRes = 15.5;
  }
  if (formulario.alimentacion.includes('pollo')) {
    factorEmisionPollo = 6.9;
  }
  if (formulario.alimentacion.includes('cerdo')) {
    factorEmisionCerdo = 20.8;
  }
  if (formulario.alimentacion.includes('vegetales')) {
    factorEmisionVegetales = 2;
  }

  alimentos = factorEmisionRes + factorEmisionPollo + factorEmisionCerdo + factorEmisionVegetales;

  /*RESIDUOS*/
  if (formulario.residuos.reciclaje.includes('basura')) {
    factorEmisionBasura = 2.0;
  }
  if (formulario.residuos.reciclaje.includes('reciclaje')) {
    factorEmisionReciclaje = 1.5;
  }
  if (formulario.residuos.reciclaje.includes('compostaje')) {
    factorEmisionCompostaje = 0.5;
  }

  residuos = Number(formulario.residuos.cantidad) * (factorEmisionBasura + factorEmisionReciclaje + factorEmisionCompostaje);

  /*TOTAL*/
  calculoTotal = transporte + electricidad + alimentos + residuos;

  console.log(calculoTotal);

  localStorage.setItem('myCarbonFootPrint', calculoTotal);
  localStorage.setItem('flagResult', 'P');

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
        vehiculo: [],
        kilometraje: document.getElementById("kilometraje").value,
        consumoCombustible: document.getElementById("consumo-combustible").value,
        distanciaTransportePublico: document.getElementById("distancia").value,
        frecuenciaTransportePublico: document.getElementById("frecuencia").value,
        vuelos: {
            numero: document.getElementById("numero").value,
            recorrido: document.getElementById("recorrido").value
        },
        energiaDomestica: {
            electricidad: document.getElementById("consumo-electricidad").value,
            gas: document.getElementById("consumo-gas").value
        },
        alimentacion: [],
        residuos: {
            cantidad: document.getElementById("cantidad-residuos").value,
            reciclaje: []
        }
    };

    document.querySelectorAll("input[name='vehiculo']:checked").forEach((input) => {
        formData.vehiculo.push(input.value);
    });

    document.querySelectorAll("input[name='consumo-carne']:checked").forEach((input) => {
        formData.alimentacion.push(input.value);
    });

    document.querySelectorAll("input[name='reciclaje']:checked").forEach((input) => {
        formData.residuos.reciclaje.push(input.value);
    });

    console.log(formData.vehiculo);
    console.log(formData.kilometraje);
    console.log(formData.consumoCombustible);
    console.log(formData.distanciaTransportePublico);
    console.log(formData.frecuenciaTransportePublico);
    console.log(formData.vuelos.numero);
    console.log(formData.vuelos.recorrido);
    console.log(formData.energiaDomestica.electricidad);
    console.log(formData.energiaDomestica.gas);
    console.log(formData.alimentacion);
    console.log(formData.residuos.cantidad);
    console.log(formData.residuos.reciclaje);

    console.log(calcularTotal(formData));

});

const checkboxes = document.querySelectorAll('input[name="vehiculo"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        checkboxes.forEach(other => {
          if (other !== this) {
            other.checked = false;
          }
        });
      }
    });
});
