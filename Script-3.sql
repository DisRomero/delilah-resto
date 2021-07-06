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

insert into tipo_de_usuario(nombre)
values('cliente'),
	('admin');

select *
from pedido_con_producto;

update tipo_de_usuario
set nombre = 'cliente'
where ID_tipo_de_usuario = 1;

insert into usuario(nombre, correo, telefono, direccion, contrasenia, ID_tipo_de_usuario)
values('Diana Romero', 'admin@admin.com', 1234567890, 'cl 1 # 2-34', 'contrAdmin', 2),
	('Ana Lopez', 'cliente@cliente.com', 1112131415, 'cr 1 # 11-12', 'contraClie', 1);

insert into producto(nombre, precio)
values('Hamburguesa de clasica', 15000),
	('Sandwich veggie', 10000);

insert into medio_de_pago(nombre)
values('efectivo'),
	('tarjeta de credito/debito');

insert into estado(nombre)
values('nuevo'),
	('confirmado'),
	('preparando'),
	('enviando'),
	('entregado');

insert into pedido(detalle, ID_estado, ID_medio_de_pago, fecha, ID_usuario, total)
values('detalle del pedido 1', 1, 1, now(), 3, 15000),
	('detalle del pedido 2', 2, 1, now(), 3, 25000);

insert into pedido_con_producto(ID_pedido, ID_producto)
values(1, 1),
	(2, 1),
	(2, 2);
