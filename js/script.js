$('#form1').submit(function(event){
    //evitar o carregamento padrão
    event.preventDefault();

    // pegar as informações do frontend
    var nome = $('#nome').val();
    var cpf  = $('#cpf').val();
    var selectElem = document.getElementById('lista_cursos');
    var element = selectElem.selectedIndex;
    var curso  = $('#curso-' + element).val();
  
    //testando se funcionou
    console.log(element);

    //verificando se o cpf existe
    $.ajax({
        url: 'http://localhost/teste_gabriel/alunos/buscar_alunos.php', //quem vai processar essa requisição
        method: 'GET', // o tipo de requisição enviando dados é POST
        dataType: 'json' // o tipo de dado
    }).done(function(result){
        // console.log(result);
        var cpfConcat;
        var cpfConcatNew;
        var count = 0;
        //tratar a string que vem do formulario
        cpfWithoutDot= cpf.split("."); // 177382937-54
        cpfConcat = cpfWithoutDot[0] + cpfWithoutDot[1] + cpfWithoutDot[2];
        cpfConcatNew = cpfConcat.split('-');
        cpfTratado = cpfConcatNew[0] + cpfConcatNew[1];

        result.forEach(aluno => {
            var alunoWithoutDot, alunoConcat, alunoConcatNew, alunoTratado;
            console.log(aluno);
            alunoWithoutDot = aluno.cpf_aluno.split(".");
            alunoConcat = alunoWithoutDot[0] + alunoWithoutDot[1] + alunoWithoutDot[2];
            alunoConcatNew = alunoConcat.split('-');
            alunoTratado = alunoConcatNew[0] + alunoConcatNew[1];
            console.log(alunoTratado + "===" + cpfTratado);
            if (alunoTratado === cpfTratado) {
             count++;
            }
        });

        if(count > 0){
            alert("Digite Novamente Cpf Ja registrado!");
        }else {
            $.ajax({
                url: 'http://localhost/teste_gabriel/alunos/inserir_alunos.php', //quem vai processar essa requisição
                method: 'POST', // o tipo de requisição enviando dados é POST
                data: {nome: nome, cpf: cpf, curso: curso}, //os dados em formato de objeto
                dataType: 'json' // o tipo de dado
            }).done(function(result){
                console.log(result);
            });
        }
    });
});

function getCursos(){
    $.ajax({
        url: 'http://localhost/teste_gabriel/cursos/buscar_cursos.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        //adiociono a referencia do select em uma variavel
        mySelect = document.getElementById('lista_cursos');
        //crio o elemento e armazeno em uma variavel dinamicamente
        for (let index = 0; index < result.length; index++) {
            option = document.createElement("option");
            // option.setAttribute("id", `curso-${result[index].id_curso}`);
            // option.setAttribute("id", `curso-${result[index].id_curso}`);
            option.setAttribute("id", `curso-${result[index].id_curso - 1}`);
            // option.classList.add(`curso-${result[index].id_curso}`);
            // option.appendChild(document.createTextNode(`Codigo Curso - ${result[index].id_curso} - ${result[index].nome_curso}`));
            option.appendChild(document.createTextNode(result[index].id_curso));
            mySelect.appendChild(option);
        }
        option = document.querySelector("option");
    });
}
getCursos();

function getAlunos(){
    $.ajax({
        url: 'http://localhost/teste_gabriel/alunos/buscar_alunos.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        console.log(result);
        for (let index = 0; index < result.length; index++) {
            if(result[index].nome_aluno !== null){
                $('.box_alunos').append(`<tr>
                                            <td>${result[index].nome_aluno}</td>
                                            <td>${result[index].nome_curso}</td>
                                            <td>${result[index].valor_curso}</td>
                                        </tr>
                                        `)
            }else {
                console.log('Não existe alunos registrados no curso --> ' + result[index].nome_curso);
            }
           
        }
    });
}
getAlunos();

// function getMoney(juros, inicial, anos){
    
//      totalAno = 0;
//     for (let index = 1; index <= anos; index++) {
//         totalAno += inicial;
//         totalAno += (inicial * index) * (juros/100); //1200 = 13200
//     }
//     return totalAno;
// }
// totalValor = getMoney(10, 36000,10);
// console.log(totalValor);


// function getMoneySolo(inicial, anos, juros){
//     totalAno = inicial;
//     for (let index = 1; index <= anos; index++) {
//         totalAno += inicial * (juros/100); //1200 = 13200
//     }
//     return totalAno;
// }
// totalValorSemInjetar = getMoneySolo(1116000
//     , 10, 10);
// console.log(totalValorSemInjetar);
// em 5 anos colocando 1000 reais todo mes 