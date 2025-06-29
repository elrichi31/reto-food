# FoodiesBNB

Aplicación de ejemplo construida con Next.js. Incluye autenticación básica mediante `next-auth` y un dashboard sencillo.

## Puesta en marcha

1. Clona este repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo `.env.example` a `.env.local` y ajusta `NEXTAUTH_SECRET` a un valor seguro.
4. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Credenciales de prueba

Para acceder al panel puedes usar las siguientes credenciales de demostración:

- **Correo:** `demo@foodies.com`
- **Contraseña:** `password`

## Uso

1. Abre la aplicación en tu navegador y haz clic en "Iniciar Sesión".
2. Ingresa el correo y contraseña de prueba indicados arriba.
3. Si las credenciales son correctas se mostrará el panel principal. De lo contrario se mostrará el mensaje "Usuario o contraseña incorrecto" debajo del botón de inicio de sesión.

## Notas

El proyecto está pensado sólo para fines de demostración. No utilices estas credenciales en un entorno real.
