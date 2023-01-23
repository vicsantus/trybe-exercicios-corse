USE sakila;
-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados. 
SELECT * FROM sakila.film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, release_year, rating FROM film;

-- Quantos filmes temos cadastrados? 
SELECT COUNT(*) FROM film;
-- 1000