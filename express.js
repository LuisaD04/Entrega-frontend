// .express.js

const express = require('express');
const app = express();

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Manejar la ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Manejar la ruta para la página de administrador
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin/admin.html');
});

app.get('/servicios', (req, res) => {
  res.sendFile(__dirname + '/public/Html/servicios.html');
});

app.get('/servicio/diseno-web', (req, res) => {
  res.sendFile(__dirname + '/public/Html/interna_servicios.html');
});

app.get('/servicio/prototipos', (req, res) => {
  res.sendFile(__dirname + '/public/Html/interna_servicios.html');
});

app.get('/servicio/desarrollo-proyectos', (req, res) => {
  res.sendFile(__dirname + '/public/Html/interna_servicios.html');
});

app.get('/servicio/levantamiento-informacion', (req, res) => {
  res.sendFile(__dirname + '/public/Html/interna_servicios.html');
});

app.get('/servicio/analisis-datos', (req, res) => {
  res.sendFile(__dirname + '/public/Html/interna_servicios.html');
});

app.get('/servicio/estudio-proyectos', (req, res) => {
  res.sendFile(__dirname + '/public/Html/interna_servicios.html');
});
// files js

app.get('/servicios.js', (req, res) => {
  res.sendFile(__dirname + '/public/Html/servicios.js');
});

// files css


// Iniciar el servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
