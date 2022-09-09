$(document).ready(function(){

    $(window).scroll(function(){
        var getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);

        if(getscrollpoint >= 300){
            $(".navbar").addClass("nav-scroll");
        }else{
            $(".navbar").removeClass("nav-scroll");
        }
    });


    $(".search-icon").click(function(){
        $(".search-box").slideToggle("active");
    });

    // $(".landscapes::before").click(function(){
    //     // $(this).css("position","relative");
    //     $(".landscape1").css({
    //         // "position": "absolute",
    //         // "z-index": "5"

    //         "background-color": "red"
    //     });
    // })

    // Start pricing section
    $(".pricing-items").click(function(){
        $(".pricing-items").children(".active-item").css("display","none");
        $(this).children(".active-item").css("display","block");
        
    })
    // End Pricing Section

});