function toexit() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="mirrorhall"> <img src="images/Mirror portal room back.jpg"  height="700" width="1100"> </div> <input type="button" onclick="toportal()" id="gotomirror" value="Назад к зеркалу">';
}

function toportal() {
    let screens = document.querySelector('.screens');
    screens.innerHTML = '<div id="mirrorhall"> <img src="images/Mirror portal room.jpg"  height="700" width="1100"> </div> <img src="images/Mirror portal sprite.gif" id="mirrorportal"> <input type="button" onclick="toexit()" id="goback" value="Назад">';
}