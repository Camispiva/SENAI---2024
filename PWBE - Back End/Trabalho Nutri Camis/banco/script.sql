drop database if exists NutriCamis;
create database NutriCamis;
use NutriCamis;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    consulta dateTime not null
);
describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(cpf, nome, sobrenome, consulta)
values
("108.987.356-75","Camilla","Piva","2024-02-01 09:00:00 AM"),
("205.869.356-65","Eduarda","Souza","2024-02-02 10:00:00 AM"),
("397.276.189-54","Adriele","Santos","2024-02-03 11:00:00 AM"),
("005.298.356-25","Matteo","Silva","2024-02-04 01:00:00 PM"),
("356.980.786-43","Luiza","Oliveira","2024-02-05 02:00:00 PM");

select * from Clientes; 