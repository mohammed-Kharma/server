$(function(){
    $("main .left .logo .mnues").click(function(){
        $(".list").slideToggle(1000);
    });
    setTimeout(function(){
        $(".loader_bg").fadeToggle()
      },1500);
});
