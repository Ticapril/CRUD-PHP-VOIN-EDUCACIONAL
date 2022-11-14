<?php 
    header('Content-Type: application/json');

    require_once("../database/conexao.php");
    //Exemplos de selects
    //SELECT valor_curso from alunos RIGHT JOIN cursos ON alunos.id_curso = cursos.id_curso;
    $statement = $conexao->prepare('SELECT id_curso, nome_curso from cursos;');
    $statement->execute();

    if($statement->rowCount() >= 1){
        echo json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
    }else {
        echo json_encode('Falha ao buscar os cursos cadastrados');
    }
    //

