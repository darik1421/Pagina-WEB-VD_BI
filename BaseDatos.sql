CREATE DATABASE VariedadesDuarte;
USE VariedadesDuarte;

CREATE TABLE Categorias(
id_Categoria INT AUTO_INCREMENT PRIMARY KEY,
nombre_Categoria VARCHAR (25)
);

CREATE TABLE Marcas(
id_Marca INT AUTO_INCREMENT PRIMARY KEY,
nombre_Marca VARCHAR (25)
);

CREATE TABLE Productos  (
id_Producto INT AUTO_INCREMENT PRIMARY KEY,
nombre_Producto VARCHAR (255) NOT NULL,
presentacion VARCHAR (25) NULL,
imagen VARCHAR (255) NOT NULL,
descripcion VARCHAR (255) NULL,
precio_Venta DECIMAL (12,4) NOT NULL,
precio_Compra DECIMAL (12,4) NOT NULL,
cantidad_Disponible INT NOT NULL,
id_Marca INT,
CONSTRAINT FK_Producto_Marca FOREIGN KEY (id_Marca) REFERENCES Marcas(id_Marca),
id_Categoria INT,
CONSTRAINT FK_Producto_Categoria FOREIGN KEY (id_Categoria) REFERENCES Categorias(id_Categoria) 
);

CREATE TABLE Usuarios(
id_Usuario INT AUTO_INCREMENT PRIMARY KEY,
nombre_Usuario VARCHAR (25) NOT NULL,
segundo_Nombre VARCHAR (25) NULL,
apellido_Usuario VARCHAR (25) NOT NULL,
segundo_Apellido VARCHAR (25) NULL,
genero VARCHAR (9) NOT NULL,
fecha_Nacimiento DATE NOT NULL,
correo_Electronico VARCHAR (150) NOT NULL,
contrasena VARCHAR (15),
rol VARCHAR (20) NOT NULL
);

CREATE TABLE Comentarios(
id_Comentario INT AUTO_INCREMENT PRIMARY KEY,
calificacion INT,
fecha_Comentario DATE,
contenido_Comentario VARCHAR (250),
id_Usuario INT,
CONSTRAINT FK_Comentario_Usuario FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
id_Producto INT,
CONSTRAINT FK_Comentario_Producto FOREIGN KEY (id_Producto) REFERENCES Productos(id_Producto)
);

CREATE TABLE Ventas(
id_Venta INT AUTO_INCREMENT PRIMARY KEY,
id_Usuario INT,
CONSTRAINT FK_Ventas_Usuario FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
fecha_Venta DATE,
hora_Venta TIME,
estado VARCHAR(15),
fecha_Estimada DATE
);

CREATE TABLE Detalle_Venta(
id_Detalleventa INT AUTO_INCREMENT PRIMARY KEY,
cantidad_Productos INT,
precio_Venta DECIMAL (12,4),
total_Venta DECIMAL (12,2),
id_Producto INT,
CONSTRAINT FK_Detalle_Venta_Producto FOREIGN KEY (id_Producto) REFERENCES Productos(id_Producto),
id_Venta INT,
CONSTRAINT FK_Detalle_Venta_Ventas FOREIGN KEY (id_Venta) REFERENCES Ventas(id_Venta)
);

