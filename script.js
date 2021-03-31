// - 400 gr por pessoa   + de 6 horas - 650 gr
// cerveja 1200 ml por Pessoas   + 6 horas - 2000 ml
//Refrigerante/agua - 1000 ml por pessoas  + 6 horas 1500mll
// crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")



function carnePP(duracao){
    if (duracao>=6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if (duracao>=6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao>=6){
        return 1500;
    }else{
        return 1000;
    }
}
function calcular(){

    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtTotalCarne = carnePP(duracao)*adultos+(carnePP(duracao)/2*criancas);
        
    let qtTotalCerveja = cervejaPP(duracao)*adultos;

    let qtTotalBebidas = bebidasPP(duracao)*adultos+(bebidasPP(duracao)/2*criancas);
    
    resultado.innerHTML=`<p>${qtTotalCarne/1000}kg de Carne</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qtTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML+=`<p>${Math.ceil(qtTotalBebidas/2000)} Garrafas de Regrigerante </p>`
    resultado.innerHTML+=`<p>${Math.ceil(qtTotalBebidas/4000)} Garrafas de Água </p>`
}