$(document).ready(() => {
    $(window).scroll(function(){
        if(window.innerWidth >= 992){
            if($(window).scrollTop() >= 50){
                //jika discroll ke bawah
                $('.navbar').css('background-color', 'white');
                $('.nav-color').css('color', 'black');
                $('.navbar').fadeIn();
            }else{
                $('.navbar').css('background-color', 'transparent');
                $('.nav-color').css('color', 'white');
            }
        }
    });
})