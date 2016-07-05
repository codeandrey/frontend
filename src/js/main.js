$(document).ready(function(){
	//Асинхронная загрузка CSS 
$("head").append("<link rel='stylesheet' type='text/css' href='css/style.min.css'/>");
//анимируем переход по якорю
  $("#menu, #footer_nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
  });

});