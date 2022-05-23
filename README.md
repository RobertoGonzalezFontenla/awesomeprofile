
# Creador de tarjetas

Hola! Somos el equipo Remake

## Resumen

En este proyecto vamos a desarrollar nuestro primer servidor web.
Partimos de un código heredado que migramos a REACT, que usaba un servidor creado por las profesoras de Adalab.

## Objetivos

 - Consolidar el aprendizaje de las tecnologías Node JS y Express JS para aprender a escuchar peticiones desde los navegadores.
 - Consolidar el aprendizaje de SQL para trabajar con bases de datos y guardar los datos de las usuarias de forma persistente.
 - Consolidar el aprendizaje de API Rest para saber cómo estructurar y organizar las comunicaciones entre un navegador y un servidor de forma óptima.
 - Ser capaces de realizar un proyecto web completo, sin necesidad de solicitar ayuda a ningún otro equipo de desarrollo.
 - Ser capaces de poner en producción un proyecto completo: front end + back end.
 - Mejorar la comunicación entre los miembros del equipo y con otros equipos de desarrollo.

 ## Caso de uso
 Con este servidor podemos demostrar que tenemos un perfil full stack (front end + back end) y que somos desarrolladoras versátiles capaces de trabajar en cualquier departamento técnico de una empresa de desarrollo.

 ## Especificaciones
 ## Crear una nueva tarjeta a través del API
 La web envía una petición con datos al servidor para crear una tarjeta, por cada una de estas peticiones, el servidor debe:
 - Comprobar que los datos recibidos desde el navegador son correctos.
 - En caso de que los datos no sean correctos, el servidor debe devolver una respuesta de error.
 - En caso de que los datos sí sean correctos, el servidor debe:
    - Guardar los datos en una base de datos.
    - Generar un id o uuid único para la nueva tarjeta.
    - Generar una URL con el id o uuid para que cuando se acceda a ella se visualice la tarjeta creada por la usuaria.
    - Devolver una respuesta al navegador con esta URL.

## Visualizar una tarjeta existente a través del motor de plantillas
Cada vez que se crea una tarjeta desde la web, el servidor asocia una URL a cada tarjeta.
Una URL de ejemplo creada por el servidor de Adalab es https://awesome-profile-cards.herokuapp.com/card/19591613152820696. Una URL de ejemplo creada por vuestro servidor debería ser algo como https://url-de-nuestro-servidor/card/19591613152820696.
Cuando se accede a esta URL el servidor debe mostrar una página con los datos de la tarjeta:
- Datos de la usuaria
- Foto de la usuaria
- Colores de la tarjeta

## Servidor de estáticos
La web se debe comunicar con el servidor que vamos a crear, es decir, con https://url-de-nuestro-servidor.

## Servidor de producción
Una vez finalizado el servidor lo publicaremos o lo desplegaremos (que es lo mismo) en un servidor real, para que cualquier usuaria pueda acceder a nuestra página.
En módulos anteriores hemos usado GitHub Pages que es un servidor para front. En este módulo desplegaremos nuestro servidor en Heroku, que es un servidor para front + back.
En este [repositorio](https://github.com/Adalab/tshirt-eshop-heroku) se explica:
- Cómo desplegar un proyecto en Heroku.
- Cómo tener un proyecto de front dentro de un proyecto de back.

### Herramientas que hemos utilizado

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://gulpjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="gulp" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>

### Integrantes del equipo

[![Autor](https://img.shields.io/badge/-Alicia%20Padr%C3%B3n%20-eda7c4?style=flat&logo=github)](https://github.com/aliciaapadron)

[![Autor](https://img.shields.io/badge/Paula%20Gomez-8980b2?style=flat&logo=github)](https://github.com/pgomezariza)

[![Autor](https://img.shields.io/badge/Carlota%20Blanco-b2f4d3?style=flat&logo=github)](https://github.com/CarlotaBlanco)

[![Autor](https://img.shields.io/badge/Tania%20Fernández-efebb8?style=flat&logo=github)](https://github.com/tanferest)

[![Autor](https://img.shields.io/badge/Lorena%20Guartazaca-27dbf3?style=flat&logo=github)](https://github.com/lorenaggs)


```
Project ©Remake | 2022
```
