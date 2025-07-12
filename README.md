# FoodiesBNB

Aplicación de ejemplo construida con Next.js. Incluye autenticación mediante `next-auth` y Supabase Auth, y un dashboard sencillo.

## Puesta en marcha

1. Clona este repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo `.env.example` a `.env.local` y ajusta las siguientes variables:
   - `NEXTAUTH_SECRET`: Un valor seguro para la sesión de NextAuth.
   - `NEXT_PUBLIC_SUPABASE_URL`: URL de tu proyecto de Supabase.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Clave pública (anon) de Supabase.
4. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Autenticación con Supabase

La autenticación de usuarios se realiza usando **Supabase Auth**. Cuando un usuario inicia sesión, las credenciales se validan contra el sistema de autenticación nativo de Supabase (no contra una tabla personalizada).  
Esto permite aprovechar la seguridad y gestión de usuarios que ofrece Supabase.

- Para registrar usuarios, puedes usar el panel de Supabase o implementar un formulario de registro que use la API de Supabase Auth.
- El login utiliza el proveedor de credenciales de NextAuth, que internamente valida contra Supabase Auth.

## Rutas principales del proyecto

- `/`  
  Página principal o landing de la aplicación.

- `/login`  
  Página de inicio de sesión. Aquí puedes ingresar tus credenciales para autenticarte usando Supabase Auth.

- `/dashboard`  
  Panel principal al que acceden los usuarios autenticados. (Asegúrate de estar logueado para acceder.)

- `/apply`  
  Página para aplicar como nuevo usuario/restaurante (puede ser un formulario de registro o información).

- `/forgot-password`  
  Página para recuperación de contraseña (puedes implementar la lógica usando Supabase Auth).

- `/api/auth/[...nextauth]`  
  Ruta de API interna utilizada por NextAuth para gestionar la autenticación y las sesiones.

## Credenciales de prueba

Para acceder al panel puedes usar las siguientes credenciales de demostración (debes crearlas en Supabase Auth si no existen):

- **Correo:** `demo@foodies.com`
- **Contraseña:** `password1234`

## Uso

1. Abre la aplicación en tu navegador y haz clic en "Iniciar Sesión" o visita `/login`.
2. Ingresa el correo y contraseña de prueba indicados arriba.
3. Si las credenciales son correctas se mostrará el panel principal (`/dashboard`). De lo contrario se mostrará un mensaje de error.

## Notas

- El proyecto está pensado sólo para fines de demostración. No utilices estas credenciales en un entorno real.
- Si quieres agregar más información a los usuarios, puedes usar la tabla de perfiles de Supabase y asociarla por el `id` del usuario autenticado.
- Para registrar nuevos usuarios, puedes usar el panel de Supabase o implementar un formulario que use `supabase.auth.signUp`.

## Recursos útiles

- [Documentación de Supabase Auth](https://supabase.com/docs/guides/auth)
- [Documentación de NextAuth.js](https://next-auth.js.org/)
- [Documentación de Next.js](https://nextjs.org/docs)
