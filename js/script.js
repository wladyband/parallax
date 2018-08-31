$(document).ready(function() {
    


    $("nav").mouseover(function(){
        $(".nav-itens").addClass("nav-show");          
    });
    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");        
    });



    var page = $('html, body');
    $('a.tooltip').click(function() {
    page.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
    });

    $(document).scroll(function(){
        var topWindow = $(window).scrollTop();
        if(topWindow > 60) {
           $("header").addClass('header_fixed');
        }else {
           $("header").removeClass('header_fixed');
        };
    });
});