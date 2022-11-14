<?php 
   try {
       $conexao = new PDO('mysql:host=localhost;dbname=escola', 'root', '');
   } catch (PDOException $exception) {
      echo 'Erro ao se conectar com o banco de dados!'.$exception;
   }
   
?>
