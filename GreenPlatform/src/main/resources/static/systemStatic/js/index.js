$(function(){
    initEvent();
});

function initEvent() {
    $(".close").click(function(){
        window.location.reload()
    });

    $("#myAccount").click(function(){
        f_selectLoginuserAccount();
        $("#myAccountModel").modal('show');
    });


    $(".navbar-nav li").click(function(){
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active");
    });

    $(".ct-action a").click(function(){
        f_purchaseSeed($(this).attr("value"));
    });//兑换种子

    $("#mission a").click(function(){
        f_finishMission($(this).attr("value"));
    });//完成任务
}
/*
点击我的账户时，查询对应账户的详细信息
 */
function f_selectLoginuserAccount(){
    var sendRequest = new SendRequest("/system/selectLoginuserAccount","POST");//构造对象
    sendRequest.addParamObj({

    });//构造请求参数

    sendRequest.sendRequest(function(ret){
        console.log(ret);
        var oPlateuser = ret.object.plateUser[0];//登陆账户信息（获取人员姓名与人员等级）
        var oTGreenNlHz = ret.object.tGreenNlHz[0];//登陆用户能量汇总信息（获取能量总量）
        var aTGreenRwRwmx = ret.object.tGreenRwRwmx;//登陆用户任务完成信息（今日任务是否完成）
        var atGreenZzZjzzmx = ret.object.tGreenZzZjzzmx;//登陆用户种子信息（查询用户有几种未捐赠的种子）
        $("#cLoginname").text(oPlateuser.cLoginname);
        $("#cRydj").text("L"+oPlateuser.cRydj);
        $("#cNlhz").text(oTGreenNlHz.cNlhz);


        var aRwlbArr = [];
        $(aTGreenRwRwmx).each(function(i){
            aRwlbArr.push(aTGreenRwRwmx[i].cRwlb);
        });
        if (aRwlbArr.length < 3){
            for(var i=1;i<4;i++){
                if($.inArray(i.toString(),aRwlbArr)<0){
                    $("#cRwlb_"+i).addClass( "badge-warning");
                    $("#cRwlb_"+i).text( "未完成");
                }
            }
        }
        $(atGreenZzZjzzmx).each(function(i,v){
            $("#mySeed ul").append("<li class=\"list-group-item\">\n" +
                                        "<span id=\"cRwlb_4\">"+v.cSpbh+"</span>\n" +
                                        "<button class=\"btn btn-primary btn-sm float-right\">捐赠</button>\n" +
                                  "</li>");
        });


    });//发送请求并获取返回结果
}

/**
 * 能量兑换种子
 * @param sSpbh  商品编号，必传
 */
function f_purchaseSeed(sSpbh){
    BootstrapDialog.confirm({
        type: BootstrapDialog.TYPE_PRIMARY,
        size: BootstrapDialog.SIZE_SMALL,
        title: '提示',
        message: "确认兑换吗！",
        closeable: true,
        btnOKLabel: "确定",
        btnCancelLabel: "取消",
        callback: function (ret) {
            if(ret){
                f_doPurchaseSeed(sSpbh);
            }
        }
    });
}

/**
 * 执行兑换
 * @param sSpbh
 */
function f_doPurchaseSeed(sSpbh) {
    var sendRequest = new SendRequest("/system/insertTGreenZzZjzzmx","POST");//构造对象
    sendRequest.addParamObj({
        cSpbh:sSpbh
    });//构造请求参数

    sendRequest.sendRequest(function(ret){
        console.log(ret);
        if("0" != ret.flag){
            BootstrapDialog.alert({
                type: BootstrapDialog.TYPE_WARNING,
                size: BootstrapDialog.SIZE_SMALL,
                title: '提示',
                message: "兑换失败！"+ret.msg,
                closeable: true,
                buttonLabel: "确定"
            });
        }else{
            BootstrapDialog.alert({
                type: BootstrapDialog.TYPE_PRIMARY,
                size: BootstrapDialog.SIZE_SMALL,
                title: '提示',
                message: "兑换成功",
                closeable: true,
                buttonLabel: "确定"
            });
        }

    });//发送请求并获取返回结果
}

/**
 * 完成每日基础任务
 * @param sRwlb  任务类别，必传
 */
function f_finishMission(sRwlb){
    var sendRequest = new SendRequest("/system/insertTGreenRwRwmx","POST");//构造对象
    sendRequest.addParamObj({
        cRwlb:sRwlb
    });//构造请求参数

    sendRequest.sendRequest(function(ret){
        console.log(ret);
        if("0" != ret.flag){
            BootstrapDialog.alert({
                type: BootstrapDialog.TYPE_WARNING,
                size: BootstrapDialog.SIZE_SMALL,
                title: '提示',
                message: "操作失败！"+ret.msg,
                closeable: true,
                buttonLabel: "确定"
            });
        }else{
            BootstrapDialog.alert({
                type: BootstrapDialog.TYPE_PRIMARY,
                size: BootstrapDialog.SIZE_SMALL,
                title: '提示',
                message: "操作成功",
                closeable: true,
                buttonLabel: "确定"
            });
        }

    });//发送请求并获取返回结果
}



