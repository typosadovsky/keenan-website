 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

/*$("#link_home").hide();
$("#link_about").hide();
$("#link_news").hide();
$("#link_music").hide();
$("#link_videos").hide();
$("#link_contact").hide();*/

$(".hamburger-box").hide();
$("#button-close").hide();

$("#about_header").hide();
$("#about_p").hide();
$(".main-video").hide();
$(".container1_canvas_left img").hide();
$(".container_canvas_left h1").hide();
$(".container2_canvas_left").hide();
$(".container2_canvas_right").hide();

if($('#link_about').is(':visible')) {
    $(".header-link-container").css('padding-top', '30px');
}else{
	$(".header-link-container").css('padding-top', '17px');
}

$(".hsContent h2").hide();

$("#link_home").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-1").offset().top   }, 700);
});

$("#link_about").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-2").offset().top   }, 700);
});

$("#link_music").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-3").offset().top   }, 700);
});

$("#link_news").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-4").offset().top   }, 700);
});

$("#link_videos").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-5").offset().top   }, 700);
});

$("#link_contact").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-6").offset().top   }, 700);
});

$("#button_explore").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-2").offset().top   }, 700);
});

$("#button_listen").click(function() {
     $('html, body').animate({
         scrollTop: $("#slide-3").offset().top   }, 700);
});

 $(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

 var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    if ( $( this ).hasClass( "is-active" ) ) {
    	$(".m-dropdown").animate({top:"70px"});
    }else{
    	$(".m-dropdown").animate({top:"-265px"});
    }
  });

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}
		
} )( jQuery );


$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('#main_container').css({
        'opacity': ((height - (scrollTop*2)) / height)
    });
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var waypoint1 = height / 2;
    var waypoint2 = waypoint1 + height;
    var waypoint3 = waypoint2 + height;
    var waypoint4 = waypoint3 + height;
    var waypoint5 = waypoint4 + height;

    if(scrollTop >= waypoint1){
    	$(".container1_canvas_left img").delay(250).fadeIn();
    	$("#about_header").delay(500).fadeIn();
    	$("#about_p").delay(750).fadeIn();
    }
    if(scrollTop >= waypoint2){
    	$(".container2_canvas_left").delay(250).fadeIn();
    	$(".container2_canvas_right").delay(750).fadeIn();
    }
    if(scrollTop >= waypoint4){
    	$(".main-video").delay(250).fadeIn();
    }
    if(scrollTop >= waypoint5){
    	$(".container_canvas_left h1").delay(250).fadeIn();
    }
    

});

$("#button-open").click(function() {
	$(".m-header2").animate({left:"0px"},{duration:300});
	$("#button-open").hide();
	$("#button-close").show()
});

$("#button-close").click(function() {
	$(".m-header2").animate({left:"-180px"},{duration:300});
	$("#button-close").hide();
	$("#button-open").show()
});

