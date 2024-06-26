const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer'); 
const path = require('path');
const app = express();
const port = 5000;


app.use(express.json({ limit: '50mb'}));

//configuracion de la conexion a la base de datos
const db = mysql.createConnection({
  host: '',
  user: 'root',
  password: 'cris2004',
  database: 'variedadesduarte',
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Configuración de la conexión a la segunda base de datos
const db2 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cris2004',
  database: 'tablahechos'
});

db2.connect((err) => {
  if (err) {
      console.error('Error de conexión a la segunda base de datos:', err);
  } else {
      console.log('Conexión exitosa a la segunda base de datos');
  }
});


app.use(cors());

// Configura el almacenamiento para los archivos subidos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, Date.now() + extension); // Nombre del archivo se genera con una marca de tiempo para evitar conflictos
  },
});

// Crea una instancia de multer con la configuración de almacenamiento
const upload = multer({ storage: storage });

// Maneja la carga de archivos
app.post('/upload', upload.single('imagen'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha seleccionado ningún archivo.');
  }
  const imageUrl = 'http://localhost:5000/' + req.file.path;
  res.json({ imageUrl });
});

app.post('/upload2', upload.single('nuevaImagen'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha seleccionado ningún archivo.');
  }
  res.json({ imageUrl: 'http://localhost:5000/' + req.file.path });
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
  maxAge: 0, // No almacenar en caché (0 segundos)
}));

// configuracion de CORS
app.use(cors());

// importar y usar rutas CRUD
const crudRoutes = require('./routes/crudRoutes.js')(db);
app.use('/crud', crudRoutes);

// Importar y usar rutas para la segunda base de datos
const crudRoutesDb2 = require('./routes/crudRoutesDb2')(db2); // Pasa la instancia de la segunda base de datos a crudRoutesDb2
app.use('/crudDb2', crudRoutesDb2);


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend funcionando en el puerto:${port}`);
});

// Manejador de errores
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).send({ error: 'Error en el análisis de JSON' });
  } else {
    next();
  }
});



