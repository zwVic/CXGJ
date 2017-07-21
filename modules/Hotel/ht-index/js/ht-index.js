/**
 * Created by admin on 2017/7/20.
 */
//图片轮播
var picSwiper = new Swiper('.pic-banner', {
    pagination: '.swiper-pagination',           //分页器
    paginationClickable: '.swiper-pagination',  //分页器是否可以点击
    nextButton: '.swiper-button-next',          //下一张按钮
    prevButton: '.swiper-button-prev',          //上一张按钮
    effect: 'flip',         //切换效果
    loop: true,             //自动循环
    autoplay : 5000,        //自动播放
});

//文字轮播
var textSwiper = new Swiper('.text-banner', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay : 3000,
});

//介绍部分右边轮播

var introSwiper = new Swiper('.intro-banner', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: '.swiper-pagination',           //分页器
    paginationClickable: '.swiper-pagination',  //分页器是否可以点击
    nextButton: '.swiper-button-next',          //下一张按钮
    prevButton: '.swiper-button-prev',          //上一张按钮
    loop: true,
    autoplay : 2000
});

(function () {
    var imgLoading = false;
    var arr = ["one","two","three","four","five"];
    $(document).scroll(function(){
        if(!imgLoading) {

            if ($(document).scrollTop()+ $(window).height()>=$(".introduction-container").position().top) {
                for(var i=0;i<arr.length;i++){
                   $(".right").find(".loading-"+arr[i]).addClass("intro-banner-"+arr[i]).removeClass("loading-"+arr[i]);
                }
                imgLoading = true;
            }
        }
    })
})()