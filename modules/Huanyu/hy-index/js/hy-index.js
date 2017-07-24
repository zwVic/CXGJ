/**
 * Created by admin on 2017/7/24.
 */
(function ($) {
    var mySwiper = new Swiper ('.swiper-container', {
        effect:"coverflow",
        loop: true,
        autoplay: 3000,        //自动播放
        autoplayDisableOnInteraction:false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })
})(window.jQuery)