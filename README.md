# Api test fz-sports

Prueba de Javier Mirada Villegas para el cargo de Back-end Developer JR (remote).

## Instalación

Lo primero que se debe realizar es clonar el respositorio compartido y ejecutar la instalación de las dependencias con

```bash
npm install
```

## Configuración de variables de entorno

Una vez clonado el repositorio e instaladas las dependencias es necesario crear un archivo .env en la raíz del proyecto con la siguiente información, la cual contempla una base de datos de MongoDB para conectarse

```env
PORT=3000
MONGO_URI=mongodb+srv://fzsports:fztest@cluster0.4lw6bas.mongodb.net/sports?retryWrites=true&w=majority
JWT_SECRET=n891c02e1
````

## Ejecutar el proyecto

Una vez realizado todo lo anterior se debe ejecutar el proyecto de manera local con el siguiente comando

```bash
npm run dev
```

Esto debe de mostrar en la consola el puerto en el que está corriendo la api rest y también la conección a la base de datos de la siguiente manera.

```bash
running on port 3000
MongoDB conectado en ac-ypmfkoh-shard-00-00.4lw6bas.mongodb.net:27017
```

# IMPORTANTE: Todas las peticiones deben realizarse con Postman, ThunderClient u otra herramienta que permita enviar el header de Authorization con Bearer Token

# Autenticación
## Registro
Para realizar las consultas definidas en la prueba recibida es necesario estar autenticado, por lo que, lo primero es registrar una cuenta.
Se debe realizar una petición tipo post cons los siguientes campos:

```json
{
  "name": "tunombre",
  "email": "tuemail@email.com",
  "password": "tupassword"
}
```

Al siguiente EndPoint:

```bash
http://localhost:3000/api/auth/register
```

## Login
Para realizar el login se debe realizar una petición tipo post cons los siguientes campos:

```json
{
  "email": "tuemail@email.com",
  "password": "tupassword"
}
```

Al siguiente EndPoint:

```bash
http://localhost:3000/api/auth/login
```

Al hacer el login, se responderá con un json que contiene un token, el cual debe ser utilizado para realizar las peticiones a los EndPoints de la evaluación.

Imagen de referencia:

![Image text](https://github.com/Caspec1/test-fz-sports/blob/main/img/obtenerToken.png)

# Configurar token en postman
Al crear una nueva petición en postman es necesario configurar el token, por lo que, en la petición que se va a realizar hay que dirigirse a la pestaña de Authorization y en Type selección Bearer Token. Una vez seleccionado hay que pegar el token obtenido anteriormente en el recuadro de Token

Imagen de referencia:

![Image text](https://github.com/Caspec1/test-fz-sports/blob/main/img/configurarToken.png)

# EndPoints de la evaluación
## Obtener todos los equipos

Una vez configurado el bearer token se debe realizar la petición tipo get a la siguiente url para obtener todos los equipos.

```bash
http://localhost:3000/api/team
```

Si se requiere realizar paginación, se deben incluir los siguientes query params, los cuales no pueden ser menores a 1

```url
page=1
limit=1
```

Ejemplo:
```url
http://localhost:3000/api/team?page=1&limit=5

```
Esto retornará la primera página mostrando solamente 5 equipos.

## Obtener jugadores de un equipo

Una vez configurado el bearer token se debe realizar la petición tipo get a la siguiente url para obtener los jugadores correspondientes a un equipo.

```bash
http://localhost:3000/api/teams/idTeam/players
```

Se debe reemplazar idTeam por el id de un equipo.

Ejemplo:

```bash
http://localhost:3000/api/teams/143/players
```

Si se requiere realizar filtro, se deben incluir el siguiente query param

```url
position=delantero
```

Ejemplo:
```url
http://localhost:3000/api/teams/143/players?volante
```

Esto retornará solamente los volantes correspondientes al equipo ingresado.

## Obtener jugadores en una posición agrupados por equipo

Una vez configurado el bearer token se debe realizar la petición tipo get a la siguiente url para obtener los jugadores que juegan en la posición proveída por la url agrupados por equipo

```bash
http://localhost:3000/api/teams/players/position
```

Se debe reemplazar position por una posición valida.

Ejemplo:

```bash
http://localhost:3000/api/teams/players/defensor
```

Esto retorna a todos los defensores de cada equipo.

Si se requiere realizar paginación, se deben incluir los siguientes query params, los cuales no pueden ser menores a 1

```url
page=1
limit=1
```

Ejemplo:
```url
http://localhost:3000/api/teams/players/dt?page=1&limit=5

```
Esto retornará la primera página mostrando solamente los dt de 5 equipos.
