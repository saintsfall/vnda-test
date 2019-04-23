$(document).ready(function() {
    $('.slick').slick({
        dots: true,
        autoplay:true,
        autoplaySpeed: 2000,
        speed: 400,
        infinite: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                }
            }
        ]
    })
});