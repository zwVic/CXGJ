/**
 * Created by admin on 2017/7/22.
 */
(function ($) {


    function ShowArticle() {
        console.log(this);
        this.lists = [];
        this.asyncGetArticle();
    }
    ShowArticle.prototype = {
        asyncGetArticle:function(){
            var _this = this;
            $.ajax({
                url:'http://127.0.0.1:3000/articles/htArticle/add',
                type:"get",
                data:{
                    start:1,
                    other:'name'
                },
                success:function (data) {
                    console.log("ajax success");
                    console.log(data)
                }
            })
        }
    };

    new ShowArticle();      //文章向后台获取并展示
})(window.jQuery)