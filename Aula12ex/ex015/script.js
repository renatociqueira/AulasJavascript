function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        // cria um elemento e atribui o id com nome foto
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        // Altera o estilo
        img.style.borderRadius = '180px'

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'homemjovem.png')
            } else if(idade < 21) {
                // jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'homemjovem.png')
            } else {
                // idoso
                img.setAttribute('src', 'homemjovem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'mulherjovem.png')
            } else if(idade < 21) {
                // jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'mulherjovem.png')
            } else {
                // idoso
                img.setAttribute('src', 'mulherjovem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // Adiciona elemento
        res.appendChild(img)
        // res.innerHTML = `Idade calculada: ${idade}`
    }
}