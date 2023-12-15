(function($) {
    'use strict';
    window.sr = ScrollReveal();
    sr.reveal('.topo', {
        duration: 2000,
        origin: 'top',
        distance: '50px',
        viewFactor: 0.6
    }, 100);
    sr.reveal('.box-01 .box', {
        duration: 2000,
        origin: 'top',
        distance: '300px',
        viewFactor: 0.6
    }, 300);
    sr.reveal('.box-02 .texto', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2
    }, 300);
    sr.reveal('.box-03 .conteudo-total', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2
    }, 300);
    sr.reveal('.box-03 .img', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2
    }, 300);
    sr.reveal('.box-04 .conteudo .item', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        viewFactor: 0.2
    }, 500);
})();

$(document).ready(function() {
    var hash = window.location.hash;
    if (hash == '#pw_site') {
        $('.faixa-rodape').css('display', 'block');
    }
});
