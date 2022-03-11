CREATE DATABASE takeblip;
USE takeblip;

-- DROP TABLE pessoas; / Esqueci do ID;

CREATE TABLE pessoas (

id INT NOT NULL AUTO_INCREMENT, -- NOT NULL = Nao pode ser nulo / AUTO_INCREMENT = auto incrementa o ID ao adicionar dados;
PRIMARY KEY(id),
nome VARCHAR(50) NOT NULL,
dataNascimento DATE NOT NULL

);

INSERT INTO pessoas(nome, dataNascimento) VALUES ("Pedro", "2002-07-25");
INSERT INTO pessoas(nome, dataNascimento) VALUES ("Victor", "2002-10-30");
INSERT INTO pessoas(nome, dataNascimento) VALUES ("Bla bla blu blu", "0001-01-01");

UPDATE pessoas SET nome = "Pedro Verner" WHERE id=1 ;
UPDATE pessoas SET nome = "Victor Hugo" WHERE id=2 ; -- Atualiza a tabela onde a condicao WHERE for satisfeita;

SELECT * FROM pessoas;

SELECT * FROM pessoas WHERE id=3; -- boa pratica verificar o dado que quer deletar, e apos isso deletar;
DELETE FROM pessoas WHERE id=3; -- apos eu deletar e voltar a mesma informacao, a PK nao sera igual jamais (bla bla era a PK3 agora é PK4);

SELECT * FROM pessoas ORDER BY dataNascimento; -- Ordenacao sempre crescente (ASC), quiser decrescente inserir DESC

ALTER TABLE pessoas ADD genero VARCHAR(1) NOT NULL AFTER dataNascimento; -- alteracao de tabela;

UPDATE pessoas SET genero = "M" WHERE id=1;
UPDATE pessoas SET genero = "M" WHERE id=2;
UPDATE pessoas SET genero = "F" WHERE id=4;

SELECT * FROM pessoas;

SELECT COUNT(id), genero FROM pessoas GROUP BY genero; -- COUNT contou quantos elementos tem a propriedade escolhida baseado na separação que o GROUP BY fez