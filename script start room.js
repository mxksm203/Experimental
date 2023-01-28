function toexitfirst() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="mirrorhall"> <img src="images/Mirror portal room back.jpg"  height="700" width="1100"> </div> <input type="button" onclick="toportal()" id="gotomirror" value="Назад к зеркалу">';
    alert("У двери отпала ручка, её никак не открыть. Пути назад нет, только вперёд.");
}

function toexit() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="mirrorhall"> <img src="images/Mirror portal room back.jpg"  height="700" width="1100"> </div> <input type="button" onclick="toportal()" id="gotomirror" value="Назад к зеркалу">';
}

function toportal() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="mirrorhall"> <img src="images/Mirror portal room.jpg"  height="700" width="1100"> </div> <img src="images/Mirror portal sprite.gif" id="mirrorportal"> <a href="#" id="nextlevel">Войти в зеркало</a> <input type="button" onclick="toexit()" id="goback" value="Назад">';
}
