# 05-hook-app

## Crear un proyecto de React con Hooks

path_main: "%path_local%\ReactCeroAExpertWork"

`yarn create vite`

Project Name: hook-app

Cambiar nombre de la carpeta de proyecto por "05-hook-app"

cd 01-hook-app

Instalar las dependencias
`yarn`	

Ejecutar el proyecto
`yarn dev`

## Configurar el proyecto

- Eliminar archivos de directorio src, a excepción del archivo:
src/main.jsx

- Agregar Bootstrap

index.html

`<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
/>`


## TIPS
Configuirar code .
Ctrl + Shift + P 
>code

<br />

## Items Curso
### 118. useCounter - CustomHook

Base CustomHook:

<code>
export const useCounter = () => {
      // Definir las variables de estado y funciones
      return {
            // Retorna un objeto con las propiedades que se quieran usar en el componente
      }
}
</code>


### 129. Incorporar Caché

const localCache()

### 130. useRef - Primer uso

- useRef: Es un Hook de React que nos permite crear referencias a elementos del DOM. Es útil para controlar la renderización de componentes y para acceder a elementos del DOM sin necesidad de usar el estado. También se puede usar para almacenar valores mutables que no causan una nueva renderización cuando cambian.

- useRef: Devuelve un objeto mutable con una propiedad .current que se inicializa con el valor pasado como argumento. Este objeto se mantiene constante durante toda la vida del componente.


