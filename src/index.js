// 1. IMPORTACIONES
const express = require('express');
const app = express();
const PORT = 4000;

// 2. MIDDLEWARE
app.use(express.json());

// 3. RUTAS
app.get('/', (req, res) => {
    return res.json({
        msg: 'Hello world'
    });
});

// 4. SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor en línea en el puerto ${PORT}`);
});