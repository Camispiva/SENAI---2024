-- Inserção de dados na tabela Veiculo
INSERT INTO Veiculo (placa, modelo, marca, ano)
VALUES
('DEA-7981', 'Uno', 'Fiat', 2005),
('CBC-4945', 'Fiorino', 'Fiat', 2007),
('BEE-7735', 'Saveiro', 'VW', 2015),
('CBA-4403', 'Sandeiro', 'Renaut', 2012),
('BBC-8504', 'Palio', 'Fiat', 2004),
('BEB-5885', 'Gol', 'VW', 2013),
('EDB-2475', 'Ranger', 'Ford', 2005);

-- Inserção de dados na tabela Funcionario
INSERT INTO Funcionario (matricula, nome, telefone)
VALUES
(48482, 'Osvaldo Oliveira', '19-72077-0521,19-06078-6843'),
(48542, 'Jaqueline Teixeira', '19-23003-4864'),
(48522, 'Keli Matos', '19-06486-6449,19-53266-7923'),
(48502, 'Ursula Souza', '19-64378-2404'),
(48562, 'Evandro Silva', '19-53315-2734');

-- Inserção de dados na tabela Manutencao
INSERT INTO Manutencao (id_manutencao, inicio_manutencao, fim_manutencao, descricao, matricula_funcionario, placa_veiculo)
VALUES
(1, '2023-02-25', '2023-03-04', 'Lanterna queimada', 48482, 'DEA-7981'),
(2, '2023-03-13', '2023-03-21', 'Farol queimado', 48542, 'CBC-4945'),
(3, '2023-03-29', '2023-04-05', 'Troca de pneus dianteiros', 48522, 'BEE-7735'),
(4, '2023-04-14', '2023-04-24', 'Troca de pneus dianteiros', 48502, 'CBA-4403'),
(5, '2023-04-30', '2023-05-07', 'Farol queimado', 48502, 'BBC-8504'),
(6, '2023-05-16', '2023-05-25', 'Troca de pneus traseiros', 48482, 'BEB-5885'),
(7, '2023-06-05', '2023-06-10', 'Retrovisor quebrado', 48482, 'EDB-2475'),
(8, '2023-06-25', '2023-07-02', 'Troca de óleo e revisão geral', 48502, 'CBC-4945'),
(9, '2023-07-15', '2023-07-19', 'Troca de Fluido de Freio', 48482, 'EDB-2475'),
(10, '2023-08-04', '2023-08-10', 'Problemas no cabo do acelerador', 48502, 'DEA-7981'),
(11, '2023-08-24', '2023-08-31', 'Pane elétrica', 48562, 'CBA-4403'),
(12, '2023-08-27', '2023-09-04', 'Rebimboca da parafuseta', 48522, 'BBC-8504'),
(13, '2023-08-30', '2023-09-04', 'Troca de cavalos por poneis', 48542, 'BEE-7735'),
(14, '2023-09-02', '2023-09-07', 'Lanterna queimada', 48482, 'BEB-5885');
