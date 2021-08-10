create table Usuario (
	id int not null,
	usuario varchar(30) not null,
	clave varchar(30) not null,
	UNIQUE(usuario)
);