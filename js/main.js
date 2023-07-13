$(function(){
    $('.doctors__boxes').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        waitForAnimate: false,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 1
            }
        }
        ]
    })
    $('.reviews__slider-prev').on('click', function(e) {
        e.preventDefault()
        $('.doctors__boxes').slick('slickPrev')
    })
    $('.reviews__slider-next').on('click', function(e) {
        e.preventDefault()
        $('.doctors__boxes').slick('slickNext')
    })

})