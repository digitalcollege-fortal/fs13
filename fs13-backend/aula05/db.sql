USE db_escola;

CREATE TABLE tb_aluno (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

DESC tb_aluno;


INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Francisco da Silva', '1997-12-31', '12312312312');



INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Silva dos Santos', '1997-12-31', '12312312212');

INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Antonio da Silva Sales', '1997-12-30', '00112312212');

INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Francisco das Chagas', '1997-12-30', '00112312200');


INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Mario de Oliveira', '2003-02-27', '03412312312'),
    ('Josefina da Silva', '2000-01-12', '09911212312'),
    ('Jose Albert', '1998-02-21', '09910942312'),
    ('Francisgleidson da Silva', '1985-04-19', '09912312399'),
    ('Natanzinho de Oliveira', '1991-03-16', '09912310012'),
    ('Jose Bebeto', '1992-01-12', '09912301212'),
    ('Deuzuite das Dores', '1994-10-21', '09912301112')
    ;



-- Buscar todos os alunos --
SELECT * FROM tb_aluno;

-- Buscar apenas algumas colunas de todos os alunos --
SELECT nome, criado_em FROM tb_aluno;

SELECT nome FROM tb_aluno;

-- Buscar um aluno especifico --
SELECT * FROM tb_aluno WHERE id='10';

-- Buscar apenas algumas colunas de um aluno especifico --
SELECT nome, cpf FROM tb_aluno WHERE id='10';

-- Buscar apenas alunos que nasceram depois de 2000 --
SELECT * FROM tb_aluno WHERE data_nascimento >= '2000-01-01';

-- Buscar alunos que nasceram entre 1995 e 2000 --
SELECT * FROM tb_aluno
WHERE data_nascimento >= '1995-01-01'
AND data_nascimento <= '1999-12-31';

SELECT * FROM tb_aluno
WHERE data_nascimento BETWEEN '1995-01-01' AND '1999-12-31';

-- Buscar alunos que contenham uma expressao --
SELECT * FROM tb_aluno WHERE nome LIKE '%Silva%';

-- Buscar alunos que contenham uma expressao --
SELECT * FROM tb_aluno WHERE nome LIKE '%Silva%' OR nome LIKE '%Francisco%';


USE db_escola;

DROP TABLE tb_curso;

CREATE TABLE tb_curso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    carga_horaria INT(4) NOT NULL
);

INSERT INTO tb_curso (nome, carga_horaria)
VALUES ('PHP', 72);

INSERT INTO tb_curso (nome, carga_horaria)
VALUES ('Fullstack', 192);

INSERT INTO tb_curso (nome, carga_horaria)
VALUES ('Marketing', 100);


DELETE FROM tb_curso WHERE id=10;


CREATE TABLE tb_disciplina (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    carga_horaria INT NOT NULL
);


