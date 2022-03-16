USE youtube;

SHOW tables;
DESC playlist;

SELECT * FROM playlist;

-- solicitei todos os dados da tabela videos e juntei com autor, sendo a FK de videos igual a id_autor da tabela autor;
SELECT * FROM videos JOIN autor ON videos.FK_autor = autor.id_autor; -- consulta generalizada (aparece tudo);

-- Aqui solicitei somente a coluna titulo dos videos e quem o fez;
SELECT videos.titulo, autor.nome FROM videos JOIN autor ON videos.FK_autor = autor.id_autor; 

-- solicitei a junção das tabelas videos e seo e defini que a FK_SEO é o id_seo da tabela SEO (e pedi que mostrasse tudo);
SELECT * FROM videos JOIN SEO ON videos.FK_SEO = SEO.id_seo; 

-- Aqui restringi a solicitação para mostrar somente o titulo do video e sua categoria;
SELECT videos.titulo, SEO.categorias FROM videos JOIN SEO ON videos.FK_SEO = SEO.id_seo;

-- Estou adicionando a tabela autor na relação, e dizendo que o respectivo video foi feito por tal autor e tem tal tag de SEO (será mostrado isso);
SELECT videos.titulo, autor.nome, SEO.categorias FROM videos JOIN SEO ON videos.FK_SEO = SEO.id_seo 
JOIN autor ON videos.FK_autor = autor.id_autor;

/* Puxando todas as informações da tabela playlist e video_playlists, e dizendo que o id da tabela playlist é a FK de video_playlist 
(o id da FK(videos_play...) agora recebe o id_playlists (e portanto recebe o nome dela) | Mostra todas as informaçoes */
SELECT * FROM playlist JOIN videos_playlists JOIN videos ON videos.id_video = videos_playlists.FK_videos
ON playlist.id_playlists = videos_playlists.FK_playlist;

-- Mostra o video relacionado a sua respectiva playlist;
SELECT playlist.nome_playlist, videos.titulo FROM playlist JOIN videos_playlists JOIN videos ON videos.id_video = videos_playlists.FK_videos
ON playlist.id_playlists = videos_playlists.FK_playlist;

-- Mostra o video relacionado com sua respectiva tabela e autor que o criou;
SELECT playlist.nome_playlist, videos.titulo, autor.nome FROM playlist JOIN videos_playlists JOIN videos ON videos.id_video = videos_playlists.FK_videos
ON playlist.id_playlists = videos_playlists.FK_playlist
JOIN autor ON videos.FK_autor = autor.id_autor;