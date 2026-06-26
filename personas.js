const form = document.getElementById("form-persona");
const tbody = document.getElementById("tabla-cuerpo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener valores
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  // Calcular IMC
  const imc = (peso / (altura * altura)).toFixed(2);

  // Crear fila
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${nombre}</td>
    <td>${apellido}</td>
    <td>${edad}</td>
    <td>${altura}</td>
    <td>${peso}</td>
    <td>${imc}</td>
    <td><button class="btn-danger btn-eliminar">Eliminar</button></td>
  `;

  // Evento boton para eliminar la fila específica
  tr.querySelector(".btn-eliminar").addEventListener("click", () => {
    tr.remove();
  });

  // Agregar fila a la tabla
  tbody.appendChild(tr);

  // Limpiar formulario
  form.reset();
});
