# JWT como herramienta de autenticacion para tareas CRUD

En esta practica se realizó una forma de autenticacion por medio de la herramienta de jwl de express para que sea requerido un token en el momento de cualquier metodo CRUD de http

## Vamos a empezar

Si te gustaria tener una copia del tutorial para realizar este proyecto puedes entrar a la siguiente liga (https://github.com/Ericktati1234/Api-con-Express-y-ORM)
y descargar todo el proyecto

### Prerequisitos

Se pide que se realice la instalacion de todas las dependencias con npm install

### Instalando y verificando version (funcionamiento)

Verificamos que nuestro proyecto funciona correctamente ya que al ejecutar (estando en la raiz) el comando npm start, nos aparece el mensaje que se ha dado de alta correctamente en la base de datos

### Ejecutando nuestro archivo

Vamos a realizar lo siguiente:

Vamos a intentar ejecutar cualquier comando CRUD (get, post, patch, etc) a cualquier ruta de nuestro proyecto excepto /login, ya que dicha ruta no posee de autenticacion

Vamos a hacer un post de un usuario con los campos:
    name
    lastName
    email
    password

IMPORTANTE seguir dichos nombres en las variables del body

Despues vamos a consultar en el archivo app.js la contraseña jwtKey que vamos a necesitar poner en la pestaña de autorizacion, con el algoritmo HS256 y debajo escribiremos dicha clave.

Ahora si, realizamos el post, despues vamos a hacer un nuevo post en login, dicho post solo poseera un email y un password valido (preferentemente el que acabamos de realizar en el paso anterior), al darle send, nos retornará un token, dicho token ahora lo podemos poner como autorizacion en la pestaña de la autorizacion tipo bearer token y dicho token nos permitira por un tiempo de 10 minutos realizar las tareas que queramos (importante usar el token cada vez que realicemos una tarea)

### Terminando tutorial

Invitamos a que realicen las pruebas que gustn con dichos tokens y esperen esos 10 minutos para que vean que el token pierde validez

## Implementacion

Invitamos tambien que se consulte en las paginas oficiales de jwt express para mayores comportamientos de dicha libreria

## Hecho con

* [VsCode](https://code.visualstudio.com) - Como editor de nuestro codigo fuente
* [GitHub](https://github.com) - Como repositorio remoto que contiene nuestros archivos tutorial

## Contribucion

Si desea contribuir y mejorar el siguiente documento, favor de contactarnos en el siguiente correo (ContactoBinBash@coolmail.com)

## Versionado

Para el versionado y consulta de documento hacemos el uso de [GitHub](https://github.com) en el cual actualizamos, verificamos y probamos 
cada mejora en los codigos y tutoriales realizados

## Authors

* **Erick Nevarez** - *Totalidad del trabajo* - [Ericktati1234](https://github.com/Ericktati1234)

Por el momento a la fecha 06/11/2024 no existen colaboradores que hayan participado en el proyecto

## License

Este proyecto es usado solamente para usos didacticos, no nos hacemos responsables ninguno de los autores por el mal uso del codigo anexado
Todos los documentos y links son una via para obtener mayor conocimiento, no se obtiene ningun beneficio personal por el compartir los links

## Reconocimientos

SIn agradecimientos

