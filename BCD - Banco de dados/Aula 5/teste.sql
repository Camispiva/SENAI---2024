-- Listar todos
select * from cliente;
-- Filtrar por nome exato
select * from cliente where nome = "Osmar Motta";
-- Filtrar por nome aproximado
SELECT * FROM cliente WHERE nome like '%osmar%';
-- Like iniciado com osmar
SELECT * FROM cliente WHERE nome like 'osmar%';
-- Like terminado com motta
SELECT * FROM cliente WHERE nome like '%motta';
-- like com o mello no meio
SELECT * FROM cliente WHERE nome like '%mello%';
-- Escolhendo os campos e filtrando
SELECT nome, telefone FROM cliente WHERE nome like '%mello%';
-- Filtrando por telefone
SELECT nome, telefone FROM cliente WHERE telefone like '%99%';
-- Ordenar - Sort
SELECT * FROM cliente order by nome;
SELECT * FROM cliente order by nome desc;
SELECT * FROM cliente order by email;
-- Filtrar e Ordenar
SELECT * FROM cliente WHERE nome like 'osmar%' order by email desc;
-- Agrupar - Sempre que agrupar criar um resumo (avg(), min(), max(), sum(), count())
SELECT * FROM pedido WHERE idCliente = 1;
SELECT * FROM pedido GROUP by idCliente;
SELECT *, avg(valor) FROM pedido GROUP by idCliente;
SELECT idCliente, avg(valor) FROM pedido group by idcliente;
-- Agrupar: Ex. quantos pedidos por cliente
SELECT idCliente, count(idCliente) as 'total pedidos' FROM pedido group by idcliente;
-- Agrupar e saber o valor total que cada cliente pediu
SELECT idCliente, sum(valor) as 'valor total dos pedidos' FROM pedido group by idcliente;
-- Só os pedidos mais caros de cada cliente (idCliente e valor)
select idCliente, max(valor) as 'maior valor' from pedido group by idcliente;

-- Para criar Relatórios(VIEW - VISÕES) basta salvar a consulta exemplos:
-- Relatório de total por cliente
create view TotalPorCliente as
SELECT idCliente, sum(valor) as 'total dos pedidos' FROM pedido group by idcliente;
-- Para ver o relatório
SELECT * FROM totalporcliente;
-- Criar um relatório dos pedidos mais caros de cada cliente chame de 'pedidos_mais_caros'
create view pedidos_mais_caros as
select idCliente, max(valor) as 'maior valor' from pedido group by idcliente;
-- Para ver o relatório
SELECT * FROM pedidos_mais_caros;
-- Para remover uma visão use o comando drop
drop view totalporcliente;
-- Criar novamente a visão com um outro nome
create view pedidos_totais_por_cliente as
SELECT idCliente, sum(valor) as 'total dos pedidos' FROM pedido group by idcliente;
-- para ver
select * from pedidos_totais_por_cliente;

-- Juntando dados de diferentes tabelas
-- JOIN
-- INNER JOIN e o ON comparando as chaves primária e estrangeira
select * from cliente inner join pedido on cliente.idcliente = pedido.idCliente;
-- Utilizando Alias (apelido)
select * from cliente c inner join pedido p on c.idcliente = p.idcliente;
-- Escolhendo os principais campos
-- Nome do cliente, o endereço e todos os dados do pedido
Select c.nome, c.endereco, p.* from cliente c inner join pedido p on c.idcliente = p.idcliente;


1 Crie uma consulta que mostre somente os nomes de todos os clientes
2 Crie uma consulta que agrupe as estregas e mostre quantas cada motorista fez
3 Salve a consulta anterior em um relatório chamado 'entregas por motorista'
4 Crie uma consulta que mostre todas as rotas ordenadas por distância
5 Crie uma consulta que mostre os funcionários ordenados por nome
6 Crie uma consulta que mostre qual veículo fez mais entregas e o total de entregas que ele fez.
7 Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos, salve como 'relatorio_de_entregas_01'
8 Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos e o valor total da entrega, salve como 'relatorio_de_entregas_02'

-- Crie uma consulta que mostre somente os nomes de todos os clientes
select nome from cliente;
-- Crie uma consulta que agrupe as estregas e mostre quantas cada motorista fez
select * from entrega;
select motorista, count(motorista) from entrega group by motorista;
-- E se quisessemos o nome do motorita ao invés do id
select f.nome, count(e.motorista) from entrega e inner join funcionario f on f.idFuncionario = e.motorista group by motorista;
-- Salve a consulta anterior em um relatório chamado 'entregas_por_motorista'
create view entregas_por_motorista as
select f.nome, count(e.motorista) from entrega e inner join funcionario f on f.idFuncionario = e.motorista group by motorista;
-- Conferir se criou a view / visão / relatório
show tables;
select * from entregas_por_motorista;
-- Crie uma consulta que mostre todas as rotas ordenadas por distância
select * from rota order by distancia;
-- Crie uma consulta que mostre os funcionários ordenados por nome
select * from funcionario order by nome;
-- Crie uma consulta que mostre qual veículo fez mais entregas e o total de entregas que ele fez.
select placa, count(idEntrega) from entrega group by placa;
select placa, count(idEntrega) as 'entregas' from entrega group by placa order by count(idEntrega) desc;
select placa, count(idEntrega) as 'entregas' from entrega group by placa order by count(idEntrega) desc limit 1;
-- Mostre o modelo do veículo e não somente a placa
select e.placa, v.modelo, count(e.idEntrega) as 'entregas' from entrega e inner join veiculo v on e.placa = v.placa group by e.placa order by count(e.idEntrega) desc limit 1;
-- Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos, salve como 'relatorio_de_entregas_01'
select * from entrega;
create view relatorio_de_entregas_01 as
select f.nome, v.modelo, e.* from entrega e inner join funcionario f on e.motorista = f.idFuncionario inner join veiculo v on e.placa = v.placa;
-- Para listar as views ou relatórios
show tables;
select * from relatorio_de_entregas_01;
-- Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos e o valor total da entrega, salve como 'relatorio_de_entregas_02'
select f.nome, v.modelo, e.* from entrega e inner join funcionario f on e.motorista = f.idFuncionario inner join veiculo v on e.placa = v.placa;
create view relatorio_de_entregas_02 as
select f.nome, v.modelo, e.*, sum(p.valor) as total from entrega e inner join funcionario f on e.motorista = f.idFuncionario inner join veiculo v on e.placa = v.placa inner join pedido p on e.idEntrega = p.idEntrega group by e.idEntrega;
-- Testar o relatório
select * from relatorio_de_entregas_02;