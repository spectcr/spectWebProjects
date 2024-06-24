window.onload = function(){
    var container = document.getElementById('loader-container');
    var wholeDoc = document.querySelector('html');
    wholeDoc.style.overflowY = 'hidden';


    setTimeout(function() {

        wholeDoc.style.overflowY = 'visible';
        container.style.width = '0%';

    }, 900);

    setTimeout(function() {

        container.style.opacity = '0';

    }, 850);

    setTimeout(function() {

        container.style.visibility = 'hidden';
        container.style.display = 'none';

    }, 1700);

}