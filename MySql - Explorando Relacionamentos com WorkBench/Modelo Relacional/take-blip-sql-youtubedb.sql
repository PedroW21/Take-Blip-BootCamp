CREATE DATABASE youtube;

USE youtube;

CREATE TABLE autor (
id_autor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20),
data_nasc DATE
);

/*** Alterações na tabela Autor ***/

INSERT INTO autor(nome, data_nasc) VALUES ("Pierre", "2002-07-25");
INSERT INTO autor(nome, data_nasc) VALUES ("Hugo", "2002-10-30");
INSERT INTO autor(nome, data_nasc) VALUES ("Anne", "2002-12-23");
INSERT INTO autor(nome, data_nasc) VALUES ("Edmar", "1963-01-23");

/*** FIM DAS ALTERAÇÕES ***/

CREATE TABLE videos(
id_video INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

FK_autor INT NOT NULL NULL,
FOREIGN KEY(FK_autor) REFERENCES autor(id_autor),
titulo VARCHAR(50) NOT NULL,
likes INT NOT NULL,
deslikes INT NOT NULL);

/***Alterações na tabela videos ***/
INSERT INTO videos (FK_autor, titulo, likes, deslikes) VALUES (1, "O começo de uma jornada - EP01", 21785, 2378);
INSERT INTO videos (FK_autor, titulo, likes, deslikes) VALUES (2, "SpeedRacer - Destrinchando sua história", 12659, 213);
INSERT INTO videos (FK_autor, titulo, likes, deslikes) VALUES (3, "A filosofia libertária", 154698, 3977);

ALTER TABLE videos ADD FK_SEO INT NOT NULL AFTER titulo; -- adicionado depois na tabela
ALTER TABLE videos ADD FOREIGN KEY(FK_SEO) REFERENCES SEO(id_seo); -- definindo FK_SEO como uma FOREIGN KEY

UPDATE videos SET FK_SEO=1 WHERE id_video=1;
UPDATE videos SET FK_SEO=1 WHERE id_video=2;
UPDATE videos SET FK_SEO=2 WHERE id_video=3;

/*** FIM DAS ALTERAÇÕES ***/
CREATE TABLE playlist (
id_playlists INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome_playlist VARCHAR(50) NOT NULL
);

INSERT INTO playlist(nome_playlist) VALUES ("Análises de Filmes");
INSERT INTO playlist(nome_playlist) VALUES ("Ucrania - Victoria 2");
INSERT INTO playlist(nome_playlist) VALUES ("Filosofando");

/*** Criando uma tabela intermédiaria com relação de muitos para muitos (varios videos podem fazer parte de varias playlists***/

CREATE TABLE videos_playlists (
id_vidplaylist INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

FK_videos INT,
FOREIGN KEY (FK_videos) REFERENCES videos(id_video),

FK_playlist INT,
FOREIGN KEY (FK_playlist) REFERENCES playlist(id_playlists)
);

/*** Alterações na video_playlists ***/

INSERT INTO videos_playlists(FK_videos, FK_playlist) VALUES (2,1);
INSERT INTO videos_playlists(FK_videos, FK_playlist) VALUES (1,2);
INSERT INTO videos_playlists(FK_videos, FK_playlist) VALUES (3,3);

/*** FIM DAS ALTERAÇÕES ***/

create table SEO (
id_seo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
categorias VARCHAR(12) NOT NULL
);

INSERT INTO SEO(categorias) VALUES ("Cinema");
INSERT INTO SEO(categorias) VALUES ("Filosofia");
