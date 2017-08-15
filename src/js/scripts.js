/** JQUERY R.I.P. */
    
initClickMemory();
initLogoColors();
initMailLink();
// initCursorAnimation();

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

function initCursorAnimation() {
    var cursorLetters = new RandomArray(document.querySelectorAll('.cursor-letter'));
    var cursorImgs = new RandomArray(['pointer', 'clock', 'default', 'text', 'nope']);

    setInterval(function(){
        var letter = cursorLetters.getRandom();

        var img = cursorImgs.getRandom();

        letter.innerHTML= '<img src="img/cursors/'+img+'.svg">';
    }, 1000);
}

function RandomArray(array) {
    this.array = array;

    this.getRandom = function(){
        return this.array[Math.floor(Math.random()*this.array.length)];
    }
}