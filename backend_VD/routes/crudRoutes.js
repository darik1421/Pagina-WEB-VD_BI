const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(); // Configura multer


module.exports = (db) => {



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




router.get('/stock/:idProducto', (req, res) => {
  const idProducto = req.params.idProducto;

  // Realiza una consulta a la base de datos para obtener la cantidad de stock del producto
  const stockQuery = 'SELECT cantidad_Disponible FROM Productos WHERE id_Producto = ?';

  db.query(stockQuery, [idProducto], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error al consultar el stock del producto' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Obtén la cantidad de stock del resultado de la consulta
    const stock = results[0].cantidad;

    res.json({ stock });
  });
});



// Ruta para validar usuarios

  // Ruta para verificar las credenciales y obtener el rol del usuario
  router.post('/login', (req, res) => {
    const { nombre_Usuario, contrasena } = req.body;
  
    if (!nombre_Usuario || !contrasena) {
      return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
    }
  
    // Realizar la consulta para verificar las credenciales en la base de datos
    const sql = `SELECT id_Usuario, rol FROM usuarios WHERE nombre_Usuario = ? AND contrasena = ?`;
    db.query(sql, [nombre_Usuario, contrasena], (err, result) => {
      if (err) {
        console.error('Error al verificar credenciales:', err);
        return res.status(500).json({ error: 'Error al verificar credenciales' });
      }
  
      if (result.length === 1) {
        const { id_Usuario, rol } = result[0];
        console.log('Server Response:', { id_Usuario, rol });
        res.json({ id_Usuario, rol });
      } else {
        console.log('Credenciales incorrectas');
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
      
    });
  });
  





// Ruta para leer los nombres de marca y categoria


// Ruta para obtener los nombres de las categorías
router.get('/nombrecategorias', (req, res) => {
  const sql = 'SELECT id_Categoria, nombre_Categoria FROM categorias';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener las categorías:', err);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    } else {
      res.status(200).json(result);
    }
  });
});

// Ruta para obtener los nombres de las marcas
router.get('/nombremarcas', (req, res) => {
  const sql = 'SELECT id_Marca, nombre_Marca FROM marcas';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener las marcas:', err);
      res.status(500).json({ error: 'Error al obtener las marcas' });
    } else {
      res.status(200).json(result);
    }
  });
});

 // Ruta para consultar Categoria

  router.get('/readcategoria', (req, res) => {

    const sql = 'SELECT * FROM categorias';
  
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al leer registros:', err);
            res.status(500).json({ error: 'Error al leer registros' });
        } else {
            res.status(200).json(result);
        }
    });
  });
  
  //Ruta para consultar comentarios

  router.get('/readcomentarios', (req, res) => {
    const sql = `
        SELECT Comentarios.*, Productos.nombre_Producto, Usuarios.nombre_Usuario
        FROM Comentarios
        INNER JOIN Productos ON Comentarios.id_Producto = Productos.id_Producto
        INNER JOIN Usuarios ON Comentarios.id_Usuario = Usuarios.id_Usuario;
    `;

    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al leer registros:', err);
            res.status(500).json({ error: 'Error al leer registros' });
        } else {
            res.status(200).json(result);
        }
    });
});


  //Ruta para consultar compras

  router.get('/readventas', (req, res) => {

    const sql = 'SELECT * FROM ventas';
  
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al leer registros:', err);
            res.status(500).json({ error: 'Error al leer registros' });
        } else {
            res.status(200).json(result);
        }
    });
  });

    //Ruta para consultar Detalle compra
    router.get('/readDetalleVentas', (req, res) => {
      const sql = 'SELECT detalle_venta.*, productos.nombre_Producto, productos.precio_Venta,productos.precio_Compra, productos.cantidad_Disponible, ventas.estado FROM detalle_venta INNER JOIN productos ON detalle_venta.id_Producto = productos.id_Producto INNER JOIN ventas ON detalle_venta.id_Venta = ventas.id_Venta';
    
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al leer registros:', err);
          res.status(500).json({ error: 'Error al leer registros' });
        } else {
          res.status(200).json(result);
        }
      });
    });

    router.get('/readtop10ventas', (req, res) => {
      const sql =`SELECT 
      p.id_Producto,
      p.nombre_Producto,
      SUM(dv.total_Venta) AS total_Ventas
  FROM 
      Detalle_Venta dv
  JOIN 
      Productos p ON dv.id_Producto = p.id_Producto
  GROUP BY 
      p.id_Producto, p.nombre_Producto
  ORDER BY 
      total_Ventas DESC
  LIMIT 10;`;
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al leer registros:', err);
          res.status(500).json({ error: 'Error al leer registros' });
        } else {
          res.status(200).json(result);
        }
      });
    });
    
    router.get('/readStock', (req, res) => {
      const sql = ` SELECT 
      id_Producto,
      nombre_Producto,
      cantidad_Disponible
  FROM 
      Productos
  ORDER BY 
      cantidad_Disponible DESC
  LIMIT 10;`;
    
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al leer registros:', err);
          res.status(500).json({ error: 'Error al leer registros' });
        } else {
          res.status(200).json(result);
        }
      });
    });





  //Ruta para consultar marcas

  router.get('/readmarcas', (req, res) => {

    const sql = 'SELECT * FROM marcas';
  
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al leer registros:', err);
            res.status(500).json({ error: 'Error al leer registros' });
        } else {
            res.status(200).json(result);
        }
    });
  });

  //Ruta para consultar Producto

  router.get('/readproducto', (req, res) => {

    const sql = 'SELECT * FROM productos';
  
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al leer registros:', err);
            res.status(500).json({ error: 'Error al leer registros' });
        } else {
            res.status(200).json(result);
        }
    });
  });

  //Ruta para consultar usuarios

  router.get('/readusuarios', (req, res) => {

    const sql = 'SELECT * FROM usuarios';
  
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al leer registros:', err);
            res.status(500).json({ error: 'Error al leer registros' });
        } else {
            res.status(200).json(result);
        }
    });
  });
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Ruta para insertar Categoria

  router.post('/createcategoria', (req, res) => {
    const { nombre_Categoria } = req.body;
  
    // Verifica si se proporcionó el nombre de la categoría
    if (!nombre_Categoria) {
      return res.status(400).json({ error: 'El nombre de la categoría es obligatorio' });
    }
  
    // Consulta SQL para insertar una nueva categoría
    const sql = 'INSERT INTO categorias (nombre_Categoria) VALUES (?)';
    const values = [nombre_Categoria];
  
    // Ejecuta la consulta SQL
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar categoría:', err);
        res.status(500).json({ error: 'Error al insertar categoría' });
      } else {
        // Devuelve una respuesta exitosa
        res.status(201).json({ message: 'Categoría insertada con éxito' });
      }
    });
  });

  //Ruta para insertar comentarios

  router.post('/createcomentarios', (req, res) => {
    const { calificacion, fecha_Comentario, contenido_Comentario, id_Usuario,id_Producto} = req.body;
  
    // Verifica si se proporcionó el nombre de la categoría
    if (!calificacion ||!fecha_Comentario ||! contenido_Comentario ||! id_Usuario||!id_Producto ) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    // Consulta SQL para insertar una nueva categoría
    const sql = 'INSERT INTO comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario,id_Producto) VALUES (?,?,?,?,?)';
    const values = [calificacion, fecha_Comentario, contenido_Comentario, id_Usuario,id_Producto];
  
    // Ejecuta la consulta SQL
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar comentario:', err);
        res.status(500).json({ error: 'Error al insertar comentarios' });
      } else {
        // Devuelve una respuesta exitosa
        res.status(201).json({ message: 'Comentario insertado con exito' });
      }
    });
  });

  //Ruta para insertar compras

// Modificar la ruta /createcompras
router.post('/createventa', (req, res) => {
  const { id_Usuario,estado, fecha_Estimada, detalle} = req.body;
  const fecha_Venta = new Date();
  const hora_Venta = new Date();

    // Insertar la compra
    const sqlCompra = 'INSERT INTO ventas ( id_Usuario,fecha_Venta, hora_Venta, estado, fecha_Estimada) VALUES (?, ?, ?, ?, ?)';
    db.query(sqlCompra, [id_Usuario,fecha_Venta, hora_Venta, estado, fecha_Estimada], (err, result) => {
      if (err) {
        console.error('Error al insertar venta:', err);
        return res.status(500).json({ error: 'Error al insertar venta' });
      }

    const idVenta = result.insertId;

    // Insertar el detalle de compra
    const sqlDetalle = 'INSERT INTO detalle_venta (cantidad_Productos, precio_Venta, id_Producto, id_Venta) VALUES ?';
    const values = detalle.map((item) => [item.cantidad_Productos, item.precio_Venta, item.id_Producto, idVenta]);
    db.query(sqlDetalle, [values], (err, result) => {
      if (err) {
        console.error('Error al insertar detalle de venta:', err);
        return res.status(500).json({ error: 'Error al insertar detalle de venta', details: err.message });
      }

      // Devolver respuesta exitosa
      res.status(201).json({ message: 'Venta y detalle de venta agregados con éxito' });
    });
  });
});

  





  

  //Ruta para insertar Marca

  router.post('/createmarca', (req, res) => {
    const {nombre_Marca} = req.body
  
    // Verifica si se proporcionó el nombre de la categoría
    if (!nombre_Marca) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    // Consulta SQL para insertar una nueva categoría
    const sql = 'INSERT INTO marcas (nombre_Marca) VALUES (?)';
    const values = [nombre_Marca];
  
    // Ejecuta la consulta SQL
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar Marca:', err);
        res.status(500).json({ error: 'Error al insertar Marca' });
      } else {
        // Devuelve una respuesta exitosa
        res.status(201).json({ message: 'Marca insertada con éxito' });
      }
    });
  });

  // Ruta para insertar Producto

  router.post('/createproducto', (req, res) => {
    const {nombre_Producto,presentacion,imagen,descripcion,precio_Venta,precio_Compra,cantidad_Disponible,id_Marca,id_Categoria} = req.body;
  
    // Verifica si se proporcionó el nombre del producto
    if (!nombre_Producto ||!presentacion ||!imagen ||!descripcion ||!precio_Venta ||!precio_Compra ||!cantidad_Disponible ||!id_Marca ||!id_Categoria) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
  
    // Consulta SQL para insertar una nuevo producto
    const sql = 'INSERT INTO productos (nombre_Producto,presentacion,imagen,descripcion,precio_Venta,precio_Compra,cantidad_Disponible,id_Marca,id_Categoria) VALUES (?,?,?,?,?,?,?,?,?)';
    const values = [nombre_Producto,presentacion,imagen,descripcion,precio_Venta,precio_Compra,cantidad_Disponible,id_Marca,id_Categoria];
  
    // Ejecuta la consulta SQL
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar producto:', err);
        res.status(500).json({ error: 'Error al insertar producto' });
      } else {
        // Devuelve una respuesta exitosa
        res.status(201).json({ message: 'producto insertado con éxito' });
      }
    });
  });


//Ruta para insertar Usuarios


router.post('/createusuarios', (req, res) => {
  const { nombre_Usuario,segundo_Nombre,apellido_Usuario,segundo_Apellido,genero,fecha_Nacimiento, 
    correo_Electronico, contrasena, rol } = req.body;

      // Verifica si se proporcionó el nombre del usuario
      if (!nombre_Usuario ||!segundo_Nombre ||!apellido_Usuario ||!segundo_Apellido ||!genero ||!fecha_Nacimiento ||!correo_Electronico ||!contrasena||
      !rol) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }

     
    // Consulta SQL para insertar una nuevo usuario
      const sql = 'INSERT INTO usuarios (nombre_Usuario,segundo_Nombre,apellido_Usuario,segundo_Apellido,genero,fecha_Nacimiento,correo_Electronico,contrasena,rol) VALUES (?,?,?,?,?,?,?,?,?)';
    const values = [nombre_Usuario,segundo_Nombre,apellido_Usuario,segundo_Apellido,genero,fecha_Nacimiento,correo_Electronico,contrasena,rol];

     // Ejecuta la consulta SQL
     db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar usuario:', err);
        res.status(500).json({ error: 'Error al insertar usuario' });
      } else {
        // Devuelve una respuesta exitosa
        res.status(201).json({ message: 'usuario insertado con éxito' });
      }
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Ruta para actualizar un registro existente por ID (categoria)
     

      router.put('/updatecategoria/:id', (req, res) => {
      // Obtén el ID del registro a actualizar desde los parámetros de la URL
      const id = req.params.id;
  
      // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
      const { nombre_Categoria} = req.body;
  
      // Verifica si se proporcionaron los datos necesarios
      if (!nombre_Categoria) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      // Realiza la consulta SQL para actualizar el registro por ID
      const sql = `
        UPDATE categorias
        SET nombre_Categoria = ?
        WHERE id_Categoria = ?
      `;
  
      const values = [nombre_Categoria,id];
  
      // Ejecuta la consulta
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error al actualizar el registro:', err);
          res.status(500).json({ error: 'Error al actualizar el registro' });
        } else {
          // Devuelve un mensaje de éxito
          res.status(200).json({ message: 'Registro actualizado con éxito' });
        }
      });
    });

    //Ruta para actualizar un registro existente por ID(comentarios)

    router.put('/updatecomentarios/:id', (req, res) => {
      // Obtén el ID del registro a actualizar desde los parámetros de la URL
      const id = req.params.id;
  
      // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
      const {calificacion,contenido_Comentario} = req.body;
  
      // Verifica si se proporcionaron los datos necesarios
      if (!calificacion) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      // Realiza la consulta SQL para actualizar el registro por ID
      const sql = `
        UPDATE comentarios
        SET calificacion = ?,contenido_Comentario = ?
        WHERE id_Comentario = ?
      `;
  
      const values = [calificacion,contenido_Comentario,id];
  
      // Ejecuta la consulta
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error al actualizar el registro:', err);
          res.status(500).json({ error: 'Error al actualizar el registro' });
        } else {
          // Devuelve un mensaje de éxito
          res.status(200).json({ message: 'Registro actualizado con éxito' });
        }
      });
    });

    //Ruta para actualizar un registro existente por ID (compra)

    router.put('/updateventas/:id', (req, res) => {
      // Obtén el ID del registro a actualizar desde los parámetros de la URL
      const id = req.params.id;
  
      // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
      const {fecha_Venta,hora_Venta,estado,fecha_estimada} = req.body;
  
      // Verifica si se proporcionaron los datos necesarios
      if (!fecha_compra) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      // Realiza la consulta SQL para actualizar el registro por ID
      const sql = `
        UPDATE ventas
        SET fecha_Venta,hora_Venta,estado,fecha_estimada = ?,?,?,?
        WHERE id_Venta = ?
      `;
  
      const values = [fecha_Venta,hora_Venta,estado,fecha_estimada,id];
  
      // Ejecuta la consulta
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error al actualizar el registro:', err);
          res.status(500).json({ error: 'Error al actualizar el registro' });
        } else {
          // Devuelve un mensaje de éxito
          res.status(200).json({ message: 'Registro actualizado con éxito' });
        }
      });
    }); 

    //Ruta para actualizar un registro exitente por ID (Detalle_Compra)

    router.put('/updateDetalleVenta/:id', (req, res) => {
      // Obtén el ID del registro a actualizar desde los parámetros de la URL
      const id = req.params.id;
  
      // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
      const {cantidad_Venta, precio_Venta, id_Producto, id_Venta} = req.body;
  
      // Verifica si se proporcionaron los datos necesarios
      if (!cantidad_Venta) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      // Realiza la consulta SQL para actualizar el registro por ID
      const sql = `
        UPDATE detalle_venta
        SET cantidad_Venta = ?, precio_Venta = ?, id_Producto = ?, id_Venta = ?
        WHERE id_Detalleventa = ?
      `;
  
      const values = [cantidad_Venta, precio_Venta, id_Producto, id_Venta,id];
  
      // Ejecuta la consulta
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error al actualizar el registro:', err);
          res.status(500).json({ error: 'Error al actualizar el registro' });
        } else {
          // Devuelve un mensaje de éxito
          res.status(200).json({ message: 'Registro actualizado con éxito' });
        }
      });
    });

    //Ruta para actualizar un registro existente por ID (Marca)

    router.put('/updatemarca/:id', (req, res) => {
      // Obtén el ID del registro a actualizar desde los parámetros de la URL
      const id = req.params.id;
  
      // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
      const {nombre_Marca} = req.body;
  
      // Verifica si se proporcionaron los datos necesarios
      if (!nombre_Marca) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      // Realiza la consulta SQL para actualizar el registro por ID
      const sql = `
        UPDATE marcas
        SET nombre_Marca = ?
        WHERE id_Marca = ?
      `;
  
      const values = [nombre_Marca,id];
  
      // Ejecuta la consulta
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error al actualizar el registro:', err);
          res.status(500).json({ error: 'Error al actualizar el registro' });
        } else {
          // Devuelve un mensaje de éxito
          res.status(200).json({ message: 'Registro actualizado con éxito' });
        }
      });
    });

    // Ruta para actualizar un registro existente por ID (producto)

    router.put('/updateproducto/:id', upload.single('nuevaImagen'), (req, res) => {
      const id = req.params.id;
      const {
        nombre_Producto,
        presentacion,
        descripcion,
        precio_Venta,
        precio_Compra,
        cantidad_Disponible,
        id_Marca,
        id_Categoria,
      } = req.body;
      
      if (!nombre_Producto || cantidad_Disponible === null || cantidad_Disponible === undefined) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
      
    
      let nuevaImagen = req.body.imagen; // Mantén la imagen existente por defecto
      
      // Si se proporciona una nueva imagen, actualiza `nuevaImagen`
      if (req.file) {
        nuevaImagen = 'http://localhost:5000/' + req.file.path;
      }
    
      const sql = `
        UPDATE productos
        SET nombre_Producto = ?, presentacion = ?, imagen = ?, descripcion = ?, precio_Venta = ?, precio_Compra = ?, cantidad_Disponible = ?, id_Marca = ?, id_Categoria = ?
        WHERE id_Producto = ?
      `;
      
      const values = [nombre_Producto, presentacion, nuevaImagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria, id];
      
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error al actualizar el registro:', err);
          res.status(500).json({ error: 'Error al actualizar el registro' });
        } else {
          res.status(200).json({ message: 'Registro actualizado con éxito' });
        }
      });
    });

        //Ruta para actualizar un registro existente por ID (Marca)

        router.put('/updateusuario/:id', (req, res) => {
          // Obtén el ID del registro a actualizar desde los parámetros de la URL
          const id = req.params.id;
      
          // Recibe los datos actualizados desde el cuerpo de la solicitud (req.body)
          const {nombre_Usuario,segundo_Nombre,apellido_Usuario,segundo_Apellido,genero,fecha_Nacimiento, correo_Electronico, contrasena} = req.body;
      
          // Verifica si se proporcionaron los datos necesarios
          if (!nombre_Usuario,!segundo_Nombre,!apellido_Usuario,!segundo_Apellido,!genero,!fecha_Nacimiento) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
          }
      
          // Realiza la consulta SQL para actualizar el registro por ID
          const sql = `
            UPDATE usuarios
            SET nombre_Usuario = ?, segundo_Nombre = ?, apellido_Usuario = ?,  
            segundo_Apellido = ?, genero = ?, fecha_Nacimiento = ?, correo_Electronico = ?, 
            contrasena = ?
            WHERE id_Usuario = ?
          `;
      
          const values = [nombre_Usuario,segundo_Nombre,apellido_Usuario,segundo_Apellido,genero,fecha_Nacimiento, correo_Electronico, contrasena,id];
      
          // Ejecuta la consulta
          db.query(sql, values, (err, result) => {
            if (err) {
              console.error('Error al actualizar el registro:', err);
              res.status(500).json({ error: 'Error al actualizar el registro' });
            } else {
              // Devuelve un mensaje de éxito
              res.status(200).json({ message: 'Registro actualizado con éxito' });
            }
          });
        });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Ruta para eliminar un registro existente por ID (categoria)

  router.delete('/deletecategoria/:id', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const id = req.params.id;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM categorias WHERE id_Categoria = ?';

    // Ejecuta la consulta
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });

  //Ruta para eliminar un registro existente por ID (comentarios)

  router.delete('/deletecomentarios/:id', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const id = req.params.id;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM comentarios WHERE id_Comentario = ?';

    // Ejecuta la consulta
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });

  //Ruta para eliminar un registro existente por ID (compras)

  router.delete('/deleteventas/:id', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const id = req.params.id;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM ventas WHERE id_Venta = ?';

    // Ejecuta la consulta
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });

  // Ruta para eliminar un registro existente por ID (Detalle_compra)
  
  router.delete('/deleteDetalleVenta/:id', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const id = req.params.id;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM detalle_venta WHERE id_Detalleventa = ?';

    // Ejecuta la consulta
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });

  //Ruta para eliminar un registro existente por ID (marcas)

  router.delete('/deletemarcas/:id', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const id = req.params.id;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM marcas WHERE id_Marca = ?';

    // Ejecuta la consulta
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });

  // Ruta para eliminar un registro existente por ID (producto)
  
  router.delete('/deleteproducto/:id', (req, res) => {
    // Obtén el ID del registro a eliminar desde los parámetros de la URL
    const id = req.params.id;

    // Realiza la consulta SQL para eliminar el registro por ID
    const sql = 'DELETE FROM productos WHERE id_Producto = ?';

    // Ejecuta la consulta
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro' });
      } else {
        // Devuelve un mensaje de éxito
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });
    
    //Ruta para eliminar un registro existente por ID (Usuario)

    router.delete('/deleteusuario/:id', (req, res) => {
      // Obtén el ID del registro a eliminar desde los parámetros de la URL
      const id = req.params.id;
  
      // Realiza la consulta SQL para eliminar el registro por ID
      const sql = 'DELETE FROM usuarios WHERE id_Usuario = ?';
  
      // Ejecuta la consulta
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.error('Error al eliminar el registro:', err);
          res.status(500).json({ error: 'Error al eliminar el registro' });
        } else {
          // Devuelve un mensaje de éxito
          res.status(200).json({ message: 'Registro eliminado con éxito' });
        }
      });
    });

    router.get('/productosPorCategoria', (req, res) =>{
      const sql =`
      SELECT
      Categorias.nombre_Categoria,
        COUNT(Productos.id_Producto) AS cantidad_Disponible
      FROM
      Productos
      INNER JOIN
      Categorias ON Productos.id_Categoria = Categorias.id_Categoria
      GROUP BY
      Categorias.id_Categoria
    `;
    
    db.query(sql, (err, result) => {
      if (err){
        console.error('Error al obtener la cantidad de productos por categoría:', err);
        res.status(500).json({ error: 'Eror al obtener la cantidad de produtos por categoría' });
      } else {
        res.status(200).json(result);
      }
    });

    });

    return router;
};