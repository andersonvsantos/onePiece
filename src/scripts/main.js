const buttons = document.querySelectorAll('[data-member-button]');
const classes = document.getElementsByClassName('crew__info');
const members = ['luffy', 'zoro', 'usopp', 'sanji', 'nami', 'chopper', 'robin', 'franky', 'brook', 'jinbe'];

function tocar(audio) {
    audio.play();
}

function limpar() {
    for(let i = 0; i < members.length; i++) {
        tripulante = document.getElementById(`${members[i]}-info`);
        tripulante.classList.remove('crew__info--is-active')
    }
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(botao) {
        limpar();
        const idTripulante = buttons[i].id;
        const memberId = document.getElementById(`${idTripulante}-info`);
        const memberAudio = document.getElementById(`${idTripulante}-audio`);

        memberId.classList.add('crew__info--is-active');
        tocar(memberAudio);
    });
}

$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        dots: true
    });
})