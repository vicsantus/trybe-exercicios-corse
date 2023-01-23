--  Para os exercícios a seguir, vamos usar a tabela sakila.actor:
USE sakila;
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
-- Quantos sobrenomes únicos temos na tabela?
-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

SELECT DISTINCT last_name FROM actor;
-- 121
SELECT * FROM actor ORDER BY last_name ASC, first_name DESC;