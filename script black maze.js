function tomirrorfirst() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor dead end.jpg"  height="700" width="1100"> </div> <input type="button" onclick="tomaze()" class="go-back-button" value="Назад">';
    alert("Пути назад нет...");
}

function tomirror() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor dead end.jpg"  height="700" width="1100"> </div> <input type="button" onclick="tomaze()" class="go-back-button" value="Назад">';
}

function tomaze() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor.jpg"  height="700" width="1100"> </div> <input type="button" onclick="torazvilkaone()" class="go-forward-button" value="Вперёд"> <input type="button" onclick="tomirror()" class="go-back-button" value="Назад">';
}

function tomazetwo() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor.jpg"  height="700" width="1100"> </div> <input type="button" onclick="toturnleft()" class="go-forward-button" value="Вперёд"> <input type="button" onclick="torazvilkaone()" class="go-back-button" value="Назад">';
}

function tomazethree() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor.jpg"  height="700" width="1100"> </div> <input type="button" onclick="torazvilkatwo()" class="go-forward-button" value="Вперёд"> <input type="button" onclick="torazvilkaone()" class="go-back-button" value="Назад">';
}

function tomazefinal() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor.jpg"  height="700" width="1100"> </div> <input type="button" onclick="tonextmirror()" class="go-forward-button" value="Вперёд"> <input type="button" onclick="toturnright()" class="go-back-button" value="Назад">';
}

function torazvilkaone() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor left right.jpg"  height="700" width="1100"> </div> <input type="button" onclick="tomazetwo()" class="go-left-button" value="Налево"> <input type="button" onclick="tomazethree()" class="go-right-button" value="Направо"> <input type="button" onclick="tomaze()" class="go-back-button" value="Назад">';
}

function torazvilkatwo() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor left right.jpg"  height="700" width="1100"> </div> <input type="button" onclick="todeadendtwo()" class="go-left-button" value="Налево"> <input type="button" onclick="toright()" class="go-right-button" value="Направо"> <input type="button" onclick="tomazethree()" class="go-back-button" value="Назад">';
}

function toright() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor right.jpg"  height="700" width="1100"> </div> <input type="button" onclick="toturnright()" class="go-right-button" value="Направо"> <input type="button" onclick="torazvilkatwo()" class="go-back-button" value="Назад">';
}

function toturnleft() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor turn left.jpg"  height="700" width="1100"> </div> <input type="button" onclick="todeadendone()" id="go-turn-left-button" value="Налево"> <input type="button" onclick="tomazetwo()" class="go-back-button" value="Назад">';
}

function toturnright() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor turn right.jpg"  height="700" width="1100"> </div> <input type="button" onclick="tomazefinal()" id="go-turn-right-button" value="Направо"> <input type="button" onclick="toright()" class="go-back-button" value="Назад">';
}

function todeadendone() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor dead end.jpg"  height="700" width="1100"> </div> <input type="button" onclick="toturnleft()" class="go-back-button" value="Назад">';
}

function todeadendtwo() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor dead end.jpg"  height="700" width="1100"> </div> <input type="button" onclick="torazvilkatwo()" class="go-back-button" value="Назад">';
}

function tonextmirror() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor dead end.jpg"  height="700" width="1100"> </div> <img src="images/Mirror portal sprite.gif" id="mirror-portal"> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" id="next-level">Войти в зеркало</a> <input type="button" onclick="backtostart()" class="go-back-button" value="Назад">';
}

function backtostart() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="black-maze"> <img src="images/Black maze corridor dead end.jpg"  height="700" width="1100"> </div> <input type="button" onclick="tomaze()" class="go-back-button" value="Назад">';
    alert("Что? Где ты оказался?");
}