CREATE TABLE IF NOT EXISTS clientes (

    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(20) default 'ativo',
    limite NUMERIC(10, 2)  CHECK (limite >= 0),
    criado_em TIMESTAMPTZ DEFAULT NOW()
);

--Tabela Pai
CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

--Tabela Filha
CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    autor_id INTEGER REFERENCES autores(id) ON DELETE RESTRICT 
);