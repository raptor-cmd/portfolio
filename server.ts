// Importamos los posts de blog desde nuestro archivo de datos
import { blogPosts } from "./data/blogPosts";

// Configuramos el servidor HTTP de Bun en el puerto 3001 para evitar conflicto con Next.js
const server = Bun.serve({
  port: 3001,
  // Definimos las rutas de nuestra API
  routes: {
    // Ruta de health check para verificar que la API está funcionando
    "/health": {
      GET: () => {
        return Response.json({
          status: "ok",
          message: "API is running healthy",
          timestamp: new Date().toISOString()
        });
      },
    },
    // Ruta para obtener todos los posts del blog
    "/posts": {
      GET: () => {
        // Retornamos todos los posts en formato JSON
        return Response.json(blogPosts);
      },
    },
  },
  // Handler para rutas que no existen (404)
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

// Mostramos un mensaje amigable en consola cuando el servidor inicia
console.log(`🚀 API server running at ${server.url}`);
console.log(`📝 Posts endpoint: ${server.url}posts`);
console.log(`💚 Health check: ${server.url}health`);
