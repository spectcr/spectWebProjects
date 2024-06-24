//Menu bars
let menutoggle = document.getElementById('toggle-menu'); //menu animation
let menubackground = document.getElementById('menu-overlay-container'); //Background
let menuelements = document.getElementById('menu-elements');

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    menubackground.classList.toggle('active');
    menuelements.classList.toggle('active');
}