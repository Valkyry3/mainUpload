$(document).ready(function(){
    $(".homeNav").hover(function(){
        console.log("hello");
        $(".homeAnimation").show();
    }, function(){
        $(".homeNav").hide();
    });
    
    $(".musicNav").hover(function(){
        $(".musicAnimation").show();
    }, function(){
        $(".musicNav").hide();
    });
    
    $(".storeNav").hover(function(){
        $(".storeAnimation").show();
    }, function(){
        $(".storeNav").hide();
    });
});