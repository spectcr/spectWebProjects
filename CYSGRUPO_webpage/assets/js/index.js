

//Abrir el menu
let menutoggle = document.getElementById('toggle');
let menubackground = document.getElementById('container_toggle_bar');
let menucontainer = document.getElementById('cont_toggle_bar');
function abrir_menu(){
    menutoggle.classList.toggle('active');
    menubackground.classList.toggle('active');
    menucontainer.classList.toggle('active');
}
menutoggle.addEventListener("click" , abrir_menu);

//Cerrar el menu al oprimir una opcion
let nav_bar = document.getElementById('nav_bar');
function cerrar_menu(){
    menutoggle.classList.toggle('active');
    menubackground.classList.toggle('active');
    menucontainer.classList.toggle('active');
}
nav_bar.addEventListener("click" , cerrar_menu);

//El resize
start();
    window.onresize = start;
    function start(){

        var Width = 0;
        Width = document.documentElement.clientWidth;
        var Twitter = document.getElementById('Twitter'), Facebook = document.getElementById('Facebook'), Email = document.getElementById('Email');
        switch (true) {
            //Para los logos de redes sociales
            case Width < 900:
                Twitter.style.background = 'url(./assets/images/Twitter50.png)no-repeat';
                Twitter.style.width = "68px";
                Twitter.style.height = "56px";

                Facebook.style.background = 'url(./assets/images/Facebook50.png)no-repeat';
                Facebook.style.width = "68px";
                Facebook.style.height = "56px";

                Email.style.background = 'url(./assets/images/Email50.png)no-repeat';
                Email.style.width = "68px";
                Email.style.height = "56px";
            break

            default:
                Twitter.style.background = 'url(./assets/images/Twitter.png)no-repeat';
                Twitter.style.width = "136px";
                Twitter.style.height = "112px";

                Facebook.style.background = 'url(./assets/images/Facebook.png)no-repeat';
                Facebook.style.width = "136px";
                Facebook.style.height = "112px";

                Email.style.background = 'url(./assets/images/Email.png)no-repeat';
                Email.style.width = "136px";
                Email.style.height = "112px";
            break
        }
    }