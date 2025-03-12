//최상단 블랙띠 배너
const blackLine = new Swiper('#black-line' ,{
    direction: 'vertical',
    slidesPerView: 1,
    autoplay: {delay: 1300,},
    loop: true,
});

//히어로 배너 영역 상품
const event = new Swiper('#event' ,{
    slidesPerView: 'auto',
    autoplay: {delay: 2000,},
    loop: true,
    freeMode: true,
});

//팝업창
const menuBtn = document.querySelector('.menu');
const backBtn = document.querySelector('.back-btn');
const popup = document.querySelector('.popup');
menuBtn.addEventListener('click', function() {
    popup.style.display = 'block';
});
backBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});


//위시아이콘
const wishButtons = document.querySelectorAll('.wish img');

wishButtons.forEach(function (wishButton) {
    wishButton.addEventListener('click', function () {
        if (wishButton.src.includes('wish-b.png')) {
            wishButton.src = './images/icons/wish-fill.png';
        } else {
            wishButton.src = './images/icons/wish-b.png';
        }
        //아이콘 이미지 크기 설정
        wishButton.style.width = '100%';
    });
});

//new, best 상품
const item = new Swiper('.item-wrap' ,{
    slidesPerView: 'auto',
    spaceBetween: 12,
    slidesOffsetBefore: 20, // 첫 번째 슬라이드 왼쪽 여백
    slidesOffsetAfter: 20,  // 마지막 슬라이드 오른쪽 여백
});

//콜렉션 탭-이미지 연결
const images = document.querySelectorAll('.collection-img a');
const buttons = document.querySelectorAll('.collection-tab button');

// 초기 설정: 첫 번째 이미지만 표시
images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
});

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        // 모든 이미지 숨기기
        images.forEach(img => img.style.display = 'none');
        
        // 해당 버튼의 이미지 보이기
        images[index].style.display = 'block';
    });
});

//프로모션
const promotion = new Swiper('#promotion-slide' ,{
    slidesPerView: 'auto',
    spaceBetween: 15,
    autoplay: {delay: 0,},
    loop: true,
    speed: 5000,
    freeMode: true,
});

//챌린지 관련 상품
const challenge = new Swiper('.item-slide' ,{
    slidesPerView: 1,
    loop: true,
    navigation:{
        prevEl:'.slide-btn .prev',
        nextEl:'.slide-btn .next',
    },
});