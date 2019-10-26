# Digital_api
# CRUD con Mysql y node.js 
# script de BD:
create database crud_digital;
use crud_digital;
create table usuarios (
	id_user int(10),
	nom_user varchar (30),
	primary key (id_user)
);

insert into usuarios (id_user,nom_user) values ('1','daniel');
insert into usuarios (id_user,nom_user) values ('2','miguel');
