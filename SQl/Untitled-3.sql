CREATE TABLE artistas_caju (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    pais_origem VARCHAR(50) NOT NULL
)

CREATE TABLE albuns_caju (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    data_lancamento DATE,
    artista_id INT NOT NULL,
    ano INT NOT NULL,

    CONSTRAINT chk_ano CHECK (ano > 1850),
    FOREIGN KEY (artista_id) REFERENCES artistas_caju(id) ON DELETE RESTRICT

);


CREATE TABLE faixas_caju (
    id SERIAL PRIMARY KEY,
    nome varchar(100) NOT NULL,
    duracao_segundos INT NOT NULL,
    album_id INT NOT NULL,
  
    CONSTRAINT chk_DURACAO CHECK (duracao_segundos > 0),
    FOREIGN KEY (album_id) REFERENCES albuns_caju(id) ON DELETE restrict
);

    insert into artistas_caju (id, nome)
    values (1, 'Caju'), 
           (2, 'Maria'), 
           (3, 'João');

           insert into albuns_caju (titulo, artista_id, ano)
           values ('Album 1', 1, 2020),
                  ('Album 2', 2, 2019),
                  ('Album 3', 3, 2021);

                    insert into faixas_caju (nome, duracao_segundos, album_id)
                    values ('Faixa 1', 240, 1),
                           ('Faixa 2', 180, 1),
                           ('Faixa 3', 210, 2),
                           ('Faixa 4', 200, 3); 