<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Básico PHP</title>
</head>
<body>
    <form id="form1">
        <label>Nome Estudante</label>
        <input type="text" id="nome"/>
        <label>CPF Estudante</label>
        <input type="text" id="cpf"/>
        <label>Código do Curso</label>
        <!-- <input type="text" id="codigo_curso"/> -->
        <select id="lista_cursos">
                
        </select>
        <input form="form1" type="submit" value="Enviar"/>
    </form>
        <table class="box_alunos" border="1px">
        <tr>
            <td>Nome Aluno</td>
            <td>Nome Curso</td>
            <td>Valor Curso</td>
        </tr>
        </table>
    </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
