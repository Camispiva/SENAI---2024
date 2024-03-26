-- Consulta para listar os funcionários em ordem alfabética de nome

SELECT * FROM Funcionario ORDER BY nome;

-- Consulta para listar todos os funcionários e seus telefones

SELECT nome, telefone FROM Funcionario;

-- Consulta para mostrar somente os veículos da marca 'Fiat' ordenados pelo ano decrescente

SELECT * FROM Veiculo WHERE marca = 'Fiat' ORDER BY ano DESC;

-- Consulta para mostrar todos os dados dos veículos e a quantidade de manutenções realizadas em cada um

SELECT v.placa, v.modelo, v.marca, v.ano, COUNT(m.id_manutencao) AS qtd_manutencoes
FROM Veiculo v
LEFT JOIN Manutencao m ON v.placa = m.placa_veiculo
GROUP BY v.placa, v.modelo, v.marca, v.ano;


--Crie uma consulta que mostre todas as manutenções acrescida do nome do funcionário que a realizou e o modelo do veículo e salve como uma visão chamada vw_totas_as_manutencoes


CREATE VIEW vw_todas_as_manutencoes AS
SELECT m.id_manutencao, m.inicio_manutencao, m.fim_manutencao, m.descricao,
       f.nome AS nome_funcionario, v.modelo AS modelo_veiculo
FROM Manutencao m
INNER JOIN Funcionario f ON m.matricula_funcionario = f.matricula
INNER JOIN Veiculo v ON m.placa_veiculo = v.placa;
