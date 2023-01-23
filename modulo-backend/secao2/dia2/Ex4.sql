-- Usando a tabela film:

-- Selecione todos os dados da tabela. Pronto, fez isso?
-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, 
-- a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

USE sakila;
SELECT title, release_year, length, rating, replacement_cost FROM film ORDER BY length DESC, replacement_cost LIMIT 20;