/**
 * Created by admin on 2017/7/24.
 */

(function ($) {
    var TEMPLATE = {
        mainImg:             //图集主页模板
            `<div class="picture-wrap" data-id="{{id}}">
                <div class="picture">
                    <img src="{{url}}" alt="加载中">
                </div>
                <h3>{{title}}</h3>
            </div>`,
        allImg:         //某一相册的全部
            `<div class="swiper-slide">
                <img data-src="{{url}}" class="swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
        </div>`,
        underImg: `<div class="swiper-slide"><img src="{{url}}"></div>`,

    }

    function Picture(options) {             //构造器
        this.init(options);
    }

    Picture.prototype = {
        init: function (options) {
            this.container = options.container;   //container容器
            this.wrap = options.wrap;               //遮罩
            this.showLists = options.showLists;
            this.getAllImg();                        //页面一进来就加载图集主页
            this.closeEvent();                           //关闭
        },

        getAllImg(){
            var _this = this;
            var url = "http://127.0.0.1:3000/pictures/hyPictures/all";      //获取所有图片的请求地址
            var type = "GET";   //get请求
            var data = {};      //请求数据
            var callback = function (results) {
                var mainArr = _this.getMainImg(results.data);
                results.data.forEach(function (el, index) {
                    var temp = TEMPLATE.mainImg;
                    temp = temp.replace("{{id}}",el["_id"]); //标题模板替换
                    temp = temp.replace("{{title}}",el["title"]); //标题模板替换
                    temp = temp.replace("{{url}}",el.content[mainArr[index]].url);  //图片url地址替换
                    _this.container.append(temp);
                });
                _this.bindClickEvent();         //全部主图片加载完毕 为每张主图注册点击事件
            };
            _this.ajaxRequest(url, data, type, callback);
        },
        ajaxRequest(url, data, type, callback){            //ajax请求
            $.ajax({
                url: url,
                type: type,
                data: data,
                success: function (results) {
                    callback(results);
                }
            })
        },
        getMainImg: function (pictures) {       //根据返回的content 包含全部图片 找出数组中 每一个main为true的下标 是主图
            var mainArr = [];
            for (var i = 0; i < pictures.length; i++) {
                var content = pictures[i].content;
                for (var j = 0; j < content.length; j++) {
                    mainArr[i] = 0;         //默认第一张
                    if (content[j].main) {  //找到main为true的图片下表
                        mainArr[i] = j;     //保存下表
                        break;
                    }
                }
            }

            return mainArr;         //返回
        },
        bindClickEvent(){
            var _this = this;
            var url = "http://127.0.0.1:3000/pictures/hyPictures/find";
            var type = "GET";
            var callback = function (results) {
                var topSwiperContainer = _this.showLists.find(".gallery-top").find(".swiper-wrapper");
                var thumbsContainer = _this.showLists.find(".gallery-thumbs").find(".swiper-wrapper");
                topSwiperContainer.empty();     //清空容器
                thumbsContainer.empty();        //清空容器
                console.log(topSwiperContainer);
                console.log(thumbsContainer);
                results.data.content.forEach(function (el,index) {
                    console.log(el);
                    var temp = TEMPLATE.allImg;       //轮播图主图模板
                    var tempUnder = TEMPLATE.underImg;    //轮播图下列滚动模板
                    temp = temp.replace("{{url}}", el.url);    //替换模板url
                    tempUnder = tempUnder.replace("{{url}}", el.url);  //替换模板url
                    topSwiperContainer.append(temp);                //内容放进容器
                    thumbsContainer.append(tempUnder);              //内容放进容器
                })
                _this.swiperInit();
            }
            _this.container.find(".picture-wrap").on("click", function () {
                _this.container.hide();
                _this.wrap.fadeIn();
                _this.showLists.fadeIn();
                var data = {
                    _id: $(this).data("id")
                };

                _this.ajaxRequest(url, data, type, callback);
            })
        },
        swiperInit(){
            var galleryTop = new Swiper('.gallery-top', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 10,
                lazyLoading: true
            });
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            });
            galleryTop.params.control = galleryThumbs;
            galleryThumbs.params.control = galleryTop;
        },
        closeEvent(){
            var _this = this;
            _this.wrap.on("click", function (e) {
                if (e.target === this) {
                    _this.wrap.fadeOut();
                    _this.showLists.fadeOut();
                    _this.container.fadeIn();
                }
            })
        }
    }
    $.fn["picture"] = function (options) {
        new Picture(options)
    }
    $("container").picture({
        "container": $(".container"),
        "showLists": $(".showLists"),
        "wrap": $(".wrap"),
    });

})(window.jQuery)
