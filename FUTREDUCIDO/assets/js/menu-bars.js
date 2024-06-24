//Menu bars
let menutoggle = document.getElementById('toggle'); //menu animation
let menubackground = document.getElementById('container-toggle-bar'); //Background
let menuelements = document.getElementById('cont-toggle-bar');

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    menubackground.classList.toggle('active');
    menuelements.classList.toggle('active');
}