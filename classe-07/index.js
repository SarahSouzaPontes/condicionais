const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//Pessoas portadores de alguma doença grave
//Pessoas que já estão aposentadas
//Caso a pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. Caso esses total de rendimentos seja superior a R$ 28.559,70, a pessoa deve pagar imposto de renda, caso contrário, não.

//Faça um programa que determine se a pessoa deve pagar IR ou não.

//* Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela **ISENTA** 
//* Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela **VAZA LEAO! JA TA DIFICIL SEM VOCE** 
//* Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO**


if (aposentada == true){ 
    console.log("ISENTA");
} else if(portadoraDeDoenca == true){
    console.log("ISENTA");
} else if (totalDeRendimentos <= 28.559,70){
    console.log("VAZA LEÃO");
} else {
    console.log("PEGA LEÃO");
}