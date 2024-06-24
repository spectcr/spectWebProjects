//Menu bars
let menubars = document.getElementById('toggle'); //The bars that displays the menu
let menubackground = document.getElementById('menu-bars-background'); //Background
let menuelements = document.getElementById('menu-elements'); //The elements inside the menu (hrefs)

menubars.onclick = function(){ //Once clicked the menu bars

    menubars.classList.toggle('active'); //The menu bars changes their position
    menubackground.classList.toggle('active'); //Shows a dark background
    menuelements.classList.toggle('active'); //Display the menu elements

}