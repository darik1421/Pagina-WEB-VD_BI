USE VariedadesDuarte;

-- Trigger para restar la cantidad vendida de la cantidad disponible
DELIMITER $$
CREATE TRIGGER RestarCantidadProductos
AFTER INSERT ON Detalle_Venta
FOR EACH ROW
BEGIN
    UPDATE Productos
    SET cantidad_Disponible = cantidad_Disponible - NEW.cantidad_Productos
    WHERE id_Producto = NEW.id_Producto;
END $$
DELIMITER ;

-- Trigger para calcular el total de la venta
DELIMITER $$
CREATE TRIGGER CalcularTotalVenta
BEFORE INSERT ON Detalle_Venta
FOR EACH ROW
BEGIN
    SET NEW.total_Venta = NEW.cantidad_Productos * NEW.precio_Venta;
END $$
DELIMITER ;
