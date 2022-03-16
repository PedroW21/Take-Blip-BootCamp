use takeblip;
-- DROP TABLE cursos; 

CREATE TABLE cursos(
id_cursos INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50)
);

INSERT INTO cursos(nome) VALUES ("MySql");
INSERT INTO cursos(nome) VALUES ("Java");
INSERT INTO cursos(nome) VALUES ("Go");

SELECT * FROM cursos;

UPDATE cursos SET nome="MySql - Criando um Banco de Dados" WHERE id_cursos=1;
ALTER TABLE cursos ADD carga_horaria INT(3);

UPDATE cursos SET carga_horaria= 32 WHERE id_cursos=1;
UPDATE cursos SET carga_horaria= 27 WHERE id_cursos=2;
UPDATE cursos SET carga_horaria= 12 WHERE id_cursos=3;