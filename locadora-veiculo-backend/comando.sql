CREATE DATABASE IF NOT EXISTS locadora;

USE locadora;

CREATE TABLE IF NOT EXISTS Veiculo (
   Id INT PRIMARY KEY AUTO_INCREMENT,
   Marca VARCHAR(150),
   Modelo VARCHAR(200),
   Placa VARCHAR(7),
   Ano INT,
   Combustivel VARCHAR(50), /* eletrico, etanol, gasolina, diesel, flex, hibrido */
   Categoria VARCHAR(50),
   Disponivel BIT,
   Chassi VARCHAR(100),
   Cor VARCHAR(20)
);