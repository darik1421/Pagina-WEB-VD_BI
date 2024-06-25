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
-- Producto 1: Cepillo de Dientes Colgate
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Cepillo de Dientes Colgate', 'Unidad', 'imagen_cepillo_colgate.jpg', 'Cepillo de dientes suave con cerdas resistentes.', 25, 20, 100, 1, 4);

-- Producto 2: Refresco Coca-Cola
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Refresco Coca-Cola', 'Lata 355ml', 'imagen_refresco_cocacola.jpg', 'Refresco de cola clásico en lata.', 35, 30, 200, 2, 2);

-- Producto 3: Detergente Ariel
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Detergente Ariel', 'Paquete 1kg', 'imagen_detergente_ariel.jpg', 'Detergente en polvo para ropa blanca y de color.', 15, 12, 50, 3, 5);

-- Producto 4: Shampoo Johnson's Baby
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Shampoo Johnson\'s Baby', 'Botella 200ml', 'imagen_shampoo_johnsons.jpg', 'Shampoo suave para bebés con fórmula sin lágrimas.', 145, 140, 80, 4, 6);

-- Producto 5: Jabón Líquido Palmolive
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Jabón Líquido Palmolive', 'Botella 500ml', 'imagen_jabon_palmolive.jpg', 'Jabón líquido con aroma fresco y suave para manos.', 60, 55, 120, 5, 5);

-- Producto 6: Pañales Pampers
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pañales Pampers', 'Paquete 20 unidades', 'imagen_pañales_pampers.jpg', 'Pañales desechables ultra absorbentes para bebés.', 380, 350.80, 40, 8, 6);

-- Producto 7: Lapicero BIC
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Lapicero BIC', 'Paquete 5 unidades', 'imagen_lapicero_bic.jpg', 'Lapiceros de tinta de colores surtidos.', 35, 30, 150, 9, 8);

-- Producto 8: Muñeco Barbie
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Muñeco Barbie', 'Unidad', 'imagen_muneco_barbie.jpg', 'Muñeca Barbie con accesorios de moda.', 580, 550.45, 30, 10, 9);

-- Producto 9: Tupperware Contenedor
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Tupperware Contenedor', 'Unidad', 'imagen_tupperware.jpg', 'Contenedor hermético para almacenamiento de alimentos.', 50, 45, 60, 11, 7);

-- Producto 10: Pilas Duracell AA
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pilas Duracell AA', 'Paquete 4 unidades', 'imagen_pilas_duracell.jpg', 'Pilas alcalinas de larga duración.', 85, 80, 100, 12, 5);

-- Producto 11: Pelota de Fútbol Adidas
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pelota de Fútbol Adidas', 'Unidad', 'imagen_pelota_adidas.jpg', 'Pelota de fútbol de alta calidad.', 900, 850, 20, 13, 9);

-- Producto 12: Cereal Quaker
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Cereal Quaker', 'Caja 500g', 'imagen_cereal_quaker.jpg', 'Cereal integral con vitaminas y minerales.', 56, 40, 70, 14, 1);

-- Producto 13: Plastilina Play-Doh
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Plastilina Play-Doh', 'Paquete 10 colores', 'imagen_plastilina_playdoh.jpg', 'Plastilina no tóxica para modelar y crear.', 26, 24, 50, 15, 9);

-- Producto 14: Juego de Mesa Monopoly
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Juego de Mesa Monopoly', 'Unidad', 'imagen_monopoly.jpg', 'Juego clásico de compra y venta de propiedades.', 380, 360, 25, 16, 9);

-- Producto 15: Marcadores Sharpie
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Marcadores Sharpie', 'Paquete 12 unidades', 'imagen_marcadores_sharpie.jpg', 'Marcadores de colores variados de punta fina.', 10, 9.50, 80, 17, 8);

-- Producto 16: Contenedor de Plástico Rubbermaid
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Contenedor de Plástico Rubbermaid', 'Unidad', 'imagen_contenedor_rubbermaid.jpg', 'Contenedor resistente para almacenamiento.', 9, 8.75, 40, 18, 7);

-- Producto 17: Pañuelos Húmedos Huggies
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Pañuelos Húmedos Huggies', 'Paquete 80 unidades', 'imagen_pañuelos_huggies.jpg', 'Pañuelos húmedos para bebés con aloe vera.', 62, 58, 60, 8, 6);

-- Producto 18: Notas Adhesivas Post-it
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Notas Adhesivas Post-it', 'Paquete 100 hojas', 'imagen_notas_postit.jpg', 'Notas adhesivas de colores para recordatorios.', 33, 22, 120, 19, 8);

-- Producto 19: Aceite de Oliva Extra Virgen
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Aceite de Oliva Extra Virgen', 'Botella 500ml', 'imagen_aceite_oliva.jpg', 'Aceite de oliva de alta calidad para cocinar.', 230,218, 35, 5, 1);

-- Producto 20: Candado de Seguridad
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Candado de Seguridad', 'Unidad', 'imagen_candado.jpg', 'Candado resistente para asegurar objetos.', 56.68, 45.57, 90, 1, 3);

-- Producto 21: Champú para Mascotas
INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) 
VALUES ('Champú para Mascotas', 'Botella 250ml', 'imagen_champu_mascotas.jpg', 'Champú suave para mascotas con aroma agradable.', 78.23, 67.63, 45, 2, 7);



INSERT INTO Productos (nombre_Producto, presentacion, imagen, descripcion, precio_Venta, precio_Compra, cantidad_Disponible, id_Marca, id_Categoria) VALUES
('Pasta de Dientes Colgate', '100 ml', 'pasta_colgate.jpg', 'Pasta de dientes con flúor', 45.43, 35.35, 50, 1, 4),
('Coca-Cola', '1.5 L', 'coca_cola_1_5l.jpg', 'Bebida gaseosa', 28.45, 25.32, 100, 2, 2),
('Jabón Ariel', '1 kg', 'jabon_ariel.jpg', 'Jabón en polvo para ropa', 34.45, 23.56, 30, 3, 5),
('Shampoo Johnson & Johnson', '500 ml', 'shampoo_johnson.jpg', 'Shampoo suave para bebés', 155, 153, 20, 4, 6),
('Desodorante Dove', '150 ml', 'desodorante_dove.jpg', 'Desodorante antitranspirante', 85, 82.80, 40, 5, 4),
('Leche en Polvo Nestlé', '900 g', 'leche_nestle.jpg', 'Leche en polvo fortificada', 350, 323.60, 25, 6, 1),
('Pañales Huggies', 'Talla M', 'panales_huggies.jpg', 'Pañales desechables', 230.45, 227.45, 15, 19, 6),
('Papel Higiénico Scott', '12 rollos', 'papel_higienico_scott.jpg', 'Papel higiénico', 56.34, 45.45, 35, 7, 4),
('Cepillo de Dientes Colgate', 'Individual', 'cepillo_colgate.jpg', 'Cepillo de dientes suave', 23.45, 22.22, 60, 1, 4),
('Galletas Quaker', '300 g', 'galletas_quaker.jpg', 'Galletas de avena', 58.23, 54.45, 50, 14, 1),
('Detergente líquido Ariel', '1.5 L', 'detergente_ariel.jpg', 'Detergente líquido para ropa',57.64 ,55.45, 20, 3, 5),
('Crema Corporal Dove', '200 ml', 'crema_dove.jpg', 'Crema hidratante',169.34 ,167.45, 30, 5, 4),
('Juguete Fisher-Price', 'Móvil musical', 'juguete_fisher_price.jpg', 'Juguete educativo para bebés', 870, 866.67, 10, 13, 9),
('Bolígrafo Bic', 'Paquete de 10', 'boligrafo_bic.jpg', 'Bolígrafos de tinta azul', 45, 35, 100, 9, 8),
('Bloc de Notas Post-it', '100 hojas', 'bloc_post_it.jpg', 'Bloc de notas adhesivas', 23, 22, 80, 20, 8),
('Toallas Húmedas Huggies', 'Paquete de 80', 'toallas_huggies.jpg', 'Toallas húmedas para bebé', 56, 53, 30, 19, 6),
('Cereal Nestlé', '500 g', 'cereal_nestle.jpg', 'Cereal integral', 45, 43, 40, 6, 1),
('Jabón Líquido Protex', '500 ml', 'jabon_protex.jpg', 'Jabón antibacteriano', 28, 25, 25, 5, 4),
('Tupperware Redondo', '1 L', 'tupperware_redondo.jpg', 'Envase plástico para alimentos', 26,22, 40, 11, 10),
('Juguete Play-Doh', 'Set de 10 colores', 'juguete_play_doh.jpg', 'Masa moldeable para niños', 56, 53, 20, 15, 9),
('Baterías Duracell', 'Paquete de 4 AA', 'baterias_duracell.jpg', 'Baterías alcalinas AA', 90,88, 50, 12, 8),
('Mopa Rubbermaid', 'Individual', 'mopa_rubbermaid.jpg', 'Mopa para limpieza', 45, 34, 15, 18, 5),
('Comida para Perros Pedigree', '2 kg', 'comida_perros_pedigree.jpg', 'Comida seca para perros', 22, 18, 20, 7, 7),
('Biberón Avent', '250 ml', 'biberon_avent.jpg', 'Biberón para bebé', 5.00, 4.00, 25, 4, 6),
('Juguete Hasbro', 'Jenga', 'juguete_hasbro.jpg', 'Juego de habilidad', 567,556, 20, 16, 9),
('Cereal Kellogg\'s', '500 g', 'cereal_kelloggs.jpg', 'Cereal de maíz', 67, 56, 40, 6, 1),
('Detergente en Polvo Ace', '1 kg', 'detergente_ace.jpg', 'Detergente en polvo para ropa', 22, 20, 30, 3, 5),
('Shampoo Pantene', '400 ml', 'shampoo_pantene.jpg', 'Shampoo para cabello seco', 78, 75, 25, 5, 4),
('Taza Tupperware', '350 ml', 'taza_tupperware.jpg', 'Taza plástica', 15, 14, 35, 11, 10),
('Crema Dental Oral-B', '100 ml', 'crema_dental_oral_b.jpg', 'Crema dental con flúor', 78, 76, 50, 1, 4),
('Galletas Oreo', '300 g', 'galletas_oreo.jpg', 'Galletas de chocolate', 45, 43, 60, 6, 1),
('Jabón Líquido Dove', '500 ml', 'jabon_liquido_dove.jpg', 'Jabón líquido hidratante', 34,32, 30, 5, 4),
('Juguete Mattel', 'Hot Wheels', 'juguete_hot_wheels.jpg', 'Carrito de juguete', 767,755 ,23, 10, 9),
('Bolígrafo Sharpie', 'Individual', 'boligrafo_sharpie.jpg', 'Bolígrafo de punta fina', 2.00, 1.50, 70, 17, 8),
('Bloc de Notas Bic', '100 hojas', 'bloc_notas_bic.jpg', 'Bloc de notas adhesivas', 1.00, 0.80, 80, 9, 8),
('Desinfectante Lysol', '500 ml', 'desinfectante_lysol.jpg', 'Desinfectante en aerosol', 4.00, 3.00, 25, 5, 5),
('Juguete Fisher-Price', 'Bloques de construcción', 'juguete_bloques_fisher_price.jpg', 'Juego de bloques para bebés', 454, 445, 15, 13, 9),
('Tijeras Westcott', '5 pulgadas', 'tijeras_westcott.jpg', 'Tijeras escolares', 23, 20, 100, 9, 8),
('Envase Rubbermaid', '1.5 L', 'envase_rubbermaid.jpg', 'Envase plástico hermético', 34,33, 30, 18, 10),
('Comida para Gatos Whiskas', '1 kg', 'comida_gatos_whiskas.jpg', 'Comida seca para gatos', 10.00, 8.00, 25, 7, 7),
('Paños de Cocina Scotch-Brite', 'Paquete de 3', 'panos_scotch_brite.jpg', 'Paños multiusos', 12.56, 11.45, 40, 3, 10);


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

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, segundo_Apellido, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES 
('Alejandro', 'Javier', 'Castro', 'Gómez', 'Masculino', '1995-01-14', 'alejandro.castro@example.com', 'contraseña21', 'Cliente'),
('Camila', 'Beatriz', 'Mora', 'Hernández', 'Femenino', '1982-09-27', 'camila.mora@example.com', 'contraseña22', 'Cliente'),
('Diego', 'Armando', 'Salazar', 'Ortiz', 'Masculino', '1997-04-19', 'diego.salazar@example.com', 'contraseña23', 'Cliente'),
('Valeria', 'Guadalupe', 'Torres', 'Ramírez', 'Femenino', '1989-11-05', 'valeria.torres@example.com', 'contraseña24', 'Cliente'),
('Jorge', 'Luis', 'Mendoza', 'García', 'Masculino', '1993-02-18', 'jorge.mendoza@example.com', 'contraseña25', 'Cliente'),
('Paola', 'Andrea', 'Cruz', 'Fernández', 'Femenino', '1990-06-30', 'paola.cruz@example.com', 'contraseña26', 'Cliente'),
('Santiago', 'Tomás', 'Ortiz', 'Sánchez', 'Masculino', '1996-03-11', 'santiago.ortiz@example.com', 'contraseña27', 'Cliente'),
('Isabela', 'Lorena', 'Reyes', 'Martínez', 'Femenino', '1984-07-22', 'isabela.reyes@example.com', 'contraseña28', 'Cliente'),
('Raúl', 'Fernando', 'Morales', 'Hernández', 'Masculino', '1991-05-29', 'raul.morales@example.com', 'contraseña29', 'Cliente'),
('Adriana', 'Lucía', 'Jiménez', 'Díaz', 'Femenino', '1992-08-15', 'adriana.jimenez@example.com', 'contraseña30', 'Cliente'),
('Pablo', 'Esteban', 'Vargas', 'López', 'Masculino', '1987-12-10', 'pablo.vargas@example.com', 'contraseña31', 'Cliente'),
('Gabriela', 'Patricia', 'Núñez', 'García', 'Femenino', '1990-09-25', 'gabriela.nunez@example.com', 'contraseña32', 'Cliente'),
('Manuel', 'Ignacio', 'Soto', 'Martínez', 'Masculino', '1985-04-12', 'manuel.soto@example.com', 'contraseña33', 'Cliente'),
('Rosa', 'Verónica', 'Pérez', 'González', 'Femenino', '1998-07-07', 'rosa.perez@example.com', 'contraseña34', 'Cliente'),
('Eduardo', 'Álvaro', 'Silva', 'Ramírez', 'Masculino', '1994-03-21', 'eduardo.silva@example.com', 'contraseña35', 'Cliente'),
('Marta', 'Susana', 'Gutiérrez', 'López', 'Femenino', '1986-10-30', 'marta.gutierrez@example.com', 'contraseña36', 'Cliente'),
('Roberto', 'Javier', 'Herrera', 'García', 'Masculino', '1993-11-22', 'roberto.herrera@example.com', 'contraseña37', 'Cliente'),
('Alicia', 'Esther', 'Figueroa', 'Mendoza', 'Femenino', '1988-01-19', 'alicia.figueroa@example.com', 'contraseña38', 'Cliente'),
('Cristian', 'Emanuel', 'Ríos', 'Hernández', 'Masculino', '1995-08-08', 'cristian.rios@example.com', 'contraseña39', 'Cliente'),
('Mariana', 'Josefina', 'Serrano', 'Gómez', 'Femenino', '1997-06-04', 'mariana.serrano@example.com', 'contraseña40', 'Cliente');

INSERT INTO Usuarios (nombre_Usuario, segundo_Nombre, apellido_Usuario, segundo_Apellido, genero, fecha_Nacimiento, correo_Electronico, contrasena, rol) 
VALUES 
('Sebastián', 'Mateo', 'Vargas', 'Moreno', 'Masculino', '1991-07-14', 'sebastian.vargas@example.com', 'contraseña41', 'Cliente'),
('Natalia', 'Irene', 'Flores', 'Martínez', 'Femenino', '1984-05-17', 'natalia.flores@example.com', 'contraseña42', 'Cliente'),
('Francisco', 'Raúl', 'Castillo', 'Pérez', 'Masculino', '1989-10-23', 'francisco.castillo@example.com', 'contraseña43', 'Cliente'),
('Vanessa', 'Lorena', 'Ramos', 'Gómez', 'Femenino', '1993-03-14', 'vanessa.ramos@example.com', 'contraseña44', 'Cliente'),
('Javier', 'Arturo', 'Gómez', 'Hernández', 'Masculino', '1987-08-29', 'javier.gomez@example.com', 'contraseña45', 'Cliente'),
('Carla', 'Daniela', 'Vega', 'López', 'Femenino', '1995-11-10', 'carla.vega@example.com', 'contraseña46', 'Cliente'),
('Mario', 'Enrique', 'Santos', 'Martínez', 'Masculino', '1992-12-05', 'mario.santos@example.com', 'contraseña47', 'Cliente'),
('Silvia', 'María', 'Ortega', 'Ramírez', 'Femenino', '1988-04-08', 'silvia.ortega@example.com', 'contraseña48', 'Cliente'),
('Andrés', 'Felipe', 'Campos', 'Díaz', 'Masculino', '1990-01-21', 'andres.campos@example.com', 'contraseña49', 'Cliente'),
('Laura', 'Angélica', 'Guzmán', 'García', 'Femenino', '1997-09-30', 'laura.guzman@example.com', 'contraseña50', 'Cliente'),
('Sergio', 'Andrés', 'Muñoz', 'Fernández', 'Masculino', '1985-06-14', 'sergio.munoz@example.com', 'contraseña51', 'Cliente'),
('Andrea', 'Paola', 'Jiménez', 'Hernández', 'Femenino', '1991-02-25', 'andrea.jimenez@example.com', 'contraseña52', 'Cliente'),
('Miguel', 'Ángel', 'Romero', 'López', 'Masculino', '1993-11-13', 'miguel.romero@example.com', 'contraseña53', 'Cliente'),
('Diana', 'Patricia', 'Herrera', 'González', 'Femenino', '1986-07-19', 'diana.herrera@example.com', 'contraseña54', 'Cliente'),
('Ricardo', 'Fernando', 'Rojas', 'Martínez', 'Masculino', '1994-04-16', 'ricardo.rojas@example.com', 'contraseña55', 'Cliente'),
('Ana', 'Lucía', 'Medina', 'García', 'Femenino', '1990-10-28', 'ana.medina@example.com', 'contraseña56', 'Cliente'),
('Juan', 'David', 'Reyes', 'López', 'Masculino', '1995-03-07', 'juan.reyes@example.com', 'contraseña57', 'Cliente'),
('Claudia', 'Marcela', 'Ibarra', 'Sánchez', 'Femenino', '1988-08-18', 'claudia.ibarra@example.com', 'contraseña58', 'Cliente'),
('Alberto', 'Jorge', 'Hidalgo', 'Pérez', 'Masculino', '1987-05-22', 'alberto.hidalgo@example.com', 'contraseña59', 'Cliente'),
('Sara', 'Alejandra', 'Miranda', 'Gómez', 'Femenino', '1992-01-12', 'sara.miranda@example.com', 'contraseña60', 'Cliente');



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

-- Insertar comentarios en la tabla de Comentarios
INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) VALUES
(5, '2024-01-15', 'Excelente pasta de dientes.', 1, 1),
(4, '2024-01-20', 'Buen sabor, pero prefiero otra marca.', 2, 2),
(5, '2024-02-05', 'Este detergente es muy efectivo.', 3, 3),
(3, '2024-02-10', 'El empaque se rompió fácilmente.', 4, 4),
(4, '2024-02-15', 'Buena relación calidad-precio.', 5, 5),
(5, '2024-02-20', 'Estas galletas son deliciosas.', 6, 6),
(4, '2024-03-01', 'Me gusta, pero es un poco caro.', 7, 7),
(5, '2024-03-05', 'Muy refrescante y sabrosa.', 8, 8),
(4, '2024-03-10', 'Buen producto, lo recomiendo.', 9, 9),
(3, '2024-03-15', 'No me gusta mucho el sabor.', 10, 10),
(5, '2024-03-20', 'Este champú es el mejor.', 11, 11),
(4, '2024-04-01', 'Buena calidad, pero un poco caro.', 12, 12),
(5, '2024-04-05', 'Muy útil para la cocina.', 13, 13),
(4, '2024-04-10', 'El empaque podría ser mejor.', 14, 14),
(3, '2024-04-15', 'No es lo que esperaba.', 15, 15),
(5, '2024-04-20', 'Muy recomendable.', 16, 16),
(4, '2024-05-01', 'Buen producto, lo volveré a comprar.', 17, 17),
(5, '2024-05-05', 'Excelente calidad.', 18, 18),
(4, '2024-05-10', 'Muy práctico.', 19, 19),
(5, '2024-05-15', 'Me encanta.', 20, 20),
(4, '2024-05-20', 'Buena compra.', 21, 21),
(5, '2024-05-25', 'Muy buen producto.', 22, 22),
(4, '2024-06-01', 'Me gusta, pero es un poco caro.', 23, 23),
(5, '2024-06-05', 'Muy efectivo.', 24, 24),
(4, '2024-06-10', 'Buena calidad.', 25, 25),
(5, '2024-06-15', 'Muy útil.', 26, 26),
(4, '2024-06-20', 'Buen producto, lo recomiendo.', 27, 27),
(5, '2024-07-01', 'Excelente.', 28, 28),
(4, '2024-07-05', 'Buena relación calidad-precio.', 29, 29),
(5, '2024-07-10', 'Delicioso.', 30, 30),
(4, '2024-07-15', 'Me gusta.', 31, 31),
(5, '2024-07-20', 'Muy recomendable.', 32, 32),
(4, '2024-08-01', 'Buen producto.', 33, 33),
(5, '2024-08-05', 'Excelente calidad.', 34, 34),
(4, '2024-08-10', 'Muy práctico.', 35, 35),
(5, '2024-08-15', 'Me encanta.', 36, 36),
(4, '2024-08-20', 'Buena compra.', 37, 37),
(5, '2024-09-01', 'Muy buen producto.', 38, 38),
(4, '2024-09-05', 'Me gusta, pero es un poco caro.', 39, 39),
(5, '2024-09-10', 'Muy efectivo.', 40, 40),
(4, '2024-09-15', 'Buena calidad.', 41, 41),
(5, '2024-09-20', 'Muy útil.', 42, 42),
(4, '2024-10-01', 'Buen producto, lo recomiendo.', 43, 43),
(5, '2024-10-05', 'Excelente.', 44, 44),
(4, '2024-10-10', 'Buena relación calidad-precio.', 45, 45),
(5, '2024-10-15', 'Delicioso.', 46, 46),
(4, '2024-10-20', 'Me gusta.', 47, 47),
(5, '2024-11-01', 'Muy recomendable.', 48, 48),
(4, '2024-11-05', 'Buen producto.', 49, 49),
(5, '2024-11-10', 'Excelente calidad.', 50, 50),
(4, '2024-11-15', 'Muy práctico.', 51, 51),
(5, '2024-11-20', 'Me encanta.', 52, 52),
(4, '2024-12-01', 'Buena compra.', 53, 53),
(5, '2024-12-05', 'Muy buen producto.', 54, 54),
(4, '2024-12-10', 'Me gusta, pero es un poco caro.', 55, 55),
(5, '2024-12-15', 'Muy efectivo.', 56, 56),
(4, '2024-12-20', 'Buena calidad.', 57, 57),
(5, '2024-12-25', 'Muy útil.', 58, 58),
(4, '2024-12-30', 'Buen producto, lo recomiendo.', 59, 59),
(5, '2024-03-25', 'Toallas húmedas perfectas para el bebé.', 56, 16),
(5, '2024-04-05', 'Cereal muy nutritivo y delicioso.', 57, 17),
(4, '2024-04-15', 'Jabón líquido de buena calidad.', 58, 18),
(4, '2024-05-01', 'Envase plástico muy duradero.', 59, 19),
(5, '2024-05-10', 'Masa moldeable ideal para niños.', 60, 20),
(4, '2024-06-05', 'Baterías de larga duración.', 60, 21),
(4, '2024-06-15', 'Mopa muy útil para la limpieza.', 58, 22),
(5, '2024-07-01', 'Comida para perros muy nutritiva.', 57, 23),
(5, '2024-07-10', 'Biberón de buena calidad, mi bebé lo adora.', 56, 24),
(5, '2024-07-20', 'Juego de habilidad muy entretenido para los niños.', 45, 25),
(4, '2024-08-05', 'Cereal de maíz crujiente y sabroso.', 34, 26),
(4, '2024-08-15', 'Detergente en polvo muy eficiente.', 34, 27),
(5, '2024-09-01', 'Shampoo de buena calidad, deja el cabello suave.', 23, 28),
(4, '2024-09-10', 'Taza plástica ideal para niños.', 28, 29),
(5, '2024-09-20', 'Crema dental muy efectiva y con buen sabor.', 39, 30),
(5, '2024-10-05', 'Galletas de chocolate deliciosas y crujientes.', 59, 31),
(4, '2024-10-15', 'Jabón líquido hidratante y suave.', 18, 32),
(5, '2024-11-01', 'Carrito de juguete muy divertido para mi hijo.', 43, 33),
(4, '2024-11-10', 'Bolígrafo de punta fina, ideal para escribir.', 54, 34),
(5, '2024-11-20', 'Bloc de notas adhesivo muy práctico para la oficina.', 22, 35);

INSERT INTO Comentarios (calificacion, fecha_Comentario, contenido_Comentario, id_Usuario, id_Producto) VALUES
(4, '2024-01-05', 'Buen producto, excelente calidad.', 1, 1),
(3, '2024-01-15', 'Funciona bien, pero podría mejorar.', 2, 2),
(5, '2024-01-25', '¡Increíble! Superó mis expectativas.', 3, 3),
(2, '2024-02-02', 'No era lo que esperaba.', 4, 4),
(4, '2024-02-10', 'Envío rápido y seguro.', 5, 5),
(3, '2024-02-18', 'Buena experiencia de compra.', 6, 6),
(5, '2024-03-08', 'Increíble calidad.', 7, 7),
(2, '2024-03-15', 'Podría ser mejor.', 8, 8),
(4, '2024-03-22', 'Satisfecho con el producto.', 9, 9),
(3, '2024-04-01', 'Funciona bien, pero tiene algunos problemas.', 10, 10),
(5, '2024-04-12', 'Muy buen servicio al cliente.', 11, 11),
(2, '2024-04-20', 'No lo recomendaría.', 12, 12),
(4, '2024-05-05', 'Envío rápido y eficiente.', 13, 13),
(3, '2024-05-10', 'Buen producto, pero caro.', 14, 14),
(5, '2024-05-18', 'Muy satisfecho con la compra.', 15, 15),
(2, '2024-06-03', 'No era lo que esperaba.', 16, 16),
(4, '2024-06-08', 'Recomiendo este producto.', 17, 17),
(3, '2024-06-15', 'Podría mejorar la calidad.', 18, 18),
(5, '2024-06-20', 'Superó mis expectativas.', 19, 19),
(2, '2024-07-02', 'No lo volvería a comprar.', 20, 20),
(4, '2024-07-10', 'Buen producto, buen precio.', 21, 21),
(3, '2024-07-18', 'Funciona bien, pero tardó en llegar.', 22, 22),
(5, '2024-08-05', 'Excelente servicio.', 23, 23),
(2, '2024-08-12', 'Podría ser mejor.', 24, 24),
(4, '2024-08-20', 'Recomendado.', 25, 25),
(3, '2024-09-01', 'Buen producto, pero esperaba más.', 26, 26),
(5, '2024-09-10', 'Muy buen servicio.', 27, 27),
(2, '2024-09-18', 'No lo recomendaría.', 28, 28),
(4, '2024-10-05', 'Envío rápido y seguro.', 29, 29),
(3, '2024-10-12', 'Buen producto, excelente calidad.', 30, 30),
(5, '2024-10-20', 'Muy satisfecho.', 31, 31),
(2, '2024-11-03', 'No era lo que esperaba.', 32, 32),
(4, '2024-11-10', 'Excelente experiencia de compra.', 33, 33),
(3, '2024-11-18', 'Podría mejorar.', 34, 34),
(5, '2024-11-25', 'Superó mis expectativas.', 35, 35),
(2, '2024-12-02', 'No lo volvería a comprar.', 36, 36),
(4, '2024-12-10', 'Buen producto, buen precio.', 37, 37),
(3, '2024-12-18', 'Funciona bien, pero tardó en llegar.', 38, 62),
(5, '2024-12-25', 'Excelente servicio.', 39, 39),
(2, '2024-01-03', 'Podría ser mejor.', 40, 40),
(4, '2024-01-10', 'Recomiendo este producto.', 41, 41),
(3, '2024-01-18', 'Podría mejorar la calidad.', 42, 42),
(5, '2024-01-25', 'Superó mis expectativas.', 43, 43),
(2, '2024-02-02', 'No lo volvería a comprar.', 44, 44),
(4, '2024-02-10', 'Buen producto, buen precio.', 45, 45),
(3, '2024-02-18', 'Funciona bien, pero tardó en llegar.', 46, 46),
(5, '2024-02-25', 'Excelente servicio.', 47, 47),
(2, '2024-03-03', 'Podría ser mejor.', 48, 48),
(4, '2024-03-10', 'Recomiendo este producto.', 49, 49),
(3, '2024-03-18', 'Podría mejorar la calidad.', 50, 50),
(5, '2024-03-25', 'Superó mis expectativas.', 51, 51),
(2, '2024-04-02', 'No lo volvería a comprar.', 52, 52),
(4, '2024-04-10', 'Buen producto, buen precio.', 53, 53),
(3, '2024-04-18', 'Funciona bien, pero tardó en llegar.', 54, 61),
(5, '2024-04-25', 'Excelente servicio.', 55, 55),
(2, '2024-05-03', 'Podría ser mejor.', 56, 56),
(4, '2024-05-10', 'Recomiendo este producto.', 57, 57),
(3, '2024-05-18', 'Podría mejorar la calidad.', 58, 60),
(5, '2024-05-25', 'Superó mis expectativas.', 59, 59);



INSERT INTO Ventas (id_Usuario, fecha_Venta, hora_Venta, estado, fecha_Estimada)
VALUES
(20, '2024-10-19', '12:30:00', 'Entregado', '2025-02-16'),
(39, '2024-10-22', '10:50:00', 'Entregado', '2025-02-21'),
(36, '2024-10-26', '13:15:00', 'En proceso', '2025-02-26'),
(26, '2024-10-29', '11:25:00', 'En proceso', '2025-03-03'),
(2, '2024-11-02', '09:40:00', 'Enviado', '2025-03-08'),
(21, '2024-11-05', '12:05:00', 'Entregado', '2025-03-13'),
(11, '2024-11-09', '14:20:00', 'Entregado', '2025-03-18'),
(48, '2024-11-12', '09:35:00', 'En proceso', '2025-03-23'),
(46, '2024-11-16', '11:50:00', 'En proceso', '2025-03-28'),
(28, '2024-11-19', '13:55:00', 'Enviado', '2025-04-02'),
(3, '2024-11-23', '10:05:00', 'Entregado', '2025-04-07'),
(38, '2024-11-26', '12:20:00', 'Entregado', '2025-04-12'),
(6, '2024-11-30', '14:45:00', 'En proceso', '2025-04-17'),
(44, '2024-12-03', '11:00:00', 'En proceso', '2025-04-22'),
(19, '2024-12-07', '10:10:00', 'Enviado', '2025-04-27'),
(10, '2024-12-10', '12:25:00', 'Entregado', '2025-05-02'),
(33, '2024-12-14', '14:40:00', 'Entregado', '2025-05-07'),
(17, '2024-12-17', '10:55:00', 'En proceso', '2025-05-12'),
(30, '2024-12-21', '12:15:00', 'En proceso', '2025-05-17'),
(22, '2024-12-24', '14:30:00', 'Enviado', '2025-05-22'),
(43, '2024-12-28', '09:45:00', 'Entregado', '2025-05-27'),
(14, '2024-06-03', '12:35:00', 'Entregado', '2024-06-20'),
(25, '2024-06-07', '14:50:00', 'Entregado', '2024-06-24'),
(1, '2024-06-10', '11:05:00', 'En proceso', '2024-06-29'),
(20, '2024-06-14', '13:20:00', 'En proceso', '2024-07-04'),
(39, '2024-06-17', '09:35:00', 'Enviado', '2024-07-09'),
(36, '2024-06-21', '11:50:00', 'Entregado', '2024-07-14'),
(26, '2024-06-24', '14:05:00', 'Entregado', '2024-07-19'),
(2, '2024-06-28', '10:20:00', 'En proceso', '2024-07-24'),
(21, '2024-07-01', '12:35:00', 'En proceso', '2024-07-29'),
(11, '2024-07-05', '14:50:00', 'Enviado', '2024-08-03'),
(48, '2024-07-08', '11:05:00', 'Entregado', '2024-08-08'),
(46, '2024-07-12', '13:20:00', 'Entregado', '2024-08-13'),
(28, '2024-07-15', '09:35:00', 'En proceso', '2024-08-18'),
(3, '2024-07-19', '11:50:00', 'En proceso', '2024-08-23'),
(38, '2024-07-22', '14:05:00', 'Enviado', '2024-08-28'),
(6, '2024-07-26', '10:20:00', 'Entregado', '2024-09-02'),
(44, '2024-07-29', '12:35:00', 'Entregado', '2024-09-07'),
(19, '2024-08-02', '14:50:00', 'En proceso', '2024-09-12'),
(10, '2024-08-05', '11:05:00', 'En proceso', '2024-09-17'),
(33, '2024-08-09', '13:20:00', 'Enviado', '2024-09-22'),
(17, '2024-08-12', '09:35:00', 'Entregado', '2024-09-27'),
(30, '2024-08-16', '11:50:00', 'Entregado', '2024-10-02'),
(22, '2024-08-19', '14:05:00', 'En proceso', '2024-10-07'),
(43, '2024-08-23', '10:20:00', 'En proceso', '2024-10-12'),
(14, '2024-08-26', '12:35:00', 'Enviado', '2024-10-17'),
(25, '2024-08-30', '14:50:00', 'Entregado', '2024-10-22'),
(1, '2024-09-02', '11:05:00', 'Entregado', '2024-10-27'),
(20, '2024-09-06', '13:20:00', 'En proceso', '2024-11-01'),
(39, '2024-09-09', '09:35:00', 'En proceso', '2024-11-06'),
(36, '2024-09-13', '11:50:00', 'Enviado', '2024-11-11'),
(26, '2024-09-16', '14:05:00', 'Entregado', '2024-11-16'),
(2, '2024-09-20', '10:20:00', 'Entregado', '2024-11-21'),
(21, '2024-09-23', '12:35:00', 'En proceso', '2024-11-26'),
(11, '2024-09-27', '14:50:00', 'En proceso', '2024-12-01'),
(48, '2024-09-30', '11:05:00', 'Enviado', '2024-12-06'),
(46, '2024-10-04', '13:20:00', 'Entregado', '2024-12-11'),
(28, '2024-10-07', '09:35:00', 'Entregado', '2024-12-16'),
(3, '2024-10-11', '11:50:00', 'En proceso', '2024-12-21'),
(38, '2024-10-14', '14:05:00', 'En proceso', '2024-12-26'),
(6, '2024-10-18', '10:20:00', 'Enviado', '2025-01-01'),
(44, '2024-10-21', '12:35:00', 'Entregado', '2025-01-06'),
(19, '2024-10-25', '14:50:00', 'Entregado', '2025-01-11'),
(10, '2024-10-28', '11:05:00', 'En proceso', '2025-01-16'),
(33, '2024-11-01', '13:20:00', 'En proceso', '2025-01-21'),
(17, '2024-11-04', '09:35:00', 'Enviado', '2025-01-26'),
(30, '2024-11-08', '11:50:00', 'Entregado', '2025-02-01'),
(22, '2024-11-11', '14:05:00', 'En proceso', '2025-02-06'),
(43, '2024-11-15', '10:20:00', 'En proceso', '2025-02-11'),
(14, '2024-11-18', '12:35:00', 'Enviado', '2025-02-16'),
(25, '2024-11-22', '14:50:00', 'Entregado', '2025-02-21'),
(1, '2024-11-25', '11:05:00', 'Entregado', '2025-02-26'),
(20, '2024-11-29', '13:20:00', 'En proceso', '2025-03-03'),
(39, '2024-12-02', '09:35:00', 'En proceso', '2025-03-08'),
(36, '2024-12-06', '11:50:00', 'Enviado', '2025-03-13'),
(26, '2024-12-09', '14:05:00', 'Entregado', '2025-03-18'),
(2, '2024-12-13', '10:20:00', 'Entregado', '2025-03-23'),
(21, '2024-12-16', '12:35:00', 'En proceso', '2025-03-28'),
(11, '2024-12-20', '14:50:00', 'En proceso', '2025-04-02'),
(48, '2024-12-23', '11:05:00', 'Enviado', '2025-04-07'),
(46, '2024-12-27', '13:20:00', 'Entregado', '2025-04-12'),
(28, '2024-12-30', '09:35:00', 'Entregado', '2025-04-17'),
(6, '2024-06-10', '09:35:00', 'Entregado', '2024-09-11'),
(44, '2024-06-15', '11:50:00', 'Enviado', '2024-09-16'),
(19, '2024-06-19', '14:05:00', 'Enviado', '2024-09-21'),
(10, '2024-06-22', '10:20:00', 'En proceso', '2024-09-26'),
(33, '2024-06-26', '12:35:00', 'En proceso', '2024-10-01'),
(17, '2024-06-29', '14:50:00', 'Enviado', '2024-10-06'),
(30, '2024-07-03', '11:05:00', 'Entregado', '2024-10-11'),
(22, '2024-07-06', '13:20:00', 'En proceso', '2024-10-16'),
(43, '2024-07-10', '09:35:00', 'En proceso', '2024-10-21'),
(14, '2024-07-13', '11:50:00', 'Enviado', '2024-10-26'),
(25, '2024-07-17', '14:05:00', 'Entregado', '2024-10-31'),
(1, '2024-07-20', '10:20:00', 'Entregado', '2024-11-05'),
(20, '2024-07-24', '12:35:00', 'En proceso', '2024-11-10'),
(39, '2024-07-27', '14:50:00', 'En proceso', '2024-11-15'),
(36, '2024-07-31', '11:05:00', 'Enviado', '2024-11-20'),
(26, '2024-08-03', '13:20:00', 'Entregado', '2024-11-25'),
(2, '2024-08-07', '09:35:00', 'Entregado', '2024-11-30'),
(21, '2024-08-10', '11:50:00', 'En proceso', '2024-12-05'),
(11, '2024-08-14', '14:05:00', 'En proceso', '2024-12-10'),
(48, '2024-08-17', '10:20:00', 'Enviado', '2024-12-15'),
(46, '2024-08-21', '12:35:00', 'Entregado', '2024-12-20'),
(28, '2024-08-24', '14:50:00', 'Entregado', '2024-12-25'),
(3, '2024-08-28', '11:05:00', 'En proceso', '2024-12-30'),
(38, '2024-08-31', '13:20:00', 'En proceso', '2025-01-04'),
(6, '2024-09-04', '09:35:00', 'Enviado', '2025-01-09'),
(44, '2024-09-07', '11:50:00', 'Entregado', '2025-01-14'),
(19, '2024-09-11', '14:05:00', 'Entregado', '2025-01-19'),
(10, '2024-09-14', '10:20:00', 'En proceso', '2025-01-24'),
(33, '2024-09-18', '12:35:00', 'En proceso', '2025-01-29'),
(17, '2024-09-21', '14:50:00', 'Enviado', '2025-02-03'),
(30, '2024-09-25', '11:05:00', 'Entregado', '2025-02-08'),
(22, '2024-09-28', '13:20:00', 'En proceso', '2025-02-13'),
(43, '2024-10-02', '09:35:00', 'En proceso', '2025-02-18'),
(14, '2024-10-05', '11:50:00', 'Enviado', '2025-02-23'),
(25, '2024-10-09', '14:05:00', 'Entregado', '2025-02-28'),
(1, '2024-10-12', '10:20:00', 'Entregado', '2025-03-05'),
(20, '2024-10-16', '12:35:00', 'En proceso', '2025-03-10'),
(39, '2024-10-19', '14:50:00', 'En proceso', '2025-03-15'),
(36, '2024-10-23', '11:05:00', 'Enviado', '2025-03-20'),
(26, '2024-10-26', '13:20:00', 'Entregado', '2025-03-25'),
(2, '2024-10-30', '09:35:00', 'Entregado', '2025-03-30'),
(21, '2024-11-02', '11:50:00', 'En proceso', '2025-04-04'),
(11, '2024-11-06', '14:05:00', 'En proceso', '2025-04-09'),
(48, '2024-11-09', '10:20:00', 'Enviado', '2025-04-14'),
(46, '2024-11-13', '12:35:00', 'Entregado', '2025-04-19'),
(28, '2024-11-16', '14:50:00', 'Entregado', '2025-04-24'),
(3, '2024-11-20', '11:05:00', 'En proceso', '2025-04-29'),
(38, '2024-11-23', '13:20:00', 'En proceso', '2025-05-04'),
(14, '2025-01-01', '11:00:00', 'Entregado', '2025-06-01'),
(25, '2025-01-04', '13:15:00', 'En proceso', '2025-06-06'),
(1, '2025-01-08', '10:20:00', 'En proceso', '2025-06-11'),
(20, '2025-01-11', '12:35:00', 'Enviado', '2025-06-16'),
(39, '2025-01-15', '14:50:00', 'Entregado', '2025-06-21'),
(36, '2025-01-18', '09:05:00', 'Entregado', '2025-06-26'),
(26, '2025-01-22', '11:20:00', 'En proceso', '2025-07-01'),
(2, '2025-01-25', '13:35:00', 'En proceso', '2025-07-06'),
(21, '2025-01-29', '10:50:00', 'Enviado', '2025-07-11'),
(11, '2025-02-01', '12:05:00', 'Entregado', '2025-07-16'),
(48, '2025-02-05', '14:20:00', 'Entregado', '2025-07-21'),
(46, '2025-02-08', '09:35:00', 'En proceso', '2025-07-26'),
(28, '2025-02-12', '11:50:00', 'En proceso', '2025-07-31'),
(3, '2025-02-15', '14:05:00', 'Enviado', '2025-08-05'),
(38, '2025-02-19', '10:20:00', 'Entregado', '2025-08-10'),
(6, '2025-02-22', '12:35:00', 'Entregado', '2025-08-15'),
(17, '2025-06-04', '11:50:00', 'Entregado', '2025-09-09'),
(30, '2025-06-07', '14:05:00', 'En proceso', '2025-09-14'),
(22, '2025-06-11', '10:20:00', 'En proceso', '2025-09-19'),
(43, '2025-06-14', '12:35:00', 'Enviado', '2025-09-24'),
(14, '2025-06-18', '14:50:00', 'Entregado', '2025-09-29'),
(25, '2025-06-21', '11:05:00', 'Entregado', '2025-10-04'),
(1, '2025-06-25', '13:20:00', 'En proceso', '2025-10-09'),
(20, '2025-06-28', '09:35:00', 'En proceso', '2025-10-14'),
(39, '2025-07-02', '11:50:00', 'Enviado', '2025-10-19'),
(36, '2025-07-05', '14:05:00', 'Entregado', '2025-10-24'),
(26, '2025-07-09', '10:20:00', 'Entregado', '2025-10-29'),
(2, '2025-07-12', '12:35:00', 'En proceso', '2025-11-03'),
(21, '2025-07-16', '14:50:00', 'En proceso', '2025-11-08'),
(11, '2025-07-19', '11:05:00', 'Enviado', '2025-11-13'),
(48, '2025-07-23', '13:20:00', 'Entregado', '2025-11-18'),
(46, '2025-07-26', '09:35:00', 'Entregado', '2025-11-23'),
(28, '2025-07-30', '11:50:00', 'En proceso', '2025-11-28'),
(3, '2025-08-02', '14:05:00', 'En proceso', '2025-12-03'),
(38, '2025-08-06', '10:20:00', 'Enviado', '2025-12-08'),
(6, '2025-08-09', '12:35:00', 'Entregado', '2025-12-13'),
(44, '2025-08-13', '14:50:00', 'Entregado', '2025-12-18'),
(19, '2025-08-16', '11:05:00', 'En proceso', '2025-12-23'),
(10, '2025-08-20', '13:20:00', 'En proceso', '2025-12-28'),
(33, '2025-08-23', '09:35:00', 'Enviado', '2026-01-02'),
(17, '2025-08-27', '11:50:00', 'Entregado', '2026-01-07'),
(30, '2025-08-30', '14:05:00', 'Entregado', '2026-01-12'),
(22, '2025-09-03', '10:20:00', 'En proceso', '2026-01-17'),
(43, '2025-09-06', '12:35:00', 'En proceso', '2026-01-22'),
(14, '2025-09-10', '14:50:00', 'Enviado', '2026-01-27'),
(25, '2025-09-13', '11:05:00', 'Entregado', '2026-02-01'),
(1, '2025-09-17', '13:20:00', 'En proceso', '2026-02-06'),
(20, '2025-09-20', '09:35:00', 'En proceso', '2026-02-11'),
(39, '2025-09-24', '11:50:00', 'Enviado', '2026-02-16'),
(36, '2025-09-27', '14:05:00', 'Entregado', '2026-02-21'),
(26, '2025-10-01', '10:20:00', 'Entregado', '2026-02-26'),
(2, '2025-10-04', '12:35:00', 'En proceso', '2026-03-03'),
(21, '2025-10-08', '14:50:00', 'En proceso', '2026-03-08'),
(11, '2025-10-11', '11:05:00', 'Enviado', '2026-03-13'),
(48, '2025-10-15', '13:20:00', 'Entregado', '2026-03-18'),
(46, '2025-10-18', '09:35:00', 'Entregado', '2026-03-23'),
(28, '2025-10-22', '11:50:00', 'En proceso', '2026-03-28'),
(3, '2025-10-25', '14:05:00', 'En proceso', '2026-04-02'),
(38, '2025-10-29', '10:20:00', 'Enviado', '2026-04-07'),
(6, '2025-11-01', '12:35:00', 'Entregado', '2026-04-12'),
(44, '2025-11-05', '14:50:00', 'Entregado', '2026-04-17'),
(19, '2025-11-08', '11:05:00', 'En proceso', '2026-04-22'),
(10, '2025-11-12', '13:20:00', 'En proceso', '2026-04-27'),
(33, '2025-11-15', '09:35:00', 'Enviado', '2026-05-02'),
(30, '2025-11-19', '11:50:00', 'Entregado', '2026-05-07'),
(22, '2025-11-22', '14:05:00', 'En proceso', '2026-05-12'),
(43, '2025-11-26', '10:20:00', 'En proceso', '2026-05-17'),
(14, '2025-11-29', '12:35:00', 'Enviado', '2026-05-22'),
(25, '2025-12-03', '14:50:00', 'Entregado', '2026-05-27'),
(1, '2025-12-06', '11:05:00', 'Entregado', '2026-06-01'),
(20, '2025-12-10', '13:20:00', 'En proceso', '2026-06-06'),
(39, '2025-12-13', '09:35:00', 'En proceso', '2026-06-11'),
(36, '2025-12-17', '11:50:00', 'Enviado', '2026-06-16'),
(26, '2025-12-20', '14:05:00', 'Entregado', '2026-06-21'),
(2, '2025-12-24', '10:20:00', 'Entregado', '2026-06-26'),
(21, '2025-12-27', '12:35:00', 'En proceso', '2026-07-01'),
(11, '2025-12-31', '14:50:00', 'En proceso', '2026-07-06'),
(48, '2026-01-03', '11:05:00', 'Enviado', '2026-07-11'),
(46, '2026-01-07', '13:20:00', 'Entregado', '2026-07-16'),
(28, '2026-01-10', '09:35:00', 'Entregado', '2026-07-21'),
(3, '2026-01-14', '11:50:00', 'En proceso', '2026-07-26'),
(38, '2026-01-17', '14:05:00', 'En proceso', '2026-07-31'),
(6, '2026-01-21', '10:20:00', 'Enviado', '2026-08-05'),
(44, '2026-01-24', '12:35:00', 'Entregado', '2026-08-10'),
(19, '2026-01-28', '14:50:00', 'Entregado', '2026-08-15'),
(10, '2026-01-31', '11:05:00', 'En proceso', '2026-08-20'),
(33, '2026-02-04', '13:20:00', 'En proceso', '2026-08-25'),
(17, '2026-02-07', '09:35:00', 'Enviado', '2026-08-30'),
(30, '2026-02-11', '11:50:00', 'Entregado', '2026-09-04'),
(22, '2026-02-14', '14:05:00', 'En proceso', '2026-09-09'),
(43, '2026-02-18', '10:20:00', 'En proceso', '2026-09-14'),
(14, '2026-02-21', '12:35:00', 'Enviado', '2026-09-19'),
(25, '2026-02-25', '14:50:00', 'Entregado', '2026-09-24'),
(1, '2026-02-28', '11:05:00', 'Entregado', '2026-09-29'),
(20, '2026-03-04', '13:20:00', 'En proceso', '2026-10-04'),
(39, '2026-03-07', '09:35:00', 'En proceso', '2026-10-09'),
(36, '2026-03-11', '11:50:00', 'Enviado', '2026-10-14'),
(26, '2026-03-14', '14:05:00', 'Entregado', '2026-10-19'),
(2, '2026-03-18', '10:20:00', 'Entregado', '2026-10-24'),
(21, '2026-03-21', '12:35:00', 'En proceso', '2026-10-29'),
(11, '2026-03-25', '14:50:00', 'En proceso', '2026-11-03'),
(48, '2026-03-28', '11:05:00', 'Enviado', '2026-11-08'),
(46, '2026-04-01', '13:20:00', 'Entregado', '2026-11-13'),
(28, '2026-04-04', '09:35:00', 'Entregado', '2026-11-18'),
(3, '2026-04-08', '11:50:00', 'En proceso', '2026-11-23'),
(38, '2026-04-11', '14:05:00', 'En proceso', '2026-11-28'),
(6, '2026-04-15', '10:20:00', 'Enviado', '2026-12-03'),
(44, '2026-04-18', '12:35:00', 'Entregado', '2026-12-08'),
(19, '2026-04-22', '14:50:00', 'Entregado', '2026-12-13'),
(10, '2026-04-25', '11:05:00', 'En proceso', '2026-12-18'),
(33, '2026-04-29', '13:20:00', 'En proceso', '2026-12-23'),
(17, '2026-05-02', '09:35:00', 'Enviado', '2026-12-28'),
(30, '2026-05-06', '11:50:00', 'Entregado', '2027-01-02'),
(22, '2026-05-09', '14:05:00', 'En proceso', '2027-01-07'),
(43, '2026-05-13', '10:20:00', 'En proceso', '2027-01-12'),
(14, '2026-05-16', '12:35:00', 'Enviado', '2027-01-17'),
(25, '2026-05-20', '14:50:00', 'Entregado', '2027-01-22'),
(1, '2026-05-23', '11:05:00', 'Entregado', '2027-01-27'),
(20, '2026-05-27', '13:20:00', 'En proceso', '2027-02-01'),
(39, '2026-05-30', '09:35:00', 'En proceso', '2027-02-06'),
(36, '2026-06-03', '11:50:00', 'Enviado', '2027-02-11'),
(26, '2026-06-06', '14:05:00', 'Entregado', '2027-02-16'),
(2, '2026-06-10', '10:20:00', 'Entregado', '2027-02-21'),
(21, '2026-06-13', '12:35:00', 'En proceso', '2027-02-26'),
(11, '2026-06-17', '14:50:00', 'En proceso', '2027-03-03'),
(48, '2026-06-20', '11:05:00', 'Enviado', '2027-03-08'),
(46, '2026-06-24', '13:20:00', 'Entregado', '2027-03-13'),
(28, '2026-06-27', '09:35:00', 'Entregado', '2027-03-18'),
(3, '2026-07-01', '11:50:00', 'En proceso', '2027-03-23'),
(38, '2026-07-04', '14:05:00', 'En proceso', '2027-03-28'),
(6, '2026-07-08', '10:20:00', 'Enviado', '2027-04-02'),
(44, '2026-07-11', '12:35:00', 'Entregado', '2027-04-07'),
(19, '2026-07-15', '14:50:00', 'Entregado', '2027-04-12'),
(10, '2026-07-18', '11:05:00', 'En proceso', '2027-04-17'),
(33, '2026-07-22', '13:20:00', 'En proceso', '2027-04-22'),
(17, '2026-07-25', '09:35:00', 'Enviado', '2027-04-27'),
(30, '2026-07-29', '11:50:00', 'Entregado', '2027-05-02'),
(22, '2026-08-01', '14:05:00', 'En proceso', '2027-05-07'),
(43, '2026-08-05', '10:20:00', 'En proceso', '2027-05-12'),
(14, '2026-08-08', '12:35:00', 'Enviado', '2027-05-17'),
(25, '2026-08-12', '14:50:00', 'Entregado', '2027-05-22'),
(1, '2026-08-15', '11:05:00', 'Entregado', '2027-05-27'),
(20, '2026-08-19', '13:20:00', 'En proceso', '2027-06-01'),
(39, '2026-08-22', '09:35:00', 'En proceso', '2027-06-06'),
(36, '2026-08-26', '11:50:00', 'Enviado', '2027-06-11'),
(26, '2026-08-29', '14:05:00', 'Entregado', '2027-06-16'),
(2, '2026-09-02', '10:20:00', 'Entregado', '2027-06-21'),
(21, '2026-09-05', '12:35:00', 'En proceso', '2027-06-26'),
(11, '2026-09-09', '14:50:00', 'En proceso', '2027-07-01'),
(48, '2026-09-12', '11:05:00', 'Enviado', '2027-07-06'),
(46, '2026-09-16', '13:20:00', 'Entregado', '2027-07-11'),
(28, '2026-09-19', '09:35:00', 'Entregado', '2027-07-16'),
(3, '2026-09-23', '11:50:00', 'En proceso', '2027-07-21'),
(38, '2026-09-26', '14:05:00', 'En proceso', '2027-07-26'),
(6, '2026-09-30', '10:20:00', 'Enviado', '2027-08-01'),
(44, '2026-10-03', '12:35:00', 'Entregado', '2027-08-06'),
(19, '2026-10-07', '14:50:00', 'Entregado', '2027-08-11'),
(10, '2026-10-10', '11:05:00', 'En proceso', '2027-08-16'),
(33, '2026-10-14', '13:20:00', 'En proceso', '2027-08-21'),
(17, '2026-10-17', '09:35:00', 'Enviado', '2027-08-26'),
(30, '2026-10-21', '11:50:00', 'Entregado', '2027-09-02'),
(22, '2026-10-24', '14:05:00', 'En proceso', '2027-09-07'),
(43, '2026-10-28', '10:20:00', 'En proceso', '2027-09-12'),
(14, '2026-10-31', '12:35:00', 'Enviado', '2027-09-17'),
(25, '2026-11-04', '14:50:00', 'Entregado', '2027-09-22'),
(1, '2026-11-07', '11:05:00', 'Entregado', '2027-09-27'),
(20, '2026-11-11', '13:20:00', 'En proceso', '2027-10-02'),
(39, '2026-11-14', '09:35:00', 'En proceso', '2027-10-07'),
(36, '2026-11-18', '11:50:00', 'Enviado', '2027-10-12'),
(26, '2026-11-21', '14:05:00', 'Entregado', '2027-10-17'),
(2, '2026-11-25', '10:20:00', 'Entregado', '2027-10-22'),
(21, '2026-11-28', '12:35:00', 'En proceso', '2027-10-27'),
(11, '2026-12-02', '14:50:00', 'En proceso', '2027-11-01'),
(48, '2026-12-05', '11:05:00', 'Enviado', '2027-11-06'),
(46, '2026-12-09', '13:20:00', 'Entregado', '2027-11-11'),
(28, '2026-12-12', '09:35:00', 'Entregado', '2027-11-16'),
(3, '2026-12-16', '11:50:00', 'En proceso', '2027-11-21'),
(38, '2026-12-19', '14:05:00', 'En proceso', '2027-11-26'),
(6, '2026-12-23', '10:20:00', 'Enviado', '2027-12-01'),
(44, '2026-12-26', '12:35:00', 'Entregado', '2027-12-06'),
(19, '2026-12-30', '14:50:00', 'Entregado', '2027-12-11'),
(10, '2027-01-02', '11:05:00', 'En proceso', '2027-12-16'),
(33, '2027-01-06', '13:20:00', 'En proceso', '2027-12-21');

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(3, 2.99, 8.97, 15, 101),
(2, 1.25, 2.50, 23, 205),
(4, 5.99, 23.96, 37, 311),
(1, 3.75, 3.75, 8, 23),
(5, 2.50, 12.50, 19, 144),
(2, 8.99, 17.98, 30, 61),
(3, 1.49, 4.47, 45, 10),
(4, 19.99, 79.96, 5, 112),
(2, 5.50, 11.00, 25, 222),
(6, 3.99, 23.94, 41, 305);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(1, 12.75, 12.75, 9, 93),
(3, 4.25, 12.75, 31, 145),
(2, 6.99, 13.98, 53, 200),
(1, 24.99, 24.99, 11, 312),
(4, 9.50, 38.00, 27, 37),
(2, 8.75, 17.50, 6, 173),
(3, 3.99, 11.97, 50, 129),
(2, 1.99, 3.98, 16, 97),
(1, 7.50, 7.50, 34, 287),
(5, 3.25, 16.25, 22, 65);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(3, 4.99, 14.97, 47, 145),
(2, 2.50, 5.00, 38, 278),
(1, 1.20, 1.20, 7, 210),
(4, 5.00, 20.00, 29, 309),
(2, 4.50, 9.00, 49, 11),
(3, 3.00, 9.00, 12, 67),
(1, 8.00, 8.00, 33, 229),
(4, 12.00, 48.00, 54, 301),
(2, 5.50, 11.00, 18, 185),
(1, 1.50, 1.50, 3, 7),
(3, 2.50, 7.50, 26, 88),
(2, 6.00, 12.00, 51, 143),
(4, 3.50, 14.00, 1, 204),
(3, 2.99, 8.97, 14, 206),
(2, 1.25, 2.50, 17, 122),
(4, 5.99, 23.96, 35, 49),
(1, 3.75, 3.75, 10, 3),
(5, 2.50, 12.50, 28, 173),
(2, 8.99, 17.98, 52, 119);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(3, 1.49, 4.47, 39, 250),
(4, 19.99, 79.96, 4, 193),
(2, 5.50, 11.00, 20, 90),
(6, 3.99, 23.94, 43, 210),
(1, 12.75, 12.75, 21, 309),
(3, 4.25, 12.75, 32, 30),
(2, 6.99, 13.98, 55, 82),
(1, 24.99, 24.99, 13, 312),
(4, 9.50, 38.00, 36, 173),
(2, 8.75, 17.50, 8, 289),
(3, 3.99, 11.97, 48, 127),
(2, 1.99, 3.98, 24, 56),
(1, 7.50, 7.50, 40, 199),
(5, 3.25, 16.25, 56, 28),
(3, 4.99, 14.97, 42, 300),
(2, 2.50, 5.00, 33, 180),
(1, 1.20, 1.20, 2, 99),
(4, 5.00, 20.00, 22, 312),
(2, 4.50, 9.00, 47, 12);


INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(3, 3.00, 9.00, 19, 77),
(1, 8.00, 8.00, 35, 198),
(4, 12.00, 48.00, 50, 299),
(2, 5.50, 11.00, 16, 134),
(1, 1.50, 1.50, 5, 13),
(3, 2.50, 7.50, 29, 68),
(2, 6.00, 12.00, 54, 103),
(4, 3.50, 14.00, 6, 193),
(3, 2.99, 8.97, 1, 2),
(2, 1.25, 2.50, 18, 31),
(4, 5.99, 23.96, 34, 59),
(1, 3.75, 3.75, 11, 81),
(5, 2.50, 12.50, 27, 92),
(2, 8.99, 17.98, 51, 100),
(3, 1.49, 4.47, 44, 145),
(4, 19.99, 79.96, 3, 271),
(2, 5.50, 11.00, 21, 97),
(6, 3.99, 23.94, 42, 313),
(1, 12.75, 12.75, 22, 60);

INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(3, 4.25, 12.75, 33, 80),
(2, 6.99, 13.98, 55, 177),
(1, 24.99, 24.99, 14, 270),
(4, 9.50, 38.00, 36, 230),
(2, 8.75, 17.50, 7, 310),
(3, 3.99, 11.97, 49, 45),
(2, 1.99, 3.98, 24, 177),
(1, 7.50, 7.50, 40, 301),
(5, 3.25, 16.25, 56, 87),
(3, 4.99, 14.97, 43, 134),
(2, 2.50, 5.00, 34, 278),
(1, 1.20, 1.20, 7, 213),
(4, 5.00, 20.00, 23, 193),
(2, 4.50, 9.00, 46, 48),
(3, 3.00, 9.00, 15, 113),
(1, 8.00, 8.00, 37, 220),
(4, 12.00, 48.00, 53, 299),
(2, 5.50, 11.00, 17, 112),
(1, 1.50, 1.50, 2, 40),
(3, 2.50, 7.50, 25, 115),
(2, 6.00, 12.00, 51, 162),
(4, 3.50, 14.00, 12, 311),
(3, 2.99, 8.97, 1, 123),
(2, 1.25, 2.50, 21, 21),
(4, 5.99, 23.96, 30, 15),
(1, 3.75, 3.75, 9, 312),
(5, 2.50, 12.50, 27, 62),
(2, 8.99, 17.98, 53, 88),
(3, 1.49, 4.47, 39, 107),
(4, 19.99, 79.96, 6, 296);


INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(2, 5.50, 11.00, 24, 123),
(6, 3.99, 23.94, 43, 312),
(1, 12.75, 12.75, 8, 203),
(3, 4.25, 12.75, 32, 67),
(2, 6.99, 13.98, 55, 250),
(1, 24.99, 24.99, 14, 275),
(4, 9.50, 38.00, 36, 171),
(2, 8.75, 17.50, 4, 297),
(3, 3.99, 11.97, 47, 51),
(2, 1.99, 3.98, 26, 178),
(1, 7.50, 7.50, 38, 303),
(5, 3.25, 16.25, 50, 55),
(3, 4.99, 14.97, 41, 145),
(2, 2.50, 5.00, 33, 195),
(1, 1.20, 1.20, 7, 300),
(4, 5.00, 20.00, 25, 177),
(2, 4.50, 9.00, 48, 21),
(3, 3.00, 9.00, 15, 309),
(1, 8.00, 8.00, 37, 19),
(4, 12.00, 48.00, 53, 310),
(2, 5.50, 11.00, 18, 111),
(1, 1.50, 1.50, 2, 39),
(3, 2.50, 7.50, 25, 174),
(2, 6.00, 12.00, 52, 160),
(4, 3.50, 14.00, 12, 213),
(3, 2.99, 8.97, 1, 50),
(2, 1.25, 2.50, 20, 22),
(2, 1.99, 3.98, 24, 197),
(1, 7.50, 7.50, 40, 199),
(5, 3.25, 16.25, 56, 90),
(3, 4.99, 14.97, 42, 298),
(2, 2.50, 5.00, 33, 205),
(1, 1.20, 1.20, 7, 50),
(4, 5.00, 20.00, 22, 193),
(2, 4.50, 9.00, 47, 148),
(3, 3.00, 9.00, 19, 91),
(1, 8.00, 8.00, 35, 122),
(4, 12.00, 48.00, 50, 299),
(2, 5.50, 11.00, 16, 117),
(1, 1.50, 1.50, 5, 140),
(3, 2.50, 7.50, 29, 192),
(2, 6.00, 12.00, 54, 304),
(4, 3.50, 14.00, 6, 202),
(3, 2.99, 8.97, 1, 219),
(2, 1.25, 2.50, 18, 163),
(4, 5.99, 23.96, 34, 250),
(1, 3.75, 3.75, 11, 201),
(5, 2.50, 12.50, 27, 78),
(2, 8.99, 17.98, 51, 255),
(3, 1.49, 4.47, 44, 271);



INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(4, 19.99, 79.96, 3, 133),
(2, 5.50, 11.00, 21, 97),
(6, 3.99, 23.94, 42, 193),
(1, 12.75, 12.75, 22, 256),
(3, 4.25, 12.75, 32, 110),
(2, 6.99, 13.98, 55, 277),
(1, 24.99, 24.99, 14, 305),
(4, 9.50, 38.00, 36, 203),
(2, 8.75, 17.50, 7, 177),
(3, 3.99, 11.97, 49, 129),
(2, 1.99, 3.98, 24, 136),
(1, 7.50, 7.50, 40, 231),
(5, 3.25, 16.25, 56, 144),
(3, 4.99, 14.97, 43, 303),
(2, 2.50, 5.00, 34, 192),
(1, 1.20, 1.20, 7, 78),
(4, 5.00, 20.00, 23, 190),
(2, 4.50, 9.00, 46, 117),
(3, 3.00, 9.00, 15, 75),
(1, 8.00, 8.00, 37, 151),
(4, 12.00, 48.00, 53, 289),
(2, 5.50, 11.00, 17, 104),
(1, 1.50, 1.50, 2, 54),
(3, 2.50, 7.50, 25, 193),
(2, 6.00, 12.00, 51, 153),
(4, 3.50, 14.00, 12, 201),
(3, 2.99, 8.97, 1, 202),
(2, 1.25, 2.50, 20, 41),
(4, 5.99, 23.96, 29, 115),
(1, 3.75, 3.75, 10, 298),
(5, 2.50, 12.50, 28, 185),
(2, 8.99, 17.98, 53, 161),
(3, 1.49, 4.47, 39, 97),
(4, 19.99, 79.96, 6, 297),
(2, 5.50, 11.00, 24, 230),
(6, 3.99, 23.94, 43, 274),
(1, 12.75, 12.75, 21, 198),
(3, 4.25, 12.75, 33, 176),
(2, 6.99, 13.98, 55, 156),
(1, 24.99, 24.99, 13, 97),
(4, 9.50, 38.00, 36, 243),
(2, 8.75, 17.50, 4, 199),
(3, 3.99, 11.97, 47, 138),
(2, 1.99, 3.98, 26, 176),
(1, 7.50, 7.50, 38, 302),
(5, 3.25, 16.25, 50, 97),
(3, 4.99, 14.97, 41, 296),
(2, 2.50, 5.00, 33, 108),
(1, 1.20, 1.20, 7, 211),
(4, 5.00, 20.00, 23, 299);


INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(2, 4.50, 9.00, 49, 73),
(3, 3.00, 9.00, 14, 308),
(1, 8.00, 8.00, 36, 72),
(4, 12.00, 48.00, 53, 313),
(2, 5.50, 11.00, 18, 110),
(1, 1.50, 1.50, 2, 80),
(3, 2.50, 7.50, 26, 177),
(2, 6.00, 12.00, 52, 119),
(4, 3.50, 14.00, 12, 211),
(3, 2.99, 8.97, 1, 188),
(2, 1.25, 2.50, 20, 72),
(4, 5.99, 23.96, 29, 155),
(1, 3.75, 3.75, 10, 268),
(5, 2.50, 12.50, 28, 188),
(2, 8.99, 17.98, 54, 299),
(3, 1.49, 4.47, 40, 202),
(4, 19.99, 79.96, 6, 113),
(2, 5.50, 11.00, 24, 89),
(6, 3.99, 23.94, 42, 294),
(1, 12.75, 12.75, 9, 193),
(3, 4.25, 12.75, 31, 299),
(2, 6.99, 13.98, 56, 257),
(1, 24.99, 24.99, 13, 97),
(4, 9.50, 38.00, 35, 187),
(2, 8.75, 17.50, 4, 212),
(3, 3.99, 11.97, 47, 157),
(2, 1.99, 3.98, 26, 159),
(1, 7.50, 7.50, 38, 199),
(5, 3.25, 16.25, 50, 177),
(3, 4.99, 14.97, 41, 269),
(2, 2.50, 5.00, 34, 145),
(1, 1.20, 1.20, 7, 298),
(4, 5.00, 20.00, 23, 129),
(2, 4.50, 9.00, 46, 150),
(3, 3.00, 9.00, 15, 192),
(1, 8.00, 8.00, 37, 98),
(4, 12.00, 48.00, 53, 241),
(2, 5.50, 11.00, 16, 179),
(1, 1.50, 1.50, 5, 231),
(3, 2.50, 7.50, 29, 199),
(2, 6.00, 12.00, 54, 177),
(4, 3.50, 14.00, 6, 211),
(3, 2.99, 8.97, 1, 200),
(2, 1.25, 2.50, 18, 174),
(4, 5.99, 23.96, 34, 204),
(1, 3.75, 3.75, 11, 50),
(5, 2.50, 12.50, 27, 185),
(2, 8.99, 17.98, 51, 150),
(3, 1.49, 4.47, 44, 297),
(4, 19.99, 79.96, 3, 13),
(2, 5.50, 11.00, 21, 157),
(6, 3.99, 23.94, 42, 303),
(1, 12.75, 12.75, 9, 178),
(3, 4.25, 12.75, 31, 189),
(2, 6.99, 13.98, 55, 198),
(1, 24.99, 24.99, 13, 193),
(4, 9.50, 38.00, 35, 176),
(2, 8.75, 17.50, 7, 209),
(3, 3.99, 11.97, 49, 167),
(2, 1.99, 3.98, 24, 217),
(1, 7.50, 7.50, 40, 189);


INSERT INTO Detalle_Venta (cantidad_Productos, precio_Venta, total_Venta, id_Producto, id_Venta) VALUES
(5, 3.25, 16.25, 56, 209),
(3, 4.99, 14.97, 42, 193),
(2, 2.50, 5.00, 33, 217),
(1, 1.20, 1.20, 7, 133),
(4, 5.00, 20.00, 22, 195),
(2, 4.50, 9.00, 47, 207),
(3, 3.00, 9.00, 15, 202),
(1, 8.00, 8.00, 35, 217),
(4, 12.00, 48.00, 50, 178),
(2, 5.50, 11.00, 16, 111),
(1, 1.50, 1.50, 5, 193),
(3, 2.50, 7.50, 29, 218),
(2, 6.00, 12.00, 51, 219),
(4, 3.50, 14.00, 6, 221),
(3, 2.99, 8.97, 1, 230),
(2, 1.25, 2.50, 18, 205),
(4, 5.99, 23.96, 34, 277),
(1, 3.75, 3.75, 11, 204),
(5, 2.50, 12.50, 27, 218),
(2, 8.99, 17.98, 53, 250),
(3, 1.49, 4.47, 39, 293),
(4, 19.99, 79.96, 6, 209),
(2, 5.50, 11.00, 24, 111),
(6, 3.99, 23.94, 43, 274),
(1, 12.75, 12.75, 21, 200),
(3, 4.25, 12.75, 33, 218),
(54, 8.25, 41.25, 37, 195),
(30, 5.50, 11.00, 51, 150),
(21, 3.00, 9.00, 18, 167),
(16, 2.99, 8.97, 41, 184),
(19, 1.25, 2.50, 26, 200),
(11, 5.99, 23.96, 39, 157),
(38, 3.75, 3.75, 55, 289),
(7, 2.50, 12.50, 25, 204),
(33, 8.99, 17.98, 48, 176),
(44, 1.49, 4.47, 11, 302),
(27, 19.99, 79.96, 5, 297),
(9, 5.50, 11.00, 19, 268),
(13, 3.99, 23.94, 45, 138),
(6, 12.75, 12.75, 12, 149),
(41, 4.25, 12.75, 33, 243),
(22, 6.99, 13.98, 53, 180),
(139, 3.75, 3.75, 11, 178),
(140, 2.50, 12.50, 27, 289),
(14, 24.99, 24.99, 10, 313);


