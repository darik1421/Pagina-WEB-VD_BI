INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada)
SELECT 
    ROUND(RAND() * 56) + 1 AS id_Usuario, -- Genera IDs de cliente aleatorios del 1 al 57
    CONCAT('2024-', LPAD(1 + ROUND(RAND() * 11), 2, '0'), '-', LPAD(1 + ROUND(RAND() * 27), 2, '0')) AS fecha_Venta, -- Fechas aleatorias del año 2024
    CONCAT(LPAD(ROUND(RAND() * 23), 2, '0'), ':', LPAD(ROUND(RAND() * 59), 2, '0'), ':', LPAD(ROUND(RAND() * 59), 2, '0')) AS hora_Venta, -- Horas aleatorias del día
    CASE ROUND(RAND()) -- Estado aleatorio (0 o 1)
        WHEN 0 THEN 'Pendiente'
        ELSE 'Entregado'
    END AS estado,
    CONCAT('2024-', LPAD(1 + ROUND(RAND() * 11), 2, '0'), '-', LPAD(1 + ROUND(RAND() * 27), 2, '0')) AS fecha_Estimada -- Fechas aleatorias del año 2024
FROM
    information_schema.tables
LIMIT 300; -- Limita a 300 registros



-- este te da numeros mas grande lo que conlleva a que tengas que hacer cambios en el limite de numeros de la tabla.
INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta)
SELECT
    ROUND(RAND() * 10) + 1 AS cantidad_Productos, -- Cantidad aleatoria entre 1 y 10
    P.precio_Venta,
    (ROUND(RAND() * 10) + 1) * P.precio_Venta AS total_Venta, -- Total venta calculado como cantidad_Productos * precio_Venta
    P.id_Producto,
    V.id_Venta
FROM
    Productos P
    CROSS JOIN (SELECT id_Venta FROM Ventas ORDER BY RAND() LIMIT 300) V
ORDER BY
    RAND() -- Orden aleatorio
LIMIT
    300;
    
    
    
    -- limitado para que no de errores de truncado
    INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta)
SELECT
    ROUND(RAND() * 10) + 1 AS cantidad_Productos, -- Cantidad aleatoria entre 1 y 10
    ROUND(RAND() * 1000) + 1 AS precio_Venta, -- Precio aleatorio entre 1 y 1000
    (ROUND(RAND() * 10) + 1) * (ROUND(RAND() * 1000) + 1) AS total_Venta, -- Total venta calculado como cantidad_Productos * precio_Venta
    P.id_Producto,
    V.id_Venta
FROM
    Productos P
    CROSS JOIN (SELECT id_Venta FROM Ventas ORDER BY RAND() LIMIT 300) V
ORDER BY
    RAND() -- Orden aleatorio
LIMIT
    300;
















