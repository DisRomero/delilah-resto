# Delilah Restó
#### by Diana Romero 😎 🌸

![N|Solid](https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/qyomdhenscbmqehdy7yp)

Este proyecto es un sistema de pedidos en linea para un restaurante, donde como propieratario del restaurante podra crear, ver, editar y eliminar  productos que ofrece, como usuario podra crear y ver sus pedido realizados con los productos seleccionados en la creaction del pedido.

## Comenzamos 🏁
Pre-requisitos 📋
Para poder utilizar este proyecto sin problema alguno necesitamos contar con las siguientes herramientas:

- Herramienta para hacer peticiones a API'S (en este caso utilizaremos Postman - https://learning.postman.com/docs/getting-started/installation-and-updates/).
- Gestor de base de datos (en este caso utilizaremos MariaDB - https://www.mariadbtutorial.com/getting-started/install-mariadb/).
- Un editor de texto (en este caso utilizaremos Visual Studio Code - https://code.visualstudio.com/docs/introvideos/basics).*
- Un gestor de versiones (en este caso utilizaremos Git - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).*
Si ya tienes el editor de texto o el gestor de versions instalado, no necesitas instalar el otro.

## Viendo el codigo 🔧

- Descaga o clona el codigo.
- Cuando ya tengas el codigo en tu computador, abrelo con el editor(Abre la carpeta con el editor) o con git ( Clic derecho Git Bash dentro de la carpeta del codigo).
- Importa la base de datos con el arquivo ".sql" (https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb)
- Ahora necesitas escribir en la consola "npm i -y" (Esto te descargara todas las dependencias necesarias, sin las comillas).
- Ahora necesitas escribir "nodemon app.js" (sin las comillas).
- Ahora la herramienta para hacer peticiones y probar las API'S. ✌️

## Ejemplos de las peticiones en Postman ☑️

Ejemplo de la petición (allProduct)🍕
- En postman selecciona la petición "GET".
- En la url agrega tu ruta local (en este caso seria "http://localhost:3000" seguido de la ruta del API "/product/allProducts").
- clic en botón azul Enviar y listo, te responderá con el código 200 OK y en el "Body" de la respuesta podras ver todos los productos que hay en la base de datos.

![image](https://user-images.githubusercontent.com/33766030/125563616-ed76f2ef-1af0-4a46-bbce-87e416364dc1.png)

Ejemplo de la petición (Login)👍
- En postman selecciona la petición "POST".
- En la url agrega tu ruta local (en este caso seria "http://localhost:3000" seguido de la ruta del API "/user/login").
- En esta petición necesitas enviar información, asi que da clic en Body
- Selecciona la opción Raw
- Selecciona la opción JSON
- Ahora ingresa la información del cliente con el que quiere iniciar sesión "{"correo": "cliente@cliente.com","contrasenia": "contraClie"}"
- clic en botón azul Enviar y listo, te responderá con el código 200 OK y en el "Body" copia la información que esta en "token" ya que la necesitaras para peticiones que solo el usuario Administrador tiene acceso.
- 
![image](https://user-images.githubusercontent.com/33766030/125564163-4b10e988-d639-4c8c-a73b-b4cf07107de0.png)

Ejemplo de la petición (crear pedido)♨️
- En postman selecciona la petición "POST".
- En la url agrega tu ruta local (en este caso seria "http://localhost:3000" seguido de la ruta del API "/order/createOrder").
- En esta petición necesitas enviar información de autenticacion e informacion del pedido, asi que da clic en Auth
- Selecciona la opción Bearer Token
- Ingresa todo el texto que te mostro en "Token"en la peticion Login
![image](https://user-images.githubusercontent.com/33766030/125565167-8c7435ef-14ff-442b-ad63-3edc3d7871d1.png)
- Da clic en Body
- Selecciona la opción Raw
- Selecciona la opción JSON
- Ahora ingresa la información depedido "{"detalle": "Pedido con Pizza y gaseosa","ID_medio_de_pago": 1,"ID_usuario": 4,"total": 50000,"products": [8, 9]}" **ten presente que el campo "products" si se crea un pedido con un solo producto solo ingresarias un digito que corresponde al ID del producto, pero si el pedido tiene varios productos si necesitas colocar "[]" y separar los digitos con coma "," **
- clic en botón azul Enviar y listo, te responderá con el código 201 Created.
- ![image](https://user-images.githubusercontent.com/33766030/125566452-d99a9194-8d88-4186-942f-ed8d3209d877.png)


