const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(); // Configura multer


module.exports = (db) => {



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ruta para obtener los nombres de las categorías
router.get('/VentasTotalesanio', (req, res) => {
  const sql = `SELECT 
  anio, 
  SUM(total_Venta) AS Ventas_totales
FROM 
 H_Ventas
JOIN 
  D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
GROUP BY 
  anio`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener las categorías:', err);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    } else {
      res.status(200).json(result);
    }
  });
});


router.get('/VentasTotalesmesanio', (req, res) => {
  const sql = `SELECT 
    dia, 
    SUM(total_Venta) AS Ventas_totales
FROM 
    H_Ventas
JOIN 
    D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
WHERE 
    Anio = 2024 AND Mes = 5
GROUP BY 
    dia`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al obtener las categorías:', err);
        res.status(500).json({ error: 'Error al obtener las categorías' });
      } else {
        res.status(200).json(result);
      }
    });
  });



    router.get('/VentasTotalesmesespecifico', (req, res) => {
      const sql = `SELECT 
      trimestre, 
      SUM(total_Venta) AS Ventas_totales
  FROM 
      H_Ventas
  JOIN 
      D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
  GROUP BY 
      trimestre`;
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener las categorías:', err);
          res.status(500).json({ error: 'Error al obtener las categorías' });
        } else {
          res.status(200).json(result);
        }
      });
    });

    router.get('/VentasTotalestrimestre', (req, res) => {
      const sql = `SELECT 
    trimestre, 
    SUM(total_Venta) AS Ventas_totales
  FROM 
    H_Ventas
  JOIN 
    D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
  GROUP BY 
    trimestre`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al obtener las categorías:', err);
        res.status(500).json({ error: 'Error al obtener las categorías' });
      } else {
        res.status(200).json(result);
      }
    });
  });

    router.get('/VentasTotalesproducto', (req, res) => {
      const sql = `SELECT 
      p.id_Producto, 
      p.nombre_Producto, 
      SUM(hv.cantidad_Productos) AS Cantidad_vendida, 
      SUM(hv.total_Venta) AS Ventas_totales
  FROM 
      H_Ventas hv
  JOIN 
      D_Productos p ON hv.id_Producto = p.id_Producto
  GROUP BY 
      p.id_Producto, p.nombre_Producto`;
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener las categorías:', err);
          res.status(500).json({ error: 'Error al obtener las categorías' });
        } else {
          res.status(200).json(result);
        }
      });
    });


    router.get('/VentasTotalescategoria', (req, res) => {
      const sql = `SELECT 
      p.nombre_Categoria,
      SUM(hv.total_Venta) AS Ventas_Totales
  FROM 
      H_Ventas hv
  JOIN 
      D_Productos p ON hv.id_Producto = p.id_Producto
  GROUP BY 
      p.nombre_Categoria
  ORDER BY 
      Ventas_Totales DESC`;
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener las categorías:', err);
          res.status(500).json({ error: 'Error al obtener las categorías' });
        } else {
          res.status(200).json(result);
        }
      });
    });


    router.get('/VentasTotalespromedioproducto', (req, res) => {
      const sql = `SELECT 
      p.nombre_Producto,
      AVG(hv.total_Venta) AS Promedio_Ventas
  FROM 
      H_Ventas hv
  JOIN 
      D_Productos p ON hv.id_Producto = p.id_Producto
  GROUP BY 
      p.nombre_Producto
  ORDER BY 
      Promedio_Ventas DESC`;
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener las categorías:', err);
          res.status(500).json({ error: 'Error al obtener las categorías' });
        } else {
          res.status(200).json(result);
        }
      });
    });





    router.get('/VentasTotalesproductomes', (req, res) => {
      const sql = `SELECT 
      p.nombre_Producto,
      t.mes,
      t.anio,
      SUM(hv.total_Venta) AS Ventas_Totales
  FROM 
      H_Ventas hv
  JOIN 
      D_Productos p ON hv.id_Producto = p.id_Producto
  JOIN 
      D_Tiempos t ON hv.id_Tiempo = t.id_Tiempo
  GROUP BY 
      p.nombre_Producto, t.mes, t.anio
  ORDER BY 
      t.anio, t.mes, Ventas_Totales DESC`;
      db.query(sql, (err, result) => {
        if (err) {
          console.error('Error al obtener las categorías:', err);
          res.status(500).json({ error: 'Error al obtener las categorías' });
        } else {
          res.status(200).json(result);
        }
      });
    });




    router.get('/VentasTotalestop5producto', (req, res) => {
      const sql = `SELECT 
      p.nombre_Producto,
      SUM(hv.cantidad_Productos) AS Cantidad_Total_Vendida
  FROM 
      H_Ventas hv
  JOIN 
      D_Productos p ON hv.id_Producto = p.id_Producto
  GROUP BY 
      p.nombre_Producto
  ORDER BY 
      Cantidad_Total_Vendida DESC
  LIMIT 5`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener las categorías:', err);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    } else {
      res.status(200).json(result);
    }
  });
  });


  







    return router;
};