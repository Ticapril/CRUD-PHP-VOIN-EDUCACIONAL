<?php
   header('Content-Type: application/json');
   require_once ('../database/conexao.php');
   //armazenando as variaveis que vieram do javascript
   $nome = $_POST['nome'];
   $cpf = $_POST['cpf'];
   $curso = $_POST['curso'];

   //Verificar se o cpf já foi cadastrado!
   $stmt = $conexao->prepare('SELECT cpf_aluno from alunos');
   $stmt->execute();
   $resultadoQuery = $stmt->fetchAll();
   foreach ($variable as $key => $value) {
      # code...
   }
   


   //preparing
   $statement = $conexao->prepare('INSERT INTO alunos (nome_aluno, cpf_aluno, id_curso) VALUES (:nome, :cpf, :curso)');
   //binding
   $statement->bindValue(':nome', $nome);
   $statement->bindValue(':cpf', $cpf);
   $statement->bindValue(':curso', $curso);
   //execute
   $statement->execute();
   //PDOStatement::rowCount() returns the number of rows affected by the last DELETE, INSERT, or UPDATE statement executed by the corresponding PDOStatement object.
   if($statement->rowCount() >= 1) echo json_encode('aluno salvo com sucesso!');
   else echo json_encode('Error!');
   

   
