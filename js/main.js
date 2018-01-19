var block = document.getElementById('test');
var head = document.getElementById('head');

perem(head, 0);

$( "#test" ).resizable();

$("#test").hide();

var timerFIG = 1; // Время в секундах, через которое появляется кнопка
var timer = setInterval("startTimer()",1000);
function startTimer() {
    if (timerFIG !== 1) {
        timerFIG--;
    } else {
        clearInterval(timer);
        $("#test").fadeIn("slow");
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'img/track.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
    }
}

$('.chat').slimScroll({
    height: '280px'
});

//var elem = document.getElementById('test');
function perem(a, b) {

    var ie = 0;
    var op = 0;
    var ff = 0;
    var browser = navigator.userAgent;
    if (browser.indexOf("Opera") != -1) op = 1;
    else {
        if (browser.indexOf("MSIE") != -1) ie = 1;
        else {
            if (browser.indexOf("Firefox") != -1) ff = 1;
        }
    }

    delta_x = 0;
    //delta_y = 0;
    /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
    a.onmousedown = saveXY;
    if (op || ff) {
        a.addEventListener("onmousedown", saveXY, false);
    }
    document.onmouseup = clearXY;
    /* При нажатии кнопки мыши попадаем в эту функцию */
    function saveXY(obj_event) {
        /* Получаем текущие координаты курсора */
        if (obj_event) {
            x = obj_event.pageX;
            //y = obj_event.pageY;
        }
        else {
            x = window.event.clientX;
            //y = window.event.clientY;
            if (ie) {
                //y -= 2;
                x -= 2;
            }
        }
        /* Узнаём текущие координаты блока */
        x_block = block.offsetLeft;
        //y_block = block.offsetTop;
        /* Узнаём смещение */
        delta_x = x_block - x;
        //delta_y = y_block - y;
        /* При движении курсора устанавливаем вызов функции moveWindow */
        document.onmousemove = moveBlock;
        if (op || ff)
            document.addEventListener("onmousemove", moveBlock, false);
    }

    function clearXY() {
        document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
    }

    function moveBlock(obj_event) {
        /* Получаем новые координаты курсора мыши */
        if (obj_event) {
            x = obj_event.pageX;
            //y = obj_event.pageY;
        }
        else {
            x = window.event.clientX;
            //y = window.event.clientY;
            if (ie) {
                //y -= 2;
                x -= 2;
            }
        }
        /* Вычисляем новые координаты блока */
        new_x = delta_x + x;
        //new_y = delta_y + y;
        //block.style.top = new_y + "px";
        //console.log($(document).width() - $(block).width());
        //if ((new_x < ($(document).width() - $(a).width() + 1)) && (new_x >= 0)) {

                block.style.left = new_x + "px";
        //}
    }
}



$( "#test" ).keydown(function( event ){ // задаем функцию при нажатиии любой клавиши клавиатуры на элементе
    //console.log( event.which ); // выводим код нажатой клавиши
    if (event.which == 13){
            m();
        }
});

$(".btn").click(function () {
    m();
});

function m(){
    var i = $(".mes").val();
    if( i === ""){
        alert('Вы ничего не ввели!')
    }
    else {
        var s = new Date();
        if (s.getHours() < 10){
            var g = "0" + s.getHours();
        } else {
            var g = s.getHours();
        }
        g += ":";
        if (s.getMinutes() < 10) {
            g += "0" + s.getMinutes();
        }
        else {
            g += s.getMinutes();
        }
        $(".messeg:first").before('<div class="messeg"><p class="m">' + i + '</p><p class="r">' + g + '</p></div>');
        $("input[type=text]").val("");
        //$(".chat").scrollTop(9999);

    }
}