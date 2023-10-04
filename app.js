const express = require('express');
const app = express();
const port = 3000;

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');

// Middleware para archivos estáticos (CSS)
app.use(express.static('public'));

// Middleware para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));

// Rutas de la aplicación
app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Lógica de autenticación
    if (username === 'usuario' && password === 'contrasena') {
        // Redireccion a la vista de confirmación
        res.render('confirmation');
    } else {
        res.send('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
});


app.listen(port, () => {
    console.log(`El servidor está funcionando en http://localhost:${port}`);
});
