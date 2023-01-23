--  Usando a tabela language:

-- Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;