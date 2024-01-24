-- DDL - Estrutura
drop database if exists lojinha;
create database lojinha;
use lojinha;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);
describe Clientes;

-- DML - Popular com dados de teste 
insert into Clientes(cpf, nome, sobrenome, nascimento) values
("111.111.111-11", "Camilla", "Silva", "2006-05-12"),
("222.222.222-22", "Maria", "Oliveira", "2004-01-10"),
("333.333.333-33", "Eduarda", "Sousa", "2005-01-30"),
("444.444.444-44", "Melissa", "Marques", "2008-01-25"),
("555.555.555-55", "Sofia", "Farias", "2007-01-17");

select * from Clientes;
