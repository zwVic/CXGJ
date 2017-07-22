/**
 * Created by admin on 2017/7/21.
 */




(function ($) {
    var picSwiper = new Swiper('.pic-banner', {
        direction: 'vertical',
        loop: true,             //自动循环
        autoplay : 5000,        //自动播放
    });
    $(function () {
       init();
    });

    function init(){
        map = new AMap.Map("mapContainer", {
            zoom:13,
            center:[113.872562,22.89994]
        });
        marker = new AMap.Marker({
            map:map,
            position:[113.872562,22.89994]
        })
        map.addControl(new AMap.ToolBar());
        if(AMap.UA.mobile){
            document.getElementById('button_group').style.display='none';
        }
    }
})(window.jQuery)