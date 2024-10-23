# ORM 

En esta pequeña practica observamos como trabajar con la herramienta de sequelize para la creacion del ORM de nuestro proyecto del video club

## Vamos a empezar

Si te gustaria tener una copia del tutorial para realizar este proyecto puedes entrar a la siguiente liga ([https://github.com/Ericktati1234/server-http](https://github.com/Ericktati1234/Api-con-Express-y-ORM))
y descargar todo el proyecto

### Prerequisitos

Deberemos de ya poseer la herramienta de Docker en nuestro equipo y ejecutar una imagen de mysql con docker con el comando

```
docker run -dti -p3306:3306 -e MYSQL_ROOT_PASSWORD=abcd1234 mysql

```
Ahora entramos a nuestra otra herramienta de mysqlWorkbench e iniciamos una conexion local, cuando nos pida la contraseña será por fuerza abcd1234
En workbench vamos a crear una base de datos nueva la cual llamaremos video-club 

IMPORTANTE TENER CUIDADO CON LOS NOMBRES

### Ejecutando nuestro archivo

Ejecutamos nuestro archivo con el comando

```
npm start

```
Dicho comando dará de alta todos las tablas y relaciones que estan definidas en el proyecto. Podremos consultar en workbench la creacion de las tabals

### Terminando tutorial

Podemos hacer uso de Postman para la verificacion de nuestro comandos get, put, patch, post y delete de nuestro proyecto. Te invitamos que revises las rutas de cada uno de las entidades y pruebes ya sea la actualizacion, insercion, eliminacion, etc de datos

## Implementacion

Si no conocemos los parametros o valores que debemos de utilizar en el body consultemos dentro de cada controlador de entidad a probar y en cada uno de los procedimientos que se encuentran en los controladores se muestran ya sea si se necesita un parametro, un valor en el body o ambos

## Hecho con

* [VsCode](https://code.visualstudio.com) - Como editor de nuestro codigo fuente
* [GitHub](https://github.com) - Como repositorio remoto que contiene nuestros archivos tutorial
* [Node js](https://nodejs.org/en) - Como herramienta para la ejecucion de nuestro servidor https
* [PostMan](https://www.postman.com/) - Como herramienta auxiliar para la verificacion de metodos CRUD de nuestro ORM

## Contribucion

Si desea contribuir y mejorar el siguiente documento, favor de contactarnos en el siguiente correo (ContactoBinBash@coolmail.com)

## Versionado

Para el versionado y consulta de documento hacemos el uso de [GitHub](https://github.com) en el cual actualizamos, verificamos y probamos 
cada mejora en los codigos y tutoriales realizados

## Authors

* **Erick Nevarez** - *Totalidad del trabajo* - [Ericktati1234](https://github.com/Ericktati1234)

Por el momento a la fecha 22/10/2024 no existen colaboradores que hayan participado en el proyecto

## License

Este proyecto es usado solamente para usos didacticos, no nos hacemos responsables ninguno de los autores por el mal uso del codigo anexado
Todos los documentos y links son una via para obtener mayor conocimiento, no se obtiene ningun beneficio personal por el compartir los links

## Reconocimientos

* Un agradecimiento a todo aquella persona que este observanod este proyecto y me de la posibilidad de mostrar mis conocimientos


