-- Listar os bancos de dados --
SHOW DATABASES;

-- Criar o banco de dados --
CREATE DATABASE db_escola;

-- Excluir um banco de dados --
DROP DATABASE db_escola;

-- Selecionar/Entrar no banco --
USE db_escola;

-- Listar as tabelas no banco --
SHOW TABLES;

-- Criar uma tabela --
CREATE TABLE tb_curso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT(4)
);

-- Visualizar a estrutura de uma tabela --
DESC tb_curso;

-- Excluir uma tabela --
DROP TABLE tb_curso;

-- Alterar uma tabela --
ALTER TABLE tb_curso
    ADD COLUMN
        descricao VARCHAR(100);

-------------------
-- USO DOS DADOS --
-------------------


-- Buscar todas as colunas de todos os registros de uma tabela --
SELECT * FROM tb_curso;

-- Inserir dados em uma tabela --
INSERT INTO tb_curso
    (nome, carga_horaria)
VALUES
    ('Fullstack', '192');

INSERT INTO tb_curso
    (nome, carga_horaria)
VALUES
    ('PHP', '80');

-- Editar os dados de uma tabela --
