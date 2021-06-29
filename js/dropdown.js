var menu = document.getElementById('hamburger-menu');
var dropdown = document.getElementById('dropdown');

function open(){
    console.log('open');
    document.getElementById('hamburger-menu').className = ('hidden');
    dropdown.className = 'shown';

};

function init(){
    menu.addEventListener('click', open);
};

window.onload = init;
