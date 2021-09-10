$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:8
        }
    }
})

const boxFilme = document.querySelectorAll('div.box-filme');
let principal = document.getElementById('filme-principal');
let titulo = document.getElementById('titulo');
let descricao = document.getElementById('descricao');

for (const box of boxFilme) {
    box.addEventListener('click', apertarBotao = item => {
        principal.style.background = `linear-gradient(rgba(0,0,0,.50),rgba(175, 70, 70,.50)100%), url('img/${box.id}_fundo.jpg')`;
        principal.style.backgroundSize = 'cover';
        titulo.innerText = box.title;
        descricao.innerText = box.textContent;
        console.log(titulo);
    });
}
