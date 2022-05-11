var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${min} minutos`)
console.log(`data ${d}`)

if (hora >= 6 && hora < 12){
    console.log(`Bom dia`)
} else if (hora > 12 && hora <= 18){
    console.log(`Boa tarde`)
} else if (hora > 18 || hora <= 00){
    console.log(`Boa noite`)
} else {
    console.log(`Boa madruga`)
}