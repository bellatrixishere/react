-- 1. Inicia a transação (Abre o BEGIN)
BEGIN;

-- 2. Apaga todos os registros da tabela de álbuns
DELETE FROM albuns;

-- 3. Comprova o "caos" (A tabela deve aparecer vazia neste SELECT)
SELECT * FROM albuns;

-- 4. Executa o ROLLBACK para desfazer a deleção
ROLLBACK;

-- 5. Verifica que os dados foram restaurados
SELECT * FROM albuns;


--------------------------------------------------

-- 1. Inicia a transação
BEGIN;

-- 2. Transfere todas as faixas do Álbum A (ID: 1) para o Álbum B (ID: 2)
UPDATE faixas
SET album_id = 2
WHERE album_id = 1;

-- 3. Confirma e salva a alteração permanentemente
COMMIT;

--------------------------------------------------

-- 1. Inicia a transação
BEGIN;

-- 2. Este INSERT é válido (supondo que o ArtistId 1 exista)
INSERT INTO albuns (titulo, artist_id) 
VALUES ('Álbum de Sucesso', 1);

-- 3. Este INSERT causará o ERRO (ArtistId 99999 não existe)
-- O Postgres lançará: "insert or update on table 'albuns' violates foreign key constraint"
INSERT INTO albuns (titulo, artist_id) 
VALUES ('Álbum Fantasma', 99999);

-- 4. Tente verificar os dados (O Postgres vai recusar e dizer: "current transaction is aborted")
SELECT * FROM albuns;

-- 5. A única saída é o ROLLBACK. 
-- O primeiro INSERT (o correto) também será descartado.
ROLLBACK;
