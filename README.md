## Instrucciones

1. Deberan hacer un fork o un clone del siguiente repositorio: 

[https://github.com/SheykoWk/users-base](https://github.com/SheykoWk/users-base)

1. Instalar las siguientes dependencias
    1. bcrypt
    2. passport
    3. jsonwebtoken
    4. passport-jwt
2. Existen diferentes archivos vacios en el repositorio y otros que necesitan nuevas actualizaciones, tu tarea es llenarlos con la siguiente informacion
    1. src/auth/auth.controller.js
        1. Deberas agragar una funcion que verifique las credenciales del usuario, recibiendo solo el email y la contraseña, retornar el usuario en caso de ser exitoso, o null en caso de que no
    2. src/auth/auth.services.js
        1. Deberas manejar el servicio del login y ejecutar el controlador del punto a. En caso de ser exitoso deberas crear un token que almacene el id, el email y el rol del usuario
    3. src/auth/auth.router.js
        1. Manejar la peticion de tipo post a /login con el servicio del punto b. 
    4. src/middleware/auth.middleware.js
        1. Deberas crear la configuracion de passport con la estrategia de JWT verificando si pertenece a un usuario correcto 
        2. Se pueden apoyar de la documentacion 
        
        [passport-jwt](https://www.passportjs.org/packages/passport-jwt/)
        
    5. src/utils/crypto.js
        1. Deberan crear 2 utilidades usando bcrypt, la primera para encriptar la contraseña de nuestros usuarios, y la segunda para comparar la contraseña en texto plano con la contraseña encriptada
    6. src/users/users.controllers.js
        1. Deberan crear un nuevo controlador de usuario para obtener el usuario al hacer el login, obteniendolo por email, modificar el controlador de create para que encripte la contraseña con la utilidad creada en el punto e.
    7. Agregar al app la ruta de auth/login que creamos en el punto c.
3. Deberan proteger las rutas para eliminar y editar usuarios
4. Publicar el repositorio a class-center