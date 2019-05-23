# "Hackathon" de final de _Common Core_, películas


## ¿Porque adoramos las sagas de peliculas?

A veces uno como cinéfilo puede agotarse de la idea de incontables sagas, sobre todo porque llegó un punto en que secuela tras secuela parece ser un proceso irritante y poco original. Sin embargo, a veces los conjuntos de películas pueden crear algo tan interesante,que nos lleva a ver cada detalle y como se relacionan par llevarnos a un impactante final,que podemos repetir cientos de veces.

Nuestra aplicacion esta enfocada en entregar informacion de las sagas de peliculas mas reconocidas por los usuarios, entregando tambien la opcion de conocer nuevas sagas segun el genero de interes.



## Planificación Trello ##
Para organizar el trabajo utilizamos trello, para dividir las tareas de manera de optimizar nuestro reducido tiempo y considerar que partes del trabajo estan listas y cuales otras tenemos pendientes.


## Investigacion ##

Nuestro usuario

Para comenzar, confeccionamos una encuesta para saber qué tipo de información esperan obtener los posibles usuarios de nuestra aplicacion, asi poder determinar las necesides y los principales usos de nuestra interfaz.

Nuestros resultados fueron los siguientes:

1.- En este caso nos enfocaremos en un rango de edad entre los 15 y 35 años de edad, debido a la cantidad de tiempo que utilizan para ver peliculas.
<img src = src/img/rangoedades.png >

2.- El usuario promedio utiliza entre 5 y 10 horas aproximadamente, de su tiempo semanal para ver sus sagas favoritas.
<img src = src/img/tiempoenverpeliculas.png>

3.- Nuestra intencion con esta pregunta era saber cuales eran los generos de mayor interes de nuestros usuarios.
* Las 3 mas importantes fueron:
* Comedia: (63.6%)
* Accion: (54.5%)
* Fantasia: (38.4%) 

<img src = src/img/generos.png >

4.- Nuestra seleccion de sagas a mostrar en la pagina son en referencia a las mencionadas por nuestros usuarios.

<img src = src/img/sagasmasimport.png >

5.- Crearemos un fitro donde se pueda encontrar las peliculas por su genero.

<img src = src/img/filtro.png >

# Fase de Prototipado

Una vez definido el usuario, realizamos nuestro diagrama de flujo como principio del proceso creativo.

<img src = src/img/diagrama.jpeg>


## Historias de Usuario (Trello)

¿Cuál es la necesidad de nuestro usuario?

Una vez realizadas las encuestas, se crean las distintas historias de usuario que describen las necesidades de los usuarios definidos anteriormente.

HU
1: Yo como usuario quiero poder visualizar las peliculas mas populares que contienen secuelas para ver su informacion.

CA
1.1: Crear esqueleto de HTML, definiendo las pantallas de la app y sus funcionalidades.

HU
2: Yo como usuario quiero filtrar mis sagas de películas favoritas , para encontrar la información que busco de la saga completa.

CA 
2.2: Crear un filtro de las peliculas mas relevantes para el usuario con toda la informacion.

HU
3: Yo como usuario quiero poder encontrar la película en orden por fecha de estreno.

CA 
3.3: Crear dento del filtro un orden por defecto que me entregue las sagas segun su fecha de estreno en el cine. 

HU
4: Yo como usuario quiero filtrar las peliculas por genero de mi interes.

CA
4.4: Crear un filtro dentro de la pagina donde se pueda acceder a las peliculas por genero.

HU
5: Yo como usuario quiero encontrar criticas y trailers de las peliculas.

CA
5.5 Crear un link dentro de la pagina donde se pueda acceder a las criticas y trailers de las peliculas.

## Prototipo de baja fidelidad

A partir de la investigacion de usuario, realizamos nuestro primer bozeto como prototipo de baja fidelidad, para explorar las primeras ideas que tenemos en relacion a nuestra aplicacion.

<img src = src/img/inicio.jpeg >
<img src = src/img/inicio2.jpeg >
<img src = src/img/modal.jpeg >

## Prototipo de Alta Fidelidad

Ya establecido el usuario se creó en Marvel el prototipo de alta fidelidad, se detrminaron  los colores, información y su distribución. 

<img src = src/img/protalta.png >
<img src = src/img/modal.png >

Una vez teseado con usuarios, realizamos conclusiones con respecto a las entrevistas con usuarios.

1.- Ordenar la informacion del modal e incorporar colores.
2.- Agregar un filtro por genero, para visualizar otras peliculas del genero de preferencia.

## Desarrollo del trabajo

HTML para mostrar la página al usuario y unir los script de JavaScript y links de CSS, Materialize.
Uso de HTML dinámico desde el main.js
Manejo del DOM desde main.js
Uso de la API OMDB y The Movie db a partir del método fetch.
Manejo de estilos CSS para la página de escritorio y responsivo.
Trabajo colaborativo en Git-Hub

Trabajo Colaborativo:
El equipo comenzo el trabajo con una lluvia de ideas para definir un tema, los primeros bozetos del prototipo de baja fidelidad y las historias de usuario. Para desarrollar el trabajo se dividieron las tareas segun comentamos a continuacion.

Carolina Cueto:

Los aspectos relacionados con el desarrollo UX,
diagrama de flujo, prototipo de baja y alta fidelidad. Testeos de usuarios y cnclusiones.
Creacion del Readme.


Jocelin Casteletti y Nohemi Martinez:

Uso de base de datos de api OMDB y The Movie db usando fetch para obtener los datos.
Uso de JS en distintas pantallas de la aplicación.
Uso de CSS para el estilo de la aplicacion.
Creacion de filtros para buscar peliculas por genero y por sagas.
Implementación de framework modales y navbar.
Formato Responsivo


