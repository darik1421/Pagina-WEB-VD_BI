CREATE DATABASE TablaHechos;
USE TablaHechos;

CREATE TABLE D_Usuarios(
id_Usuario INTEGER PRIMARY KEY,
nombre_Usuario VARCHAR (25) NOT NULL,
genero VARCHAR (9) NOT NULL,
fecha_Nacimiento DATE
);

CREATE TABLE D_Tiempos(
id_Tiempo INTEGER PRIMARY KEY,
fecha DATE NOT NULL,
anio INTEGER NOT NULL,
mes INTEGER NOT NULL,
dia INTEGER NOT NULL,
trimestre INTEGER NOT NULL
);

CREATE TABLE D_Productos(
id_Producto INTEGER PRIMARY KEY,
calificacion INTEGER,
nombre_Producto VARCHAR (255) NOT NULL,
nombre_Categoria VARCHAR (25) NOT NULL,
nombre_Marca VARCHAR (25) NOT NULL,
cantidad_Disponible INTEGER,
precio_Venta DECIMAL (12,4) NOT NULL,
precio_Compra DECIMAL (12,4) NOT NULL
);

CREATE TABLE H_Ventas(
id_Detalleventa INTEGER PRIMARY KEY,
id_Venta INTEGER,
id_Usuario INTEGER,
FOREIGN KEY (id_Usuario) REFERENCES D_Usuarios (id_Usuario),
id_Tiempo INTEGER,
FOREIGN KEY (id_Tiempo) REFERENCES D_Tiempos (id_Tiempo),
id_Producto INTEGER,
FOREIGN KEY (id_Producto) REFERENCES D_Productos (id_Producto),
total_Venta DECIMAL (12,2),
cantidad_Productos INTEGER,
precio_Venta DECIMAL (12,4)
);

