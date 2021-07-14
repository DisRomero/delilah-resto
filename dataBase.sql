create database if not exists resto

use resto

create table if not exists tipo_de_usuario (
	ID_tipo_de_usuario int not null primary key auto_increment,
	nombre varchar(255) not null
);

create table if not exists usuario (
	ID_usuario int not null primary key auto_increment,
	nombre varchar(255) not null,
	correo varchar(255) not null,
	telefono int(15) not null,
	direccion varchar(255),
	contrasenia varchar(10) not null,
	ID_tipo_de_usuario int,
	foreign key (ID_tipo_de_usuario) references tipo_de_usuario(ID_tipo_de_usuario)	
);

create table if not exists producto (
	ID_producto int not null primary key auto_increment,
	nombre varchar(255) not null,
	precio int(15) not null
);

create table if not exists medio_de_pago (
	ID_medio_de_pago int not null primary key auto_increment,
	nombre varchar(255) not null
);

create table if not exists estado (
	ID_estado int not null primary key auto_increment,
	nombre varchar(255) not null
);

create table if not exists pedido (
	ID_pedido int not null primary key auto_increment,
	detalle varchar(255) not null,
	ID_estado int,
	ID_medio_de_pago int,
	fecha datetime,
	ID_usuario int,
	total int,
	foreign key (ID_estado) references estado(ID_estado),
	foreign key (ID_medio_de_pago) references medio_de_pago(ID_medio_de_pago),
	foreign key (ID_usuario) references usuario(ID_usuario)
);


create table if not exists pedido_con_producto (
	ID_pedido_con_producto int not null primary key auto_increment,
	ID_pedido int,
	ID_producto int,
	foreign key (ID_pedido) references pedido(ID_pedido),
	foreign key (ID_producto) references producto(ID_producto)
);