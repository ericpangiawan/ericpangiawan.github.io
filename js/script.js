$(document).ready(() => {
    $(window).scroll(function(){
        if($(window).width() >= 992){
            if($(window).scrollTop() >= 50){
                //jika discroll ke bawah
                $('.navbar').css({
                    'background-color': 'white',
                    'transition': 'ease 500ms'
                });
                $('.nav-color').css('color', 'black');
                $('.nav-link').toggleClass('changed', true);
            }else{
                $('.navbar').css('background-color', 'transparent');
                $('.nav-color').css('color', 'white');
                $('.nav-link').toggleClass('changed', false);
            }
        }
    });
    if($(window).scrollTop() >= 50){
        $('.navbar').css('background-color', 'white');
        $('.nav-color').css('color', 'black');
        $('.nav-link').toggleClass('changed', true);
    }
    $(window).resize(function(){
        if($(window).width() < 992){
            $('.navbar').css('background-color', 'white');
            $('.nav-color').css('color', 'black');
        }
    });
})