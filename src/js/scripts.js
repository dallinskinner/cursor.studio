/** JQUERY R.I.P. */
    
initClickMemory();
initLogoColors();
initMailLink();

function initLogoColors() {
    var logo = document.querySelector('#cursor');

    setInterval(function(){
        logo.style.color = getRandomColor();
    }, 1000);
}

function initClickMemory() {
    var greatestHits = document.querySelector('#greatest-hits');

    greatestHits.addEventListener('click', function(e){
        if (e.target !== e.currentTarget) {
            e.target.classList.add('visited');
        }
    });
}

function initMailLink() {
    var mailLink = document.querySelector('#mail-link');

    mailLink.addEventListener('mouseenter', function(){
        mailLink.style.color = getRandomColor();
    });

    mailLink.addEventListener('mouseleave', function(){
        mailLink.style.color = '#000000';
    });
}

function getRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

