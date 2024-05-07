-- Inserts para la tabla de Categorías
INSERT INTO Categorias (nombre_Categoria) VALUES ('Alimentos');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Bebidas');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Hogar');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Cuidado Personal');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Limpieza');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Cuidado del Bebé');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Mascotas');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Papelería');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Juguetes');
INSERT INTO Categorias (nombre_Categoria) VALUES ('Accesorios de Cocina');

-- Inserts para la tabla de Marcas
INSERT INTO Marcas (nombre_Marca) VALUES ('Colgate');
INSERT INTO Marcas (nombre_Marca) VALUES ('Coca-Cola');
INSERT INTO Marcas (nombre_Marca) VALUES ('Procter & Gamble');
INSERT INTO Marcas (nombre_Marca) VALUES ('Johnson & Johnson');
INSERT INTO Marcas (nombre_Marca) VALUES ('Unilever');
INSERT INTO Marcas (nombre_Marca) VALUES ('Nestlé');
INSERT INTO Marcas (nombre_Marca) VALUES ('Kimberly-Clark');
INSERT INTO Marcas (nombre_Marca) VALUES ('Pampers');
INSERT INTO Marcas (nombre_Marca) VALUES ('Bic');
INSERT INTO Marcas (nombre_Marca) VALUES ('Mattel');
INSERT INTO Marcas (nombre_Marca) VALUES ('Tupperware');
INSERT INTO Marcas (nombre_Marca) VALUES ('Duracell');
INSERT INTO Marcas (nombre_Marca) VALUES ('Fisher-Price');
INSERT INTO Marcas (nombre_Marca) VALUES ('Quaker');
INSERT INTO Marcas (nombre_Marca) VALUES ('Play-Doh');
INSERT INTO Marcas (nombre_Marca) VALUES ('Hasbro');
INSERT INTO Marcas (nombre_Marca) VALUES ('Sharpie');
INSERT INTO Marcas (nombre_Marca) VALUES ('Rubbermaid');
INSERT INTO Marcas (nombre_Marca) VALUES ('Huggies');
INSERT INTO Marcas (nombre_Marca) VALUES ('Post-it');

-- Inserts para la tabla de Productos
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Cepillo de Dientes Colgate', 'Unidad', 'imagen_cepillo_colgate.jpg', 'Cepillo de dientes suave con cerdas resistentes.', 2.99, 1.50, 100, 1, 4);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Refresco Coca-Cola', 'Lata 355ml', 'imagen_refresco_cocacola.jpg', 'Refresco de cola clásico en lata.', 1.25, 0.75, 200, 2, 2);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Detergente Ariel', 'Paquete 1kg', 'imagen_detergente_ariel.jpg', 'Detergente en polvo para ropa blanca y de color.', 5.99, 3.50, 50, 3, 5);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Shampoo Johnson\'s Baby', 'Botella 200ml', 'imagen_shampoo_johnsons.jpg', 'Shampoo suave para bebés con fórmula sin lágrimas.', 3.75, 2.00, 80, 4, 6);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Jabón Líquido Palmolive', 'Botella 500ml', 'imagen_jabon_palmolive.jpg', 'Jabón líquido con aroma fresco y suave para manos.', 2.50, 1.25, 120, 5, 5);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pañales Pampers', 'Paquete 20 unidades', 'imagen_pañales_pampers.jpg', 'Pañales desechables ultra absorbentes para bebés.', 8.99, 6.00, 40, 8, 6);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Lapicero BIC', 'Paquete 5 unidades', 'imagen_lapicero_bic.jpg', 'Lapiceros de tinta de colores surtidos.', 1.49, 0.75, 150, 9, 8);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Muñeco Barbie', 'Unidad', 'imagen_muneco_barbie.jpg', 'Muñeca Barbie con accesorios de moda.', 19.99, 15.00, 30, 10, 9);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Tupperware Contenedor', 'Unidad', 'imagen_tupperware.jpg', 'Contenedor hermético para almacenamiento de alimentos.', 5.50, 3.75, 60, 11, 7);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pilas Duracell AA', 'Paquete 4 unidades', 'imagen_pilas_duracell.jpg', 'Pilas alcalinas de larga duración.', 3.99, 2.50, 100, 12, 5);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pelota de Fútbol Adidas', 'Unidad', 'imagen_pelota_adidas.jpg', 'Pelota de fútbol de alta calidad.', 12.75, 8.50, 20, 13, 9);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Cereal Quaker', 'Caja 500g', 'imagen_cereal_quaker.jpg', 'Cereal integral con vitaminas y minerales.', 4.25, 2.99, 70, 14, 1);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Plastilina Play-Doh', 'Paquete 10 colores', 'imagen_plastilina_playdoh.jpg', 'Plastilina no tóxica para modelar y crear.', 6.99, 4.50, 50, 15, 9);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Juego de Mesa Monopoly', 'Unidad', 'imagen_monopoly.jpg', 'Juego clásico de compra y venta de propiedades.', 24.99, 18.50, 25, 16, 9);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Marcadores Sharpie', 'Paquete 12 unidades', 'imagen_marcadores_sharpie.jpg', 'Marcadores de colores variados de punta fina.', 9.50, 6.25, 80, 17, 8);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Contenedor de Plástico Rubbermaid', 'Unidad', 'imagen_contenedor_rubbermaid.jpg', 'Contenedor resistente para almacenamiento.', 8.75, 6.00, 40, 18, 7);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pañuelos Húmedos Huggies', 'Paquete 80 unidades', 'imagen_pañuelos_huggies.jpg', 'Pañuelos húmedos para bebés con aloe vera.', 3.99, 2.75, 60, 8, 6);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Notas Adhesivas Post-it', 'Paquete 100 hojas', 'imagen_notas_postit.jpg', 'Notas adhesivas de colores para recordatorios.', 1.99, 1.25, 120, 19, 8);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Aceite de Oliva Extra Virgen', 'Botella 500ml', 'imagen_aceite_oliva.jpg', 'Aceite de oliva de alta calidad para cocinar.', 7.50, 5.25, 35, 5, 1);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Candado de Seguridad', 'Unidad', 'imagen_candado.jpg', 'Candado resistente para asegurar objetos.', 3.25, 2.00, 90, 1, 3);

INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Champú para Mascotas', 'Botella 250ml', 'imagen_champu_mascotas.jpg', 'Champú suave para mascotas con aroma agradable.', 4.99, 3.25, 45, 2, 7);


-- Inserts para la tabla de Usuarios
INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, segundo_Apellido, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Juan', 'Carlos', 'González', 'López', 'Masculino', '1990-03-15', 'juan.gonzalez@example.com', 'contraseña1', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, segundo_Apellido, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('María', 'Isabel', 'Martínez', 'Sánchez', 'Femenino', '1985-07-20', 'mariaisabel@example.com', 'contraseña2', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Carlos', 'Díaz', 'Masculino', '1992-05-10', 'carlos.diaz@example.com', 'contraseña3', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Luisa', 'Fernanda', 'Rodríguez', 'Femenino', '1988-11-28', 'luisa.rodriguez@example.com', 'contraseña4', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Pedro', 'López', 'Masculino', '1995-02-03', 'pedro.lopez@example.com', 'contraseña5', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Ana', 'María', 'García', 'Femenino', '1983-09-12', 'ana.garcia@example.com', 'contraseña6', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('José', 'Manuel', 'Pérez', 'Masculino', '1998-06-25', 'jose.perez@example.com', 'contraseña7', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Laura', 'Alejandra', 'Gómez', 'Femenino', '1991-04-18', 'laura.gomez@example.com', 'contraseña8', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Fernando', 'Martínez', 'Masculino', '1986-08-07', 'fernando.martinez@example.com', 'contraseña9', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Carolina', 'Elena', 'Ruiz', 'Femenino', '1994-12-30', 'carolina.ruiz@example.com', 'contraseña10', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Andrés', 'Felipe', 'Hernández', 'Masculino', '1997-10-05', 'andres.hernandez@example.com', 'contraseña11', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Marcela', 'Florencia', 'Alvarez', 'Femenino', '1989-01-22', 'marcela.alvarez@example.com', 'contraseña12', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Ricardo', 'Antonio', 'Gómez', 'Masculino', '1993-11-15', 'ricardo.gomez@example.com', 'contraseña13', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Patricia', 'Luz', 'Vargas', 'Femenino', '1987-06-10', 'patricia.vargas@example.com', 'contraseña14', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Martín', 'Alejandro', 'Fernández', 'Masculino', '1990-09-20', 'martin.fernandez@example.com', 'contraseña15', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Silvia', 'Rosa', 'López', 'Femenino', '1996-07-02', 'silvia.lopez@example.com', 'contraseña16', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('David', 'Ernesto', 'Mendoza', 'Masculino', '1991-04-28', 'david.mendoza@example.com', 'contraseña17', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Elena', 'Gabriela', 'Díaz', 'Femenino', '1988-12-15', 'elena.diaz@example.com', 'contraseña18', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Sergio', 'Andrés', 'García', 'Masculino', '1994-03-03', 'sergio.garcia@example.com', 'contraseña19', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES ('Daniela', 'Fabiola', 'Martínez', 'Femenino', '1992-08-12', 'daniela.martinez@example.com', 'contraseña20', 'Cliente');


-- Inserts para la tabla de Comentarios
INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-05-01', 'Excelente producto, muy útil en el día a día.', 1, 1);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-04-28', 'Buen refresco, siempre refresca.', 2, 2);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-04-25', 'Detergente eficaz, deja la ropa impecable.', 3, 3);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-05-02', 'Shampoo suave y sin lágrimas para bebés.', 4, 4);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-05-04', 'Jabón líquido con un aroma increíble.', 5, 5);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-04-29', 'Los pañales Pampers son absorbentes y cómodos para los bebés.', 6, 6);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-04-27', 'Los lapiceros BIC tienen colores vibrantes y tinta de calidad.', 7, 7);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-05-02', 'La muñeca Barbie es muy detallada y atractiva para las niñas.', 8, 8);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-05-04', 'El contenedor Tupperware es duradero y útil en la cocina.', 9, 9);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-04-29', 'Las pilas Duracell duran mucho tiempo y son confiables.', 10, 10);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-04-27', 'La pelota Adidas es resistente y perfecta para jugar fútbol.', 11, 11);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-05-02', 'El cereal Quaker es nutritivo y delicioso.', 12, 12);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-05-04', 'La plastilina Play-Doh es ideal para la creatividad de los niños.', 13, 13);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-04-29', 'El juego de mesa Monopoly es entretenido y educativo.', 14, 14);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-04-27', 'Los marcadores Sharpie tienen colores intensos y no se borran fácilmente.', 15, 15);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-05-02', 'El contenedor de plástico Rubbermaid es resistente y amplio.', 16, 16);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-05-04', 'Los pañuelos húmedos Huggies son suaves y perfectos para bebés.', 17, 17);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-04-29', 'Las notas adhesivas Post-it son útiles y coloridas.', 18, 18);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (5, '2024-04-27', 'El aceite de oliva Extra Virgen es de alta calidad y muy sabroso.', 19, 19);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) 
VALUES (4, '2024-05-02', 'El candado de seguridad es robusto y fácil de usar.', 20, 20);

-- Inserts para la tabla de Ventas
INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (1, '2024-05-01', '10:30:00', 'Completada', '2024-05-03');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (2, '2024-05-02', '11:45:00', 'En Proceso', '2024-05-04');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (3, '2024-05-03', '09:15:00', 'Completada', '2024-05-05');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (4, '2024-05-04', '14:20:00', 'En Proceso', '2024-05-06');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (5, '2024-05-05', '12:00:00', 'Completada', '2024-05-07');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (6, '2024-05-06', '08:45:00', 'En Proceso', '2024-05-08');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (7, '2024-05-07', '16:30:00', 'Completada', '2024-05-09');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (8, '2024-05-08', '10:00:00', 'En Proceso', '2024-05-10');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (9, '2024-05-09', '11:20:00', 'Completada', '2024-05-11');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (10, '2024-05-10', '13:45:00', 'En Proceso', '2024-05-12');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (11, '2024-05-11', '09:00:00', 'Completada', '2024-05-13');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (12, '2024-05-12', '14:50:00', 'En Proceso', '2024-05-14');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (13, '2024-05-13', '10:30:00', 'Completada', '2024-05-15');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (14, '2024-05-14', '11:45:00', 'En Proceso', '2024-05-16');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (15, '2024-05-15', '09:15:00', 'Completada', '2024-05-17');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (16, '2024-05-16', '14:20:00', 'En Proceso', '2024-05-18');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (17, '2024-05-17', '12:00:00', 'Completada', '2024-05-19');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (18, '2024-05-18', '08:45:00', 'En Proceso', '2024-05-20');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (19, '2024-05-19', '16:30:00', 'Completada', '2024-05-21');

INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada) 
VALUES (20, '2024-05-20', '10:00:00', 'En Proceso', '2024-05-22');


-- Inserts para la tabla de Detalle_Venta
INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (2, 9.99, 19.98, 1, 1);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 1.99, 1.99, 2, 2);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (3, 5.99, 17.97, 3, 3);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (2, 3.49, 6.98, 4, 4);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 2.75, 2.75, 5, 5);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (2, 7.49, 14.98, 6, 6);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (3, 1.25, 3.75, 7, 7);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 14.99, 14.99, 8, 8);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (2, 5.25, 10.50, 9, 9);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 6.75, 6.75, 10, 10);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (3, 12.99, 38.97, 11, 11);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 9.49, 9.49, 12, 12);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (2, 3.99, 7.98, 13, 13);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (3, 8.75, 26.25, 14, 14);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 1.49, 1.49, 15, 15);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (2, 10.99, 21.98, 16, 16);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 4.25, 4.25, 17, 17);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (3, 2.75, 8.25, 18, 18);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (1, 16.49, 16.49, 19, 19);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) 
VALUES (2, 8.99, 17.98, 20, 20);

