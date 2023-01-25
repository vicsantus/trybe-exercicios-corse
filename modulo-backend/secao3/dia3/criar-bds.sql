-- Cria um banco de dados com o nome especificado.
CREATE DATABASE nome_do_banco_de_dados;

-- `CREATE DATABASE` ou `CREATE SCHEMA` fazem a mesma coisa.
CREATE SCHEMA nome_do_banco_de_dados;

-- Cria tabela porem precisa expecificar em qual db. (USE db;)
CREATE TABLE cidade (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,-- cria primery
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER
    -- Também se pode criar duas primarys assim: CONSTRAINT PRIMARY KEY(cidade, estado)
);

-- Insere os dados na tabela
INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
('Rio Claro','RJ',17216);

-- E por fim, a tabela film_actor com a relação N:N

CREATE TABLE film_actor (
    actor_id INTEGER,
    film_id INTEGER,
    CONSTRAINT PRIMARY KEY (actor_id , film_id),
    FOREIGN KEY (actor_id)
        REFERENCES actor (actor_id),
    FOREIGN KEY (film_id)
        REFERENCES film (film_id)
);

-- Verifica se o banco de dados ainda não existe.
-- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
CREATE SCHEMA
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;

-- Apaga tabela caso ela exista.
DROP SCHEMA IF EXISTS nome_tabela;