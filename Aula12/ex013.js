// ------------------------------------------------------------------
// Para executar o código instalar a extensão node.js Exec
// Para utilizar a extensão apenas pressionar o F8
// Exercicio de estrutura condição multipla parte 2
// ------------------------------------------------------------------ 
var agora = new Date
var diaSem = agora.getDay()

console.log(diaSem)

// var diaSem = 4

/*
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sabado = 6
 */

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERROR] - DIA DA SEMANA INVALIDO')
        break
}