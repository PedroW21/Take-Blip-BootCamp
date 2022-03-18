CREATE DATABASE DioDBCursoFinal;
USE DioDBCursoFinal;

-- Utilização padrao do JOIN
SELECT v.nome_video, v.autor_video, c.nome_canal 
FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video -- JOIN = INNER JOIN
JOIN canais AS c ON vc.fk_canal = c.id_canal;

-- Utillização do RIGHT e LEFT
SELECT v.nome_video, v.autor_video, c.nome_canal 
FROM videos_canais AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_video = v.id_video;
/***-- Estou informando no OUTER (algo que esta fora do relacionamento na query)
que ao lado direito (RIGHT) terá um valor nulo e quero que apareça. ***/

-- Agora além dos videos, solicitei os canais sem relacionamentos com video (que não tem videos mas existem)

SELECT v.id_video, v.nome_video  
FROM videos AS v LEFT OUTER JOIN videos_canais AS vc ON vc.fk_video = v.id_video
UNION
SELECT c.id_canal, c.nome_canal FROM videos_canais AS vc RIGHT JOIN canais AS c ON vc.fk_canal = c.id_canal;

-- 

SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal;

-- WHERE

SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal
WHERE canais.id_canal = 2;