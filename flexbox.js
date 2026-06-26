// Arreglo con 6 elementos
const juegos = [
  { id: 1, nombre: "Elden Ring", genero: "RPG" },
  { id: 2, nombre: "Terraria", genero: "Sandbox" },
  { id: 3, nombre: "Roblox", genero: "Sandbox" },
  { id: 4, nombre: "Dark Souls", genero: "RPG" },
  { id: 5, nombre: "Minecraft", genero: "Sandbox" },
  { id: 6, nombre: "Cyberpunk 2077", genero: "RPG" }
];

const contenedor = document.getElementById("contenedor-juegos");


function renderizarJuegos() {
  contenedor.innerHTML = "";
  juegos.forEach(juego => {
    const div = document.createElement("div");
    div.className = "caja";
    
    
    div.dataset.genero = juego.genero;
    div.dataset.nombre = juego.nombre;
    
    div.innerHTML = `
      <h3>${juego.nombre}</h3>
      <p>Género: ${juego.genero}</p>
    `;
    contenedor.appendChild(div);
  });
}

// Función auxiliar para quitar la clase activo de todas las cajas antes de aplicar un nuevo filtro
function limpiarFiltros() {
  document.querySelectorAll(".caja").forEach(caja => {
    caja.classList.remove("activo");
  });
}

// Evento: Destacar Sandbox
document.getElementById("btn-sandbox").addEventListener("click", () => {
  limpiarFiltros();
  document.querySelectorAll(".caja").forEach(caja => {
    if (caja.dataset.genero === "Sandbox") {
      caja.classList.add("activo");
    }
  });
});

// Evento: Destacar RPG
document.getElementById("btn-rpg").addEventListener("click", () => {
  limpiarFiltros();
  document.querySelectorAll(".caja").forEach(caja => {
    if (caja.dataset.genero === "RPG") {
      caja.classList.add("activo");
    }
  });
});

// Evento: Destacar Favoritos del Autor
document.getElementById("btn-favoritos").addEventListener("click", () => {
  limpiarFiltros();
  
  const favoritos = ["Terraria", "Minecraft", "Elden Ring"];
  
  document.querySelectorAll(".caja").forEach(caja => {
    if (favoritos.includes(caja.dataset.nombre)) {
      caja.classList.add("activo");
    }
  });
});

renderizarJuegos();