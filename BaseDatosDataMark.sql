CREATE DATABASE TablaHechos;
USE TablaHechos;

CREATE TABLE D_Usuarios(
id_Usuario INTEGER AUTO_INCREMENT PRIMARY KEY,
nombre_Usuario VARCHAR (25) NOT NULL,
segundo_Nombre VARCHAR (25) NOT NULL,
apellidos_Usuario VARCHAR (25) NOT NULL,
segundo_Apellido VARCHAR (25) NOT NULL,
genero CHAR (1) NOT NULL,
fecha_Nacimiento DATE,
correo_Electronico VARCHAR (150) NOT NULL
);

CREATE TABLE D_Tiempos(
id_Tiempo INTEGER AUTO_INCREMENT PRIMARY KEY,
ano INTEGER NOT NULL,
mes INTEGER NOT NULL,
semana INTEGER NOT NULL,
dia INTEGER NOT NULL
);

CREATE TABLE D_Productos(
id_Producto INTEGER AUTO_INCREMENT PRIMARY KEY,
nombre_Producto VARCHAR (255) NOT NULL,
nombre_Categoria VARCHAR (25) NOT NULL,
nombre_Marca VARCHAR (25) NOT NULL,
cantidad_Disponible INTEGER,
precio_Venta DOUBLE
);

CREATE TABLE H_Ventas(
id_Venta INTEGER AUTO_INCREMENT PRIMARY KEY,
id_Usuario INTEGER,
CONSTRAINT FK_VENTAS_ClIENTE FOREIGN KEY (id_Usuario) REFERENCES D_Usuarios (id_Usuario),
id_Tiempo INTEGER,
CONSTRAINT FK_VENTAS_TIEMPO FOREIGN KEY (id_Tiempo) REFERENCES D_Tiempos (id_Tiempo),
id_Producto INTEGER,
CONSTRAINT FK_VENTAS_PRODUCTO FOREIGN KEY (id_Producto) REFERENCES D_Productos (id_Producto),
total_Compra DOUBLE,
cantidad_Productos INTEGER
);
