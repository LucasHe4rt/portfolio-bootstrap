$(document).ready(function () {

    $("#slider").slick({
        responsive: [
            {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows: false,
                }
            }
        ],
        centerPadding: '100px',
    });

})
