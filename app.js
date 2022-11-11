
$(document).ready(function(){
    $(this).scrollTop(0);
    new WOW().init();

     
      
    
$(window).scroll(()=>{
    if($(this).scrollTop()>300){
        $(".sticky-top").css('top','0px')

    }
    else{
        $('.sticky-top').css('top','-100px')
    }
})

 $(window).scroll(function(){
    if($(this).scrollTop()>300){
        $(".back-to-top").fadeIn('slow')

    }else{
      $("back-to-top").fadeOut('slow')
    }
 })
 $("back-to-top").click(function(){
    $("html,body").animate({scrollTop:0},1500,"easeInOutExpo")
 })
 
 })


 
 $(".header-slider").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    
      
    });
$(".card-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav : false,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

    
//  active link

//  const links=document.querySelectorAll(".navbar-nav a")
//  links.forEach((link)=>{
//    link.addEventListener("click",function(){
//      links.forEach((lnk)=>{
//        lnk.classList.remove("active")
//      })
//      this.classList.add("active")
//    })
//  })
  
 
 
 







 



 
 