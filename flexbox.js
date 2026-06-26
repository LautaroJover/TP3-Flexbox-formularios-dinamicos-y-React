const juegos = [
{ id: 1, nombre: "Elden Ring", genero: "RPG" },
{ id: 2, nombre: "Terraria", genero: "Sandbox" },
{ id: 3, nombre: "Roblox", genero: "Sandbox" },
{ id: 4, nombre: "Dark Souls", genero: "RPG" },
{ id: 5, nombre: "Minecraft", genero: "Sandbox" },
{ id: 6, nombre: "Cyberpunk 2077", genero: "RPG" }
];

const contenedor = document.getElementById("contenedor-juegos");

//Función para renderizar las cajas en el HTML
function renderizarJuegos() {
contenedor.innerHTML = ""; 
juegos.forEach(juego => {
  const div = document.createElement("div");
  div.className = "caja";
  //Uso un atributo de datos para identificar el genero facilmente
  div.dataset.genero = juego.genero; 
  div.innerHTML = `
    <h3>${juego.nombre}</h3>
    <p>Género: ${juego.genero}</p>
  `;
  contenedor.appendChild(div);
});
}

//Evento para resaltar elementos
document.getElementById("btn-destacar").addEventListener("click", () => {
const cajas = document.querySelectorAll(".caja");
cajas.forEach(caja => {
  if (caja.dataset.genero === "Sandbox") {
    caja.classList.toggle("activo"); 
  }
});
});

renderizarJuegos();