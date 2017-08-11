/**
 * Created by byroot on 2016/7/18.
 */
$(function(){

//    init

    $(".page01").show().css("left",0);
    $(".page01>section").eq(0).show().css("left",0);


    $('.all-page [data-btn]').on('click',function(){
        var This = $(this);
        var attrLi = This.attr("data-btn");
        var strong = This.find("strong").text();

        $("section").each(function(index,domEle){
            $(domEle).hide().css({"left":100+"%"});
            if ($(this).attr("data-index") == attrLi) {
                $(this).show().stop().animate({"left":0}, 300);
            }
        });

        //        消息/联系人，找人/找群切换
        if( attrLi!="message" && attrLi!="contacts"){
            $(".page01").hide().css("left",100+"%");
        }else{
            $(".page01").show().css("left",0);
        }
        if( attrLi!="findman" && attrLi!="findgroup"){
            $(".page02").hide().css("left",100+"%");
        }else{
            $(".page02").show().css("left",0);
        }


//        修改群昵称
        if( attrLi!="mychat" || attrLi!="gchatWindow" ){

            $(".header-title").text(strong);
        }else{
            return true;
        }

    })

    //    弹出层隐藏显示
    $('.add-firend').on('click',function(e){
        $(".mask").show();
        $(".delete-prompt").show();
        e.stopPropagation();
    })
    $('.mask').on('click',function(){
        $(".mask").hide();
        $(".delete-prompt").hide();
    })



    //    拒绝/同意好友的添加
    $('.page03 .add-btn>button').on("click",function(){
        $(this).parent().text("已"+$(this).text());
    });


    //选择；联系人
    $(".page06 .check").toggle(function(){
            $(this).attr("data-icon", "icon-checked");
    },function(){
            $(this).attr("data-icon","icon-nochecked");
    })


})