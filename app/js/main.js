$(function () {
    $('.carousel_inner').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 871,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
})