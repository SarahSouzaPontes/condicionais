const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;
//* Menores de 12 anos//* Maiores de 65 anos //* Que possuam qualquer patologia cardíaca
//* Menores de 150cm de altura //Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:
//* 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada) //* 20 reias, caso contrário
//Se papel é imprimir na tela: //* **ACESSO NEGADO** caso a pessoa não possa brincar //* **10 reais** caso esse seja o valor que a pessoa deve pagar para brincar//* **20 reais** caso esse seja o valor que a pessoa deve pagar para brincar

if (idade < 18){ 
    console.log("Não pode brincar");
} else if(possuiPatologia == true){
    console.log("Não pode brincar");
} else if (altura < 150){
    console.log("Não pode brincar");
} else if (ehEstudante == false){
    console.log("Pode brincar na Montanha Russa pagando 20 reais");
} else {
    console.log("Pode brincar na Montanha Russa pagando 10 reais");
}