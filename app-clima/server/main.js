// main.js
import express from 'express';
import path from 'path'; // Importa el módulo 'path' para trabajar con rutas de archivos

// Crear una instancia de Express
const app = express();

// Configurar Express para servir archivos estáticos desde la carpeta 'build' de tu aplicación React
const staticFilesPath = path.resolve(__dirname, '../build');
app.use(express.static(staticFilesPath));

// Configurar middleware para habilitar CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Ruta para manejar la solicitud y enviarla a la API
app.get('/find_places_prefix', async (req, res) => {
    try {
        const url = `https://www.meteosource.com/api/v1/free/find_places_prefix?${req.url.split('?')[1]}`;
        const response = await fetch(url); // Ahora usamos la variable fetch
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Iniciar el servidor en el puerto 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
