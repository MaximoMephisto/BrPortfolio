var btnAbrirPopup = document.getElementById('btnAbrirPopup'),
    contactPopup = document.getElementById('contactPopup'),
    btnCerrarPopup = document.getElementById('cerrarPopup')
;

btnAbrirPopup.addEventListener('click', function(){
    contactPopup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    contactPopup.classList.remove('active');
});