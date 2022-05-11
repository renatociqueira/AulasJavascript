
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    // atualizando pagina
    // setTimeout(function(){
    //     window.location.reload();
    //  }, 10000);
    
    // var hora = 12
    msg.innerHTML = `Agora são ${hora}h e ${minuto} minutos`
    if( hora >= 0 && hora < 12){
        // bomdia
        img.src = 'manha.png'
        document.body.style.background = '#AD5607'
    } else if (hora >= 12 && hora <= 18){
        // boatarde
        img.src = 'tarde.png'
        document.body.style.background = '#564D48'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#032145'
        // boanoite
    }
}