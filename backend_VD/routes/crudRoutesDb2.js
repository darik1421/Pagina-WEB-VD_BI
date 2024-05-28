const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(); // Configura multer


module.exports = (db) => {



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ruta para obtener los nombres de las categorías
router.get('/VentasTotales', (req, res) => {
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







    return router;
};