// ------------------------------------------------------------------
// Para executar o código instalar a extensão node.js Exec
// Para utilizar a extensão apenas pressionar o F8
// Exercicio de estrutura condicional aninhada parte 2
// ------------------------------------------------------------------ 

var idade = 26

if ( idade < 18){
    console.log(`Menor de idade`)
} else {
    console.log(`Maior de idade`)
}

// ------------------------------------------------------------------

if ( idade < 16){
    console.log(`Não Vota`)
} else {
    if( idade >= 16 && idade < 18){
        console.log(`Voto opcional`)
    } else {
        console.log(`------------------`)
        console.log(`Voto Obrigatorio`)
    }
}

// ------------------------------------------------------------------

if ( idade < 16){
    console.log(`Não Vota2`)
} else if( idade < 18 || idade > 65){
        console.log(`Voto opcional2`)
} else {
        console.log(`------------------`)
        console.log(`Voto Obrigatorio2`)
}
