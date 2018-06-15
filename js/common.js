
//进度条功能

NProgress.configure({showSpinner:false});
$(document).ajaxStart(function(){
    NProgress.start();
});
$(document).ajaxStop(function(){
   setTimeout(function(){
    NProgress.done();
   },500)
})


//非登陆页面，判断当前用户是否是登录了，如果登录了，就继续，如果没登陆，需要跳转到登录页面。
if (location.href.indexOf("login.html") == -1){
    $.ajax({
        type:"get",
        url:"/employee/checkRootLogin",
        success:function(info){
            if (info.error == 400){
                location.href == "login.html"
            }
        }
    })
}

//二级菜单隐藏和显示功能
$(".child").prev().on("click",function(){
    $(this).next().stop().slideToggle();
})

// 侧边栏显示隐藏功能
$(".icon_menu").on("click",function(){
    $(".lt_aside").toggleClass("now");
    $(".lt_main").toggleClass("now");
    $(".lt_topbar").toggleClass("now");
})

//退出功能
$(".icon_logout").on("click",function(){
    $("#logoutModal").modal("show");
    $(".btn_logout").off().on("click",function(){
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            success:function(info){
                if (info.success){
                    location.href = "login.html"
                }
            }
        })
    })
})