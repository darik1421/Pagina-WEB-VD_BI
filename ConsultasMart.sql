-- Ventas totales por año:
SELECT 
    anio, 
    SUM(total_Venta) AS Ventas_totales
FROM 
   H_Ventas
JOIN 
    D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
GROUP BY 
    anio;
    
    
-- Ventas totales por mes de un año específico (por ejemplo, 2024):
SELECT 
    mes, 
    SUM(total_Venta) AS Ventas_totales
FROM 
     H_Ventas
JOIN 
    D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
WHERE 
    anio = 2024
GROUP BY 
    mes;
    
-- Ventas totales por día de un mes y año específicos (por ejemplo, mayo de 2024):
SELECT 
    dia, 
    SUM(total_Venta) AS Ventas_totales
FROM 
    H_Ventas
JOIN 
    D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
WHERE 
    Anio = 2024 AND Mes = 5
GROUP BY 
    dia;
    

-- Ventas totales por trimestre:
SELECT 
    trimestre, 
    SUM(total_Venta) AS Ventas_totales
FROM 
    H_Ventas
JOIN 
    D_Tiempos ON H_Ventas.id_Tiempo = D_Tiempos.id_Tiempo
GROUP BY 
    trimestre;
    
-- Ventas totales por producto:
SELECT 
    p.id_Producto, 
    p.nombre_Producto, 
    SUM(hv.cantidad_Productos) AS Cantidad_vendida, 
    SUM(hv.total_Venta) AS Ventas_totales
FROM 
    H_Ventas hv
JOIN 
    D_Productos p ON hv.id_Producto = p.id_Producto
GROUP BY 
    p.id_Producto, p.nombre_Producto;
    
-- Ventas totales por categoría de producto:
SELECT 
    p.nombre_Categoria,
    SUM(hv.total_Venta) AS Ventas_Totales
FROM 
    H_Ventas hv
JOIN 
    D_Productos p ON hv.id_Producto = p.id_Producto
GROUP BY 
    p.nombre_Categoria
ORDER BY 
    Ventas_Totales DESC;
    

-- Promedio de ventas por producto:    
SELECT 
    p.nombre_Producto,
    AVG(hv.total_Venta) AS Promedio_Ventas
FROM 
    H_Ventas hv
JOIN 
    D_Productos p ON hv.id_Producto = p.id_Producto
GROUP BY 
    p.nombre_Producto
ORDER BY 
    Promedio_Ventas DESC;

-- Ventas por producto y por mes:
SELECT 
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
    t.anio, t.mes, Ventas_Totales DESC;
    
-- Top 5 productos más vendidos por cantidad:
SELECT 
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
LIMIT 5;
    
