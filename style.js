//page topボタン----------------------------------

$(function(){
var topBtn=$('#pageTop');
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});

});

//hunberger----------------------------------------------
$(function(){
      $(document).ready(function(){
        $("#sp_navi_btn").click(function () { 
          $(this).next().slideToggle();
        });
      });
});

//img.change----------------------------------------

$(document).ready(function(){
    $("#cover_area").owlCarousel(
        {
            loop: true,
            items: 1,
            autoplay: true,
            paginationNumbers: true, 
        }
    );
});

$(function () {
   $('.ef').textillate({
       in: { effect: 'flip' ,delay: 70,} ,
   });
});

//------------------------------------------pagetop-----
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});