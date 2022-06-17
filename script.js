var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date
var hora = data.getHours()
var minu = data.getMinutes()
var seg = data.getSeconds()

function carregar(){
    msg.innerHTML += `<h2>Agora são ${hora}:${minu}:${seg}</h2>`
    document.body.style.background = 'pink'
}
