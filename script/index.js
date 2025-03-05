const blackLine = new Swiper('#black-line' ,{
    direction: 'vertical',
    slidesPerView: 1,
    autoplay: {delay: 1300,},
    loop: true,
});

const event = new Swiper('#event' ,{
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {delay: 2000,},
    loop: true,
    freeMode: true,
});

const promotion = new Swiper('#promotion-slide' ,{
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {delay: 0,},
    loop: true,
    speed: 5000,
    freeMode: true,
});

const challenge = new Swiper('.item-slide' ,{
    slidesPerView: 1,
    loop: true,
    navigation:{
        prevEl:'.slide-btn .prev',
        nextEl:'.slide-btn .next',
    },
});