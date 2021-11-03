const socket = io()

let mensaje = document.getElementById('mensaje');
let username = document.getElementById('user');
let btn = document.getElementById('enviar');
let output = document.getElementById('salida');
let actions = document.getElementById('actions');
let sala = document.getElementById('sala');

btn.addEventListener('click', function () {
    console.log('eventListener');
    console.log(username.value, mensaje.value);
    socket.emit('mensaje', {UserName: username.value, mensaje: mensaje.value, sala: sala.value});
});

mensaje.addEventListener('keypress', () => {
    socket.emit('typing', username.value);
})

socket.on('mensaje', (data) => {
    console.log(data);
    actions.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.username + '</strong>: ' + data.mensaje + '</p>'
});

socket.on('typing', (data) => {
    console.log(data);
    actions.innerHTML += '<p><em>' + data.username + ' está escribiendo</em></p>'
});