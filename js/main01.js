/**
 * Created by byroot on 2016/7/15.
 */
$(function(){

    var add = $("header .add");

    $('.btn-list li').on('click',function(){
        var This = $(this);
        var attrLi = This.attr("data-btn");
        var strong = This.find("strong").text();

        $('.btn-list li span').removeClass("on");
        $(this).find("span").addClass("on");


        $("section").each(function(index,domEle){
            $(domEle).hide().css({"left":100+"%"});
            if ($(this).attr("data-index") == attrLi) {
                $(this).show().stop().animate({"left":0}, 300);
            }
        })

//        找人,找群切换
        if( attrLi=="findman" || attrLi=="findgroup"){
            $('.nav-list li').eq(0).attr("data-btn","findman").find('span').text("找人");
            $('.nav-list li').eq(1).attr("data-btn","findgroup").find('span').text("找群");
            add.html("<span>搜索</span>").attr("data-icon","");
            if(attrLi=="findman"){
                $('.nav-list li').eq(0).find("span").addClass("on");
            }
            if(attrLi=="findgroup"){
                $('.nav-list li').eq(1).find("span").addClass("on");
            }
        }


//        聊天窗口切换
        if( attrLi=="mychat" || attrLi=="gchatWindow"){
            $("nav").hide();
            $(".add").attr("data-icon","11").text(11);
            $(".header-title").text(strong);

        }
//creategroup
        if( attrLi=="creategroup"){
            $("nav").hide();
            $(".add").attr("data-icon","").text("提交");
            $(".header-title").text("创建群组");

        }
        if( attrLi=="notice" || attrLi=="groupchat"){
            $("nav").hide();
            $(".add").hide();
            $(".header-title").text(strong);

        }



    })

//    导航add
    $(".add").on("click",function(){
        var This = $(this);
        var attrLi = This.attr("data-btn");

        This.attr("data-icon","").text("搜索");
        $("section").each(function(index,domEle){
            $(domEle).hide();
            if ($(this).attr("data-index") == attrLi) {
                $(this).show();
            }
        })
    })


//    弹出层隐藏显示
    $('.add-firend').on('click',function(e){
        $(".mask").show();
        $(".show").show();
        e.stopPropagation();
    })
    $('.mask').on('click',function(){
        $(".mask").hide();
        $(".show").hide();
    })


//    拒绝/同意好友的添加
    $('.add-btn>button').on("click",function(){
        $(this).parent().text("已"+$(this).text());
    })





})