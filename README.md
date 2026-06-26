> [!NOTE]
> Este repositorio contiene la resolución de un trabajo práctico enfocado en maquetación moderna y manipulación del DOM. El sitio está publicado y funcional a través de GitHub Pages.

# Trabajo Práctico: Flexbox, Vanilla JS y React
Un proyecto de desarrollo web frontend diseñado para evidenciar el dominio de estructuras dinámicas, interfaces organizadas y manejo de estados. 

El objetivo del repositorio es demostrar la resolución de problemas mediante código limpio y estructurado, priorizando el desarrollo metódico y la comunicación efectiva de las soluciones.

## Estructura del Proyecto

1. **`index.html`**: Página principal y menú de navegación. Conecta todos los ejercicios del trabajo.
2. **`flexbox.html`**: Resolución del Ejercicio 1. Implementa maquetación mediante Flexbox y un script en Vanilla JS que genera contenido dinámico desde un arreglo (videojuegos), incluyendo filtros interactivos en el DOM.
3. **`personas.html`**: Resolución del Ejercicio 2. Contiene un formulario HTML y JavaScript puro para manipular el DOM directamente. Permite alta y baja de registros en una tabla y calcula automáticamente el Índice de Masa Corporal (IMC).
4. **`react.html`**: Resolución del Ejercicio 3. Replica la funcionalidad del Ejercicio 2, pero desarrollada íntegramente con React. Utiliza estado y componentes sin depender de librerías externas de UI.

## Requisitos Cumplidos
* **Despliegue:** Publicado en GitHub Pages.
* **Gestión de versiones:** Historial de Git con más de 10 commits significativos y secuenciados que reflejan el proceso de desarrollo.
* **Navegabilidad:** Todas las páginas están interconectadas mediante enlaces internos.
* **Dependencias:** No se utilizan frameworks de CSS (como Bootstrap) ni componentes de UI ajenos a React, respetando la consigna original.

## Preguntas Frecuentes

### P: ¿Se utilizaron frameworks de estilos externos?
R: No. Toda la estructura y estilización se realizó con CSS puro, haciendo énfasis en el uso de Flexbox para la distribución visual.

### P: ¿Cómo funciona la implementación de React?
R: React (versión 18) y ReactDOM se importan mediante CDN en el archivo `react.html`. La transpilación de JSX se maneja a través de Babel. Toda la lógica de interfaz, eventos y cálculo de IMC recae en un componente funcional (`app-personas.jsx`) utilizando el hook `useState`.

### P: ¿Es necesario algún entorno de desarrollo (Node.js/NPM) para ejecutarlo localmente?
R: No. Al utilizar JavaScript Vanilla y los CDN para React, el proyecto se puede ejecutar abriendo los archivos HTML directamente en el navegador o utilizando extensiones locales como Live Server.

## Créditos
Desarrollado por Lautaro Jover.