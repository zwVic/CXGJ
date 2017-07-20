/**
 * Created by admin on 2017/7/20.
 */

//图片轮播
var picSwiper = new Swiper('.pic-banner', {
    pagination: '.swiper-pagination',           //分页器
    paginationClickable: '.swiper-pagination',  //分页器是否可以点击
    nextButton: '.swiper-button-next',          //下一张按钮
    prevButton: '.swiper-button-prev',          //上一张按钮
    effect: 'cube',         //切换效果
    loop: true,             //自动循环
    autoplay : 5000,        //自动播放
    slidesPerView: 3,
    centeredSlides: true,
});

//文字轮播
var textSwiper = new Swiper('.text-banner', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay : 3000,
});
